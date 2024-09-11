import React from 'react'
import WebApp from '@twa-dev/sdk'
import classnames from 'classnames'
import Modal from 'react-modal'

import * as components from '../'
import styles from './Loading.module.sass'

const LoadingPolygon = ({tRef}) => {
  return (
    <div
      ref={tRef}
      className={classnames(
        styles.loading_polygon,
        styles.loading_polygon_idle,
      )}
    >
      <div className={classnames('_abs_mid', styles.loading_polygon__shadow_box)}/>
      <components.svg.Polygon />
    </div>
  )
}

const LoadingBar = () => {
  const ref1 = React.useRef(null)
  const ref2 = React.useRef(null)
  const ref3 = React.useRef(null)
  React.useEffect(() => {
    const f = async () => {
      const refs = [ref2, ref1, ref3]
      while (true) {
        for (const ref of refs) {
          if (ref.current === null) {
            return
          }
          requestAnimationFrame(() =>
            requestAnimationFrame(() =>
              ref.current?.classList?.add(styles.loading_polygon_active),
            ),
          )
          await new Promise(r => setTimeout(r, 500))
          if (ref.current === null) {
            return
          }
          ref.current.classList.remove(styles.loading_polygon_active)
          await new Promise(r => setTimeout(r, 500))
        }
      }
    }
    f()
  }, [])
  return (
    <div className={classnames('_f _fCC', styles.loading_bar__box)}>
      <LoadingPolygon tRef={ref1} />
      <LoadingPolygon tRef={ref2} />
      <LoadingPolygon tRef={ref3} />
    </div>
  )
}

export const LoadingOnLoad = ({failMessage = null}) => {
  const [reqFailed, setReqFailed] = React.useState(false)
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setReqFailed(true)
    }, 5000)
    return () => clearTimeout(timeoutId)
  }, [])
  let messageTitle = 'Loading'
  let messageSubtitle = 'Please stand by'
  let renderButton = false
  if (failMessage !== null) {
    messageTitle = 'We are under load'
    messageSubtitle = failMessage
    renderButton = true
  } else if (reqFailed) {
    messageTitle = 'We are under load'
    messageSubtitle = 'Reload the HAX revival app'
    renderButton = true
  }
  const onClickFollowButton = () => {
    const link = `https://t.me/HAXcommunity`

    WebApp.openTelegramLink(link)
  }

  return (
    <div className={classnames('_f _fCC', styles.loader__container)}>
      <div
        className={classnames('_f _fCC _fCol _w100', styles.loader__content)}
      >
        <LoadingBar />
        <h4 className={classnames('_w7003238', styles.loader__title)}>
          {messageTitle}
        </h4>
        <h6
          className="_g4001821"
          dangerouslySetInnerHTML={{__html: messageSubtitle}}
        />
        {renderButton && (
          <div className={classnames('_w100', styles.loader__info)}>
            <button
              className={classnames('_f _fCC', styles.loader__info__button)}
              onClick={onClickFollowButton}
            >
              <components.svg.Telegram width={32} height={32} />
              <p className={classnames('_d7001821', styles.loader__info__text)}>
                Follow our chat
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export const LoadingFullPage = ({isOpen}) => {
  return (
    <Modal isOpen={isOpen} className="adjusted-react-modal">
      <div
        className="_f _fCC"
        style={{background: 'rgba(0, 0, 0, .8)', height: '100%'}}
      >
        <LoadingBar />
      </div>
    </Modal>
  )
}
