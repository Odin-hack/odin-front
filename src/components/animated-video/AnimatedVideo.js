import React from 'react'

export const AnimatedVideo = ({
  width,
  height,
  src,
  style: extraStyle = {},
}) => {
  const format = src.match(/\.([a-z0-9]+)(?:$|\?)/)?.[1] || 'mp4'
  return (
    <video
      width={width}
      height={height}
      style={{
        position: 'relative',
        zIndex: -1,
        ...extraStyle,
      }}
      controls={false}
      autoPlay
      loop
      muted
    >
      <source src={src} type={`video/${format}`}/>
      Your browser does not support the video tag.
    </video>
  )
}
