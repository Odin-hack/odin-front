import React from 'react'
import classnames from 'classnames'
import WebApp from '@twa-dev/sdk'
import * as reactRedux from 'react-redux'
import * as reactCircularProgressbar from 'react-circular-progressbar'
import Modal from 'react-modal'
import * as metamaskSdkReact from '@metamask/sdk-react'
import { Carousel } from 'react-responsive-carousel'
import Lottie from 'lottie-react'

import * as components from 'components'
import * as slices from 'slices'
import * as constants from 'constants'
import * as lib from 'lib'
import * as hooks from 'hooks'

import styles from './Home.module.sass'
import confetti from './confetti.json'

const Header = ({ account, setAccount }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const amountToken = reactRedux.useSelector(
    slices.userSlice.selectors.amountToken,
  )

  const metamaskSdk = metamaskSdkReact.useSDK()
  const formatWallet = React.useCallback(
    address => address && `${address.slice(0, 4)}...${address.slice(-4)}`,
    [],
  )

  const onWalletClick = React.useCallback(() => {
    const f = async () => {
      try {
        await navigator.clipboard.writeText(account)
        components.toast.showText('Wallet address copied to clipboard')
      } catch (err) {
        console.error(err)
        components.toast.showText('Error on connect metamask wallet')
      }
    }
    f()
  }, [])

  const onDisconnect = React.useCallback(() => {
    const f = async () => {
      try {
        await metamaskSdk.sdk?.disconnect()
        setAccount('')
        components.toast.showText('Metasmask wallet disconnected')
      } catch (err) {
        console.error(err)
        components.toast.showText('Error on disconnect metamask wallet')
      }
    }
    f()
  }, [])

  return (
    <div className={classnames('container', '_fCC', '_fCol', styles.header__box)}>
      {
        account ? (
          <components.animations.HaxIdle
            key={account}
            style={{ width: '200px', height: '180px' }}
          />
        ) : (
          <components.animations.HaxSleeping
            key={account}
            style={{ width: '200px', height: '180px' }}
          />
        )
      }
      <div className={classnames('_fCC', styles.header__balance__box)}>
        <components.svg.Polygon addShadow={!account}/>
        <p className={classnames('_w7003238', styles.header__balance__text)}>
          {lib.formatPxlInt(amountToken)} HAX
        </p>
      </div>
      {account ? (
        <>
          <button
            className={classnames('_g4001316', styles.header__wallet)}
            onClick={() => setIsModalOpen(true)}
          >
            <components.svg.Wallet width={16} height={16} color="#999999"/>
            {formatWallet(account)}
            <components.svg.Chevron width={8} height={8} color="#999999"/>
          </button>
          <ModalWallet
            formattedWallet={formatWallet(account)}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onDisconnect={() => {
              onDisconnect()
              setIsModalOpen(false)
            }}
            onWalletClick={onWalletClick}
          />
        </>
      ) : null}
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
      <div className="_fCC" style={{ margin: '30px auto', cursor: 'pointer' }} onClick={onWalletClick}>
        <div style={{ margin: '0 15px 3px 0' }}>
          <components.svg.Wallet
            width={38}
            height={38}
            color="rgba(153,153,153,.2"
          />
        </div>
        <div>
          <div className="_w5001816">{formattedWallet}</div>
          <div style={{ height: '2px' }}/>
          <div className="_g4001416">Connected ETH wallet</div>
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
      <div style={{ height: '10px' }}/>
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
        background: '#171717',
        minWidth: '28px',
        height: '28px',
        borderRadius: '50%',
        ...iconBoxStyle,
      }}
    >
      {icon}
    </div>
    <div style={{ width: '16px' }}/>
    <div className="_w100">
      <p className="_g4001520" style={{ marginBottom: '9px' }}>
        {leftTitle}
      </p>
      <p className="_w4003422">{leftText}</p>
    </div>
    <div style={{ width: '16px' }}/>
    <div>
      <p className="_g4001520 _ta_end">Received</p>
      <div className="_fCC">
        <components.svg.Polygon width={14} height={14}/>
        <div style={{ width: '6px' }}/>
        <p className="_w4001722 _tw_nowrap">{priceStr}</p>
      </div>
    </div>
  </div>
)

const ModalRewardContent = ({ onClickClose }) => {
  const homePage = reactRedux.useSelector(
    slices.homePageSlice.selectors.homePage,
  )
  const onClickShareStory = React.useCallback(() => {
    const url = homePage.registerData.storyMediaUrl
    const text = homePage.registerData.storyMediaText
    WebApp.shareToStory(url, { text })
  }, [])
  const classesShareButton = classnames(
    '_fCC _dark7001722',
    styles.wallet_connect__button,
  )
  const rewardAmount =
    (homePage?.registerData?.rewardForBalance ?? 0) +
    (homePage?.registerData?.rewardForTxCount ?? 0)

  const confettiRef = React.useRef(null)

  React.useEffect(() => {
    confettiRef.current?.play()
  })

  return (
    <div className={classnames('_abs_mid _fCC _fCol', styles.modal_reward__box)}>
      <Lottie
        animationData={confetti}
        loop={false}
        ref={confettiRef}
        style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      />
      <components.animations.HaxIdle style={{ width: '200px', height: '180px' }}/>
      <h2 className="_g7003041" style={{ margin: '34px auto 3px' }}>
        Your reward:
      </h2>
      <div className="_fCC" style={{ marginBottom: '50px' }}>
        <components.svg.Polygon width={46} height={46}/>
        <div style={{ width: '15px' }}/>
        <p className="_w7004641">{rewardAmount} HAX</p>
      </div>
      <ModalRewardCard
        icon={<components.svg.Eth width={11.25} height={18}/>}
        leftTitle="ETH balance"
        leftText={homePage?.forRegisterBody?.balance?.slice(0, 9)}
        priceStr={lib.formatPxlInt(
          homePage?.registerData?.rewardForBalance ?? 0,
        )}
      />
      <ModalRewardCard
        icon={<components.svg.Arrows width={28} height={28}/>}
        iconBoxStyle={{ background: '#A2A2A2' }}
        leftTitle="Transaction count"
        leftText={homePage?.forRegisterBody?.txCount ?? 0}
        priceStr={lib.formatPxlInt(
          homePage?.registerData?.rewardForTxCount ?? 0,
        )}
      />
      <div className="_fCC _fCol" style={{}}>
        <button
          className={classesShareButton}
          style={{ width: '270px' }}
          onClick={onClickShareStory}
        >
          Share to stories
        </button>
        <button
          className="_g4001824 _op60"
          style={{ marginTop: '15px' }}
          onClick={onClickClose}
        >
          Later
        </button>
      </div>
    </div>
  )
}

const WalletConnect = ({ account, setAccount }) => {
  // NOTE: firework implementation https://codepen.io/Bert-Beckwith/pen/QWXNOeq?editors=0010
  // TODO: wallet-connect sdk connect
  // TODO: workout metamask sdk connect
  // TODO: workout solana wallet connect
  // TODO: workout rabby wallet connect
  // TODO: set up way to collect (errors, analytics, logs-disables-in-prod)
  // TODO: how duck app do metamask connect with some url
  const [isOpen, setIsOpen] = React.useState(false)

  const dispatch = reactRedux.useDispatch()
  const metamaskSdk = metamaskSdkReact.useSDK()
  const onClickConnect = React.useCallback(() => {
    const f = async () => {
      try {
        await metamaskSdk.sdk?.connect()
        setAccount(metamaskSdk.account)
        dispatch(slices.homePageSlice.thunks.registerWallet({ address: account }))
        setIsOpen(false)
        components.toast.showText('Metasmask wallet connected')
      } catch (err) {
        console.error(err)
        components.toast.showText(
          'Error on connect metamask wallet. Please contact support',
        )
      }
    }
    f()
  }, [])

  if (account) return null

  const classesConnectButton = classnames(
    '_fCC _dark7001722',
    styles.wallet_connect__button,
  )
  return (
    <div className="container _w100 _f _fCC _fCol">
      <p className="_g4001722 _f _fCC _ta_center">
        Connect wallet to get extra
        <span style={{ padding: '0 3px' }}>⬢</span>
        <span className="_g7001722">HAX</span>
      </p>
      <button className={classesConnectButton} onClick={() => setIsOpen(true)}>
        <components.svg.Wallet width={16} height={16} color="#1A270F"/>
        <span style={{ width: '6px' }}/>
        Connect wallet
      </button>

      <components.CenteredModal
        title="Wallet"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <div style={{ padding: '40px 0' }}>
          <button
            className={classnames(
              '_fCB',
              styles.wallet_connect__modal__button,
              styles.wallet_connect__modal__button__active,
            )}
            onClick={onClickConnect}
          >
            <div className="_fC" style={{ marginLeft: '10px' }}>
              <img src="/assets/metamask-fox.png" height={30} width={30} alt="MetaMask Fox"/>
              <span className="_w7001722" style={{ marginLeft: '10px' }}>Metamask</span>
            </div>

            <div style={{ transform: 'rotate(-90deg)' }}>
              <components.svg.Chevron width={16} height={16} color="#AAAAAA"/>
            </div>
          </button>
          <div style={{ height: '10px' }}/>
          <button
            className={classnames(
              '_fCB',
              styles.wallet_connect__modal__button,
              styles.wallet_connect__modal__button__coming_soon,
            )}
          >
            <div className="_fC" style={{ marginLeft: '10px', opacity: .2 }}>
              <img src="/assets/ton-connect.png" height={30} width={30} alt="TON Connect"/>
              <span className="_g7001722" style={{ marginLeft: '10px' }}>TON Connect</span>
            </div>

            <div className={classnames('_g4001316', styles.wallet_connect__modal__coming_soon_label)}>Coming soon</div>
          </button>
        </div>
      </components.CenteredModal>
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
  const { dur } = hooks.useDurHook(() =>
    reactRedux.useSelector(slices.userSlice.selectors.claimKeyExpireAt),
  )
  const progressClaim = parseInt((dur / (6 * 60 * 60 * 1000)) * 100, 10)
  return (
    <div className="_f _fCB _w100">
      <div className={classnames('_f _fCC', styles.spins_v2__keys__box)}>
        <p className="_w4001520 _op80 _tw_nowrap">Your keys:</p>
        <span style={{ width: '5px' }}/>
        <div className={classesKeysAmountBox}>
          <components.svg.Key width={14} height={14} grey={amountKeys === 0}/>
          <span style={{ width: '4px' }}/>
          <p className={classesKeysAmountBoxTitle}>{amountKeys}</p>
        </div>
      </div>
      {dur > 0 ? (
        <div className="_f _fCC">
          <p className="_w4001520">{lib.formatMillis(dur)}</p>
          <span style={{ width: '5px' }}/>
          <div style={{ width: '23px' }}>
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

const SpinsV2BotLanding = ({ onClickUseToSpin }) => {
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
      <components.svg.GiftV2 width={104} height={106} grey={amountKeys === 0}/>
      <button className={classesButton} onClick={onClick}>
        Use
        <span style={{ width: '3px' }}/>
        <components.svg.Key width={21} height={21}/>
        <span style={{ width: '3px' }}/>
        to spin
      </button>
    </div>
  )
}

const SpinningV2 = ({ onEnd }) => {
  const nextSpingReward = reactRedux.useSelector(
    slices.homePageSlice.selectors.nextSpingReward,
  )
  const rewards = reactRedux.useSelector(slices.homePageSlice.selectors.rewards)
  const refRing = React.useRef(null)
  React.useEffect(() => {
    const REEL_RADIUS = 90
    const children = Array.from(refRing.current.children)
    const slotAngle = 360 / children.length
    for (var i = 0; i < children.length; i++) {
      children[i].classList.add(styles.spinning_v2__slot)
      children[i].style.transform =
        `rotateX(${slotAngle * i}deg) translateZ(${REEL_RADIUS}px)`
    }
    const onInit = () => {
      refRing.current.style.animation = `10s cubic-bezier(.62,.55,0,.99) 0s 1 normal none running spin-6`
      refRing.current.classList.add('spin-6')
    }
    let ended = false
    const f = async () => {
      await new Promise(r => setTimeout(r, 750))
      if (ended) {
        return
      }
      onInit()
      await new Promise(r => setTimeout(r, 11000))
      if (ended) {
        return
      }
      onEnd()
    }
    f()
    return () => {
      ended = true
      onEnd()
    }
  }, [])
  const rewardTypeIconMap = {
    key: <components.svg.Key width={16} height={17}/>,
    token: <components.svg.Polygon width={16} height={17}/>,
  }
  const tRewards = Array(parseInt(20 / rewards.length + 1, 10))
    .fill()
    .map(() => rewards)
    .flat()
    .slice(0, 20)
  // NOTE: source code is here https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  for (let i = tRewards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[tRewards[i], tRewards[j]] = [tRewards[j], tRewards[i]]
  }
  const slotsComponentsList = tRewards.map(({ rewardType, amount }, i) => {
    const iconComponent = rewardTypeIconMap[rewardType]
    const amountAdjusted = i === 13 ? nextSpingReward.amount : amount
    return (
      <div className="_f _fCC" key={i.toString()}>
        {iconComponent}
        <p style={{ marginLeft: '10px' }} className="_w7002025">
          {amountAdjusted}
        </p>
      </div>
    )
  })
  const stylesPerspectiveAppearanceFix = {
    background: '#212121',
    height: '1px',
    top: 0,
    zIndex: 1000,
  }
  return (
    <div className="_w100" style={{ position: 'relative' }}>
      <div className="_abs_mid" style={stylesPerspectiveAppearanceFix}/>
      <div
        className="_abs_mid"
        style={{ ...stylesPerspectiveAppearanceFix, top: '100%' }}
      />
      <div className={styles.spinning_v2__rotate}>
        <div
          className={classnames('_abs_mid', styles.spinning_v2__top_shadow)}
        />
        <div
          className={classnames('_abs_mid', styles.spinning_v2__bot_shadow)}
        />
        <div className={classnames('_abs_mid', styles.spinning_v2__highligh)}/>
        <div className={styles.spinning_v2__ring} ref={refRing}>
          {slotsComponentsList}
        </div>
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
      <div style={{ position: 'absolute', top: '-30px' }}>
        <components.animations.EmojiBoomstick style={{ width: '86px', height: '86px'}}/>
      </div>
      <h4 className="_g4001722">Your reward</h4>
      <p className="_w7003825" style={{ margin: '8px 0 40px' }}>
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
    dispatch(slices.homePageSlice.thunks.setPhase({ phase: 'end' }))
  }, [])
  const onClickClaim = React.useCallback(() => {
    dispatch(slices.homePageSlice.thunks.applyUseKeyToSpinEndVals())
    dispatch(slices.homePageSlice.thunks.setPhase({ phase: 'landing' }))
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

const ModalOnboardingContent = ({ onClickGotIt }) => {
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
        style={{ backgroundColor: buttonColor }}
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
          Array.from({ length: 5 }, (_, i) => (
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
              Connect your Metamask wallet on Ethereum to get your <Word bold={true}>⬢HAX</Word> token reward.
              If you don't have Metamask, download it from the <Word colored={true}>Apple Store</Word> or <Word colored={true}>Play Market</Word>.
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
              Earn <Word colored={true}>10%</Word> from your invitees' MetaMask
              connections and <Word colored={true}>5%</Word> from their spins
              and quests. Claim your rewards every 24 hours.
            </p>
          )}
          buttonText="Cool"
          buttonColor="#fff"
          onButtonClick={nextSlide}
        />
        <Slide
          imgSrc="/assets/onboarding-3.png"
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
          imgSrc="/assets/onboarding-1.png"
          title="Spin"
          content={(
            <p>
              Earn <Word bold={true} colored={true}>⬢HAX</Word> by <Word colored={true}>spinning</Word> with a key every
              6 hours. Don't forget to log in to <Word colored={true}>claim</Word> your <Word color="#EABB1C">🔑 Key</Word> on time!
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

export const Home = () => {
  const metamaskSdk = metamaskSdkReact.useSDK()
  const [account, setAccount] = React.useState('')

  React.useEffect(() => {
    setAccount(metamaskSdk.account)
  }, [])

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
  }, [user.status])
  React.useEffect(() => {
    dispatch(slices.homePageSlice.thunks.initialize())
  }, [])
  if (user.status !== constants.status.success) {
    return null
  }
  return (
    <components.container.Page>
      <components.container.BodyScroll>
        <div
          className="_fCC _fCol"
          style={{ height: '100%', paddingBottom: '130px' }}
        >
          <Header account={account} setAccount={setAccount}/>
          <WalletConnect account={account} setAccount={setAccount}/>
          <SpinsV2/>
        </div>
        <Modal
          isOpen={homePage.isOpenRewardModal}
          className="adjusted-react-modal"
        >
          <ModalRewardContent
            onClickClose={() =>
              dispatch(slices.homePageSlice.thunks.closeRewardsModal())
            }
          />
        </Modal>
        <Modal isOpen={renderOnboardingModal} className="adjusted-react-modal">
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
