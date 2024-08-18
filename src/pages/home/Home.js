import React from 'react'
import classnames from 'classnames'
import WebApp from '@twa-dev/sdk'
import * as reactRedux from 'react-redux'
import * as reactCircularProgressbar from 'react-circular-progressbar'
import Modal from 'react-modal'
import * as metamaskSdkReact from '@metamask/sdk-react'
import {Carousel} from 'react-responsive-carousel'

import * as components from 'components'
import * as slices from 'slices'
import * as constants from 'constants'
import * as lib from 'lib'
import * as hooks from 'hooks'

import styles from './Home.module.sass'

const Header = () => {
  const amountToken = reactRedux.useSelector(
    slices.userSlice.selectors.amountToken,
  )
  const metamaskSdk = metamaskSdkReact.useSDK()
  const onWalletClick = React.useCallback(() => {
    const f = async () => {
      try {
        await metamaskSdk.sdk?.disconnect()
        components.toast.showText('Metasmask wallet disconnected')
      } catch (err) {
        console.error(err)
        components.toast.showText('Error on connect metamask wallet')
      }
    }
    f()
  }, [])
  const formatWallet = React.useCallback(
    address => `${address.slice(0, 4)}...${address.slice(-4)}`,
    [],
  )
  const active = (metamaskSdk.account || '').length > 0
  const logoParams = active ? {opacity: 1, blur: 0} : {opacity: 0.5, blur: 8}
  return (
    <div
      className={classnames('container', '_fCC', '_fCol', styles.header__box)}
    >
      <div className={styles.header__logo__box}>
        <components.svg.Logo {...logoParams} />
      </div>
      <div className={classnames('_fCC', styles.header__balance__box)}>
        <components.svg.Polygon addShadow={!active} />
        <p className={classnames('_w7003238', styles.header__balance__text)}>
          {lib.formatPxl(amountToken)}
        </p>
      </div>
      {active ? (
        <button
          className={classnames('_g4001821', styles.header__wallet)}
          onClick={onWalletClick}
        >
          {formatWallet(metamaskSdk.account)}
        </button>
      ) : null}
    </div>
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
    <div style={{width: '16px'}} />
    <div className="_w100">
      <p className="_g4001520" style={{marginBottom: '9px'}}>
        {leftTitle}
      </p>
      <p className="_w4003422">{leftText}</p>
    </div>
    <div style={{width: '16px'}} />
    <div>
      <p className="_g4001520 _ta_end">Received</p>
      <div className="_fCC">
        <components.svg.Polygon width={14} height={14} />
        <div style={{width: '6px'}} />
        <p className="_w4001722 _tw_nowrap">{priceStr}</p>
      </div>
    </div>
  </div>
)

const ModalRewardContent = ({onClickClose}) => {
  // TODO: add fireworks https://t.me/c/2228668200/1/4
  const refBackground = React.useRef(null)
  const refBox = React.useRef(null)
  const homePage = reactRedux.useSelector(
    slices.homePageSlice.selectors.homePage,
  )
  const onClickShareStory = React.useCallback(() => {
    const url = homePage.registerData.storyMediaUrl
    const text = homePage.registerData.storyMediaText
    WebApp.shareToStory(url, {text})
  }, [])
  const onClickCloseInt = React.useCallback(() => {
    const f = async () => {
      refBackground.current.classList.remove(
        styles.modal_reward__background_active,
      )
      refBox.current.classList.remove(styles.modal_reward__box_active)
      await new Promise(r => setTimeout(r, 500))
      onClickClose()
    }
    f()
  }, [])
  React.useEffect(() => {
    refBackground.current.classList.add(styles.modal_reward__background_active)
    refBox.current.classList.add(styles.modal_reward__box_active)
  }, [])
  const classesShareButton = classnames(
    '_fCC _dark7001722',
    styles.wallet_connect__button,
  )
  const rewardAmount =
    (homePage?.registerData?.rewardForBalance ?? 0) +
    (homePage?.registerData?.rewardForTxCount ?? 0)
  return (
    <>
      <div
        className={classnames('_abs_mid', styles.modal_reward__background)}
        ref={refBackground}
      />
      <div
        className={classnames('_abs_mid _fCC _fCol', styles.modal_reward__box)}
        ref={refBox}
      >
        <components.svg.Fox width={94} height={94} />
        <h2 className="_g7003041" style={{margin: '31px auto 15px'}}>
          Your reward:
        </h2>
        <div className="_fCC" style={{marginBottom: '50px'}}>
          <components.svg.Polygon width={50} height={50} />
          <div style={{width: '21px'}} />
          <p className="_w7006041">{rewardAmount}</p>
        </div>
        <ModalRewardCard
          icon={<components.svg.Eth width={11.25} height={18} />}
          leftTitle="ETH balance"
          leftText={homePage?.forRegisterBody?.balance?.slice(0, 9)}
          priceStr={lib.formatPxlInt(
            homePage?.registerData?.rewardForBalance ?? 0,
          )}
        />
        <ModalRewardCard
          icon={<components.svg.Arrows width={28} height={28} />}
          iconBoxStyle={{background: '#A2A2A2'}}
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
            Share in Telegram stories
          </button>
          <button
            className="_g4001824 _op60"
            style={{marginTop: '15px'}}
            onClick={onClickCloseInt}
          >
            Later
          </button>
        </div>
      </div>
    </>
  )
}

const WalletConnect = () => {
  // NOTE: firework implementation https://codepen.io/Bert-Beckwith/pen/QWXNOeq?editors=0010
  // TODO: wallet-connect sdk connect
  // TODO: workout metamask sdk connect
  // TODO: workout solana wallet connect
  // TODO: workout rabby wallet connect
  // TODO: set up way to collect (errors, analytics, logs-disables-in-prod)
  // TODO: how duck app do metamask connect with some url
  const dispatch = reactRedux.useDispatch()
  const metamaskSdk = metamaskSdkReact.useSDK()
  const [connectionTryHappened, setConnectionTryHappened] =
    React.useState(false)
  const onClickConnect = React.useCallback(() => {
    const f = async () => {
      try {
        setConnectionTryHappened(true)
        await metamaskSdk.sdk?.connect()
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
  React.useEffect(() => {
    if (metamaskSdk.account === undefined) {
      return
    }
    if (connectionTryHappened) {
      const address = metamaskSdk.account
      dispatch(slices.homePageSlice.thunks.registerWallet({address}))
    }
  }, [metamaskSdk.account])
  const active = (metamaskSdk.account || '').length > 0
  if (active) {
    return null
  }
  const classesConnectButton = classnames(
    '_fCC _dark7001722',
    styles.wallet_connect__button,
  )
  return (
    <div className="container _w100 _f _fCC _fCol">
      <p className="_g4001722 _f _fCC _ta_center">
        Connect wallet to get extra
        <span style={{width: '3px'}} />
        <components.svg.Polygon width={15} height={15} grey />
        <span style={{width: '3px'}} />
        HAX
      </p>
      <button className={classesConnectButton} onClick={onClickConnect}>
        Connect wallet
        <span style={{width: '10px'}} />
        <components.svg.Metamask width={30} height={30} />
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
    '_d4001520 _op95',
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
        <span style={{width: '5px'}} />
        <div className={classesKeysAmountBox}>
          <components.svg.Key width={14} height={14} grey={amountKeys === 0} />
          <span style={{width: '4px'}} />
          <p className={classesKeysAmountBoxTitle}>{amountKeys}</p>
        </div>
      </div>
      {dur > 0 ? (
        <div className="_f _fCC">
          <p className="_w4001520">{lib.formatMillis(dur)}</p>
          <span style={{width: '5px'}} />
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
      <components.svg.GiftV2 width={104} height={106} grey={amountKeys === 0} />
      <button className={classesButton} onClick={onClick}>
        Use
        <span style={{width: '3px'}} />
        <components.svg.Key width={21} height={21} />
        <span style={{width: '3px'}} />
        to spin
      </button>
    </div>
  )
}

const SpinningV2 = ({onEnd}) => {
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
    key: <components.svg.Key width={16} height={17} />,
    token: <components.svg.Polygon width={16} height={17} />,
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
  const slotsComponentsList = tRewards.map(({rewardType, amount}, i) => {
    const iconComponent = rewardTypeIconMap[rewardType]
    const amountAdjusted = i === 13 ? nextSpingReward.amount : amount
    return (
      <div className="_f _fCC" key={i.toString()}>
        {iconComponent}
        <p style={{marginLeft: '10px'}} className="_w7002025">
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
    <div className="_w100" style={{position: 'relative'}}>
      <div className="_abs_mid" style={stylesPerspectiveAppearanceFix} />
      <div
        className="_abs_mid"
        style={{...stylesPerspectiveAppearanceFix, top: '100%'}}
      />
      <div className={styles.spinning_v2__rotate}>
        <div
          className={classnames('_abs_mid', styles.spinning_v2__top_shadow)}
        />
        <div
          className={classnames('_abs_mid', styles.spinning_v2__bot_shadow)}
        />
        <div className={classnames('_abs_mid', styles.spinning_v2__highligh)} />
        <div className={styles.spinning_v2__ring} ref={refRing}>
          {slotsComponentsList}
        </div>
      </div>
    </div>
  )
}

const SpinningV2End = ({onClickClaim}) => {
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
        <components.svg.Firework width={86} height={86} />
      </div>
      <h4 className="_g4001722">Your reward</h4>
      <p className="_w7003825" style={{margin: '8px 0 40px'}}>
        <components.svg.Polygon width={30} height={32} />
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
    landing: <SpinsV2BotLanding onClickUseToSpin={onClickUseToSpin} />,
    spinning: <SpinningV2 onEnd={onSpinningEnd} />,
    end: <SpinningV2End onClickClaim={onClickClaim} />,
  }
  const phaseComponent = phaseComponentMap[phase]
  return (
    <>
      <components.loading.LoadingFullPage isOpen={isSpinnerOpen} />
      <div className="container _w100">
        <div className={classnames('_f _fCC _fCol', styles.spins_v2__box)}>
          <SpinsV2Header />
          <div className={styles.spins_v2__divider} />
          {phaseComponent}
        </div>
      </div>
    </>
  )
}

const ModalOnboardingContent = ({onClickGotIt, onClickLater}) => {
  const images = [
    {
      urlImage:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/onboarding-modal-image-1.png',
      title: 'Connect your wallet',
      description: `Connect your Metamask wallet on Ethereum to get your HAX token reward. If you don't have Metamask, download it from the Apple Store or Play Market.`,
    },
    {
      urlImage:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/onboarding-modal-image-2.png',
      title: 'Quests',
      description: `Complete tasks and unlock extra HAX rewards.`,
    },
    {
      urlImage:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/onboarding-modal-image-3.png',
      title: 'Friends',
      description: `Earn 10% from your invitees' MetaMask connections and 2.5% from their spins and quests. Claim your rewards every 24 hours.`,
    },
    {
      urlImage:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/onboarding-modal-image-4.png',
      title: 'Leaderboard',
      description: `Track your progress on the leaderboard and compete with other HAX holders for top rewards.`,
    },
    {
      urlImage:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/onboarding-modal-image-5.png',
      title: 'Spin',
      description: `Earn HAX by spinning with a key every 6 hours. Don't forget to log in to claim your key on time!`,
    },
  ]
  const refBackground = React.useRef(null)
  const refT = React.useRef(null)
  const [currentSlice, setCurrentSlide] = React.useState(0)
  React.useEffect(() => {
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        refBackground.current.style.opacity = '1'
        refT.current.style.transform = 'translateY(0)'
      }),
    )
  }, [])
  const onClickGotItInt = React.useCallback(async () => {
    if (currentSlice === images.length - 1) {
      onClickGotIt()
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          refBackground.current.style.opacity = '0'
          refT.current.style.transform = 'translateY(100%)'
        }),
      )
      return
    }
    setCurrentSlide(Math.min(currentSlice + 1, images.length - 1))
  }, [currentSlice])
  const onClickLaterInt = React.useCallback(async () => {
    onClickLater()
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        refBackground.current.style.opacity = '0'
        refT.current.style.transform = 'translateY(100%)'
      }),
    )
    return
  }, [currentSlice])
  const onChange = React.useCallback(
    i => {
      if (currentSlice !== i) {
        setCurrentSlide(i)
      }
    },
    [currentSlice],
  )
  const stylesIndicator = {
    width: 50,
    height: 3,
    borderRadius: 2,
    display: 'inline-block',
    margin: '0 9px',
    position: 'relative',
  }
  const renderIndicator = (onClickHandler, isSelected, i) =>
    isSelected ? (
      <li style={{...stylesIndicator, background: '#BCFF2F'}} />
    ) : (
      <li
        style={{...stylesIndicator, background: '#F4F4F7'}}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={i}
        key={i}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
      />
    )
  // TODO: adjust request to server (try to use axios for all this requests)
  // TODO: test localtunnel
  return (
    <div style={{position: 'relative'}}>
      <div
        ref={refBackground}
        className="_abs_mid"
        style={{background: '#000', opacity: 0, transition: 'all 500ms ease'}}
      />
      <components.container.BodyScroll>
        <div
          className="_fCC _fCol"
          style={{
            height: '100%',
            background: '#000',
            transform: 'translateY(100%)',
            transition: 'all 500ms ease',
          }}
          ref={refT}
        >
          <div style={{position: 'relative'}}>
            <div className="_abs_mid" style={{zIndex: 1}} />
            <Carousel
              statusFormatter={() => null}
              renderArrowPrev={() => null}
              renderArrowNext={() => null}
              renderThumbs={() => null}
              selectedItem={currentSlice}
              onChange={onChange}
              swipeable={false}
              className="modal_learning__carousel_buttons"
              renderIndicator={renderIndicator}
            >
              {images.map(({urlImage}, i) => (
                <div
                  key={i.toString()}
                  className="_fCC"
                  style={{height: '390px', marginBottom: '27px'}}
                >
                  <img src={urlImage} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="_f _fCol" style={{padding: '18px 47px 0'}}>
            <h4 className="_w7002428 _ta_center" style={{marginBottom: '4px'}}>
              Connect your wallet
            </h4>
            <h4 className="_g4001520 _ta_center">
              Connect your Metamask wallet on Ethereum to get your HAX token
              reward. If you don't have Metamask, download it from the Apple
              Store or Play Market.
            </h4>
            <button
              className={classnames('_d7001722', styles.modal_learning__button)}
              style={{margin: '40px auto 15px'}}
              onClick={onClickGotItInt}
            >
              Got it
            </button>
            <button className="_g4001824 _op60" onClick={onClickLaterInt}>
              Later
            </button>
          </div>
        </div>
      </components.container.BodyScroll>
    </div>
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
          style={{height: '100%', paddingBottom: '130px'}}
        >
          <Header />
          <WalletConnect />
          <SpinsV2 />
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
            onClickGotIt={() =>
              dispatch(slices.homePageSlice.thunks.closeOnboardingModal())
            }
            onClickLater={() =>
              dispatch(
                slices.homePageSlice.thunks.closeOnboardingModalForCurrentRun(),
              )
            }
          />
        </Modal>
      </components.container.BodyScroll>
      <components.container.Footer>
        <components.Tabs />
      </components.container.Footer>
    </components.container.Page>
  )
}
