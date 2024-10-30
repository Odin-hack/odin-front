import Lottie from 'lottie-react'
import haxIdle from './data/hax-idle.json'
import haxSleeping from './data/hax-sleeping.json'
import emojiCryingFace from './data/emoji-crying-face.json'
import emojiTrophy from './data/emoji-trophy.json'
import emojiComp1 from './data/emoji-comp-1.json'
import emojiComp2 from './data/emoji-comp-2.json'
import emojiComp3 from './data/emoji-comp-3.json'
import emojiBoomstick from './data/emoji-boomstick.json'
import emojiPumpkin from './data/emoji-pumpkin.json'
import confetti from './data/confetti.json'
import React from 'react'

export const HaxIdle = ({ style }) => <Lottie animationData={haxIdle} loop={true} style={style} />
export const HaxSleeping = ({ style }) => <Lottie animationData={haxSleeping} loop={true} style={style} />
export const EmojiPumpkin = ({ style }) => <Lottie animationData={emojiPumpkin} loop={true} style={style} />
export const EmojiCryingFace = ({ style }) => <Lottie animationData={emojiCryingFace} loop={true} style={style} />
export const EmojiTrophy = ({ style }) => <Lottie animationData={emojiTrophy} loop={true} style={style} />
export const EmojiComp1 = ({ style }) => <Lottie animationData={emojiComp1} loop={true} style={style} />
export const EmojiComp2 = ({ style }) => <Lottie animationData={emojiComp2} loop={true} style={style} />
export const EmojiComp3 = ({ style }) => <Lottie animationData={emojiComp3} loop={true} style={style} />
export const EmojiBoomstick = ({ style }) => <Lottie animationData={emojiBoomstick} loop={true} style={style} />

export const Confetti = ({ delay = 0 }) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const confettiRef = React.useRef(null)

  React.useEffect(() => {
    setTimeout(() => {
      confettiRef.current?.play()
      setIsPlaying(true)
      setTimeout(() => setIsPlaying(false), 3000)
    }, delay)
  }, [])

  return (
    <Lottie
      animationData={confetti}
      loop={false}
      autoplay={false}
      lottieRef={confettiRef}
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        opacity: isPlaying ? 1 : 0,
        transition: '.3s',
        pointerEvents: 'none',
      }}
    />
  )
}
