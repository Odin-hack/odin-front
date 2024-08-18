import React from 'react'
import classnames from 'classnames'
import * as reactRouterDom from 'react-router-dom'

import * as constants from 'constants'
import * as components from 'components'

import styles from './Tabs.module.sass'

export const Tabs = () => {
  const routePathInfo = React.useMemo(
    () => ({
      '/home': {component: components.svg.Home, text: 'Home'},
      '/leaderboard': {
        component: components.svg.Leaderboard,
        text: 'Leaderboard',
      },
      '/tasks': {component: components.svg.Tasks, text: 'Tasks'},
      '/friends': {component: components.svg.Friends, text: 'Friends'},
    }),
    [],
  )
  return (
    <div className={classnames('_f', styles.container)}>
      {constants.routes
        .map(({path}) => ({path, ...routePathInfo[path]}))
        .map(item => (
          <reactRouterDom.NavLink
            key={item.text}
            to={item.path}
            className={classnames('_fCC', '_fCol', styles.item)}
          >
            {({isActive}) => (
              <>
                <div className={classnames('_fCC', styles.item__icon_box)}>
                  <item.component
                    opacity={isActive ? 1.0 : 0.5}
                    width={28}
                    height={28}
                  />
                </div>
                <p
                  className={classnames('_w4001013', {
                    [styles.item_inactive]: !isActive,
                  })}
                >
                  {item.text}
                </p>
              </>
            )}
          </reactRouterDom.NavLink>
        ))}
    </div>
  )
}
