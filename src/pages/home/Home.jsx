import React from 'react'
import classnames from 'classnames'
import WebApp from '@twa-dev/sdk'
import * as reactRedux from 'react-redux'
import * as reactCircularProgressbar from 'react-circular-progressbar'
import Modal from 'react-modal'
import * as tonConnect from '@tonconnect/ui-react'
import {Carousel} from 'react-responsive-carousel'
import gsap from 'gsap'
import * as reactRouterDom from "react-router-dom";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

import * as components from '@/components'
import * as slices from '@/slices'
import * as constants from '@/constants'
import * as lib from '@/lib'
import * as hooks from '@/hooks'

import styles from './Home.module.sass'
import { shuffle } from '@/lib'
import classNames from "classnames";
import {EmojiPumpkin} from "@/components/animations/index.jsx";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [tonConnectUI] = tonConnect.useTonConnectUI();
  const address = tonConnect.useTonAddress(true);
  const formattedWallet = `${address.slice(0, 4)}...${address.slice(-4)}`;

  const dispatch = reactRedux.useDispatch();

  React.useEffect(() => {
    if (address) {
      dispatch(slices.homePageSlice.thunks.verifyAddressExists({address, network: 'ton'}))
    }
  }, [address, dispatch]);

  const amountToken = reactRedux.useSelector(
    slices.userSlice.selectors.amountToken,
  )

  const onWalletClick = async () => {
    try {
      await navigator.clipboard.writeText(address)
      components.toast.showText('Wallet address copied to clipboard')
    } catch (err) {
      console.error(err)
      components.toast.showText('Error on connect TON wallet')
    }
  }

  const onDisconnect = async () => {
    try {
      await tonConnectUI.disconnect()
      components.toast.showText('TON Wallet disconnected')
    } catch (err) {
      console.error(err)
      components.toast.showText('Error on disconnect TON wallet')
    }
  }

  return (
    <div className={classnames('container', '_fCC', '_fCol', styles.header__box)}>
      {
        address ? (
          <components.animations.HaxIdle
            key={address}
            style={{width: '200px', height: '180px'}}
          />
        ) : (
          <components.animations.HaxSleeping
            key={address}
            style={{width: '200px', height: '180px'}}
          />
        )
      }
      <div className={classnames('_fCC', styles.header__balance__box)}>
        <components.svg.Polygon addShadow={!address}/>
        <p className={classnames('_w7003238', styles.header__balance__text)}>
          {lib.formatPxlInt(amountToken)} HAX
        </p>
      </div>
      {address ? (
        <>
          <button
            className={classnames('_g4001316', styles.header__wallet)}
            onClick={() => setIsModalOpen(true)}
          >
            <components.svg.Wallet width={16} height={16} color="#999999"/>
            {formattedWallet}
            <components.svg.Chevron width={8} height={8} color="#999999"/>
          </button>
          <ModalWallet
            formattedWallet={formattedWallet}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onDisconnect={() => {
              onDisconnect()
              setIsModalOpen(false)
            }}
            onWalletClick={onWalletClick}
          />
        </>
      ) : (
        <WalletConnect/>
      )}
    </div>
  )
}

const ModalWallet = ({
  formattedWallet,
  isOpen,
  onClose,
  onDisconnect,
  onWalletClick,
}) => {
  return (
    <components.CenteredModal
      title="Wallet"
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <div className="_fCC" style={{margin: '30px auto', cursor: 'pointer'}} onClick={onWalletClick}>
        <div style={{margin: '0 15px 3px 0'}}>
          <components.svg.Wallet
            width={38}
            height={38}
            color="rgba(153,153,153,.2"
          />
        </div>
        <div>
          <div className="_w5001816">{formattedWallet}</div>
          <div style={{height: '2px'}}/>
          <div className="_g4001416">Connected TON wallet</div>
        </div>
      </div>
      <button
        className={classnames(
          '_w4001722',
          styles.modal_wallet__button,
          styles.modal_wallet__button__white,
        )}
        onClick={onDisconnect}
      >
        Disconnect
      </button>
      <div style={{height: '10px'}}/>
      <button
        className={classnames(
          '_w4001722',
          styles.modal_wallet__button,
          styles.modal_wallet__button__transparent,
        )}
        onClick={onClose}
      >
        Close
      </button>
    </components.CenteredModal>
  )
}

const ModalRewardCard = ({
  icon,
  iconBoxStyle = {},
  leftTitle,
  leftText,
  priceStr,
}) => (
  <div
    className="_fCC _w100"
    style={{
      background: '#212121',
      padding: '13px 11px 16px',
      borderRadius: '16px',
      marginBottom: '15px',
    }}
  >
    <div
      className="_fCC"
      style={{
        minWidth: '32px',
        height: '32px',
        borderRadius: '50%',
        ...iconBoxStyle,
      }}
    >
      {icon}
    </div>
    <div style={{width: '16px'}}/>
    <div className="_w100">
      <p className="_g4001520" style={{marginBottom: '9px'}}>
        {leftTitle}
      </p>
      <p className="_w4003422">{leftText}</p>
    </div>
    <div style={{width: '16px'}}/>
    <div>
      <p className="_g4001520 _ta_end">Received</p>
      <div className="_fCC">
        <components.svg.Polygon width={14} height={14}/>
        <div style={{width: '6px'}}/>
        <p className="_w4001722 _nowrap" style={{ whiteSpace: 'nowrap' }}>{priceStr}</p>
      </div>
    </div>
  </div>
)

const ModalRewardContent = ({onClickClose}) => {
  const homePage = reactRedux.useSelector(
    slices.homePageSlice.selectors.homePage,
  )
  const onClickShareStory = React.useCallback(() => {
    const url = homePage.registerData.storyMediaUrl
    const text = homePage.registerData.storyMediaText
    WebApp.shareToStory(url, {text})
  }, [])
  const classesShareButton = classnames(
    '_fCC _dark7001722',
    styles.wallet_connect__button,
  )
  const rewardAmount =
        (homePage?.registerData?.rewardForBalance ?? 0) +
        (homePage?.registerData?.rewardForTxCount ?? 0)

  return (
    <div className={classnames('_abs_mid _fCC _fCol', styles.modal_reward__box)}>
      <components.animations.Confetti/>
      <components.animations.HaxIdle style={{width: '200px', height: '180px'}}/>
      <h2 className="_g7003041" style={{margin: '34px auto 3px'}}>
        Your reward:
      </h2>
      <div className="_fCC" style={{marginBottom: '50px'}}>
        <components.svg.Polygon width={46} height={46}/>
        <div style={{width: '15px'}}/>
        <p className="_w7004641">{rewardAmount} HAX</p>
      </div>
      <ModalRewardCard
        icon={<components.svg.Ton width={32} height={32}/>}
        leftTitle="TON balance"
        leftText={homePage?.forRegisterBody?.balance?.slice(0, 9)}
        priceStr={lib.formatPxlInt(
          homePage?.registerData?.rewardForBalance ?? 0,
        )}
      />
      <ModalRewardCard
        icon={<components.svg.Arrows width={32} height={32}/>}
        leftTitle="Transaction count"
        leftText={homePage?.forRegisterBody?.txCount ?? 0}
        priceStr={lib.formatPxlInt(
          homePage?.registerData?.rewardForTxCount ?? 0,
        )}
      />
      <div className="_fCC _fCol" style={{}}>
        <button
          className={classesShareButton}
          style={{width: '270px'}}
          onClick={onClickShareStory}
        >
                    Share to stories
        </button>
        <button
          className="_g4001824 _op60"
          style={{marginTop: '15px'}}
          onClick={onClickClose}
        >
                    Later
        </button>
      </div>
    </div>
  )
}

const WalletConnect = () => {
  const address = tonConnect.useTonAddress(true);
  const [tonConnectUI] = tonConnect.useTonConnectUI();

  const onClickConnect = () => tonConnectUI.openModal()

  if (address) return null

  const classesConnectButton = classnames(
    '_fCC _dark7001722',
    styles.wallet_connect__button,
  )
  return (
    <div className="container _w100 _f _fCC _fCol">
      <p className="_g4001722 _f _fCC _ta_center">
        Connect wallet to get extra
        <span style={{padding: '0 3px'}}>⬢</span>
        <span className="_g7001722">HAX</span>
      </p>
      <button className={classesConnectButton} onClick={() => onClickConnect()}>
        <components.svg.Wallet width={16} height={16} color="#1A270F"/>
        <span style={{width: '6px'}}/>
        Connect wallet
      </button>
    </div>
  )
}

const SpinsV2Header = () => {
  const dispatch = reactRedux.useDispatch()
  const amountKeys = reactRedux.useSelector(
    slices.userSlice.selectors.amountKeys,
  )
  const classesKeysAmountBox = classnames(
    '_f _fCC',
    styles.spins_v2__keys__amount_box,
  )
  const classesKeysAmountBoxTitle = classnames({
    _g7001521: amountKeys === 0,
    _gold7001521: amountKeys > 0,
  })
  const classesKeysAmountBoxButton = classnames(
    '_d7001316',
    styles.spins_v2__keys__button,
  )
  const {dur} = hooks.useDurHook(() =>
    reactRedux.useSelector(slices.userSlice.selectors.claimKeyExpireAt),
  )
  const progressClaim = parseInt((dur / (6 * 60 * 60 * 1000)) * 100, 10)

  const onClickClaim = React.useCallback(() => {
    dispatch(slices.homePageSlice.thunks.triggerClaim())
    if (WebApp?.HapticFeedback) WebApp.HapticFeedback.impactOccurred('heavy')
  }, [dispatch])
  return (
    <div className="_f _fCB _w100">
      <div className={classnames('_f _fCC', styles.spins_v2__keys__box)}>
        <p className="_w4001520 _op80 _nowrap">Your keys:</p>
        <span style={{width: '5px'}}/>
        <div className={classesKeysAmountBox}>
          <components.svg.Key width={14} height={14} grey={amountKeys === 0}/>
          <span style={{width: '4px'}}/>
          <p className={classesKeysAmountBoxTitle}>{amountKeys}</p>
        </div>
      </div>
      {dur > 0 ? (
        <div className="_f _fCC">
          <p className="_w4001520">{lib.formatMillis(dur)}</p>
          <span style={{width: '5px'}}/>
          <div style={{width: '23px'}}>
            <reactCircularProgressbar.CircularProgressbar
              value={progressClaim}
              styles={reactCircularProgressbar.buildStyles({
                pathColor: `#EABB1C`,
                trailColor: 'rgba(192, 156, 23, 0.2)',
                width: '23px',
              })}
              strokeWidth={12}
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => onClickClaim()}
          className={classesKeysAmountBoxButton}
        >
          Claim
        </button>
      )}
    </div>
  )
}

const ModalMultiplierInfo = ({ isOpen, onClose }) => {
  return (
    <components.CenteredModal
      title="Daily multiplier"
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <div className="_g4001416">
        The daily multiplier increases the number of coins received
        from spins by multiplying them by the corresponding coefficient.
      </div>
    </components.CenteredModal>
  )
}

const MultiplierBadge = ({ multiplier = 1, colored = true }) => {
  return (
    <div className={
      classNames("_f _fCC",
        styles.multiplier_badge,
        colored && styles.multiplier_badge_colored
      )
    }>
      <p className="_dark7002014" style={{ color: !colored && '#282828' || '' }}>x</p>

      <span className="_f _fCC _y7002226">
        {multiplier}
      </span>
    </div>
  )
}

const DailyMultiplier = ({ multiplier }) => {
  const [isOpen, setOpen] = React.useState(false)

  return (
    <div className={classNames("_f _fCol", styles.daily_multiplier)}>
      <p className={styles.daily_multiplier_title}>
        Daily

        <br/>

        multiplier
      </p>

      <button
        className={styles.daily_multiplier_buttonInfo}
        onClick={() => setOpen(true)}
      >
        <components.svg.Info width={18} height={18}/>
      </button>

      <div className='_f _fCB'>
        <p className='_g4001320'>
          Reward
        </p>

        <MultiplierBadge
          multiplier={multiplier}
          colored={false}
        />
      </div>

      <ModalMultiplierInfo
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

const SpinsV2BotLanding = ({
  onClickUseToSpin
}) => {
  const amountKeys = reactRedux.useSelector(
    slices.userSlice.selectors.amountKeys,
  )
  const dailyRewardsMultiplier = reactRedux.useSelector(
    slices.userSlice.selectors.dailyRewardsMultiplier,
  )

  const classesButton = classnames(
    '_op95 _f _fCC _w100',
    styles.spins_v2__bot_landing__button,
    {
      _d7001520: amountKeys > 0,
      _w7001520: amountKeys === 0,
      [styles.spins_v2__bot_landing__button_active]: amountKeys > 0,
      [styles.spins_v2__bot_landing__button_inactive]: amountKeys === 0,
    },
  )
  const onClick = React.useCallback(() => {
    if (amountKeys > 0) {
      onClickUseToSpin()
    }
  }, [amountKeys])
  return (
    <div className="_f _fCC _fCol _w100">
      <div
        className="_f _fC _w100"
        style={{ justifyContent: 'flex-end' }
        }>
        <img
          src={amountKeys === 0 ? '/assets/gift-box-gray.svg' : '/assets/gift-box-halloween.svg'}
          alt="Gift Box"
          width={104} height={106}
        />

        <DailyMultiplier
          multiplier={dailyRewardsMultiplier}
        />
      </div>

      <button className={classesButton} onClick={onClick}>
        HACK!
        <components.animations.EmojiPumpkin style={{width: '24px', height: '24px', marginTop: '-4px'}}/>
      </button>
    </div>
  )
}

const SpinningV2 = ({ onEnd }) => {
  const REEL_RADIUS = 90
  const SLOT_COUNT = 20
  const ACTIVE_SLOT = 1
  const SLOT_ANGLE = 360 / SLOT_COUNT
  const START_ROTATION = -(180 + 360/SLOT_COUNT/2) // a half of ring + centering
  const END_ROTATION = START_ROTATION - 360 * 6.5 // 6 full rotations + half of ring

  const nextSpinReward = reactRedux.useSelector(slices.homePageSlice.selectors.nextSpingReward)
  const rewards = reactRedux.useSelector(slices.homePageSlice.selectors.spinRewards)

  const dispatch = reactRedux.useDispatch()

  const refRing = React.useRef(null)
  const refSlots = React.useRef([])

  React.useEffect(() => {
    // Setup GSAP
    gsap.registerPlugin(MotionPathPlugin)

    // Setup ring and slots
    const setupRingAndSlots = () => {
      window.dispatchEvent(new Event('resize')) // trigger browser frame rerender
      gsap.set(refRing.current, {
        perspective: 1000,
        rotationX: START_ROTATION,
        transformStyle: "preserve-3d"
      })

      refSlots.current.forEach((slot, i) => {
        gsap.set(slot, {
          rotationX: SLOT_ANGLE * i,
          z: REEL_RADIUS,
        })
      })
    }

    // Animation function
    const startSpinning = () => {
      window.dispatchEvent(new Event('resize')) // trigger browser frame rerender
      gsap.to(refRing.current, {
        rotationX: END_ROTATION, // 6 full rotations + centering
        duration: 10,
        ease: "power2.inOut",
        onComplete: () => {
          setTimeout(() => onEnd(), 1000)
        }
      })
      dispatch(slices.routeBlockSlice.actions.setRouteBlock(true))
    }

    // Run animation sequence
    const runSpinSequence = async () => {
      setupRingAndSlots()
      await gsap.delayedCall(0.75, startSpinning)
    }

    runSpinSequence()

    // Cleanup
    return () => {
      gsap.killTweensOf(refRing.current)
    }
  }, [onEnd])

  const rewardTypeIconMap = {
    key: <components.svg.Key width={16} height={17} />,
    token: <components.svg.Polygon width={16} height={17} />,
  }

  const tRewards = React.useMemo(() => {
    return shuffle(
      Array(Math.ceil(20 / rewards.length))
        .fill(rewards)
        .flat()
        .slice(0, 20)
    )
  }, [rewards])

  const slotsComponentsList = tRewards.map(({ rewardType, originalAmount }, i) => (
    <div
      className="_f _fCC"
      key={i.toString()}
      ref={el => refSlots.current[i] = el}
      style={{
        position: 'absolute',
        top: '50%',
        width: '100%',
        backfaceVisibility: 'hidden',
        transformOrigin: "50% 50% -" + REEL_RADIUS + "px",
      }}
    >
      {rewardTypeIconMap[rewardType]}
      <p style={{ marginLeft: '10px' }} className={classnames('_w7002025', i === ACTIVE_SLOT ? 'active' : 'regular')}>
        {i === ACTIVE_SLOT ? nextSpinReward.originalAmount : originalAmount}
      </p>
    </div>
  ))

  return (
    <div className={classnames('_w100', styles.spinning_v2__rotate)}>
      <div className={classnames(styles.spinning_v2__top_shadow)}/>
      <div className={classnames(styles.spinning_v2__bot_shadow)}/>
      <div className={classnames('_abs_mid', styles.spinning_v2__highligh)}/>
      <div
        ref={refRing}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: '100%',
          height: '100%',
          transformOrigin: "50% 50%",
          transformStyle: 'preserve-3d'
        }}
      >
        {slotsComponentsList}
      </div>
    </div>
  )
}

const SpinningV2End = ({ onClickClaim }) => {
  const nextSpingReward = reactRedux.useSelector(
    slices.homePageSlice.selectors.nextSpingReward,
  )
  const classesButton = classnames(
    '_d7001520 _op95 _f _fCC _w100',
    styles.spins_v2__bot_end__button,
  )
  const classesBox = classnames(
    '_f _fCC _fCol _abs_mid',
    styles.spins_v2__bot_end__box,
  )
  return (
    <>
      <div className={styles.spins_v2__bot_end__box_overlay}></div>
      <div className={classesBox}>

        <div className="_f _fCol" style={{gap: '10px', zIndex: 1}}>
          <h4 className="_g4001722">Your Daily Multiplier</h4>

          <div className='_f _fCC'>
            <p className={classNames('_w5002225', styles.spins_v2__bot_end_originalAmount)}>
              {lib.formatPxlInt(nextSpingReward.originalAmount)}
            </p>

            <MultiplierBadge
              multiplier={nextSpingReward.multiplier}
            />
          </div>
        </div>

        <div className={styles.spins_v2__bot_end_divider}/>

        <div className="_w100 _f _fCC _fCol">
          <h4 className="_g4001722">Your Total reward</h4>

          <p className="_w7005226" style={{margin: '16px 0'}}>
            <components.svg.Polygon width={30} height={32}/>

            <span> </span>

            {lib.formatPxlInt(nextSpingReward.amount)}
          </p>

          <button className={classesButton} onClick={onClickClaim}>
          Claim
          </button>
        </div>
      </div>
    </>
  )
}

const SpinsV2 = () => {
  const dispatch = reactRedux.useDispatch()
  const phase = reactRedux.useSelector(slices.homePageSlice.selectors.phase)
  const isSpinnerOpen = reactRedux.useSelector(
    slices.homePageSlice.selectors.isSpinnerOpen,
  )
  const onClickUseToSpin = React.useCallback(() => {
    dispatch(slices.homePageSlice.thunks.triggerUseKeyToSpin())

    if (WebApp?.HapticFeedback) WebApp.HapticFeedback.impactOccurred('heavy')
  }, [])
  const onSpinningEnd = React.useCallback(() => {
    dispatch(slices.routeBlockSlice.actions.setRouteBlock(false))
    dispatch(slices.homePageSlice.thunks.setPhase({phase: 'end'}))
  }, [])
  const onClickClaim = React.useCallback(() => {
    dispatch(slices.homePageSlice.thunks.applyUseKeyToSpinEndVals())
    dispatch(slices.homePageSlice.thunks.setPhase({phase: 'landing'}))

    if (WebApp?.HapticFeedback) WebApp.HapticFeedback.impactOccurred('heavy')
  }, [])
  const phaseComponentMap = {
    landing: <SpinsV2BotLanding onClickUseToSpin={onClickUseToSpin}/>,
    spinning: <SpinningV2 onEnd={onSpinningEnd}/>,
    end: <SpinningV2End onClickClaim={onClickClaim}/>,
  }
  const phaseComponent = phaseComponentMap[phase]
  return (
    <>
      <components.loading.LoadingFullPage isOpen={isSpinnerOpen}/>
      <div className="container _w100">
        <div className={classnames('_f _fCC _fCol', styles.spins_v2__box)}>
          <SpinsV2Header/>
          <div className={styles.spins_v2__divider}/>

          {
            phase === 'end' &&
            <>
              <div style={{position: 'absolute', top: '-60px', left: 0, zIndex: '11'}}>
                <components.animations.EmojiBoomstick style={{width: '86px', height: '86px'}}/>
              </div>

              <div style={{position: 'absolute', top: '-60px', right: 0, transform: 'rotateY(180deg)', zIndex: '11'}}>
                <components.animations.EmojiBoomstick style={{width: '86px', height: '86px'}}/>
              </div>
            </>
          }

          {phaseComponent}
        </div>
      </div>
    </>
  )
}

const ModalOnboardingContent = ({onClickGotIt}) => {
  const slider = React.useRef()
  const nextSlide = () => slider.current.onClickNext()
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const Slide = ({
    imgSrc,
    title,
    content,
    buttonText,
    buttonColor,
    onButtonClick,
  }) => (
    <div className={styles.modal_onboarding__slide}>
      <img src={imgSrc} alt="Onboarding" className={styles.modal_onboarding__image}/>
      <div className={classnames('_w7002428', styles.modal_onboarding__title)}>{title}</div>
      <div className={classnames('_g4001520', styles.modal_onboarding__text)}>{content}</div>
      <button
        className={classnames('_d7001821', styles.modal_onboarding__button)}
        style={{backgroundColor: buttonColor}}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  )

  const Word = ({bold, colored, color, children}) => (
    <span style={{
      fontFamily: bold ? '"SF Pro Display 700"' : undefined,
      color: colored || color
        ? color || '#BCFF2F'
        : undefined,
    }}>{children}</span>
  )

  return (
    <>
      <div className={classnames('_fCC', styles.modal_onboarding__indicators)}>
        {
          Array.from({length: 5}, (_, i) => (
            <div
              key={i}
              className={classnames(styles.modal_onboarding__indicator, {
                [styles.modal_onboarding__indicator_active]: i <= currentSlide,
              })}
            />
          ))
        }
      </div>

      <Carousel
        ref={slider}
        swipeable={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        emulateTouch={true}
        onChange={index => setCurrentSlide(index)}
      >
        <Slide
          imgSrc="/assets/onboarding-1.png"
          title="Connect your wallet"
          content={(
            <p>
              Connect your <Word colored={true}>TON Wallet</Word> to
              get your <Word bold={true} colored={true}>⬢HAX</Word> token reward.
              Show your love for TON!
            </p>
          )}
          buttonText="Yeah"
          buttonColor="#fff"
          onButtonClick={nextSlide}
        />
        <Slide
          imgSrc="/assets/onboarding-2.png"
          title="Quests"
          content={(
            <p>
              Complete tasks and unlock extra <Word bold={true} colored={true}>⬢HAX</Word> rewards.
            </p>
          )}
          buttonText="Got it!"
          buttonColor="#fff"
          onButtonClick={nextSlide}
        />
        <Slide
          imgSrc="/assets/onboarding-3.png"
          title="Friends"
          content={(
            <p>
              Earn <Word colored={true}>10%</Word> from your invitees&apos; TON Wallet
              connections and <Word colored={true}>5%</Word> from their spins
              and quests. Claim your rewards every 24 hours.
            </p>
          )}
          buttonText="Cool"
          buttonColor="#fff"
          onButtonClick={nextSlide}
        />
        <Slide
          imgSrc="/assets/onboarding-4.png"
          title="Leaderboard"
          content={(
            <p>
              Track your <Word colored={true}>progress</Word> on the leaderboard
              and compete with other <Word bold={true}>⬢HAX</Word> holders
              for top rewards.
            </p>
          )}
          buttonText="Cool"
          buttonColor="#fff"
          onButtonClick={nextSlide}
        />
        <Slide
          imgSrc="/assets/onboarding-5.png"
          title="Spin"
          content={(
            <p>
              Earn <Word bold={true} colored={true}>⬢HAX</Word> by <Word colored={true}>spinning</Word> with
              a key every 6 hours. Don&apos;t forget to log in
              to <Word colored={true}>claim</Word> your <Word color="#EABB1C">🔑 Key</Word> on time!
            </p>
          )}
          buttonText="LET ME SPIN!"
          buttonColor="#BCFF2F"
          onButtonClick={onClickGotIt}
        />
      </Carousel>
    </>
  )
}

const EventBadge = () => {
  return (
    <reactRouterDom.NavLink to={'/events'} className={classNames('_f _fCC', styles.eventBadge)}>
      <components.svg.Ton
        width={18}
        height={18}
        fill={'#0097EA'}
        stroke={'#fff'}
      />

      <p className='_b7001722'>
        1000 $TON PROMO
      </p>

      <components.svg.ArrowV2
        width={18}
        height={18}
        stroke={'#0097EA'}
      />
    </reactRouterDom.NavLink>
  )
}

export const Home = () => {
  const dispatch = reactRedux.useDispatch()
  const user = reactRedux.useSelector(slices.userSlice.selectors.user)
  const homePage = reactRedux.useSelector(
    slices.homePageSlice.selectors.homePage,
  )
  const onboardedModalShowed = reactRedux.useSelector(
    slices.userSlice.selectors.onboardedModalShowed,
  )
  const renderOnboardingModal = !(
    homePage.ignoreOnboardingModalInCurrentRun || onboardedModalShowed
  )

  React.useEffect(() => {
    if (user.status === constants.status.success) {
      dispatch(slices.pageSlice.thunks.hideGlobalLoading())
    } else {
      dispatch(slices.pageSlice.thunks.showGlobalLoading())
    }
  }, [dispatch, user.status])

  React.useEffect(() => {
    dispatch(slices.homePageSlice.thunks.initialize())
    dispatch(slices.eventsSlice.thunks.syncWithServer());
  }, [dispatch])

  const [tonConnectUI] = tonConnect.useTonConnectUI()
  React.useEffect(() => {
    const unsubscribe = tonConnectUI.onStatusChange(wallet => {
      if (wallet?.account?.address) {
        try {
          const address = tonConnect.toUserFriendlyAddress(wallet.account.address)
          dispatch(slices.homePageSlice.thunks.registerWallet({address, network: 'ton'}))
          components.toast.showText('TON Wallet connected')
        } catch (err) {
          console.error(err)
          components.toast.showText(
            'Error on connect TON wallet. Please contact support',
          )
        }
      }
    })

    return unsubscribe
  }, [dispatch, tonConnectUI]);

  if (user.status !== constants.status.success) {
    return null
  }

  return (
    <components.container.Page>
      <components.container.BodyScroll>
        <div
          className="_fCC _fCol"
          style={{height: '100%', paddingBottom: '130px'}}
        >
          <img
            className={classNames(styles.web, styles.web__leftTop)}
            src={'/assets/bg-web-left-top.svg'}
            alt="Gift Box"
            width={151} height={151}
          />

          <img
            className={classNames(styles.web, styles.web__center)}
            src={'/assets/bg-web-big.svg'}
            alt="Gift Box"
            width={828} height={749}
          />

          <img
            className={classNames(styles.web, styles.web__rightBottom)}
            src={'/assets/bg-web-right-bottom.svg'}
            alt="Gift Box"
            width={204} height={135}
          />

          <EventBadge/>
          <Header/>
          <SpinsV2/>
        </div>
        <Modal
          isOpen={homePage.isOpenRewardModal}
          overlayClassName="adjusted-react-modal-overlay"
          className="adjusted-react-modal"
        >
          <ModalRewardContent
            onClickClose={() =>
              dispatch(slices.homePageSlice.thunks.closeRewardsModal())
            }
          />
        </Modal>
        <Modal
          isOpen={renderOnboardingModal}
          overlayClassName="adjusted-react-modal-overlay"
          className="adjusted-react-modal"
        >
          <ModalOnboardingContent
            onClickGotIt={() => dispatch(slices.homePageSlice.thunks.closeOnboardingModal())}
          />
        </Modal>
      </components.container.BodyScroll>
      <components.container.Footer>
        <components.Tabs/>
      </components.container.Footer>
    </components.container.Page>
  )
}
