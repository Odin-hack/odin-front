import React from 'react'
import Lottie from 'lottie-react'
import haxIdle from './data/hax-idle.json'
import haxSleeping from './data/hax-sleeping.json'

export const HaxIdle = ({ style }) => <Lottie animationData={haxIdle} loop={true} style={style} />
export const HaxSleeping = ({ style }) => <Lottie animationData={haxSleeping} loop={true} style={style} />
