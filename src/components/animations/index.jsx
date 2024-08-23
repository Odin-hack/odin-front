import React from 'react'
import Lottie from 'lottie-react'
import haxIdle from './data/hax-idle.json'
import haxSleeping from './data/hax-sleeping.json'
import emojiCryingFace from './data/emoji-crying-face.json'
import emojiTrophy from './data/emoji-trophy.json'
import emojiComp1 from './data/emoji-comp-1.json'
import emojiComp2 from './data/emoji-comp-2.json'
import emojiComp3 from './data/emoji-comp-3.json'
import emojiBoomstick from './data/emoji-boomstick.json'

export const HaxIdle = ({ style }) => <Lottie animationData={haxIdle} loop={true} style={style} />
export const HaxSleeping = ({ style }) => <Lottie animationData={haxSleeping} loop={true} style={style} />
export const EmojiCryingFace = ({ style }) => <Lottie animationData={emojiCryingFace} loop={true} style={style} />
export const EmojiTrophy = ({ style }) => <Lottie animationData={emojiTrophy} loop={true} style={style} />
export const EmojiComp1 = ({ style }) => <Lottie animationData={emojiComp1} loop={true} style={style} />
export const EmojiComp2 = ({ style }) => <Lottie animationData={emojiComp2} loop={true} style={style} />
export const EmojiComp3 = ({ style }) => <Lottie animationData={emojiComp3} loop={true} style={style} />
export const EmojiBoomstick = ({ style }) => <Lottie animationData={emojiBoomstick} loop={true} style={style} />
