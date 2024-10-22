import React from "react";
import * as components from "@/components/index.js";
import styles from "@/pages/events/Events.module.sass";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import classNames from "classnames";
import * as slices from "@/slices/index.js";
import * as reactRedux from "react-redux";


const UserStats = ({ users }) => (
  <div className={styles.referral_stats_fields}>
    <div className={styles.referral_stats_fields_users}>
      Users:
    </div>

    <div className={styles.referral_stats_fields_stat}>
      { users.toLocaleString() }
    </div>

    <div className={styles.referral_stats_fields_goal}>
      1M

      <div className={styles.referral_stats_fields_goal__checkpoint}>
        <div className={styles.referral_stats_fields_goal__checkpoint__circle}>
          <components.svg.Check
            width={20}
            height={20}
            color="#000000"
          />
        </div>
      </div>
    </div>
  </div>
);

const ProgressLine = ({ progress }) => (
  <div className={styles.referral_stats_stats__line_container}>
    <div
      className={styles.referral_stats_stats__line}
      style={{ width: `${progress}%` }}
    />
  </div>
);

const PrizePool = ({ amount }) => (
  <div className={styles.referral_stats_prize_pool}>
    <div className={styles.referral_stats_prize_pool_title}>
      Prize Pool
    </div>

    <div className={styles.referral_stats_prize_pool_amount}>
      { amount.toLocaleString() }

      <span>$TON</span>
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

      10 $TON
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

      100 Winners
    </p>
  </div>
);

const ReferralStats = () => {
  const users = 513608;
  const goal = 1000000;
  const progress = Math.min((users / goal) * 100, 100);

  return (
    <div className={styles.referral_stats}>
      <div className={styles.referral_stats_hero}>
        <div className={styles.referral_stats_stats}>
          <UserStats users={users} goal={goal} />
          <ProgressLine progress={progress} />
        </div>

        <PrizePool amount={1000} />
        <ReferralRewards />
      </div>
    </div>
  );
};

const TasksProgress = ({tasksCount = 4, completedTasksCount = 2}) => {
  const percents = (completedTasksCount / tasksCount) * 100

  return (
   <div className={styles.referral_event_tasks__progress}>
     <div className={styles.referral_event_tasks__progress__box}>
       <CircularProgressbar
         value={percents}
         styles={buildStyles({
           pathColor: `#BCFF2F`,
           trailColor: '#1A270F',
         })}
         strokeWidth={10}
         className={styles.referral_event_tasks__progress__box_icon}
       />

       {
         percents === 100 &&
           <components.svg.Check
             width={10}
             height={10}
             color="#BCFF2F"
           />
       }
     </div>

     <div className={classNames('_fC', '_fCol', styles.referral_event_tasks__progress__content)}>
       <h5 className={styles.referral_event_tasks__progress_title}>
         Your progress
         <span>
           {completedTasksCount}/{tasksCount}
         </span>
       </h5>

       {
         percents === 100 ?
           <p
             className="_g4001316 _ta_start"
           >
             You have joined the event successfully.
             <br/>
             Invite friends to find out the results faster.
           </p>
         :
           <p
             className="_g4001316 _ta_start"
           >
             Complete all tasks to join the event
           </p>
     }
     </div>
   </div>
  )
}

const ReferralEvent = ({ participants= 1346 }) => {
  return (
    <div className={styles.referral_event}>
      <h4 className="_w7003238 _ta_center">Referral event</h4>

      <p className="_g4001722 _ta_center" style={{marginTop: '6px'}}>
        Complete all the tasks below
        <br/>
        to grab the prize
      </p>

      <div className={styles.referral_event_tasks}>
        <TasksProgress />
      </div>

      <div className={classNames('_f _fCC', styles.referral_event__participants)}>
        <p className={styles.referral_event__participants_label}>
          Participants:
        </p>

        <p className={classNames('_f _fCC', styles.referral_event__participants_value)}>
          {participants.toLocaleString()}

          <components.svg.Frog
            width={26}
            height={18}
          />
        </p>
      </div>
    </div>
  )
}

const Terms = () => {
  return (
    <div className={styles.referral_event_terms}>
      <h5>Terms and conditions</h5>

      <p>
        During the limited referral event, HAX will reward the most active users.
      </p>

      <br/>

      <p>
        When we reach 1 million users, a 1000 TON prize pool will be split among 100 winners — 10 TON each.
      </p>

      <br/>

      <p>
        With every new million users, the prize pool will grow. Invite friends and complete tasks to join the giveaway!
      </p>
    </div>
  )
}

export const Events = () => {
  const dispatch = reactRedux.useDispatch()

  dispatch(slices.pageSlice.thunks.hideGlobalLoading())

  return (
    <components.container.Page>
      <components.loading.LoadingFullPage isOpen={false} />

      <components.container.BodyScroll>
        <div
          style={{
            paddingBottom: '110px',
            height: '100%'
          }}
        >
          <ReferralStats />

          <ReferralEvent />

          <Terms />
        </div>
      </components.container.BodyScroll>

      <components.container.Footer>
        <components.Tabs />
      </components.container.Footer>
    </components.container.Page>
  );
};
