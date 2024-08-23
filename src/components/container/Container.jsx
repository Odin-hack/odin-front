import React from 'react'
import SimpleBar from 'simplebar-react'

import styles from './Container.module.sass'

export const Page = ({children}) => children

export const Footer = ({children}) => (
  <div className={styles.root__footer}>{children}</div>
)

export const BodyScroll = ({
  children,
  withFooter,
  withPreFooter,
  onBumpBottom = () => {},
}) => {
  const tRef = React.useRef()
  React.useEffect(() => {
    const t = tRef.current
    let bumped = false
    const onScroll = () => {
      const offset = 200
      const scrolledPixels = t.clientHeight + t.scrollTop
      if (scrolledPixels > t.scrollHeight - offset) {
        if (!bumped) {
          bumped = true
          onBumpBottom()
        }
      } else {
        bumped = false
      }
    }
    t.addEventListener('scroll', onScroll)
    return () => t.removeEventListener('scroll', onScroll)
  }, [tRef, onBumpBottom])
  return (
    <SimpleBar style={{maxHeight: '100vh'}} scrollableNodeProps={{ref: tRef}}>
      <div className="_fCB _fCol" style={{minHeight: '101vh', height: '101vh'}}>
        <div className="_w100" style={{height: '100%'}}>
          {children}
        </div>
        <div className="_w100">
          {withPreFooter && <div style={{width: '100%', height: '20px'}} />}
          {withFooter && <div style={{width: '100%', height: '91px'}} />}
        </div>
      </div>
    </SimpleBar>
  )
}
