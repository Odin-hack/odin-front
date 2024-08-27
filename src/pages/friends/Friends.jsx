import React from 'react'
import classnames from 'classnames'
import WebApp from '@twa-dev/sdk'
import * as reactRedux from 'react-redux'

import * as slices from '@/slices'
import * as components from '@/components'
import * as lib from '@/lib'
import * as constants from '@/constants'
import * as hooks from '@/hooks'

import styles from './Friends.module.sass'
import { useThrottledFn } from '@/hooks'

const Claim = () => {
  const dispatch = reactRedux.useDispatch()
  const claimButtonClasses = classnames(
    '_f _fCC _dark7001522',
    styles.claim__button,
    styles.claim__button_active,
  )
  const friends = reactRedux.useSelector(slices.friendsSlice.selectors.friends)
  const {dur} = hooks.useDurHook(() => friends.friendsData.user.timer.expireAt)
  const active = dur === 0
  const claimProgressWidth = parseInt((dur / (24 * 60 * 60 * 1000)) * 100, 10)

  const [showConfetti, setShowConfetti] = React.useState(false)
  const onClickClaim = React.useCallback(() => {
    dispatch(slices.friendsSlice.thunks.triggerClaim())
    setShowConfetti(true)
  }, [dispatch])

  return (
    <div className={styles.claim__box}>
      {showConfetti && <components.animations.Confetti/>}
      <img
        src="/assets/friends-cover-active.png"
        alt="Cover"
        style={{
          height: '200px',
          width: '100%',
          objectFit: 'cover',
          filter: active ? 'none' : 'grayscale(100%)',
        }}
      />
      <div
        className={classnames('_f _fCC _fCol _abs_mid', styles.claim__content)}
      >
        <p className={classnames('_w7003241', styles.claim__price_text)}>
          {lib.formatPxlInt(friends.friendsData.user.account.balance)} HAX
        </p>
        {active ? (
          <button
            className={claimButtonClasses}
            onClick={() => onClickClaim()}
            disabled={!active}
          >
            <p className={styles.claim__button__text}>Claim</p>
          </button>
        ) : (
          <div
            className="_fCC _fCol"
            style={{position: 'relative', width: '200px'}}
          >
            <p className="_g7001522">{lib.formatMillis(dur)}</p>
            <div
              className="_w100"
              style={{position: 'relative', height: '4px', marginTop: '4px'}}
            >
              <div
                className="_abs_mid"
                style={{background: '#1A270F', borderRadius: '4px', zIndex: 1}}
              />
              <div
                className="_abs_mid"
                style={{
                  background: '#BCFF2F',
                  borderRadius: '4px',
                  zIndex: 2,
                  left: 0,
                  transform: 'translateY(-50%)',
                  width: `${claimProgressWidth}%`,
                }}
              />
              <div />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const Card = ({title, pxl, drawBottomLine, photoUrl, defaultPhoto}) => (
  <div className={styles.card__box}>
    <div className={classnames('_f _fCC')}>
      <div className={styles.card__circle}>
        {defaultPhoto ? (
          <p className="_abs_mid _fCC _w4001821" style={{zIndex: 1}}>
            {title.at(0) ?? ''}
          </p>
        ) : null}
        <img src={photoUrl} className={styles.card__circle} />
      </div>
      <p className="_w100 _w4001722 _one_line_ellipsis">{title}</p>
      <span style={{width: '10px'}} />
      <div className="_fCC _status_block">
        <components.svg.Polygon width={12} height={12} />
        <span style={{width: '4px'}} />
        <p className="_w7001316 _nowrap">{lib.formatPxlInt(pxl)}</p>
      </div>
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
  </div>
)

const CopyButton = () => {
  const friends = reactRedux.useSelector(slices.friendsSlice.selectors.friends)
  const [copied, setCopied] = React.useState(false)
  const refTimeoutId = React.useRef(null)
  const onClick = React.useCallback(() => {
    navigator.clipboard.writeText(friends.friendsData.link)
    setCopied(true)
    components.toast.showText('Link copied to clipboard')
    if (refTimeoutId.current !== null) {
      clearTimeout(refTimeoutId.current)
    }
    refTimeoutId.current = setTimeout(() => setCopied(false), 2500)
  }, [])
  const classnamesButton = classnames(styles.copy_button, {
    [styles.copy_button_copied]: copied,
  })
  return (
    <button className={classnamesButton} onClick={onClick}>
      <components.svg.Copy2
        witdth={24}
        height={24}
        fill={copied ? 'black' : 'white'}
      />
    </button>
  )
}

export const Friends = () => {
  // XXX: adjust scroll httml+css
  // TODO: users dissapear on first load - fix it (2 requests), that's because metamask provider renders components more than 1 time

  const dispatch = reactRedux.useDispatch()
  const friends = reactRedux.useSelector(slices.friendsSlice.selectors.friends)

  const onBumpBottom = useThrottledFn(() => {
    dispatch(slices.friendsSlice.thunks.loadNextFriendsListPart())
  }, 1000)

  React.useEffect(() => {
    dispatch(slices.friendsSlice.thunks.syncWithServer())
    return () => dispatch(slices.friendsSlice.thunks.resetPagination())
  }, [dispatch])

  React.useEffect(() => {
    if (friends.status === constants.status.success) {
      dispatch(slices.pageSlice.thunks.hideGlobalLoading())
    } else {
      dispatch(slices.pageSlice.thunks.showGlobalLoading())
    }
  }, [dispatch, friends.status])

  if (friends.status !== constants.status.success) {
    return null
  }

  const onClickInviteFriendsButton = () => {
    const linkRef = friends.friendsData.link
    const link = `https://t.me/share/url?url=${linkRef}`
    WebApp.openTelegramLink(link)
  }
  return (
    <components.container.Page>
      <components.loading.LoadingFullPage isOpen={friends.loading} />
      <components.container.BodyScroll
        onBumpBottom={() => onBumpBottom()}
      >
        <div
          className="_f _fCol"
          style={{
            paddingBottom: '180px',
            minHeight: '100%',
            ...(friends.friendsData.friends.length === 0
              ? {height: '100%'}
              : {}),
          }}
        >
          <Claim />
          <div className="container _w100">
            <h2 className="_ta_center _w7003238" style={{marginTop: '42px'}}>
              Invite Friends
            </h2>
            <p className="_ta_center _g4001722" style={{margin: '4px auto 0'}}>
              Get 10%
              <span> </span>
              <span className="_y7001722">
                <components.svg.Polygon width={15} height={15} />
                <span style={{display: 'inline-block', width: '2px'}}></span>
                HAX
              </span>
              <span> </span>
              from referrals
              <br />
              wallet connections
              <br />
              +5% from their spins and quest earnings
            </p>
            <p className="_w7001621" style={{padding: '44px 16px 12px'}}>
              You have {friends.friendsData.friendsCount} friend
              {friends.friendsData.friendsCount === 1 ? '' : 's'}
            </p>
          </div>
          {friends.friendsData.friends.length === 0 ? (
            <div className="container _f _fCC" style={{height: '100%'}}>
              <components.animations.EmojiCryingFace style={{ width: '70px', height: '70px' }}/>
            </div>
          ) : (
            <div className="container _w100">
              {friends.friendsData.friends.map((item, i, a) => (
                <Card
                  key={item.referralId}
                  title={item.name}
                  pxl={item.earnedForReferrer}
                  photoUrl={item.photoUrl}
                  defaultPhoto={item.defaultPhoto}
                  drawBottomLine={i !== a.length - 1}
                />
              ))}
            </div>
          )}
          <div
            className="_w100 _f _fCC"
            style={{
              visibility:
                friends.paginationReqsAmount > 0 ? 'visible' : 'hidden',
            }}
          >
            <components.svg.Spinner className="rotate_spinner" />
          </div>
        </div>
        <div className={classnames('_f _fCC', styles.footer__box)}>
          <button
            className={classnames('_fCC', styles.footer__left_button)}
            onClick={onClickInviteFriendsButton}
          >
            <components.svg.Person width={24} height={24} />
            <p className="_d7001722" style={{marginLeft: '10px'}}>
              Invite friend
            </p>
          </button>
          <CopyButton />
        </div>
      </components.container.BodyScroll>
      <components.container.Footer>
        <components.Tabs />
      </components.container.Footer>
    </components.container.Page>
  )
}
