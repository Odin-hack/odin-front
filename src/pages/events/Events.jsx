import * as components from "@/components/index.js";
import styles from "@/pages/events/Events.module.sass";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import classNames from "classnames";
import * as slices from "@/slices/index.js";
import * as reactRedux from "react-redux";
import React from "react";
import * as reactRouterDom from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import classnames from "classnames";

const UserStats = ({ users, progress }) => {
  const color = progress === 100 ? '#BCFF2F' : '#282828'

  return (
    <div className={styles.referral_stats_fields}>
      <p className="_dark5002166" style={{ lineHeight: '42px' }}>
      Users:
      </p>

      <div className={styles.referral_stats_fields_stat}>
        { users.toLocaleString() }
      </div>

      <div className={styles.referral_stats_fields_goal}>
        <p className="_dark7003265" style={{ color }}>1M</p>

        <div
          className={styles.referral_stats_fields_goal__checkpoint}
          style={{ color }}
        >
          <div
            className={styles.referral_stats_fields_goal__checkpoint__circle}
            style={{ borderColor: color }}
          >
            <components.svg.Check
              width={18}
              height={18}
              color={color}
            />
          </div>
        </div>
      </div>
    </div>
  );}

const ProgressLine = ({ progress }) => (
  <div className={styles.referral_stats_stats__line_container}>
    <div
      className={styles.referral_stats_stats__line}
      style={{ width: `calc(${progress}% - 20px)` }}
    />
  </div>
);

const PrizePool = ({ amount }) => (
  <div className={classNames('_f _fCC _fCol', styles.referral_stats_prize_pool)}>
    <div className={classNames('_f _fC', styles.referral_stats_prize_pool_title)}>
      Prize Pool

      <span>$TON</span>
    </div>

    <div className={styles.referral_stats_prize_pool_amount}>
      { amount.toLocaleString() }
    </div>
  </div>
);

const ReferralRewards = () => (
  <div className={styles.referral_stats_rewards}>
    <p>
      <components.svg.Ton
        width={18}
        height={18}
        fill={'#0097EA'}
        stroke={'#fff'}
      />

      <span className="_w4001722">
        10 $TON
      </span>
    </p>

    <components.svg.CurveArrow
      width={23}
      height={22}
    />

    <p>
      <components.svg.Profiles
        width={18}
        height={18}
      />

      <span className="_w4001722">100 Winners</span>
    </p>
  </div>
);

const ReferralStats = ({ users = 0 }) => {
  const goal = 1000000;
  const progress = Math.min((users / goal) * 100, 100);

  return (
    <div className={styles.referral_stats}>
      <div className={styles.referral_stats_hero}>
        <div className={styles.referral_stats_stats}>
          <UserStats users={users} goal={goal} progress={progress} />

          <ProgressLine progress={progress} />
        </div>

        <PrizePool amount={1000} />

        <ReferralRewards />
      </div>
    </div>
  );
};

const TasksProgress = ({ tasksCount = 0, completedTasksCount = 0 }) => {
  const progress = tasksCount > 0 ? (completedTasksCount / tasksCount) * 100 : 100;

  return (
    <div className={styles.referral_event_tasks__progress}>
      <div className={styles.referral_event_tasks__progress__box}>
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            pathColor: '#007AFF',
            trailColor: '#033367',
          })}
          strokeWidth={10}
          className={styles.referral_event_tasks__progress__box_icon}
        />

        {progress === 100 && (
          <components.svg.Check width={10} height={10} color="#017AFF" />
        )}
      </div>

      <div className={classNames('_fC', '_fCol', styles.referral_event_tasks__progress__content)}>
        <h5 className={styles.referral_event_tasks__progress_title}>
          Your progress
          <span>
            {completedTasksCount || '-'} / {tasksCount || '-'}
          </span>
        </h5>

        {progress === 100 ? (
          <p className="_g4001316 _ta_start">
            You have joined the event successfully.
            <br />
            <span>
              <reactRouterDom.NavLink
                to={'/friends'}
                className={styles.referral_event_tasks__progress_friendsLink}
              >
              Invite friends
              </reactRouterDom.NavLink> to find out the results faster.
            </span>
          </p>
        ) : (
          <p className="_g4001316 _ta_start">
            Complete all tasks to join the event.
          </p>
        )}
      </div>
    </div>
  );
};


const ReferralEvent = ({ tasks = [], participants = 1346 }) => {
  const tasksCount = tasks.length;

  const { tasksCompleted, areAllTasksComplete } = React.useMemo(() => {
    const completed = tasks.filter(task => ['complete', 'claim'].includes(task.status)).length;
    const allCompleted = !tasksCount || tasks.every(task => ['complete', 'claim'].includes(task.status));

    return { tasksCompleted: completed, areAllTasksComplete: allCompleted };
  }, [tasks, tasksCount]);

  const renderCard = (item, drawBottomLine) => (
    <PromoTaskCard
      key={item.id}
      taskId={item.id}
      title={item.title}
      description={item.description}
      pxl={item.reward?.amount}
      status={item.status}
      type={item.type}
      url={item.data?.url}
      iconUrl={item.iconUrl}
      refUrl={item.refUrl}
      actionUrl={item.data?.actionUrl}
      data={item.data}
      storyMediaUrl={item.data?.storyMediaUrl}
      storyText={item.data?.storyText}
      syntheticThresholdMillis={item.syntheticThresholdMillis ?? 0}
      drawBottomLine={drawBottomLine}
    />
  );

  return (
    <div className={styles.referral_event}>
      <h4 className="_w7003238 _ta_center">Referral event</h4>

      <p className="_g4001722 _ta_center" style={{ marginTop: '6px' }}>
        Complete all the tasks below
        <br />
        to grab the prize
      </p>

      <div className={styles.referral_event_tasks}>
        <TasksProgress tasksCount={tasksCount} completedTasksCount={tasksCompleted} />
      </div>

      {!areAllTasksComplete && (
        <div style={{ padding: '0 24px' }}>
          {tasks.map((task, index) => renderCard(task, index === tasks.length - 1))}
        </div>
      )}

      <div className={classNames('_f _fCC', styles.referral_event__participants)}>
        <p className={styles.referral_event__participants_label}>
          Total Participants:
        </p>

        <p className={classNames('_f _fCC _g7001838', styles.referral_event__participants_value)}>
          {participants.toLocaleString()}

          <components.svg.Frog width={26} height={18} color={'#999999'} />
        </p>
      </div>
    </div>
  );
};

const Terms = () => {
  return (
    <div className={styles.referral_event_terms}>
      <h5>Terms and conditions</h5>

      <p className='_g4001318'>
        During the limited referral event, HAX will reward the most active users.
      </p>

      <br/>

      <p className='_g4001318'>
        When we reach 1 million users, a 1000 TON prize pool will be split among 100 winners — 10 TON each.
      </p>

      <br/>

      <p className='_g4001318'>
        With every new million users, the prize pool will grow. Invite friends and complete tasks to join the giveaway!
      </p>
    </div>
  )
}

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

const PromoTaskCard = ({
  taskId,
  title,
  description,
  status,
  type,
  url,
  iconUrl,
  refUrl,
  actionUrl,
  data,
  storyMediaUrl,
  storyText,
  syntheticThresholdMillis,
  drawBottomLine,
}) => {
  const dispatch = reactRedux.useDispatch();
  const navigate = reactRouterDom.useNavigate();

  const onClickAction = async () => {
    if (status === 'started' && actionUrl) {
      const params = { taskId, actionUrl, promo: true };
      dispatch(slices.eventsSlice.thunks.triggerPendingAction(params));
    }

    let callbackSyntheticPending = () => {};
    let callbackCta = () => {};

    switch (type) {
    case 'tg_blue':
    case 'tg_black':
      if (status !== 'complete') {
        callbackSyntheticPending = () =>
          dispatch(slices.eventsSlice.thunks.addSyntheticThreshold({ taskId }));
      }
      callbackCta = () => WebApp.openTelegramLink(url);
      break;
    case 'X':
    case 'link':
    case 'youtube':
      if (status !== 'complete') {
        callbackSyntheticPending = () =>
          dispatch(slices.eventsSlice.thunks.addSyntheticThreshold({ taskId }));
      }
      callbackCta = () => WebApp.openLink(url);
      break;
    case 'spin':
    case 'connect_wallet':
      callbackCta = () => navigate('/home');
      break;
    case 'share_story':
      callbackCta = () => {
        WebApp.shareToStory(storyMediaUrl, { text: storyText });
      };
      callbackSyntheticPending = () =>
        dispatch(slices.eventsSlice.thunks.addSyntheticThreshold({ taskId }));
      break;
    case 'invite_friends':
      callbackCta = () => WebApp.openTelegramLink(`https://t.me/share/url?url=${refUrl}`);
      break;
    default: {
      throw new Error(`unknown type=${type}`);
    }
    }

    callbackSyntheticPending();
    callbackCta();
  };

  const getStatusComponent = () => {
    const syntheticStatus = syntheticThresholdMillis < Date.now() ? status : 'pending';

    switch (syntheticStatus) {
    case 'started':
      return (
        <IconStatusBox>
          <components.svg.ArrowV2 width={16} height={16} />
        </IconStatusBox>
      );
    case 'pending': {
      if (Number.isInteger(data?.progress) && Number.isInteger(data?.count)) {
        return (
          <p className="_g7001416">
            {data.progress}/{data.count}
          </p>
        );
      } else {
        return (
          <IconStatusBox>
            <div className="lds-spinner">
              {Array(12).fill().map((_, idx) => <div key={idx} />)}
            </div>
          </IconStatusBox>
        );
      }
    }
    case 'complete':
    case 'claim':
      return (
        <IconStatusBox>
          <components.svg.Ok3 width={30} height={30} />
        </IconStatusBox>
      );
    default:
      console.warn(`No statusComponent for syntheticStatus=${syntheticStatus}`);
      return null;
    }
  };

  return (
    <button className={classnames('_w100', styles.card__box)} onClick={onClickAction}>
      <div className="_fCC _w100">
        <div className={classnames('_fCC', styles.card__icon__box)}>
          {iconUrl && <img src={iconUrl} className={styles.card__icon} alt="Task Icon" />}
        </div>
        <div className="_f _fCol _w100" style={{ minWidth: 0 }}>
          <div>
            <p className="_w4001722 _ta_start _one_line_ellipsis">{title}</p>
            <span style={{ width: '10px' }} />
          </div>

          <h4 className="_g4001316 _ta_start _one_line_ellipsis" style={{ marginTop: '2px' }}>
            {description}
          </h4>
        </div>
        <div style={{ width: '10px', minWidth: '10px' }} />
        {getStatusComponent()}
      </div>
      {drawBottomLine && (
        <div
          style={{
            height: '1px',
            border: '0.5px solid rgba(255, 255, 255, 0.05)',
            position: 'relative',
            bottom: '-12px',
          }}
        />
      )}
    </button>
  );
};

export const Events = () => {
  const dispatch = reactRedux.useDispatch();

  const promoTasks = reactRedux.useSelector(state => state.events?.promoTasks || []);
  const friends = reactRedux.useSelector(slices.friendsSlice.selectors.friends)
  const users = friends?.friendsStats?.usersCount

  React.useEffect(() => {
    dispatch(slices.pageSlice.thunks.hideGlobalLoading());
    dispatch(slices.eventsSlice.thunks.syncWithServer());
    dispatch(slices.friendsSlice.thunks.fetchFriends())
  }, [dispatch]);

  return (
    <components.container.Page>
      <components.loading.LoadingFullPage isOpen={false} />

      <components.container.BodyScroll>
        <div style={{ paddingBottom: '110px', height: '100%' }}>
          <ReferralStats users={users}/>

          <ReferralEvent tasks={promoTasks} />

          <Terms />
        </div>
      </components.container.BodyScroll>

      <components.container.Footer>
        <components.Tabs />
      </components.container.Footer>
    </components.container.Page>
  );
};

