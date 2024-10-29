import React from 'react'
import classnames from 'classnames'
import * as reactRouterDom from 'react-router-dom'

import * as constants from '@/constants'
import * as components from '@/components'

import styles from './Tabs.module.sass'
import * as reactRedux from "react-redux";
import * as slices from "@/slices/index.js";

export const Tabs = () => {
  const dispatch = reactRedux.useDispatch();

  const promoTasks = reactRedux.useSelector(state => state.events?.promoTasks || []);
  const pendingPromoTasks = React.useMemo(() =>
    promoTasks.filter((task) => ['complete', 'claim'].includes(task.status)), [promoTasks]);

  React.useEffect(() => {
    dispatch(slices.eventsSlice.thunks.syncWithServer());
  }, [dispatch]);

  const routePathInfo = React.useMemo(
    () => ({
      '/home': {component: components.svg.Home, text: 'Home'},
      '/leaderboard': {
        component: components.svg.Leaderboard,
        text: 'Leaderboard',
      },
      '/tasks': {component: components.svg.Tasks, text: 'Tasks'},
      '/friends': {component: components.svg.Friends, text: 'Friends'},
      '/events': {
        component: components.svg.Events,
        text: '1000$TON',
        badge: pendingPromoTasks.length || null
      },
    }),
    [],
  )

  const Badge = ({ value }) => {
    if (!value) return null;

    return (
      <div className={classnames(styles.item__icon_box_badge)}>
        <p>{value}</p>
      </div>
    );
  };

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
                    width={item?.badge ? 21 : 28}
                    height={item?.badge ? 21 : 28}
                  />

                  { item?.badge && <Badge value={item?.badge} /> }
                </div>
                <p
                  className={classnames('_w4001414', {
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
