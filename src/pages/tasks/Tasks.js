import React from 'react'
import classnames from 'classnames'
import WebApp from '@twa-dev/sdk'
import * as reactRedux from 'react-redux'
import * as reactRouterDom from 'react-router-dom'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'

import * as slices from 'slices'
import * as components from 'components'
import * as lib from 'lib'
import * as constants from 'constants'

import styles from './Tasks.module.sass'

const IconStatusBox = ({children}) => (
  <div style={{position: 'relative', minWidth: '16px', minHeight: '100%'}}>
    <div
      className="_abs_mid"
      style={{
        width: 'auto',
        height: 'auto',
        maxHeight: '30px',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  </div>
)

const Card = ({
  taskId,
  title,
  description,
  pxl,
  status,
  type,
  url,
  refUrl,
  actionUrl,
  data,
  syntheticThresholdMillis,
  drawBottomLine,
}) => {
  const dispatch = reactRedux.useDispatch()
  const navigate = reactRouterDom.useNavigate()
  const onClickAction = async () => {
    // TODO: test communication with server throuth telegram server
    // TODO: make communicattion next way https://prnt.sc/21PKPrvwoE0E
    // TODO: test with dima a lot of friends or test with localtunnel
    // TODO: waht's monetization - talk to timur on this, questions - what will be my part of a deal
    // TODO: on click to connect_wallet ignore req sending
    if (status === 'started' && actionUrl) {
      const params = {taskId, actionUrl}
      dispatch(slices.tasksSlice.thunks.triggerPendingAction(params))
    } else if (status === 'claim') {
      dispatch(slices.tasksSlice.thunks.setStatusToPending({taskId}))
      dispatch(slices.tasksSlice.thunks.triggerClaim({taskId}))
      return
    }
    let callbackSyntheticPending = () => {}
    let callbackCta = () => {}
    switch (type) {
      case 'tg_blue':
      case 'tg_black':
        if (status !== 'complete') {
          callbackSyntheticPending = () =>
            dispatch(slices.tasksSlice.thunks.addSyntheticThreshold({taskId}))
        }
        callbackCta = () => WebApp.openTelegramLink(url)
        break
      case 'X':
      case 'youtube':
        if (status !== 'complete') {
          callbackSyntheticPending = () =>
            dispatch(slices.tasksSlice.thunks.addSyntheticThreshold({taskId}))
        }
        callbackCta = () => WebApp.openLink(url)
        break
      case 'spin':
      case 'connect_wallet':
        callbackCta = () => navigate('/home')
        break
      case 'invite_friends':
        const link = `https://t.me/share/url?url=${refUrl}`
        callbackCta = () => WebApp.openTelegramLink(link)
        break
      default: {
        throw new Error(`unknown type=${type}`)
      }
    }
    callbackSyntheticPending()
    callbackCta()
  }
  let iconComponent = null
  const classesIcon = classnames('_fCC', styles.card__icon)
  switch (type) {
    case 'tg_blue':
      iconComponent = (
        <div className={classesIcon} style={{background: '#269ED0'}}>
          <components.svg.Telegram width={40} height={40} withoutBackground />
        </div>
      )
      break
    case 'tg_black':
      iconComponent = (
        <div className={classesIcon} style={{background: '#0F0F0F'}}>
          <components.svg.Telegram width={40} height={40} withoutBackground />
        </div>
      )
      break
    case 'X':
      iconComponent = (
        <div className={classesIcon} style={{background: '#0F0F0F'}}>
          <components.svg.X width={16} height={16} />
        </div>
      )
      break
    case 'youtube':
      iconComponent = (
        <div className={classesIcon} style={{background: '#212121'}}>
          <components.svg.Youtube width={28} height={28} />
        </div>
      )
      break
    case 'spin':
      iconComponent = (
        <div className={classesIcon} style={{background: '#1C2F1B'}}>
          <components.svg.GiftV2 width={28} height={28} />
        </div>
      )
      break
    case 'invite_friends':
      iconComponent = (
        <div className={classesIcon} style={{background: '#212121'}}>
          <components.svg.Hands width={28} height={28} />
        </div>
      )
      break
    case 'connect_wallet':
      iconComponent = (
        <div className={classesIcon} style={{background: '#269ED0'}}>
          <components.svg.Wallet width={22} height={19} />
        </div>
      )
      break
    default:
      console.warn(`empty iconComponent for type=${type}`)
      return null
  }
  let statusComponent = null
  const syntheticStatus =
    syntheticThresholdMillis < Date.now() ? status : 'pending'
  switch (syntheticStatus) {
    case 'started':
      statusComponent = (
        <IconStatusBox>
          <components.svg.ArrowV2 width={16} height={16} />
        </IconStatusBox>
      )
      break
    case 'pending': {
      if (Number.isInteger(data.progress) && Number.isInteger(data.count)) {
        statusComponent = (
          <p className="_g4001316">
            {data.progress}/{data.count}
          </p>
        )
      } else {
        statusComponent = (
          <IconStatusBox>
            <div className="lds-spinner">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </IconStatusBox>
        )
      }
      break
    }
    case 'claim':
      statusComponent = (
        <div className={classnames('_fCC _d7001520', styles.card__button)}>
          Claim
        </div>
      )
      break
    case 'complete':
      statusComponent = (
        <IconStatusBox>
          <components.svg.Ok3 width={30} height={30} />
        </IconStatusBox>
      )
      break
    default: {
      console.warn(
        `empty statusComponent for syntheticStatus=${syntheticStatus}`,
      )
      return null
    }
  }
  const rewardRaw = lib.formatPxlInt(pxl)
  const rewardText = type === 'connect_wallet' ? `${rewardRaw}+` : rewardRaw
  return (
    <button
      className={classnames('_w100', styles.card__box)}
      onClick={onClickAction}
    >
      <div className="_fCC _w100">
        <div className={classnames('_fCC', styles.card__icon__box)}>
          {iconComponent}
        </div>
        <div className="_f _fCol _w100" style={{minWidth: 0}}>
          <div className="_fCC">
            <p className="_w4001722 _ta_start _one_line_ellipsis">{title}</p>
            <span style={{width: '10px'}} />
            <div className="_fCC _status_block" style={{marginRight: 'auto'}}>
              <components.svg.Polygon width={12} height={12} />
              <span style={{width: '4px'}} />
              <p className="_w7001316 _w100">{rewardText}</p>
            </div>
          </div>
          <h4
            className="_g4001316 _ta_start _one_line_ellipsis"
            style={{marginTop: '2px'}}
          >
            {description}
          </h4>
        </div>
        <div style={{width: '10px', minWidth: '10px'}} />
        {statusComponent}
      </div>
      <div
        style={{
          height: '1px',
          border: drawBottomLine
            ? '0.5px solid rgba(255, 255, 255, 0.05)'
            : 'none',
          position: 'relative',
          bottom: '-12px',
        }}
      />
    </button>
  )
}

export const Tasks = () => {
  const friends = reactRedux.useSelector(slices.friendsSlice.selectors.friends)
  const tasks = reactRedux.useSelector(slices.tasksSlice.selectors.tasks)
  const dispatch = reactRedux.useDispatch()
  React.useEffect(() => {
    if (friends.status === constants.status.idle) {
      dispatch(slices.friendsSlice.thunks.syncWithServer())
    }
    dispatch(slices.tasksSlice.thunks.syncWithServer())
    const intervalId = setInterval(() => {
      dispatch(slices.tasksSlice.thunks.syncWithServer())
    }, 5000)
    return () => {
      clearInterval(intervalId)
      dispatch(slices.tasksSlice.thunks.cleanSyntheticThreshold())
    }
  }, [])
  React.useEffect(() => {
    if (tasks.status === constants.status.success) {
      dispatch(slices.pageSlice.thunks.hideGlobalLoading())
    } else {
      dispatch(slices.pageSlice.thunks.showGlobalLoading())
    }
  }, [tasks.status])
  if (tasks.status !== constants.status.success) {
    return null
  }
  const amountDoneAbs = tasks.tasksData.filter(
    x => x.status === 'complete',
  ).length
  const amountDoneRel = parseInt(
    (amountDoneAbs / tasks.tasksData.length) * 100,
    10,
  )
  const renderCard = (item, drawBottomLine) => (
    <Card
      key={item.position}
      taskId={item.id}
      title={item.title}
      description={item.description}
      pxl={item.reward.amount}
      status={item.status}
      type={item.type}
      data={item.data}
      refUrl={friends?.friendsData?.link}
      url={item.data.url ?? null}
      actionUrl={item.data.actionUrl ?? null}
      syntheticThresholdMillis={tasks.syntheticThresholdMillisMap[item.id] ?? 0}
      drawBottomLine={drawBottomLine}
    />
  )
  const fSortByPos = (a, b) => a.position - b.position
  const tasksPinnedCompleted = []
  const tasksPinnedNonCompleted = []
  const tasksNonPinnedCompleted = []
  const tasksNonPinnedNonCompleted = []
  for (const task of tasks.tasksData) {
    if (task.shouldBePinned) {
      if (task.status === 'complete') {
        tasksPinnedCompleted.push(task)
      } else {
        tasksPinnedNonCompleted.push(task)
      }
    } else {
      if (task.status === 'complete') {
        tasksNonPinnedCompleted.push(task)
      } else {
        tasksNonPinnedNonCompleted.push(task)
      }
    }
  }
  return (
    <components.container.Page>
      <components.loading.LoadingFullPage isOpen={tasks.loading} />
      <components.container.BodyScroll>
        <div className="container _w100" style={{paddingBottom: '110px'}}>
          <div className={classnames('_f _fCC', styles.title_circle__box)}>
            <CircularProgressbar
              value={amountDoneRel}
              styles={buildStyles({
                pathColor: `#BCFF2F`,
                trailColor: '#29350E',
              })}
              strokeWidth={4}
              className={styles.title_circle__outer}
            />
            <h2 className={classnames('_w7002833', styles.title_circle__title)}>
              {amountDoneAbs}/{tasks.tasksData.length}
            </h2>
          </div>
          <h4 className="_w7003238 _ta_center">Tasks</h4>
          <p className="_g4001722 _ta_center" style={{marginTop: '4px'}}>
            Complete tasks and earn token
          </p>
          <p className="_w7001621" style={{padding: '24px 16px 12px'}}>
            All tasks
          </p>
          <div
            style={{
              background: '#212121',
              borderRadius: '12px',
              padding: '3px 0',
            }}
          >
            {tasksPinnedNonCompleted
              .sort(fSortByPos)
              .map((x, i) =>
                renderCard(x, i !== tasksPinnedNonCompleted.length - 1),
              )}
            {tasksPinnedCompleted
              .sort(fSortByPos)
              .map((x, i) =>
                renderCard(x, i !== tasksPinnedCompleted.length - 1),
              )}
          </div>
          {tasksNonPinnedNonCompleted
            .sort(fSortByPos)
            .map((x, i) =>
              renderCard(x, i !== tasksNonPinnedNonCompleted.length - 1),
            )}
          {tasksNonPinnedCompleted
            .sort(fSortByPos)
            .map((x, i) =>
              renderCard(x, i !== tasksNonPinnedCompleted.length - 1),
            )}
        </div>
      </components.container.BodyScroll>
      <components.container.Footer>
        <components.Tabs />
      </components.container.Footer>
    </components.container.Page>
  )
}
