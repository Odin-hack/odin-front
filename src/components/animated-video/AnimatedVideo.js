import React from 'react'

export const AnimatedVideo = ({
  width,
  height,
  src,
  style: extraStyle = {},
}) => {
  const video = React.useRef(null)
  const format = src.match(/\.([a-z0-9]+)(?:$|\?)/)?.[1] || 'mp4'

  React.useEffect(() => {
    if (!video.current) return
    video.muted = true
    video.controls = false
    video.current.play()
  })

  return (
    <video
      ref={video}
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
      onPlay={(e) => {
        e.target.controls = false
      }}
    >
      <source src={src} type={`video/${format}`}/>
      Your browser does not support the video tag.
    </video>
  )
}
