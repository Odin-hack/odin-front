import React from 'react'
import classnames from 'classnames'
import * as reactRedux from 'react-redux'

import * as components from 'components'
import * as lib from 'lib'
import * as slices from 'slices'
import * as constants from 'constants'

import styles from './Leaderboard.module.sass'

const Svg = ({comp}) => (
  <div style={{position: 'relative', width: '32px', height: '32px'}}>
    <div className="_abs_mid">{comp}</div>
  </div>
)

const genCardPlace = place => {
  switch (place) {
    case 1:
      return <Svg comp={<components.svg.Place1 width={46} height={32} />} />
    case 2:
      return <Svg comp={<components.svg.Place2 width={46} height={32} />} />
    case 3:
      return <Svg comp={<components.svg.Place3 width={46} height={32} />} />
    default:
      return <p className="_w4001722">#{place}</p>
  }
}

const Card = ({
  greyBg = false,
  name,
  pxl,
  place,
  photoUrl,
  defaultPhoto,
  ignoreBorder = false,
}) => {
  const classesBox = classnames('_w100', styles.card__box, {
    [styles.card__box_grey_bg]: greyBg,
  })
  const classesPrice = classnames('_w7001316 _tw_nowrap', styles.card__price, {
    [styles.card__price_white]: greyBg,
  })
  return (
    <div className={classesBox}>
      <div className="_fCC _w100">
        <div className={styles.card__circle}>
          {defaultPhoto ? (
            <p className="_abs_mid _fCC _w4001821" style={{zIndex: 1}}>
              {name.at(0) ?? ''}
            </p>
          ) : null}
          <img src={photoUrl} className={styles.card__circle} />
        </div>
        <h4 className="_w4001722 _one_line_ellipsis">{name}</h4>
        <span style={{width: '10px'}} />
        <div className="_f _fCC _status_block">
          <components.svg.Polygon width={12} height={12} />
          <span style={{width: '4px'}} />
          <p className={classesPrice}>{lib.formatPxlInt(pxl)}</p>
        </div>
        <span style={{width: '10px'}} />
        <div style={{marginLeft: 'auto'}}>{genCardPlace(place)}</div>
      </div>
      {!greyBg && !ignoreBorder && (
        <div className={classnames(styles.card__border_bottom)} />
      )}
    </div>
  )
}

export const Leaderboard = () => {
  const dispatch = reactRedux.useDispatch()
  const l = reactRedux.useSelector(
    slices.leaderboardSlice.selectors.leaderboard,
  )
  React.useEffect(() => {
    dispatch(slices.leaderboardSlice.thunks.syncWithServer())
  }, [])
  React.useEffect(() => {
    if (l.status === constants.status.success) {
      dispatch(slices.pageSlice.thunks.hideGlobalLoading())
    } else {
      dispatch(slices.pageSlice.thunks.showGlobalLoading())
    }
  }, [l.status])
  if (l.status !== constants.status.success) {
    return null
  }
  return (
    <components.container.Page>
      <components.container.BodyScroll>
        <div className="container _w100" style={{paddingBottom: '110px'}}>
          <div className={classnames('_f _fCC', styles.page__icon)}>
            <components.svg.Cup width={98} height={98} />
          </div>
          <h2 className="_w7003238 _ta_center">Leaderboard</h2>
          <p
            className={classnames(
              '_g4001821 _ta_center',
              styles.page__subtitle,
            )}
          >
            Total holders:
            <span> </span>
            {lib.intToKM(l.leaderboardData.totalHoldersTokens, 1)}
          </p>
          <Card
            greyBg={true}
            name={l.leaderboardData.user.fullName}
            photoUrl={l.leaderboardData.user.photoUrl}
            defaultPhoto={l.leaderboardData.user.defaultPhoto}
            pxl={l.leaderboardData.userScore}
            place={l.leaderboardData.userRank}
          />
          <p className="_w7001621" style={{padding: '28px 16px 12px'}}>
            Best players
          </p>
          {l.leaderboardData.leaderboard.map((item, i) => (
            <Card
              key={i.toString()}
              name={item.user.name}
              pxl={item.score}
              place={i + 1}
              photoUrl={item.user.photoUrl}
              defaultPhoto={item.user.defaultPhoto}
              ignoreBorder={i === l.leaderboardData.leaderboard.length - 1}
            />
          ))}
        </div>
      </components.container.BodyScroll>
      <components.container.Footer>
        <components.Tabs />
      </components.container.Footer>
    </components.container.Page>
  )
}
