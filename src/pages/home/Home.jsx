import React from 'react'
import classnames from 'classnames'
import WebApp from '@twa-dev/sdk'
import * as reactRedux from 'react-redux'
import * as reactCircularProgressbar from 'react-circular-progressbar'
import Modal from 'react-modal'
import * as tonConnect from '@tonconnect/ui-react'
import {Carousel} from 'react-responsive-carousel'
import Marquee from 'react-fast-marquee'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

import * as components from '@/components'
import * as slices from '@/slices'
import * as constants from '@/constants'
import * as lib from '@/lib'
import * as hooks from '@/hooks'

import styles from './Home.module.sass'
import { shuffle } from '@/lib'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [tonConnectUI] = tonConnect.useTonConnectUI();
  const address = tonConnect.useTonAddress(true);
  const formattedWallet = `${address.slice(0, 4)}...${address.slice(-4)}`;

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
        <p className="_w4001722 _tw_nowrap" style={{ whiteSpace: 'nowrap' }}>{priceStr}</p>
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
  return (
    <div className="_f _fCB _w100">
      <div className={classnames('_f _fCC', styles.spins_v2__keys__box)}>
        <p className="_w4001520 _op80 _tw_nowrap">Your keys:</p>
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
          onClick={() => dispatch(slices.homePageSlice.thunks.triggerClaim())}
          className={classesKeysAmountBoxButton}
        >
          Claim
        </button>
      )}
    </div>
  )
}

const SpinsV2BotLanding = ({onClickUseToSpin}) => {
  const amountKeys = reactRedux.useSelector(
    slices.userSlice.selectors.amountKeys,
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
      <img
        src={amountKeys === 0 ? '/assets/gift-box-gray.svg' : '/assets/gift-box-active.svg'}
        alt="Gift Box"
        width={104} height={106}
      />
      <button className={classesButton} onClick={onClick}>
                Use
        <span style={{width: '3px'}}/>
        <components.svg.Key width={21} height={21}/>
        <span style={{width: '3px'}}/>
                to spin
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
  const rewards = reactRedux.useSelector(slices.homePageSlice.selectors.rewards)
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

  const slotsComponentsList = tRewards.map(({ rewardType, amount }, i) => (
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
        {i === ACTIVE_SLOT ? nextSpinReward.amount : amount}
      </p>
    </div>
  ))

  return (
    <div className={classnames('_w100', styles.spinning_v2__rotate)}>
      <div className={classnames('_abs_mid', styles.spinning_v2__top_shadow)}/>
      <div className={classnames('_abs_mid', styles.spinning_v2__bot_shadow)}/>
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
    <div className={classesBox}>
      <div style={{position: 'absolute', top: '-30px'}}>
        <components.animations.EmojiBoomstick style={{width: '86px', height: '86px'}}/>
      </div>
      <h4 className="_g4001722">Your reward</h4>
      <p className="_w7003825" style={{margin: '8px 0 40px'}}>
        <components.svg.Polygon width={30} height={32}/>
        <span> </span>
        {lib.formatPxlInt(nextSpingReward.amount)}
      </p>
      <button className={classesButton} onClick={onClickClaim}>
        Claim
      </button>
    </div>
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
  }, [])
  const onSpinningEnd = React.useCallback(() => {
    dispatch(slices.homePageSlice.thunks.setPhase({phase: 'end'}))
  }, [])
  const onClickClaim = React.useCallback(() => {
    dispatch(slices.homePageSlice.thunks.applyUseKeyToSpinEndVals())
    dispatch(slices.homePageSlice.thunks.setPhase({phase: 'landing'}))
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

const MarqueeFreeDurov = () => {
  const TelegramIcon = () => (
    <svg
      style={{margin: '0 12px'}}
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33582 19.3097C6.89821 19.3097 6.97676 19.0996 6.81967 18.5811L5.54053 13.313L13.4847 7.12012L14.416 7.42836L13.6418 10.0624L7.33582 19.3097Z"
        fill="#C8DAEA"/>
      <path
        d="M7.33594 19.3099C7.67255 19.3099 7.81842 19.1137 8.00917 18.8896C8.30091 18.5393 12.0486 13.9857 12.0486 13.9857L9.74836 13.2852L7.61645 14.9665L7.33594 19.1698V19.3099Z"
        fill="#A9C9DD"/>
      <path
        d="M7.56033 15.0229L12.9911 20.0248C13.6082 20.4451 14.057 20.235 14.2141 19.3102L16.4246 6.308C16.649 5.1731 16.0767 4.66871 15.482 5.00497L2.51108 11.2539C1.62466 11.7022 1.63588 12.3187 2.35399 12.5849L5.6865 13.888L13.395 7.82119C13.7541 7.54097 14.0907 7.69509 13.8214 8.00333L7.56033 15.0229Z"
        fill="url(#paint0_linear_1114_5285)"/>
      <defs>
        <linearGradient id="paint0_linear_1114_5285" x1="10.8133" y1="12.1303" x2="14.5933" y2="16.9738"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#EFF7FC"/>
          <stop offset="1" stopColor="white"/>
        </linearGradient>
      </defs>
    </svg>
  )

  const DogIcon = () => (
    <svg
      style={{margin: '0 14px'}}
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1069_5293)">
        <path
          d="M10.5234 9.7138V8.9043H9.71391V9.7138H8.9044V8.9043H8.0949H7.28539H6.47588V9.7138H5.66638V8.9043H4.85687V9.7138H4.04736V10.5233H4.85687V11.3328V12.1423H5.66638V11.3328H6.47588H7.28539H8.0949H8.9044H9.71391V12.1423H10.5234V11.3328V10.5233H11.3329V9.7138H10.5234Z"
          fill="white"/>
        <path d="M3.23828 12.1425H4.04779V11.3329V10.5234H3.23828V11.3329V12.1425Z" fill="white"/>
        <path d="M11.3335 11.3329V12.1425H12.143V11.3329V10.5234H11.3335V11.3329Z" fill="white"/>
        <path d="M12.1429 13.7617H11.3334V14.5712H10.5239V15.3807H11.3334H12.1429H12.9524V14.5712H12.1429V13.7617Z"
          fill="white"/>
        <path d="M12.9521 12.9531H12.1426V13.7626H12.9521V12.9531Z" fill="white"/>
        <path d="M8.90479 15.3809V16.1904H9.71429H10.5238V15.3809H9.71429H8.90479Z" fill="white"/>
        <path d="M7.28558 16.1904H6.47607V16.9999H7.28558H8.09509H8.90459V16.1904H8.09509H7.28558Z" fill="white"/>
        <path d="M3.23822 12.9531H2.42871V13.7626H3.23822V12.9531Z" fill="white"/>
        <path d="M4.04772 14.5712V13.7617H3.23822V14.5712H2.42871V15.3807H3.23822H4.04772H4.85723V14.5712H4.04772Z"
          fill="white"/>
        <path d="M5.66644 15.3809H4.85693V16.1904H5.66644H6.47595V15.3809H5.66644Z" fill="white"/>
        <path
          d="M14.5711 9.71408V8.90457V8.09507V7.28556H13.7616V6.47605V5.66655V4.85704H12.9521V4.04753V3.23803H12.1426V2.42852H11.3331V1.61901H10.5236V0.809507H9.71408H8.90457V0H8.09507H7.28556H6.47605V0.809507H5.66655H4.85704V1.61901H4.04753V2.42852H3.23803V3.23803H2.42852V4.04753V4.85704H1.61901V5.66655V6.47605V7.28556H0.809507V8.09507V8.90457V9.71408H0V10.5236V11.3331V12.1426V12.9521H0.809507V13.7616V14.5711H1.61901H2.42852V13.7616H1.61901V12.9521H2.42852V12.1426V11.3331V10.5236H3.23803V9.71408V8.90457H4.04753V8.09507H4.85704V7.28556H5.66655H6.47605V8.09507H7.28556H8.09507H8.90457V7.28556H9.71408H10.5236V8.09507H11.3331V8.90457H12.1426V9.71408V10.5236H12.9521V11.3331V12.1426V12.9521H13.7616V13.7616H12.9521V14.5711H13.7616H14.5711V13.7616V12.9521H15.3806V12.1426V11.3331V10.5236V9.71408H14.5711Z"
          fill="white"/>
        <path d="M6.47601 12.9521H7.28552V12.1426H6.47601H5.6665V12.9521H6.47601Z" fill="white"/>
        <path d="M8.09521 12.1426V12.9521H8.90472H9.71423V12.1426H8.90472H8.09521Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_1069_5293">
          <rect width="15.3806" height="16.9996" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )

  return (
    <Marquee
      autoFill={true}
      speed={30}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999999,
        background: 'linear-gradient(to right, #0074B0, #2CA3DF, #0074B0)',
        userSelect: 'none',
      }}
    >
      <div className="_fCC">
        <TelegramIcon/>
        <span className="_w4001316">#HAXCENSOR</span>
        <DogIcon/>
        <span className="_w4001316">#RESISTANCE</span>
        <TelegramIcon/>
        <span className="_w4001316">PRIVACY IS NOT A CRIME</span>
        <DogIcon/>
        <span className="_w4001316">#FREEDUROV</span>
      </div>
    </Marquee>
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
        <MarqueeFreeDurov/>
        <div
          className="_fCC _fCol"
          style={{ height: '100%', paddingBottom: '130px' }}
        >
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
