import classnames from 'classnames'
import * as reactTostify from 'react-toastify'

import * as components from '../'

import styles from './Toast.module.sass'

export const Container = () => (
  <reactTostify.ToastContainer
    stacked
    hideProgressBar
    closeOnClick
    autoClose={2000}
    className="toast_container__box_global"
  />
)

export const showText = text =>
  reactTostify.toast(
    <div className={classnames('_f _fCC _w100', styles.toast__box)}>
      <div className={styles.toast__icon}>
        <components.svg.Ok2 stroke="#fff" />
      </div>
      <p className="_w4001414">{text}</p>
    </div>,
  )
