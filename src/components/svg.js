import * as React from 'react'
import classnames from 'classnames'

export const Home = ({opacity = 1, width, height}) => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <g clipPath="url(#clip0_10_29)" style={{opacity}}>
      <path
        d="M30 15V12H27V9H24V6H21V3H18V0H15V3H12V6H9V9H6V12H3V15H0V18V21H3V18H6V15H9V12H12V9H15V6H18V9H21V12H24V15H27V18H30V21H33V18V15H30Z"
        fill="white"
      />
      <path
        d="M21 18V15H18V12H15V15H12V18H9V21H12H15H18H21H24V18H21Z"
        fill="white"
      />
      <path d="M6 24H3V27V30H6V33H9H12V30V27V24H9V21H6V24Z" fill="white" />
      <path
        d="M27 21H24V24H21V27V30V33H24H27V30H30V27V24H27V21Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_10_29">
        <rect width="33" height="33" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Leaderboard = ({opacity = 1, width, height}) => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <g clipPath="url(#clip0_10_34)" style={{opacity}}>
      <path
        d="M24 3H21H18V0H15V3H12H9V6H12V9V12H15V9H18V12H21V9V6H24V3Z"
        fill="white"
      />
      <path
        d="M15 15H12V18V21V24V27V30V33H15H18H21V30V27V24V21V18V15H18H15Z"
        fill="white"
      />
      <path d="M3 21H0V24V27V30V33H3H6H9V30V27V24V21H6H3Z" fill="white" />
      <path d="M30 24H27H24V27V30V33H27H30H33V30V27V24H30Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_10_34">
        <rect width="33" height="33" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Tasks = ({opacity = 1, width, height}) => (
  <svg
    width="30"
    height="24"
    viewBox="0 0 30 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <g clipPath="url(#clip0_10_39)" style={{opacity}}>
      <path d="M0 0V3V6H3H6V3V0H3H0Z" fill="white" />
      <path
        d="M27 0H24H21H18H15H12H9V3V6H12H15H18H21H24H27H30V3V0H27Z"
        fill="white"
      />
      <path d="M0 9V12V15H3H6V12V9H3H0Z" fill="white" />
      <path
        d="M24 9H21H18H15H12H9V12V15H12H15H18H21H24H27H30V12V9H27H24Z"
        fill="white"
      />
      <path d="M0 18V21V24H3H6V21V18H3H0Z" fill="white" />
      <path
        d="M24 18H21H18H15H12H9V21V24H12H15H18H21H24H27H30V21V18H27H24Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_10_39">
        <rect width="30" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Friends = ({opacity = 1, width, height}) => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <g clipPath="url(#clip0_10_46)" style={{opacity}}>
      <path
        d="M30 21V24V27H27V30H24H21H18H15H12H9H6V27H3V24V21H0V24V27V30V33H3H6H9H12H15H18H21H24H27H30H33V30V27V24V21H30Z"
        fill="white"
      />
      <path
        d="M12 27H27V18H24V15H21V18H18V15H21V12H24V3H21V0H12V3H9V12H12V15H15V18H12V15H9V18H6V27H12ZM12 9V6H15V3H18V6H21V9H18V12H15V9H12Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_10_46">
        <rect width="33" height="33" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Logo = ({opacity = 1.0, blur = 0}) => (
  <svg
    width="132"
    height="96"
    viewBox="0 0 132 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{opacity, filter: `blur(${blur}px)`}}
  >
    <g clipPath="url(#clip0_10_93)">
      <path d="M36 0H24V12H36V0Z" fill="white" />
      <path d="M108 0H96V12H108V0Z" fill="white" />
      <path
        d="M108 36V24H96V12H84V24H48V12H36V24H24V36H12V48H0V84H12V60H24V84H36V72H96V84H108V60H120V84H132V48H120V36H108ZM96 36V48H84V36H96ZM48 36V48H36V36H48Z"
        fill="white"
      />
      <path d="M12 24H0V36H12V24Z" fill="white" />
      <path d="M132 24H120V36H132V24Z" fill="white" />
      <path d="M60 84H36V96H60V84Z" fill="white" />
      <path d="M96 84H72V96H96V84Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_10_93">
        <rect width="132" height="96" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Polygon = ({addShadow, width, height, className, grey}) => (
  <span
    style={{
      position: 'relative',
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <span
      className="_abs_mid"
      style={
        addShadow
          ? {
              zIndex: 5,
              width: '18px',
              height: '18px',
              boxShadow: '0px 0px 26px rgba(188, 255, 47, 0.4)',
            }
          : {}
      }
    />
    <svg
      width="26"
      height="27"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        ...(width ? {width: `${width}px`} : {}),
        ...(height ? {height: `${height}px`} : {}),
        ...(grey ? {filter: `grayscale(1)`} : {}),
        position: 'relative',
        zIndex: 10,
      }}
      className={classnames(className)}
    >
      <mask
        id="mask0_14_8"
        style={{maskType: 'alpha'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="26"
        height="27"
      >
        <rect width="26" height="27" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_14_8)">
        <path
          d="M2.20312 21.8125C0.890625 21.0938 0.28125 20.3125 0.28125 18.5469V8.45312C0.28125 6.76562 0.890625 5.9375 2.17188 5.25L10.4375 0.71875C12.0938 -0.1875 13.9219 -0.1875 15.5625 0.71875L23.8281 5.25C25.1094 5.9375 25.7188 6.76562 25.7188 8.45312V18.5469C25.7188 20.3125 25.125 21.0938 23.8125 21.8125L15.3438 26.4219C13.75 27.2969 12.2656 27.2969 10.6562 26.4219L2.20312 21.8125Z"
          fill="#BCFF2F"
        />
      </g>
    </svg>
  </span>
)

export const Clock = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_29_46"
      style={{maskType: 'alpha'}}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="17"
      height="17"
    >
      <rect width="17" height="17" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_29_46)">
      <path
        d="M8.50356 16.61C4.05755 16.61 0.469555 13.022 0.469555 8.576C0.469555 4.104 4.05755 0.542 8.50356 0.542C12.9496 0.542 16.5376 4.104 16.5376 8.576C16.5376 13.022 12.9496 16.61 8.50356 16.61ZM8.50356 15.674C12.2736 15.674 15.3416 12.762 15.5756 9.044H8.03555V1.504C4.31756 1.738 1.40555 4.806 1.40555 8.576C1.40555 12.502 4.57755 15.674 8.50356 15.674ZM8.97156 8.108H15.5756C15.3676 4.546 12.5336 1.712 8.97156 1.504V8.108Z"
        fill="#5E5E5E"
      />
    </g>
  </svg>
)

export const Dots = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_29_42"
      style={{maskType: 'alpha'}}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="16"
      height="16"
    >
      <rect width="16" height="16" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_29_42)">
      <circle cx="8" cy="8" r="7.5" stroke="#5E5E5E" />
      <path
        d="M4.13281 9.12305C3.57031 9.12305 3.13086 8.68359 3.13086 8.12109C3.13086 7.55859 3.57031 7.11914 4.13281 7.11914C4.69531 7.11914 5.13477 7.55859 5.13477 8.12109C5.13477 8.68359 4.69531 9.12305 4.13281 9.12305ZM8 9.12305C7.4375 9.12305 6.99805 8.68359 6.99805 8.12109C6.99805 7.55859 7.4375 7.11914 8 7.11914C8.5625 7.11914 9.00195 7.55859 9.00195 8.12109C9.00195 8.68359 8.5625 9.12305 8 9.12305ZM11.8672 9.12305C11.3047 9.12305 10.8652 8.68359 10.8652 8.12109C10.8652 7.55859 11.3047 7.11914 11.8672 7.11914C12.4297 7.11914 12.8691 7.55859 12.8691 8.12109C12.8691 8.68359 12.4297 9.12305 11.8672 9.12305Z"
        fill="#5E5E5E"
      />
    </g>
  </svg>
)

export const Plus = ({className}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 7.49997L12 11.9999M12 11.9999V16.4999M12 11.9999H16.5M12 11.9999H7.5M21 6.37498L21 17.625C21 19.489 19.489 21 17.625 21H6.375C4.51104 21 3 19.489 3 17.625V6.37498C3 4.51103 4.51104 3 6.375 3H17.625C19.489 3 21 4.51103 21 6.37498Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const Copy = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 13.125L4 7C4 4.79086 5.79086 3 8 3L14.125 3M10 21L16.75 21C17.9926 21 19 19.9926 19 18.75L19 9C19 7.75736 17.9926 6.75 16.75 6.75L10 6.75C8.75736 6.75 7.75 7.75736 7.75 9L7.75 18.75C7.75 19.9926 8.75736 21 10 21Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const Copy2 = ({width, height, fill = 'white'}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.39354 3L11.4 3C13.057 3 14.4002 4.34315 14.4002 6C14.4002 6.66274 13.8629 7.2 13.2001 7.2C12.5373 7.2 12 6.66274 12 6C12 5.66863 11.7314 5.4 11.4 5.4H7.43979C6.74789 5.4 6.30114 5.40094 5.96111 5.42872C5.6351 5.45535 5.51423 5.50056 5.4549 5.53079C5.22909 5.64584 5.0455 5.82942 4.93045 6.05521C4.90022 6.11455 4.855 6.23541 4.82836 6.56141C4.80058 6.90141 4.79965 7.34814 4.79965 8.04V10.8C4.79965 11.4151 4.80546 11.5474 4.82271 11.6341C4.9174 12.1101 5.28954 12.4823 5.76559 12.5769C5.8523 12.5942 5.98461 12.6 6.59975 12.6C7.26252 12.6 7.79981 13.1373 7.79981 13.8C7.79981 14.4627 7.26252 15 6.59975 15C6.56585 15 6.5323 15 6.49908 15.0001C6.04222 15.0004 5.64879 15.0007 5.29735 14.9308C3.86919 14.6468 2.75277 13.5304 2.4687 12.1023C2.39879 11.7509 2.3991 11.3575 2.39947 10.9007C2.39949 10.8674 2.39952 10.8339 2.39952 10.8L2.39952 7.99375C2.3995 7.36117 2.39948 6.81546 2.4362 6.36597C2.47497 5.89155 2.56055 5.41969 2.79192 4.96564C3.13708 4.28825 3.68784 3.73752 4.36526 3.39238C4.81934 3.16103 5.29123 3.07545 5.76567 3.03669C6.21518 2.99996 6.76092 2.99998 7.39354 3ZM14.5939 9H16.6065C17.2392 8.99998 17.7849 8.99996 18.2344 9.03669C18.7089 9.07545 19.1807 9.16103 19.6348 9.39238C20.3122 9.73752 20.863 10.2883 21.2082 10.9656C21.4395 11.4197 21.5251 11.8916 21.5639 12.366C21.6006 12.8155 21.6006 13.3612 21.6006 13.9938V16.0062C21.6006 16.6388 21.6006 17.1845 21.5639 17.634C21.5251 18.1085 21.4395 18.5803 21.2082 19.0344C20.863 19.7118 20.3122 20.2625 19.6348 20.6076C19.1807 20.839 18.7089 20.9246 18.2344 20.9633C17.7849 21 17.2391 21 16.6065 21H14.594C13.9613 21 13.4156 21 12.9661 20.9633C12.4916 20.9246 12.0197 20.839 11.5656 20.6076C10.8882 20.2625 10.3375 19.7118 9.99231 19.0344C9.76094 18.5803 9.67536 18.1085 9.63659 17.634C9.59987 17.1846 9.59989 16.6388 9.59991 16.0063V13.9938C9.59989 13.3612 9.59987 12.8155 9.63659 12.366C9.67536 11.8916 9.76094 11.4197 9.99231 10.9656C10.3375 10.2883 10.8882 9.73752 11.5656 9.39238C12.0197 9.16103 12.4916 9.07545 12.9661 9.03669C13.4156 8.99996 13.9613 8.99998 14.5939 9ZM13.1615 11.4287C12.8355 11.4554 12.7146 11.5006 12.6553 11.5308C12.4295 11.6458 12.2459 11.8294 12.1308 12.0552C12.1006 12.1145 12.0554 12.2354 12.0288 12.5614C12.001 12.9014 12 13.3481 12 14.04V15.96C12 16.6519 12.001 17.0986 12.0288 17.4386C12.0554 17.7646 12.1006 17.8855 12.1308 17.9448C12.2459 18.1706 12.4295 18.3542 12.6553 18.4692C12.7146 18.4994 12.8355 18.5447 13.1615 18.5713C13.5015 18.5991 13.9483 18.6 14.6402 18.6H16.5603C17.2522 18.6 17.6989 18.5991 18.039 18.5713C18.365 18.5447 18.4858 18.4994 18.5452 18.4692C18.771 18.3542 18.9546 18.1706 19.0696 17.9448C19.0999 17.8855 19.1451 17.7646 19.1717 17.4386C19.1995 17.0986 19.2004 16.6519 19.2004 15.96V14.04C19.2004 13.3481 19.1995 12.9014 19.1717 12.5614C19.1451 12.2354 19.0999 12.1145 19.0696 12.0552C18.9546 11.8294 18.771 11.6458 18.5452 11.5308C18.4858 11.5006 18.365 11.4554 18.039 11.4287C17.6989 11.4009 17.2522 11.4 16.5603 11.4H14.6402C13.9483 11.4 13.5015 11.4009 13.1615 11.4287Z"
      fill={fill}
    />
  </svg>
)

export const Arrow = ({width, height, className}) => (
  <svg
    width="12"
    height="22"
    viewBox="0 0 12 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
    className={classnames(className)}
  >
    <path
      d="M1 1L11 11L1 21"
      stroke="#5D5D5D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ArrowV2 = ({width, height}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <path
      d="M6 3L11 8L6 13"
      stroke="#707579"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Spinner = ({width, height, className, stroke = '#5D5D5D'}) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
    className={classnames(className)}
  >
    <path
      d="M11 1C12.9778 1 14.9112 1.58649 16.5557 2.6853C18.2002 3.78412 19.4819 5.3459 20.2388 7.17317C20.9957 9.00043 21.1937 11.0111 20.8079 12.9509C20.422 14.8907 19.4696 16.6725 18.0711 18.0711C16.6725 19.4696 14.8907 20.422 12.9509 20.8079C11.0111 21.1937 9.00043 20.9957 7.17317 20.2388C5.3459 19.4819 3.78412 18.2002 2.6853 16.5557C1.58649 14.9112 1 12.9778 1 11"
      stroke={stroke}
      strokeWidth="2"
    />
  </svg>
)

export const SpinnerV2 = ({width, height, className}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
    className={className}
  >
    <rect
      opacity="0.5"
      x="7.2998"
      y="10.5"
      width="1.4"
      height="4.5"
      rx="0.7"
      fill="#707579"
    />
    <rect
      opacity="0.25"
      x="8.99023"
      y="9.97989"
      width="1.4"
      height="4.9"
      rx="0.7"
      transform="rotate(-45 8.99023 9.97989)"
      fill="#707579"
    />
    <rect
      x="1"
      y="8.75"
      width="1.5"
      height="4.5"
      rx="0.75"
      transform="rotate(-90 1 8.75)"
      fill="#707579"
    />
    <rect
      opacity="0.75"
      x="3.54541"
      y="13.4447"
      width="1.4"
      height="4.9"
      rx="0.7"
      transform="rotate(-135 3.54541 13.4447)"
      fill="#707579"
    />
  </svg>
)

export const Ok1 = ({width, height, className, stroke = '#BCFF2F'}) => (
  <svg
    width="19"
    height="14"
    viewBox="0 0 19 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
    className={classnames(className)}
  >
    <path
      d="M18 1L6 13L1 8"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Ok2 = ({width, height, className, stroke = '#000'}) => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
    className={classnames(className)}
  >
    <path
      d="M18 2L6.06747 12L2 8.59127"
      stroke={stroke}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Ok3 = ({width, height}) => (
  <svg
    width="49"
    height="26"
    viewBox="0 0 49 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25 25C31.6274 25 37 19.6274 37 13C37 6.37258 31.6274 1 25 1C18.3726 1 13 6.37258 13 13C13 19.6274 18.3726 25 25 25Z"
      stroke="#707579"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M29.78 7.90214C30.2484 8.19485 30.3907 8.8118 30.098 9.28013L24.473 18.2801C24.3022 18.5534 24.0102 18.7276 23.6886 18.7481C23.3669 18.7686 23.0551 18.6328 22.8511 18.3834L19.4761 14.2584C19.1263 13.8309 19.1893 13.2009 19.6168 12.8512C20.0442 12.5014 20.6743 12.5645 21.024 12.9919L23.516 16.0377L28.402 8.22013C28.6947 7.7518 29.3117 7.60943 29.78 7.90214Z"
      fill="#707579"
    />
  </svg>
)

export const HighlightArrow = ({width, height, flipHorizontally}) => (
  <svg
    width="38"
    height="55"
    viewBox="0 0 38 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
      ...(flipHorizontally ? {transform: 'rotateZ(180deg)'} : {}),
    }}
  >
    <path
      d="M44.25 49.5836L6 27.5L44.25 5.41635L44.25 49.5836Z"
      fill="#BCFF2F"
      stroke="black"
      strokeWidth="6"
    />
  </svg>
)

export const Gift = ({width, height, className, grey}) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
      ...(grey ? {filter: `grayscale(1)`} : {}),
    }}
    className={classnames(className)}
  >
    <g clipPath="url(#clip0_77_410)">
      <mask
        id="mask0_77_410"
        style={{maskType: 'luminance'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_77_410)">
        <path
          d="M452.3 372.829L236.197 475.971L232.065 256L458.511 164.453L452.3 372.829Z"
          fill="url(#paint0_linear_77_410)"
        />
        <g opacity="0.6">
          <path
            d="M308.823 441.072L282.153 235.75L357.697 205.21V417.826L308.823 441.072Z"
            fill="url(#paint1_linear_77_410)"
          />
        </g>
        <path
          d="M452.3 372.829L236.197 475.971L232.065 256L458.511 164.453L452.3 372.829Z"
          stroke="#7F5313"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M458.512 164.453L455.304 272.043"
          stroke="#5B2F0A"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M62.0891 356.453L236.197 475.971L232.065 256L54.7471 156.547L62.0891 356.453Z"
          fill="url(#paint2_linear_77_410)"
        />
        <path
          d="M62.0891 356.453L236.197 475.971L232.065 256L54.7471 156.547L62.0891 356.453Z"
          stroke="#BA7A08"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0.6">
          <path
            d="M235.765 453.012L232.065 256"
            stroke="#FCCF18"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g opacity="0.8">
          <path
            d="M186.683 230.546L173.458 432.902L142.547 411.683V206.454L186.683 230.546Z"
            fill="url(#paint3_linear_77_410)"
          />
        </g>
        <path
          d="M230.37 308.453V231.088L468.676 134.523V208.5L230.37 308.453Z"
          fill="url(#paint4_linear_77_410)"
        />
        <path
          d="M230.37 308.453V231.088L468.676 134.523V208.5L230.37 308.453Z"
          stroke="#7F5313"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0.8">
          <path
            d="M230.37 231.088L468.676 134.524"
            stroke="#FCCF18"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M230.371 308.453L42.3239 192.689L40.0649 119.277L230.371 231.088V308.453Z"
          fill="url(#paint5_linear_77_410)"
        />
        <path
          d="M230.375 231.089V308.449L64.6849 206.459V206.449L42.3249 192.689L40.0649 119.279L61.4449 131.839L230.375 231.089Z"
          fill="url(#paint6_linear_77_410)"
        />
        <g opacity="0.6">
          <path
            d="M40.7599 141.861L230.369 258.759L230.375 231.089L40.0649 119.279L40.7599 141.861Z"
            fill="url(#paint7_radial_77_410)"
          />
        </g>
        <path
          d="M230.371 308.453L42.3239 192.689L40.0649 119.277L230.371 231.088V308.453Z"
          stroke="#BA7A08"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40.0649 119.276L230.371 231.088"
          stroke="#FEFF20"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0.8">
          <path
            d="M230.371 231.088V293.206"
            stroke="#FCCF18"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M40.0659 119.277L271.877 36.03L468.676 134.524L230.371 231.088L40.0659 119.277Z"
          fill="url(#paint8_linear_77_410)"
        />
        <g opacity="0.3">
          <path
            d="M255.98 202.787C255.98 212.38 243.538 220.157 228.19 220.157C212.842 220.157 200.4 212.38 200.4 202.787C200.4 193.194 212.842 185.417 228.19 185.417C243.538 185.417 255.98 193.194 255.98 202.787Z"
            fill="url(#paint9_radial_77_410)"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M276.312 196.2C276.312 208.891 259.852 219.179 239.548 219.179C219.244 219.179 202.784 208.891 202.784 196.2C202.784 183.509 219.244 173.221 239.548 173.221C259.852 173.221 276.312 183.509 276.312 196.2Z"
            fill="url(#paint10_radial_77_410)"
          />
        </g>
        <path
          d="M40.0659 119.277L271.877 36.03L468.676 134.524L230.371 231.088L40.0659 119.277Z"
          stroke="#7F5313"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0.8">
          <path
            d="M450.114 142.046L230.37 231.088"
            stroke="#FCCF18"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M230.37 231.088L58.6777 130.212"
          stroke="#FEFF20"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M167.416 194.1L310.559 156.547L404.914 102.612L167.416 194.1Z"
          fill="url(#paint11_radial_77_410)"
        />
        <path
          d="M312.253 442.852L383.971 409.535L394.855 171.72C395.105 166.255 392.161 161.141 387.31 158.612L197.053 59.418L117.995 88.218L303.761 193.521C309.009 196.496 312.253 202.063 312.253 208.096V442.852Z"
          fill="url(#paint12_linear_77_410)"
        />
        <path
          d="M381.147 171.983L325.429 194.947"
          stroke="#D8414C"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M256 156.411C262.935 160.688 286.267 164.949 302.366 161.313L284.431 145.818L256 156.411Z"
          fill="url(#paint13_linear_77_410)"
        />
        <path
          d="M312.253 442.852L383.971 409.535L394.855 171.72C395.105 166.255 392.161 161.141 387.31 158.612L197.053 59.418L117.995 88.218L303.761 193.521C309.009 196.496 312.253 202.063 312.253 208.096V442.852Z"
          stroke="#6D1805"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M280.375 180.265L303.761 193.522C309.009 196.497 312.253 202.064 312.253 208.097"
          stroke="#A52619"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M394.854 171.72C395.104 166.255 392.161 161.141 387.31 158.612L383.545 156.648"
          stroke="#A52619"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M169.57 436.265L115.359 397.112L96.1651 166.783C95.7151 161.382 98.8711 156.332 103.925 154.375C145.522 138.268 325.713 68.425 336.723 67.324C344.252 66.571 397.214 94.996 402.982 99.324L172.505 189.713C165.709 192.378 161.334 199.041 161.587 206.336L169.57 436.265Z"
          fill="url(#paint14_linear_77_410)"
        />
        <path
          d="M109.504 162.178L153.666 189.264"
          stroke="#FE7A78"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M148.206 146.223C148.206 146.223 144.818 168.97 150.747 175.182C156.676 181.394 221.868 155.761 227.547 156.547C227.547 156.547 251.434 161.312 268.946 151.89L313.228 134.523L266.794 96.688L148.206 146.223Z"
          fill="url(#paint15_linear_77_410)"
        />
        <path
          d="M169.57 436.265L115.359 397.112L96.1651 166.783C95.7151 161.382 98.8711 156.332 103.925 154.375C145.522 138.268 325.713 68.425 336.723 67.324C344.252 66.571 397.214 94.996 402.982 99.324L172.505 189.713C165.709 192.378 161.334 199.041 161.587 206.336L169.57 436.265Z"
          stroke="#7D1E02"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M104.672 268.858L96.1661 166.784C95.7161 161.383 98.8721 156.332 103.926 154.375C122.703 147.104 169.72 128.884 216.669 110.98"
          stroke="#AF2F1B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M243.665 161.805L172.505 189.713C165.709 192.378 161.334 199.041 161.587 206.336L164.76 297.719"
          stroke="#AF2F1B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M329.355 97.352C347.504 95.326 398.916 97.511 404.914 104.03C413.899 113.796 412.771 137.594 362.74 170.198C345.878 181.186 297.647 153.291 280.184 134.986C262.721 116.681 308.017 99.733 329.355 97.352Z"
          fill="url(#paint16_linear_77_410)"
        />
        <path
          d="M258.324 124.924C266.23 143.559 282.669 162.025 308.583 166.905C323.077 169.634 339.547 167.089 344.441 161.313C348.759 156.217 348.394 147.23 317.618 134.242C286.842 121.254 258.324 124.924 258.324 124.924Z"
          fill="url(#paint17_linear_77_410)"
        />
        <path
          d="M258.324 124.924C266.23 143.559 282.669 162.025 308.583 166.905C323.077 169.634 339.547 167.089 344.441 161.313C348.759 156.217 348.394 147.23 317.618 134.242C286.842 121.254 258.324 124.924 258.324 124.924Z"
          stroke="#5E1808"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M361.665 109.679C355.735 141.579 348.955 156.199 344.445 161.309C344.445 161.309 346.985 150.619 317.895 145.819C302.115 143.209 276.185 137.179 260.785 126.689C259.935 126.119 259.115 125.529 258.325 124.919L260.015 85.6791C288.255 80.5991 294.435 54.8491 323.545 43.8891C335.495 39.3891 346.685 41.1091 353.285 44.3791C355.735 45.5891 357.555 47.0091 358.555 48.4091C361.385 52.3591 366.245 85.0191 361.665 109.679Z"
          fill="url(#paint18_linear_77_410)"
        />
        <path
          d="M273.016 108.547C305.194 108.265 308.865 94.9951 335.406 101.239C348.567 104.335 334.558 143.935 328.629 147.888C322.7 151.841 258.323 124.924 258.323 124.924L273.016 108.547Z"
          fill="url(#paint19_linear_77_410)"
        />
        <g opacity="0.6">
          <path
            d="M361.665 109.679C355.735 141.579 348.955 156.199 344.445 161.309C344.445 161.309 346.985 150.619 317.895 145.819C302.115 143.209 273.724 135.414 258.324 124.924C258.324 124.924 291.309 136.415 323.547 129.253C338.885 125.846 347.265 129.819 352.155 98.949C357.055 68.069 353.285 44.379 353.285 44.379C355.735 45.589 357.555 47.009 358.555 48.409C361.385 52.359 366.245 85.019 361.665 109.679Z"
            fill="url(#paint20_linear_77_410)"
          />
        </g>
        <path
          d="M260.018 85.677C288.253 80.595 294.436 54.848 323.547 43.889C339.923 37.724 354.871 43.244 358.559 48.407C361.383 52.36 366.247 85.022 361.665 109.677C355.736 141.583 348.959 156.196 344.441 161.313C344.441 161.313 346.982 150.618 317.9 145.818C301.248 143.07 273.289 136.5 258.324 124.924L260.018 85.677Z"
          stroke="#68140B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M334.316 150.264C330.465 148.586 325.171 147.018 317.9 145.818C301.248 143.07 273.289 136.5 258.324 124.924"
          stroke="#AF2F1B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M260.017 85.677C288.252 80.595 294.436 54.848 323.547 43.889"
          stroke="#AF2F1B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M231.505 131.418C231.505 131.418 199.945 150.918 182.655 156.548C158.375 164.448 136.345 161.908 130.415 153.438C124.485 144.968 122.415 123.798 124.955 92.168C127.505 60.548 137.855 44.448 142.655 40.408C148.595 35.398 164.555 34.368 180.395 43.038C195.355 51.228 211.175 66.478 230.085 86.808L230.995 115.629L231.105 118.978L231.505 131.418Z"
          fill="url(#paint21_linear_77_410)"
        />
        <path
          d="M231.505 131.419C231.505 131.419 199.945 150.919 182.655 156.549C158.375 164.449 136.345 161.909 130.415 153.439C124.485 144.969 122.415 123.799 124.955 92.1691C127.505 60.5491 137.855 44.4491 142.655 40.4091C142.655 40.4091 137.195 77.5491 138.325 101.239C139.455 124.919 151.315 127.749 171.645 126.049C191.975 124.359 223.595 116.509 223.595 116.509L230.995 115.629L231.105 118.979L231.505 131.419Z"
          fill="url(#paint22_linear_77_410)"
        />
        <path
          d="M231.505 131.418C231.505 131.418 199.945 150.918 182.655 156.548C158.375 164.448 136.345 161.908 130.415 153.438C124.485 144.968 122.415 123.798 124.955 92.168C127.505 60.548 137.855 44.448 142.655 40.408C148.595 35.398 164.555 34.368 180.395 43.038C195.355 51.228 211.175 66.478 230.085 86.808L231.105 118.978L231.505 131.418Z"
          stroke="#7D1E02"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M130.415 153.439C124.485 144.969 122.415 123.799 124.955 92.1691C127.505 60.5491 137.855 44.4491 142.655 40.4091"
          stroke="#AF2F1B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M231.505 132.809C231.505 132.809 198.986 152.694 181.171 158.435C141.384 169.662 130.259 155.845 131.712 149.217C132.876 143.935 140.727 143.465 163.128 139.427C185.529 135.399 206.188 125.039 231.093 120.124L231.505 132.809Z"
          fill="url(#paint23_linear_77_410)"
        />
        <path
          d="M231.505 132.809C231.505 132.809 198.986 152.694 181.171 158.435C140.948 169.302 130.259 155.844 131.712 149.216C132.876 143.934 140.727 143.465 163.128 139.427C185.529 135.399 206.188 125.038 231.093 120.123L231.505 132.809Z"
          stroke="#280804"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M181.17 158.435C141.092 169.23 130.258 155.845 131.711 149.217C132.875 143.935 140.727 143.466 163.128 139.428"
          stroke="#5E1808"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M131.711 149.217C132.875 143.935 140.729 143.473 163.128 139.428C182.465 135.936 219.547 121.253 231.105 118.979"
          stroke="#CE3A45"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0.6">
          <path
            d="M219.226 111.878C209.674 112.833 188.544 107.737 175.932 85.902C175.932 85.902 183.273 90.043 195.885 91.925C208.497 93.807 222.991 94.184 224.309 99.455C225.627 104.726 224.873 111.313 219.226 111.878Z"
            fill="url(#paint24_linear_77_410)"
          />
        </g>
        <path
          d="M268.775 120.119C263.685 128.599 267.076 139.749 261.356 144.629C256.496 148.759 228.675 149.769 221.905 142.849C219.005 139.889 215.416 128.129 214.096 116.509C213.606 112.169 213.425 107.859 213.715 104.029C214.985 87.2291 222.945 80.6791 229.525 78.3391C239.825 74.6691 261.005 74.9491 268.775 82.0091C274.985 87.6491 273.855 111.649 268.775 120.119Z"
          fill="url(#paint25_linear_77_410)"
        />
        <path
          d="M268.775 120.119C263.685 128.599 267.075 139.749 261.355 144.629C256.495 148.759 228.675 149.769 221.905 142.849C219.005 139.889 215.415 128.129 214.095 116.509C214.095 116.509 225.195 121.255 241.435 122.665C257.665 124.075 268.775 120.119 268.775 120.119Z"
          fill="url(#paint26_linear_77_410)"
        />
        <path
          d="M225.584 80.2271C225.584 80.2271 218.595 106.676 226.417 113.818C235.076 121.724 251.547 119.136 253.947 120.407C256.347 121.678 247.876 133.536 233.617 133.254C219.358 132.972 217.382 121.677 217.523 106.43C217.664 91.1831 225.584 80.2271 225.584 80.2271Z"
          fill="url(#paint27_linear_77_410)"
        />
        <path
          d="M229.524 78.336C222.944 80.68 214.983 87.23 213.712 104.03C212.647 118.11 217.919 138.788 221.901 142.853C228.677 149.771 256.495 148.761 261.352 144.624C267.077 139.747 263.689 128.595 268.771 120.124C273.853 111.653 274.983 87.653 268.771 82.006C261.006 74.947 239.83 74.665 229.524 78.336Z"
          stroke="#7D1E02"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M268.77 120.124C273.852 111.653 274.982 87.6531 268.77 82.0061C261.005 74.9471 239.829 74.6641 229.523 78.3351C222.943 80.6791 214.983 87.2301 213.712 104.03"
          stroke="#AF2F1B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_77_410"
        x1="344.905"
        y1="415.809"
        x2="344.905"
        y2="205.137"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B8700D" />
        <stop offset="0.32" stopColor="#C0830F" />
        <stop offset="1" stopColor="#C89510" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_77_410"
        x1="322.905"
        y1="280.809"
        x2="331.94"
        y2="432.714"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6C2304" />
        <stop offset="0.38" stopColor="#6C2304" stopOpacity="0.5" />
        <stop offset="1" stopColor="#6C2304" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_77_410"
        x1="70.9051"
        y1="361.809"
        x2="227.328"
        y2="267.503"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DB9818" />
        <stop offset="0.38" stopColor="#DFA019" />
        <stop offset="1" stopColor="#E4A91A" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_77_410"
        x1="163.905"
        y1="272.809"
        x2="163.905"
        y2="428.112"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6C2304" />
        <stop offset="0.38" stopColor="#6C2304" stopOpacity="0.5" />
        <stop offset="1" stopColor="#6C2304" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_77_410"
        x1="230.905"
        y1="300.809"
        x2="457.916"
        y2="147.209"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B8700D" />
        <stop offset="0.32" stopColor="#C0830F" />
        <stop offset="1" stopColor="#C89510" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_77_410"
        x1="41.9049"
        y1="197.809"
        x2="223.74"
        y2="229.433"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DB9818" />
        <stop offset="0.38" stopColor="#DFA019" />
        <stop offset="1" stopColor="#E4A91A" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_77_410"
        x1="41.9049"
        y1="197.809"
        x2="223.743"
        y2="229.433"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DB9818" />
        <stop offset="0.38" stopColor="#DFA019" />
        <stop offset="1" stopColor="#E4A91A" />
      </linearGradient>
      <radialGradient
        id="paint7_radial_77_410"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(133.905 189.809) scale(109.828 109.828)"
      >
        <stop stopColor="#FEFF20" />
        <stop offset="0.63" stopColor="#FEFF20" stopOpacity="0.5" />
        <stop offset="1" stopColor="#FEFF20" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint8_linear_77_410"
        x1="221.905"
        y1="53.809"
        x2="287.411"
        y2="202.891"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C89510" />
        <stop offset="0.61" stopColor="#D29314" />
        <stop offset="1" stopColor="#DB9118" />
      </linearGradient>
      <radialGradient
        id="paint9_radial_77_410"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(227.905 202.803) scale(27.077 27.077)"
      >
        <stop stopColor="#F7F85A" />
        <stop offset="0.71" stopColor="#F7F85A" stopOpacity="0.5" />
        <stop offset="1" stopColor="#F7F85A" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint10_radial_77_410"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(237.905 191.463) scale(37.033 37.033)"
      >
        <stop stopColor="#F7310B" />
        <stop offset="0.67" stopColor="#F7310B" stopOpacity="0.5" />
        <stop offset="1" stopColor="#F7310B" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint11_radial_77_410"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(292.905 148.809) scale(115.748 115.748)"
      >
        <stop stopColor="#652F06" />
        <stop offset="0.74" stopColor="#652F06" stopOpacity="0.5" />
        <stop offset="1" stopColor="#652F06" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint12_linear_77_410"
        x1="301.905"
        y1="256.809"
        x2="282.705"
        y2="203.726"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A21512" />
        <stop offset="0.64" stopColor="#BA1717" />
        <stop offset="1" stopColor="#D31A1D" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_77_410"
        x1="273.905"
        y1="150.809"
        x2="282.376"
        y2="165.209"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#491212" />
        <stop offset="0.56" stopColor="#491212" stopOpacity="0.5" />
        <stop offset="1" stopColor="#491212" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint14_linear_77_410"
        x1="263.905"
        y1="104.809"
        x2="100.423"
        y2="396.197"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D62625" />
        <stop offset="0.25" stopColor="#E53D3D" />
        <stop offset="0.4" stopColor="#F55455" />
        <stop offset="0.52" stopColor="#E53D3D" />
        <stop offset="1" stopColor="#D62625" />
      </linearGradient>
      <linearGradient
        id="paint15_linear_77_410"
        x1="232.905"
        y1="138.809"
        x2="164.011"
        y2="194.714"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#491212" />
        <stop offset="0.56" stopColor="#491212" stopOpacity="0.5" />
        <stop offset="1" stopColor="#491212" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint16_linear_77_410"
        x1="296.659"
        y1="111.344"
        x2="399.949"
        y2="147.804"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#491212" />
        <stop offset="0.78" stopColor="#491212" stopOpacity="0.6" />
        <stop offset="1" stopColor="#491212" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient
        id="paint17_linear_77_410"
        x1="299.905"
        y1="145.809"
        x2="292.867"
        y2="164.198"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#390A07" />
        <stop offset="0.58" stopColor="#781E19" />
        <stop offset="1" stopColor="#B7322B" />
      </linearGradient>
      <linearGradient
        id="paint18_linear_77_410"
        x1="363.905"
        y1="109.809"
        x2="280.893"
        y2="77.6211"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.23" stopColor="#D62625" />
        <stop offset="0.38" stopColor="#E53D3D" />
        <stop offset="1" stopColor="#F55455" />
      </linearGradient>
      <linearGradient
        id="paint19_linear_77_410"
        x1="264.905"
        y1="122.809"
        x2="338.332"
        y2="124.898"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D62625" />
        <stop offset="0.39" stopColor="#D62625" stopOpacity="0.5" />
        <stop offset="0.8" stopColor="#D62625" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint20_linear_77_410"
        x1="334.905"
        y1="42.809"
        x2="301.023"
        y2="147.844"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F97F73" />
        <stop offset="0.56" stopColor="#F97F73" stopOpacity="0.5" />
        <stop offset="1" stopColor="#F97F73" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint21_linear_77_410"
        x1="217.905"
        y1="107.808"
        x2="130.658"
        y2="95.95"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D62625" />
        <stop offset="0.59" stopColor="#E53D3D" />
        <stop offset="0.8" stopColor="#F55455" />
      </linearGradient>
      <linearGradient
        id="paint22_linear_77_410"
        x1="127.905"
        y1="64.8091"
        x2="180.611"
        y2="135.962"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F97F73" />
        <stop offset="0.56" stopColor="#F97F73" stopOpacity="0.5" />
        <stop offset="1" stopColor="#F97F73" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint23_linear_77_410"
        x1="212.905"
        y1="137.809"
        x2="133.787"
        y2="157.976"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#390A07" />
        <stop offset="0.43" stopColor="#390A07" stopOpacity="0.8" />
        <stop offset="1" stopColor="#390A07" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient
        id="paint24_linear_77_410"
        x1="212.905"
        y1="104.808"
        x2="183.541"
        y2="83.35"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F97F73" />
        <stop offset="0.26" stopColor="#F97F73" stopOpacity="0.5" />
        <stop offset="1" stopColor="#F97F73" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint25_linear_77_410"
        x1="265.905"
        y1="118.809"
        x2="219.036"
        y2="105.821"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D62625" />
        <stop offset="0.29" stopColor="#E53D3D" />
        <stop offset="1" stopColor="#F55455" />
      </linearGradient>
      <linearGradient
        id="paint26_linear_77_410"
        x1="240.905"
        y1="125.809"
        x2="240.34"
        y2="143.879"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#99130F" stopOpacity="0" />
        <stop offset="0.56" stopColor="#99130F" stopOpacity="0.5" />
        <stop offset="1" stopColor="#99130F" />
      </linearGradient>
      <linearGradient
        id="paint27_linear_77_410"
        x1="221.905"
        y1="82.8091"
        x2="240.54"
        y2="135.327"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F97F73" />
        <stop offset="0.63" stopColor="#F97F73" stopOpacity="0.5" />
        <stop offset="1" stopColor="#F97F73" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_77_410">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const GiftV2 = ({width, height, grey}) => (
  <svg
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
      ...(grey ? {filter: `grayscale(1)`} : {}),
    }}
    width="313"
    height="284"
    viewBox="0 0 313 284"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_144_540"
      style={{maskType: 'alpha'}}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="313"
      height="284"
    >
      <rect width="313" height="284" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_144_540)">
      <mask
        id="mask1_144_540"
        style={{maskType: 'luminance'}}
        maskUnits="userSpaceOnUse"
        x="-101"
        y="-216"
        width="512"
        height="512"
      >
        <path d="M411 -216H-101V296H411V-216Z" fill="white" />
      </mask>
      <g mask="url(#mask1_144_540)">
        <path
          d="M157.445 152.961C138.187 152.961 14.1108 98.157 14.1108 98.157C14.1108 98.157 14.0718 207.803 19.8468 220.81C25.4288 233.383 146.513 280.847 157.166 280.651C199.376 279.876 286.696 236.487 295.043 220.81C299.593 212.265 300.779 98.157 300.779 98.157C300.779 98.157 176.703 152.961 157.445 152.961Z"
          fill="url(#paint0_linear_144_540)"
        />
        <path
          d="M157.445 151.884C138.187 151.884 14.111 97.079 14.111 97.079C14.111 97.079 13.322 207.086 19.847 219.733C34.228 247.607 137.276 279.334 157.166 279.573"
          fill="#9CDE1D"
        />
        <path
          d="M156.421 158.519C155.326 195.43 156.591 247.722 156.44 278.254C156.416 283.069 159.604 282.939 159.714 278.461C160.146 260.894 160.881 178.632 160.037 158.943C159.645 149.787 156.638 151.205 156.421 158.519Z"
          fill="#E5FFBF"
        />
        <path
          d="M157.445 152.962C138.187 152.962 14.111 98.158 14.111 98.158C14.111 98.158 12.969 202.061 19.847 220.811C26.725 239.561 134.661 279.799 157.166 280.651C179.671 281.503 288.746 239.845 295.043 220.811C301.34 201.777 300.779 98.158 300.779 98.158C300.779 98.158 176.703 152.962 157.445 152.962Z"
          stroke="#1A8B00"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M197.268 226.975C196.056 230.916 195.775 231.291 190.945 233.763C186.287 236.147 184.536 238.613 187.972 240.685C191.408 242.757 191.637 241.712 196.629 238.704C204.537 233.939 204.009 235.72 198.678 240.549C191.664 246.902 192.056 248.342 191.144 252.586C190.087 257.505 191.497 257.986 196.387 252.732C201.277 247.478 200.961 247.872 205.022 249.14C208.943 250.365 211.763 250.384 210.177 242.839C208.851 236.532 210.179 236.318 213.085 231.794C216.405 226.625 218.063 223.709 210.772 225.9C205.441 227.502 205.903 227.068 204.405 223.225C202.035 217.145 200.44 216.66 197.268 226.975Z"
          fill="#98D425"
        />
        <path
          d="M179.63 178.866C178.418 182.807 178.137 183.182 173.307 185.654C168.649 188.038 166.898 190.505 170.334 192.577C173.77 194.649 174 193.604 178.992 190.596C186.9 185.832 186.371 187.611 181.04 192.44C174.026 198.793 174.418 200.233 173.506 204.477C172.449 209.396 173.859 209.877 178.749 204.623C183.639 199.369 183.323 199.763 187.384 201.031C191.305 202.256 194.125 202.276 192.539 194.731C191.213 188.424 192.541 188.21 195.447 183.686C198.767 178.516 200.426 175.6 193.134 177.791C187.803 179.393 188.266 178.959 186.768 175.116C184.398 169.036 182.802 168.551 179.63 178.866Z"
          fill="#98D425"
        />
        <path
          d="M276.596 139.315C275.384 143.256 275.103 143.631 270.273 146.103C265.615 148.487 263.864 150.953 267.3 153.025C270.736 155.097 270.965 154.052 275.957 151.044C283.865 146.279 283.337 148.06 278.006 152.889C270.992 159.242 271.384 160.682 270.472 164.926C269.415 169.845 270.825 170.326 275.715 165.072C280.605 159.818 280.289 160.212 284.35 161.48C288.271 162.705 291.091 162.724 289.505 155.179C288.179 148.872 289.506 148.658 292.412 144.134C295.732 138.965 297.392 136.049 290.1 138.24C284.769 139.842 285.231 139.408 283.733 135.565C281.363 129.485 279.768 129 276.596 139.315Z"
          fill="#98D425"
        />
        <path
          d="M265.588 205.007C264.376 208.948 264.095 209.323 259.265 211.795C254.607 214.179 252.855 216.645 256.292 218.717C259.729 220.789 259.957 219.745 264.949 216.737C272.857 211.973 272.329 213.752 266.998 218.581C259.984 224.934 260.376 226.374 259.464 230.618C258.407 235.537 259.817 236.018 264.707 230.764C269.597 225.51 269.281 225.904 273.342 227.172C277.263 228.397 280.083 228.416 278.497 220.871C277.171 214.564 278.499 214.35 281.405 209.826C284.725 204.657 286.384 201.741 279.092 203.932C273.761 205.534 274.224 205.1 272.726 201.257C270.356 195.177 268.76 194.692 265.588 205.007Z"
          fill="#98D425"
        />
        <path
          d="M134.779 241.357C133.552 244.328 133.267 244.473 128.376 242.914C123.659 241.411 121.886 242.435 125.366 247.423C128.846 252.411 129.077 251.544 134.132 252.697C142.14 254.523 141.604 255.881 136.206 256.288C129.104 256.823 129.502 258.611 128.578 262.141C127.507 266.233 128.935 267.905 133.887 266.698C138.839 265.491 138.518 265.623 142.63 270.322C146.6 274.859 149.456 277.25 147.85 268.277C146.507 260.776 147.852 261.676 150.794 259.538C154.156 257.095 155.835 255.538 148.452 251.625C143.054 248.764 143.523 248.713 142.006 243.562C139.606 235.413 137.991 233.58 134.779 241.357Z"
          fill="#C5FF39"
        />
        <path
          d="M104.577 194.853C103.35 197.824 103.065 197.968 98.1736 196.409C93.4566 194.906 91.6836 195.931 95.1636 200.919C98.6436 205.907 98.8746 205.04 103.93 206.193C111.938 208.019 111.403 209.377 106.005 209.784C98.9026 210.319 99.2996 212.107 98.3756 215.637C97.3046 219.729 98.7326 221.4 103.685 220.193C108.637 218.986 108.317 219.119 112.429 223.818C116.399 228.355 119.254 230.746 117.648 221.773C116.305 214.272 117.651 215.172 120.593 213.034C123.955 210.591 125.633 209.033 118.25 205.12C112.852 202.259 113.321 202.209 111.804 197.058C109.404 188.909 107.789 187.076 104.577 194.853Z"
          fill="#C5FF39"
        />
        <path
          d="M44.812 196.003C43.585 198.974 43.3 199.118 38.409 197.559C33.692 196.056 31.919 197.08 35.399 202.068C38.879 207.056 39.11 206.19 44.165 207.343C52.173 209.169 51.637 210.526 46.239 210.933C39.137 211.468 39.535 213.256 38.611 216.786C37.54 220.878 38.968 222.55 43.92 221.343C48.872 220.136 48.551 220.268 52.663 224.967C56.633 229.504 59.489 231.895 57.883 222.922C56.54 215.421 57.885 216.321 60.827 214.183C64.189 211.74 65.868 210.183 58.485 206.27C53.087 203.409 53.556 203.359 52.039 198.208C49.639 190.059 48.024 188.226 44.812 196.003Z"
          fill="#C5FF39"
        />
        <path
          d="M29.9508 135.701C28.7238 138.672 28.4398 138.816 23.5488 137.257C18.8318 135.754 17.0578 136.779 20.5378 141.767C24.0178 146.755 24.2488 145.888 29.3038 147.041C37.3118 148.867 36.7768 150.225 31.3788 150.632C24.2768 151.167 24.6738 152.955 23.7498 156.485C22.6788 160.577 24.1068 162.248 29.0588 161.041C34.0108 159.834 33.6908 159.966 37.8028 164.665C41.7728 169.202 44.6278 171.593 43.0218 162.62C41.6788 155.119 43.0248 156.02 45.9668 153.882C49.3288 151.439 51.0078 149.881 43.6248 145.968C38.2268 143.107 38.6948 143.057 37.1778 137.906C34.7778 129.757 33.1628 127.924 29.9508 135.701Z"
          fill="#C5FF39"
        />
        <path
          d="M133.389 161.176C132.162 164.147 131.878 164.291 126.987 162.732C122.27 161.229 120.496 162.253 123.976 167.241C127.456 172.229 127.687 171.363 132.742 172.516C140.75 174.342 140.215 175.7 134.817 176.107C127.715 176.642 128.112 178.43 127.188 181.96C126.117 186.052 127.545 187.723 132.497 186.516C137.449 185.309 137.129 185.441 141.241 190.14C145.211 194.677 148.067 197.068 146.461 188.095C145.118 180.594 146.463 181.495 149.405 179.357C152.767 176.914 154.446 175.356 147.063 171.443C141.665 168.582 142.133 168.532 140.616 163.381C138.216 155.232 136.601 153.399 133.389 161.176Z"
          fill="#C5FF39"
        />
        <g opacity="0.5">
          <path
            d="M155.867 184.15C157.193 184.602 158.94 184.842 160.145 184.541C161.058 184.313 161.448 167.757 159.512 166.78C149.991 161.972 24.6161 111.689 16.1791 108.522C14.3111 107.821 13.6801 122.49 15.5161 123.047C29.8901 127.409 49.4291 134.854 69.9661 143.465C68.3721 164.884 67.1391 249.531 68.4871 250.528C82.8591 261.164 105.005 265.956 113.201 267.643C112.984 246.075 115.009 192.195 116.817 167.246C132.867 174.817 146.225 180.491 155.867 184.15Z"
            fill="#16A411"
          />
        </g>
        <path
          d="M155.649 119.65C178.25 111.001 301.183 53.36 305.649 60.218C310.115 67.076 307.882 102.509 305.649 107.653C303.416 112.797 171.68 167.365 158.841 167.365C146.002 167.365 140 125.639 155.649 119.65Z"
          fill="url(#paint1_linear_144_540)"
        />
        <path
          d="M8.73318 58.044C9.18818 55.743 135.909 2.08101 157.399 2.64901C175.066 3.11601 302.95 54.723 305.649 60.218C308.56 66.146 164.878 122.842 157.504 122.842C156.629 122.842 160.009 169.09 157.47 168.123C114.5 151.749 45.5622 123.438 7.37118 103.263C5.28817 102.163 7.53218 64.125 8.73318 58.044Z"
          fill="#9CDE1D"
        />
        <path
          d="M306.597 64.714C306.597 64.714 312.369 56.198 297.196 63.177C243.07 88.073 167.392 120.125 159.211 119.989C151.03 119.853 119.234 106.873 80.494 89.271C60.712 80.283 17.521 62.042 17.167 59.75C16.48 55.308 65.357 30.106 159.486 3.83203C124.296 4.10003 21.293 41.537 8.51397 57.419C3.60296 62.421 -1.94503 86.137 9.32397 104.429C9.54996 104.796 5.92696 65.303 13.352 64.971C25.173 64.443 59.934 83.727 81.699 94.172C108.094 106.839 152.904 120.843 155.199 125.569C157.494 130.295 157.258 149.522 157.559 166.722C157.592 168.579 161.102 168.312 161.104 166.58C161.121 149.332 159.618 129.843 162.782 124.871C165.946 119.899 306.597 64.714 306.597 64.714Z"
          fill="#E5FFBF"
        />
        <path
          d="M9.79999 55.645C19.675 45.396 127.774 3.34599 157.399 2.64899C174.15 2.25499 298.796 49.602 305.649 60.217C312.187 70.344 309.415 100.114 305.649 107.652C301.225 116.507 181.634 167.813 158.653 167.333C135.672 166.853 10.694 109.394 6.72798 101.906C2.762 94.418 -0.0750093 65.894 9.79999 55.645Z"
          stroke="#1A8B00"
          strokeWidth="5"
          strokeMiterlimit="10"
        />
        <path
          d="M40.7319 52.1267C41.8409 54.5297 41.7289 54.7897 37.0859 57.0597C32.6079 59.2487 32.0009 60.9387 37.9279 61.4397C43.8549 61.9407 43.4389 61.3197 47.9279 58.7237C55.0389 54.6107 55.5649 55.6937 51.8789 59.3587C47.0299 64.1807 48.5299 64.9027 50.2399 67.4167C52.2219 70.3317 54.4009 70.3327 57.2179 66.5157C60.0349 62.6987 59.8889 62.9737 66.0849 62.9137C72.0679 62.8557 75.7799 62.3387 68.5319 58.4697C62.4729 55.2347 64.0679 54.8677 64.7809 51.8247C65.5959 48.3477 65.7739 46.4277 57.7099 49.0037C51.8139 50.8867 52.1229 50.5597 47.5259 48.7187C40.2529 45.8057 37.8279 45.8367 40.7319 52.1267Z"
          fill="#C5FF39"
        />
        <path
          d="M158.22 91.1146C159.422 93.9036 159.302 94.2056 154.27 96.8396C149.417 99.3796 148.757 101.341 155.181 101.922C161.605 102.503 161.154 101.784 166.019 98.7706C173.725 93.9986 174.295 95.2546 170.301 99.5076C165.046 105.104 166.672 105.941 168.525 108.859C170.673 112.241 173.034 112.243 176.087 107.813C179.14 103.383 178.982 103.703 185.697 103.633C192.181 103.565 196.204 102.965 188.349 98.4746C181.782 94.7216 183.511 94.2956 184.284 90.7646C185.167 86.7306 185.36 84.5016 176.62 87.4906C170.23 89.6756 170.566 89.2976 165.584 87.1606C157.701 83.7796 155.073 83.8156 158.22 91.1146Z"
          fill="#C5FF39"
        />
        <path
          d="M238.176 50.9817C239.378 53.7707 239.257 54.0717 234.225 56.7057C229.372 59.2457 228.713 61.2077 235.137 61.7887C241.561 62.3697 241.11 61.6497 245.975 58.6367C253.681 53.8647 254.25 55.1207 250.256 59.3737C245.001 64.9697 246.628 65.8066 248.481 68.7246C250.629 72.1066 252.99 72.1087 256.043 67.6787C259.096 63.2487 258.938 63.5697 265.653 63.4996C272.137 63.4317 276.16 62.8317 268.305 58.3417C261.738 54.5887 263.467 54.1627 264.24 50.6317C265.123 46.5977 265.316 44.3687 256.576 47.3577C250.186 49.5427 250.521 49.1637 245.539 47.0267C237.656 43.6457 235.029 43.6827 238.176 50.9817Z"
          fill="#C5FF39"
        />
        <path
          d="M164.341 17.3576C165.301 19.5846 165.205 19.8256 161.187 21.9286C157.312 23.9566 156.786 25.5226 161.915 25.9866C167.044 26.4506 166.683 25.8766 170.568 23.4706C176.722 19.6596 177.176 20.6626 173.987 24.0586C169.791 28.5266 171.089 29.1956 172.569 31.5256C174.284 34.2266 176.17 34.2276 178.608 30.6906C181.046 27.1536 180.919 27.4096 186.281 27.3536C191.458 27.2996 194.67 26.8196 188.398 23.2346C183.155 20.2376 184.536 19.8976 185.153 17.0786C185.858 13.8576 186.012 12.0766 179.033 14.4636C173.931 16.2086 174.199 15.9066 170.221 14.2006C163.927 11.5006 161.828 11.5296 164.341 17.3576Z"
          fill="#C5FF39"
        />
        <path
          d="M180.626 130.314C179.339 134.499 179.041 134.899 173.911 137.524C168.963 140.056 167.103 142.675 170.753 144.876C174.403 147.077 174.646 145.967 179.948 142.772C188.347 137.712 187.786 139.602 182.124 144.731C174.675 151.479 175.091 153.009 174.122 157.516C172.999 162.741 174.496 163.251 179.69 157.671C184.884 152.091 184.549 152.509 188.862 153.856C193.027 155.157 196.022 155.177 194.337 147.164C192.929 140.465 194.339 140.238 197.425 135.433C200.951 129.943 202.712 126.846 194.968 129.173C189.306 130.874 189.798 130.413 188.207 126.332C185.69 119.875 183.995 119.359 180.626 130.314Z"
          fill="#98D425"
        />
        <path
          d="M281.077 82.17C279.79 86.355 279.491 86.754 274.361 89.379C269.413 91.911 267.554 94.531 271.204 96.732C274.854 98.933 275.097 97.823 280.399 94.628C288.798 89.568 288.237 91.458 282.575 96.587C275.126 103.335 275.542 104.865 274.573 109.372C273.45 114.597 274.947 115.107 280.141 109.527C285.335 103.947 285 104.364 289.313 105.711C293.478 107.012 296.473 107.033 294.788 99.02C293.38 92.321 294.79 92.094 297.876 87.289C301.402 81.799 303.163 78.702 295.419 81.029C289.757 82.73 290.249 82.268 288.658 78.187C286.141 71.73 284.446 71.215 281.077 82.17Z"
          fill="#98D425"
        />
        <path
          d="M121.756 122.932C120.44 126.117 120.135 126.272 114.892 124.601C109.835 122.989 107.933 124.087 111.664 129.435C115.395 134.783 115.642 133.854 121.062 135.09C129.647 137.048 129.073 138.503 123.286 138.939C115.672 139.513 116.098 141.43 115.108 145.215C113.96 149.602 115.49 151.394 120.799 150.1C126.108 148.806 125.766 148.947 130.174 153.985C134.431 158.85 137.492 161.414 135.77 151.793C134.331 143.751 135.772 144.716 138.926 142.424C142.53 139.805 144.331 138.135 136.415 133.94C130.628 130.873 131.13 130.818 129.504 125.296C126.931 116.559 125.2 114.594 121.756 122.932Z"
          fill="#C5FF39"
        />
        <path
          d="M25.949 75.3211C24.678 78.4041 24.385 78.5541 19.321 76.9361C14.437 75.3761 12.601 76.4391 16.204 81.6161C19.807 86.7931 20.046 85.8931 25.28 87.0891C33.571 88.9841 33.016 90.3931 27.427 90.8151C20.074 91.3701 20.485 93.2261 19.529 96.8891C18.42 101.135 19.899 102.871 25.026 101.618C30.153 100.365 29.822 100.503 34.079 105.379C38.19 110.088 41.146 112.569 39.483 103.257C38.093 95.4721 39.485 96.4071 42.531 94.1881C46.012 91.6531 47.75 90.0371 40.106 85.9761C34.517 83.0071 35.002 82.9541 33.432 77.6091C30.947 69.1521 29.275 67.2501 25.949 75.3211Z"
          fill="#C5FF39"
        />
        <path
          d="M60.3361 250.767C58.2691 248.166 55.4701 87.29 57.5771 81.296C59.6841 75.302 205.588 19.512 212.031 17.435C217.231 15.759 271.2 33.975 262.772 36.116C254.344 38.257 108.669 98.85 106.562 103.559C104.455 108.268 107.566 263.28 106.651 269.227C106.124 272.652 69.5631 262.375 60.3361 250.767Z"
          fill="url(#paint2_linear_144_540)"
        />
        <path
          d="M60.3361 250.767C58.2691 248.166 55.4701 87.29 57.5771 81.296C59.6841 75.302 205.588 19.512 212.031 17.435C217.231 15.759 271.2 33.975 262.772 36.116C254.344 38.257 108.669 98.85 106.562 103.559C104.455 108.268 107.566 263.28 106.651 269.227C106.124 272.652 69.5631 262.375 60.3361 250.767Z"
          stroke="#E7980C"
          strokeWidth="5"
        />
        <path
          d="M62.2961 81.563C64.3741 81.782 101.433 98.415 103.773 99.738C106.281 101.156 104.25 104 102.651 103.44C98.9051 102.129 62.4681 86.803 60.1381 84.302C58.7501 82.812 60.2181 81.344 62.2961 81.563Z"
          fill="#FFF5CC"
        />
        <path
          d="M61.4292 231C61.4292 231 63.3452 240.834 69.9572 245.206C76.4682 249.511 85.4132 254.069 92.0792 255.279C99.0162 256.538 101.461 255.687 103.45 254.904C104.563 254.466 103.638 266.9 103.638 266.9C103.638 266.9 89.8752 265.25 78.9972 260.066C71.7392 256.607 62.6552 251.566 62.2342 248.031C61.8132 244.496 61.4292 231 61.4292 231Z"
          fill="#F7CC10"
        />
        <path
          d="M259.93 250.767C261.997 248.166 264.796 87.29 262.689 81.296C260.582 75.302 115.428 14.762 108.985 12.685C103.785 11.009 49.816 29.225 58.244 31.366C66.672 33.507 211.597 98.85 213.704 103.559C215.811 108.268 212.7 263.28 213.615 269.227C214.142 272.652 250.703 262.375 259.93 250.767Z"
          fill="url(#paint3_linear_144_540)"
        />
        <path
          d="M259.93 250.767C261.997 248.166 264.796 87.29 262.689 81.296C260.582 75.302 115.428 14.762 108.985 12.685C103.785 11.009 49.816 29.225 58.244 31.366C66.672 33.507 211.597 98.85 213.704 103.559C215.811 108.268 212.7 263.28 213.615 269.227C214.142 272.652 250.703 262.375 259.93 250.767Z"
          stroke="#E7980C"
          strokeWidth="5"
        />
        <path
          d="M257.97 81.563C255.892 81.782 218.833 98.415 216.493 99.738C213.985 101.156 216.016 104 217.615 103.44C221.361 102.129 257.798 86.803 260.128 84.302C261.516 82.812 260.048 81.344 257.97 81.563Z"
          fill="#FFF5CC"
        />
        <path
          d="M258.837 231C258.837 231 256.921 240.834 250.309 245.206C243.798 249.511 234.853 254.069 228.187 255.279C221.25 256.538 218.805 255.687 216.816 254.904C215.703 254.466 216.628 266.9 216.628 266.9C216.628 266.9 230.391 265.25 241.269 260.066C248.527 256.607 257.611 251.566 258.032 248.031C258.453 244.496 258.837 231 258.837 231Z"
          fill="#F7CC10"
        />
        <path
          d="M159.596 65.473C159.596 65.473 177.663 76.214 186.427 87.31C201.395 106.261 208.917 134.985 208.917 134.985C208.917 134.985 217.666 120.306 222.728 108.74C233.753 110.415 243.464 114.521 243.464 114.521C243.464 114.521 236.132 90.383 217.846 75.282C202.841 62.89 188.924 58.388 183.678 57.934C173.168 57.025 159.596 65.473 159.596 65.473Z"
          fill="url(#paint4_linear_144_540)"
        />
        <path
          d="M159.596 65.473C159.596 65.473 177.663 76.214 186.427 87.31C201.395 106.261 208.917 134.985 208.917 134.985C208.917 134.985 217.666 120.306 222.728 108.74C233.753 110.415 243.464 114.521 243.464 114.521C243.464 114.521 236.132 90.383 217.846 75.282C202.841 62.89 188.924 58.388 183.678 57.934C173.168 57.025 159.596 65.473 159.596 65.473Z"
          stroke="#EA8500"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M223.383 84.241C222.226 83.039 217.987 82.479 210.886 86.607C200.702 92.527 196.362 97.715 196.943 98.827C199.045 102.854 199.618 103.808 201.847 108.706C202.476 110.088 205.409 103.437 218.185 96.245C226.012 91.839 230.068 92.889 229.145 91.495C227.111 88.423 224.626 85.532 223.383 84.241Z"
          fill="#FFF5CC"
        />
        <path
          d="M168.281 61.066C168.281 61.066 149.72 72.082 137.487 89.912C127.153 104.974 123.747 134.935 123.747 134.935C123.747 134.935 113.566 117.454 109.284 109.945C100.968 111.597 88.1631 115.509 88.1631 115.509C88.1631 115.509 93.9031 93.398 104.222 80.824C115.069 67.606 129.351 59.655 141.735 55.834C146.48 54.37 168.281 61.066 168.281 61.066Z"
          fill="url(#paint5_linear_144_540)"
        />
        <path
          d="M168.281 61.066C168.281 61.066 149.72 72.082 137.487 89.912C127.153 104.974 123.747 134.935 123.747 134.935C123.747 134.935 113.566 117.454 109.284 109.945C100.968 111.597 88.1631 115.509 88.1631 115.509C88.1631 115.509 93.9031 93.398 104.222 80.824C115.069 67.606 129.351 59.655 141.735 55.834C146.48 54.37 168.281 61.066 168.281 61.066Z"
          stroke="#EA8500"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M108.336 79.947C109.468 78.992 114.294 78.344 121.669 82.27C130.302 86.865 133.467 91.589 132.923 92.597C130.844 96.452 129.714 99.292 128.177 104.111C127.743 105.471 127.454 99.464 115.567 93.165C105.397 87.776 100.905 90.711 101.488 89.241C102.686 86.221 106.822 81.225 108.336 79.947Z"
          fill="#FFF5CC"
        />
        <path
          d="M244.573 53.493C250.358 35.112 229.567 -1.44299 216.008 2.48101C203.498 6.10201 183.708 27.195 177.501 37.177C172.998 44.419 173.583 53.631 180.393 57.417C186.14 60.613 239.988 68.062 244.573 53.493Z"
          fill="#FFEC33"
        />
        <path
          d="M244.573 53.493C250.358 35.112 229.567 -1.44299 216.008 2.48101C203.498 6.10201 183.708 27.195 177.501 37.177C172.998 44.419 173.583 53.631 180.393 57.417C186.14 60.613 239.988 68.062 244.573 53.493Z"
          stroke="#EA8500"
          strokeWidth="5"
          strokeMiterlimit="10"
        />
        <path
          d="M212.332 6.88698C212.332 6.88698 216.266 6.43198 222.128 17.457C227.75 28.031 226.024 33.903 226.024 33.903L235.408 36.028C235.408 36.028 237.417 30.315 229.654 16.258C225.419 8.58998 221.749 4.71098 217.997 4.87298C215.853 4.96598 212.332 6.88698 212.332 6.88698Z"
          fill="#FFF5CC"
        />
        <path
          d="M184.552 56.66C186.239 51.703 221.804 33.54 229.568 33.047C234.992 32.703 241.03 45.388 236.859 54.457C233.123 62.58 182.758 61.929 184.552 56.66Z"
          fill="url(#paint6_linear_144_540)"
        />
        <path
          d="M184.552 56.66C186.239 51.703 221.804 33.54 229.568 33.047C234.992 32.703 241.03 45.388 236.859 54.457C233.123 62.58 182.758 61.929 184.552 56.66Z"
          stroke="#DE6C00"
          strokeWidth="5"
        />
        <path
          d="M188.879 43.357C190.196 71.624 132.676 74.204 132.069 46.275C131.437 17.215 187.562 15.09 188.879 43.357Z"
          fill="#FFEC33"
        />
        <path
          d="M188.879 43.357C190.196 71.624 132.676 74.204 132.069 46.275C131.437 17.215 187.562 15.09 188.879 43.357Z"
          stroke="#F99300"
          strokeWidth="5"
          strokeMiterlimit="10"
        />
        <path
          d="M139.563 33.331C152.438 21.653 184.813 21.466 186.709 43.622C180.625 31.091 154.563 28.153 139.563 33.331Z"
          fill="#FFF5CC"
        />
        <path
          d="M134.787 42.4221C145.187 55.5901 180.437 54.0901 186.332 40.5341C191.999 70.4651 127.312 72.3401 134.787 42.4221Z"
          fill="#FFCE00"
        />
        <path
          d="M139.521 31.895C139.521 31.895 182.125 23.965 171.445 63.304"
          stroke="#F99300"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M162.045 34.048C151.188 35.965 135.125 53.715 149.57 65.266"
          stroke="#F99300"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M88.374 79.654C74.717 76.404 66.957 36.513 76.803 20.725C86.656 4.926 122.556 30.766 130.226 36.042C138.633 41.825 149.479 45.233 145.321 58.038C143.624 63.265 105.729 83.785 88.374 79.654Z"
          fill="#FFEC33"
        />
        <path
          d="M88.374 79.654C74.717 76.404 66.957 36.513 76.803 20.725C86.656 4.926 122.556 30.766 130.226 36.042C138.633 41.825 149.479 45.233 145.321 58.038C143.624 63.265 105.729 83.785 88.374 79.654Z"
          stroke="#EA8500"
          strokeWidth="5"
          strokeMiterlimit="10"
        />
        <path
          d="M86.3852 18.41C86.3852 18.41 86.0952 27.039 88.3262 33.325C91.0932 41.122 95.5732 44.217 95.5732 44.217L89.5182 53.976C89.5182 53.976 84.0822 47.83 82.0062 37.228C80.1892 27.952 80.8012 20.11 82.0462 19.348C83.5372 18.436 86.3852 18.41 86.3852 18.41Z"
          fill="#FFF5CC"
        />
        <path
          d="M141.525 55.972C141.284 52.392 97.683 40.669 92.954 48.261C88.495 55.421 91.146 69.877 95.003 71.805C106.144 77.373 141.796 60.004 141.525 55.972Z"
          fill="url(#paint7_linear_144_540)"
        />
        <path
          d="M141.525 55.972C141.284 52.392 97.683 40.669 92.954 48.261C88.495 55.421 91.146 69.877 95.003 71.805C106.144 77.373 141.796 60.004 141.525 55.972Z"
          stroke="#DE6C00"
          strokeWidth="5"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_144_540"
        x1="13.1999"
        y1="185.911"
        x2="290.165"
        y2="173.009"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00B61F" />
        <stop offset="0.5" stopColor="#2EB610" />
        <stop offset="1" stopColor="#5CB600" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_144_540"
        x1="12.7079"
        y1="96.747"
        x2="289.673"
        y2="83.845"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00B61F" />
        <stop offset="0.5" stopColor="#2EB610" />
        <stop offset="1" stopColor="#5CB600" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_144_540"
        x1="86.7791"
        y1="113.553"
        x2="85.3491"
        y2="231.714"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEC33" />
        <stop offset="0.5" stopColor="#FDD11A" />
        <stop offset="1" stopColor="#FBB500" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_144_540"
        x1="201.281"
        y1="62.189"
        x2="205.201"
        y2="177.362"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEC33" />
        <stop offset="0.5" stopColor="#FCC11A" />
        <stop offset="1" stopColor="#FA9600" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_144_540"
        x1="214.447"
        y1="108.446"
        x2="194.56"
        y2="76.447"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFCE00" />
        <stop offset="0.5" stopColor="#FFDD1A" />
        <stop offset="1" stopColor="#FFEC33" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_144_540"
        x1="118.446"
        y1="103.447"
        x2="144.299"
        y2="72.171"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFCE00" />
        <stop offset="0.4" stopColor="#FFDD1A" />
        <stop offset="0.8" stopColor="#FFEC33" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_144_540"
        x1="210.447"
        y1="42.446"
        x2="212.616"
        y2="64.261"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F38B00" />
        <stop offset="0.5" stopColor="#F9A911" />
        <stop offset="1" stopColor="#FFC621" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_144_540"
        x1="115.447"
        y1="52.446"
        x2="119.425"
        y2="77.033"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F38B00" />
        <stop offset="0.5" stopColor="#F9A911" />
        <stop offset="1" stopColor="#FFC621" />
      </linearGradient>
    </defs>
  </svg>
)

export const Key = ({width, height, className, grey}) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`, minWidth: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
      ...(grey ? {filter: `grayscale(1)`} : {}),
    }}
    className={classnames(className)}
  >
    <g clipPath="url(#clip0_78_546)">
      <mask
        id="mask0_78_546"
        style={{masktype: 'luminance'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_78_546)">
        <path
          d="M199.767 221.057C200.518 222.499 205.179 236.142 204.023 237.299C204.023 237.299 49.3982 393.133 49.4048 395.293L49.637 457.501C49.6501 459.921 119.222 460.458 119.123 457.926C119.123 457.926 118.797 413.492 120.545 413.525C120.545 413.525 163.958 415.181 163.745 412.576C163.745 412.576 160.602 365.063 162.463 365.195C162.463 365.195 215.169 366.719 216.691 365.197C216.691 365.197 236.412 344.492 236.499 342.637C236.499 342.637 239.643 301.38 241.278 301.394C241.278 301.394 270.45 302.447 273.502 304.425L199.767 221.057Z"
          fill="url(#paint0_linear_78_546)"
        />
        <path
          d="M49.4048 399.888L209.562 240.02"
          stroke="#FFF86C"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49.4888 417.576L209.38 257.685C216.314 249.654 233.585 259.342 223.079 271.384L49.5912 444.871L49.4888 417.576Z"
          fill="url(#paint1_linear_78_546)"
        />
        <path
          d="M49.4888 417.576L209.38 257.684C216.506 250.546 231.545 260.425 223.079 271.384L49.5912 444.871L49.4888 417.576Z"
          fill="url(#paint2_linear_78_546)"
        />
        <path
          d="M219.469 274.993C224.007 254.848 205.192 261.872 205.192 261.872C205.192 261.872 214.585 249.24 223.323 257.456C232.449 266.037 219.469 274.993 219.469 274.993Z"
          fill="url(#paint3_linear_78_546)"
        />
        <path
          d="M242.688 301.629C242.608 301.629 242.542 301.63 242.476 301.643L248.491 295.627C252.28 291.838 258.409 291.839 262.19 295.62C263.911 297.341 264.842 299.535 264.995 301.775C264.869 301.769 242.688 301.629 242.688 301.629Z"
          fill="url(#paint4_linear_78_546)"
        />
        <path
          d="M238.952 305.136L237.989 333.631L204.936 366.683L177.817 366.418L238.952 305.136Z"
          fill="url(#paint5_linear_78_546)"
        />
        <path
          d="M238.952 305.136L237.989 333.631L204.936 366.683L177.817 366.418L238.952 305.136Z"
          fill="url(#paint6_linear_78_546)"
        />
        <path
          d="M162.431 379.808L163.494 406.129L155.469 413.918L127.998 413.536L162.431 379.808Z"
          fill="url(#paint7_linear_78_546)"
        />
        <path
          d="M162.431 379.808L163.494 406.129L155.469 413.918L127.998 413.536L162.431 379.808Z"
          fill="url(#paint8_linear_78_546)"
        />
        <path
          d="M117.781 424.692L118.844 451.013L107.411 462.446L80.2925 462.181L117.781 424.692Z"
          fill="url(#paint9_linear_78_546)"
        />
        <path
          d="M117.781 424.692L118.844 451.013L107.411 462.446L80.2925 462.181L117.781 424.692Z"
          fill="url(#paint10_linear_78_546)"
        />
        <path
          d="M204.023 237.299L50.2557 391.066C48.7273 392.594 49.5714 460.087 49.5714 460.087C49.5845 462.507 117.059 461.849 117.059 461.849C119.584 461.875 117.555 414.037 119.303 414.07C119.303 414.07 164.667 415.502 164.454 412.896C164.454 412.896 160.602 364.68 162.464 364.812C162.464 364.812 213.614 367.601 215.135 366.08C215.135 366.08 236.412 344.492 236.499 342.637C236.499 342.637 237.877 301.527 239.512 301.54C239.512 301.54 207.966 234.232 204.023 237.299Z"
          fill="url(#paint11_linear_78_546)"
          fillOpacity="0.3"
        />
        <path
          d="M204.023 237.299L51.784 389.537C50.2555 391.066 49.3982 393.133 49.4048 395.293L49.637 457.501C49.6502 459.921 51.5979 461.881 54.0108 461.901C54.0108 461.901 114.57 463.268 117.059 461.849C121.979 458.685 116.599 414.037 118.347 414.07C118.347 414.07 160.647 414.999 163.181 412.418C167.513 408.004 159.232 368.692 162.463 365.195C165.953 361.419 211.406 371.186 216.691 365.197L234.325 347.562C235.641 346.246 236.412 344.491 236.499 342.637C236.499 342.637 237.196 303.825 239.131 302.263C241.065 300.701 263.185 301.527 263.185 301.527"
          stroke="#B27410"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49.4048 395.293L49.637 457.501"
          stroke="#935415"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49.6372 457.501C49.6504 459.921 51.5981 461.881 54.011 461.901C54.011 461.901 114.571 463.268 117.059 461.849C121.98 458.686 116.599 414.037 118.347 414.07C118.347 414.07 160.647 414.999 163.18 412.418C167.512 408.004 159.232 368.692 162.464 365.195C165.953 361.419 211.407 371.186 216.691 365.197L234.326 347.562C235.642 346.246 236.412 344.491 236.499 342.637C236.499 342.637 237.196 303.825 239.131 302.263C241.065 300.701 263.185 301.527 263.185 301.527"
          stroke="#7C4F00"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49.5711 439.492L49.4922 418.428"
          stroke="#6D3901"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M84.8447 462.225L106.624 462.438"
          stroke="#5B2E01"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M134.235 413.736L154.706 414.07"
          stroke="#5B2E01"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M182.205 365.354L203.051 366.805"
          stroke="#5B2E01"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M236.856 333.81L237.662 311.563"
          stroke="#5B2E01"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M250.438 85.2548C224.695 110.998 210.06 147.956 213.818 198.429C214.217 203.803 198.937 217.703 200.267 220.242C201.018 221.684 211.318 238.264 210.162 239.42L264.572 293.998C264.572 293.998 270.95 301.632 274.001 303.609C297.558 318.877 309.793 299.376 309.793 299.376C356.443 307.023 401.301 287.603 427.043 261.86C475.364 213.539 474.48 134.121 427.043 85.2548L407.048 102.576C424.661 120.19 426.033 150.061 408.419 167.675C390.805 185.289 362.237 185.289 344.623 167.675C327.01 150.061 327.01 121.493 344.623 103.879C361.79 86.7128 389.353 86.2823 407.048 102.576L427.043 85.2548C378.276 36.4876 299.205 36.4876 250.438 85.2548Z"
          fill="url(#paint12_linear_78_546)"
        />
        <path
          d="M210.062 239.204C211.08 237.372 204.751 227.251 206.232 221.481C208.073 214.302 217.681 209.973 219.27 202.575C220.559 196.572 193.7 120.125 290.684 58.2703"
          stroke="#FFF86C"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M376.511 90.8056C440.566 95.4435 431.802 179.056 376.522 180.752C329.397 182.198 305.587 98.6301 376.511 90.8056L376.513 80.4966H376.511C361.747 80.4975 347.866 86.2466 337.428 96.6843C326.987 107.125 321.237 121.008 321.237 135.777C321.237 150.545 326.987 164.43 337.428 174.871C347.868 185.311 361.752 191.061 376.522 191.061C391.291 191.061 405.174 185.311 415.614 174.871C426.055 164.43 431.804 150.546 431.802 135.779C431.8 121.013 426.048 107.131 415.608 96.6909C405.324 86.4073 391.027 80.6686 376.511 80.4966V90.8056Z"
          fill="url(#paint13_linear_78_546)"
          fillOpacity="0.5"
        />
        <path
          d="M416.226 251.042C458.486 208.283 458.789 138.652 416.219 96.0799C394.856 74.7184 366.792 64.0343 338.732 64.0343C310.673 64.0343 282.617 74.7137 261.256 96.0733C218.531 138.799 218.531 208.316 261.256 251.042C303.982 293.768 373.5 293.768 416.226 251.042L420.304 255.119C397.817 277.607 368.28 288.85 338.742 288.85C309.203 288.85 279.665 277.607 257.178 255.119C212.205 210.146 212.205 136.969 257.178 91.9956C302.15 47.0241 375.325 47.0307 420.296 92.0022C465.039 136.744 464.583 210.093 420.304 255.119L416.226 251.042Z"
          fill="url(#paint14_linear_78_546)"
        />
        <path
          d="M338.733 50.9749C306.348 50.9758 275.937 65.0814 253.1 87.9178C230.259 110.759 217.681 141.173 217.681 173.557C217.681 205.942 230.259 236.357 253.1 259.198C275.94 282.039 306.355 294.617 338.742 294.617C370.912 294.617 401.137 282.205 423.926 259.651L420.304 255.119C397.817 277.607 368.279 288.85 338.742 288.85C309.203 288.85 279.665 277.607 257.178 255.119C212.205 210.146 212.205 136.969 257.178 91.9955C279.661 69.5126 309.198 58.2711 338.731 58.2702C368.271 58.2692 397.808 69.5135 420.296 92.0021C465.102 136.808 464.773 210.108 420.304 255.119L423.926 259.651C471.144 212.433 471.596 135.147 424.374 87.9244C401.532 65.0824 371.118 50.9749 338.735 50.9749H338.733Z"
          fill="url(#paint15_linear_78_546)"
        />
        <path
          d="M338.732 69.8023C366.494 69.8023 392.564 80.5822 412.14 100.158C452.617 140.635 452.619 206.492 412.148 246.964L416.226 251.042C458.947 208.321 458.944 138.806 416.219 96.08C394.856 74.7185 366.792 64.0344 338.732 64.0344C310.673 64.0344 282.617 74.7138 261.256 96.0734C218.531 138.799 218.531 208.316 261.256 251.042C282.619 272.404 310.681 283.086 338.742 283.086C366.216 283.086 393.689 272.848 414.877 252.369L411.169 247.93C391.708 266.893 366.043 277.319 338.741 277.319C310.979 277.319 284.909 266.539 265.335 246.964C224.859 206.488 224.859 140.628 265.335 100.152C284.906 80.5812 310.973 69.8023 338.732 69.8023Z"
          fill="url(#paint16_linear_78_546)"
        />
        <path
          d="M354.493 175.144C332.755 162.981 324.99 135.488 337.152 113.75C349.315 92.0115 376.804 84.2546 398.543 96.4172C420.281 108.58 428.05 136.065 415.888 157.803C403.725 179.541 376.232 187.307 354.493 175.144Z"
          stroke="#B27410"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M336.246 156.105C329.733 143.171 329.551 127.337 337.153 113.75C349.315 92.0115 376.805 84.2546 398.543 96.4172C409.412 102.499 416.788 112.41 419.928 123.519"
          stroke="#9E5905"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M239.63 301.447C241.565 299.885 263.685 300.711 263.685 300.711C272.034 300.724 283.413 308.86 286.869 310.256C291.468 312.117 296.732 311.054 300.249 307.538C300.249 307.538 308.137 297.459 315.344 298.597C361.415 305.876 401.301 287.603 427.044 261.86C475.811 213.093 475.811 134.022 427.044 85.2548C378.276 36.4876 299.206 36.4876 250.438 85.2548C224.695 110.998 210.551 147.171 211.987 180.883C212.212 186.266 216.399 199.194 210.923 205.888C206.334 211.497 195.214 216.791 201.2 225.961C216.053 248.711 206.709 234.338 204.522 236.483"
          stroke="#B27410"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M239.748 301.859C241.682 300.297 263.685 300.711 263.685 300.711C272.034 300.724 283.412 308.86 286.869 310.256C291.468 312.117 296.732 311.054 300.249 307.538C300.249 307.538 308.137 297.459 315.344 298.597C361.415 305.876 401.301 287.603 427.044 261.86C449.903 239 462.047 209.482 463.476 179.548"
          stroke="#7C4F00"
          strokeWidth="7.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_78_546"
        x1="170.423"
        y1="118.401"
        x2="293.793"
        y2="376.589"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF100" />
        <stop offset="0.28" stopColor="#F3D50F" />
        <stop offset="0.55" stopColor="#E6B91E" />
        <stop offset="0.77" stopColor="#D1A120" />
        <stop offset="1" stopColor="#BC8A23" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_78_546"
        x1="125.74"
        y1="340.898"
        x2="139.157"
        y2="354.317"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C88401" />
        <stop offset="0.2" stopColor="#A26905" />
        <stop offset="0.4" stopColor="#7C4D09" />
        <stop offset="0.7" stopColor="#BB9321" />
        <stop offset="1" stopColor="#FADA39" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_78_546"
        x1="101.535"
        y1="328.678"
        x2="130.368"
        y2="347.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5D2D04" />
        <stop offset="0.36" stopColor="#5D2D04" stopOpacity="0.5" />
        <stop offset="0.72" stopColor="#5D2D04" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_78_546"
        x1="212.337"
        y1="267.578"
        x2="222.215"
        y2="257.457"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.27" stopColor="#5D2D04" stopOpacity="0" />
        <stop offset="0.63" stopColor="#5D2D04" stopOpacity="0.5" />
        <stop offset="1" stopColor="#5D2D04" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_78_546"
        x1="249.115"
        y1="305.061"
        x2="259.405"
        y2="295.241"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5D2D04" stopOpacity="0" />
        <stop offset="0.5" stopColor="#5D2D04" stopOpacity="0.5" />
        <stop offset="1" stopColor="#5D2D04" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_78_546"
        x1="196.005"
        y1="347.596"
        x2="211.664"
        y2="363.373"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C88401" />
        <stop offset="0.28" stopColor="#A26905" />
        <stop offset="0.4" stopColor="#7C4D09" />
        <stop offset="0.52" stopColor="#BD8E19" />
        <stop offset="1" stopColor="#FFCF29" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_78_546"
        x1="178.967"
        y1="337.491"
        x2="220.827"
        y2="348.752"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5D2D04" />
        <stop offset="0.36" stopColor="#5D2D04" stopOpacity="0.5" />
        <stop offset="0.72" stopColor="#5D2D04" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_78_546"
        x1="143.012"
        y1="397.651"
        x2="159.377"
        y2="414.251"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C88401" />
        <stop offset="0.28" stopColor="#A26905" />
        <stop offset="0.4" stopColor="#7C4D09" />
        <stop offset="0.52" stopColor="#BD8E19" />
        <stop offset="1" stopColor="#FFCF29" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_78_546"
        x1="122.92"
        y1="403.643"
        x2="162.547"
        y2="398.454"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5D2D04" />
        <stop offset="0.36" stopColor="#5D2D04" stopOpacity="0.5" />
        <stop offset="0.72" stopColor="#5D2D04" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_78_546"
        x1="98.4796"
        y1="443.358"
        x2="113.199"
        y2="458.078"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C88401" />
        <stop offset="0.28" stopColor="#A26905" />
        <stop offset="0.4" stopColor="#7C4D09" />
        <stop offset="0.52" stopColor="#BD8E19" />
        <stop offset="1" stopColor="#FFCF29" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_78_546"
        x1="81.6771"
        y1="444.298"
        x2="117.897"
        y2="443.339"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5D2D04" />
        <stop offset="0.36" stopColor="#5D2D04" stopOpacity="0.5" />
        <stop offset="0.72" stopColor="#5D2D04" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint11_linear_78_546"
        x1="54.2996"
        y1="459.338"
        x2="221.442"
        y2="285.616"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9F3E01" />
        <stop offset="0.5" stopColor="#8E4601" stopOpacity="0.5" />
        <stop offset="1" stopColor="#7C4F00" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_78_546"
        x1="170.923"
        y1="117.585"
        x2="294.292"
        y2="375.773"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF100" />
        <stop offset="0.28" stopColor="#F3D50F" />
        <stop offset="0.55" stopColor="#E6B91E" />
        <stop offset="0.77" stopColor="#D1A120" />
        <stop offset="1" stopColor="#BC8A23" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_78_546"
        x1="417.639"
        y1="177.462"
        x2="344.574"
        y2="100.702"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEFF5C" />
        <stop offset="0.2" stopColor="#F9E83C" stopOpacity="0.7" />
        <stop offset="0.4" stopColor="#F5D11C" stopOpacity="0.4" />
        <stop offset="0.7" stopColor="#EEC219" stopOpacity="0.7" />
        <stop offset="1" stopColor="#E7B216" />
      </linearGradient>
      <linearGradient
        id="paint14_linear_78_546"
        x1="310.009"
        y1="87.2223"
        x2="371.109"
        y2="292.612"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E6AE13" />
        <stop offset="0.28" stopColor="#D89D17" />
        <stop offset="0.55" stopColor="#CA8B1B" />
        <stop offset="0.77" stopColor="#9C6813" />
        <stop offset="1" stopColor="#6E440B" />
      </linearGradient>
      <linearGradient
        id="paint15_linear_78_546"
        x1="284.159"
        y1="88.6322"
        x2="400.838"
        y2="271.932"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEFF5C" />
        <stop offset="0.2" stopColor="#F9E83C" stopOpacity="0.7" />
        <stop offset="0.4" stopColor="#F5D11C" stopOpacity="0.4" />
        <stop offset="0.7" stopColor="#EEC219" stopOpacity="0.7" />
        <stop offset="1" stopColor="#E7B216" />
      </linearGradient>
      <linearGradient
        id="paint16_linear_78_546"
        x1="266.299"
        y1="93.8023"
        x2="344.319"
        y2="184.042"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFF68" />
        <stop offset="0.5" stopColor="#FEF344" stopOpacity="0.5" />
        <stop offset="1" stopColor="#FEE620" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_78_546">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Cup = ({width, height}) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`, minWidth: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <g clipPath="url(#clip0_80_30)">
      <mask
        id="mask0_80_30"
        style={{maskType: 'luminance'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_80_30)">
        <path
          d="M390.905 448.62C390.905 448.62 380.696 434.909 375.349 431.787C374.662 431.386 374.056 431.16 373.562 431.16H251.735H129.909C125.566 431.16 121.545 433.451 119.332 437.189L112.564 448.62C111.854 449.819 111.48 451.187 111.48 452.58L111.436 461.793C112.69 469.039 123.527 468.413 124.73 468.413H378.74C379.942 468.413 391.73 469.005 391.94 462.368L391.99 452.58C391.99 451.187 391.616 449.819 390.905 448.62Z"
          fill="url(#paint0_linear_80_30)"
        />
        <g opacity="0.5">
          <path
            d="M163.08 449.786L122.801 435.556L121.872 435.227L149.424 433.281L163.08 449.786Z"
            fill="#550E00"
          />
        </g>
        <g opacity="0.5">
          <path
            d="M111.623 450.359L122.988 454.71C122.988 454.71 125.948 455.671 126.684 455.674L377.235 456.579C378.145 456.582 379.045 456.388 379.871 456.007L391.99 450.43C391.99 450.43 391.987 457.863 391.846 462.374C391.118 467.769 384.591 468.173 380.57 468.27C379.811 468.288 379.14 468.296 378.616 468.324C375.312 468.5 127.856 468.682 124.73 468.42C115.411 467.637 111.815 465.762 111.613 462.091C111.531 460.593 111.48 455.761 111.48 455.761L111.511 454.589L111.623 450.359Z"
            fill="#550E00"
          />
        </g>
        <g opacity="0.5">
          <path
            d="M124.527 455.282C124.527 455.282 124.684 466.774 124.802 468.491C122.815 468.715 112.538 468.355 111.619 462.144C111.239 459.575 111.48 455.761 111.48 455.761V452.663V450.43L123.363 454.849L124.527 455.282Z"
            fill="#550E00"
          />
        </g>
        <path
          d="M379.872 456.007L379.903 468.264C379.903 468.264 391.197 469.29 391.995 462.216C392.305 459.471 392.146 457.201 392.048 456.247C392.016 455.933 391.99 455.761 391.99 455.761V450.43L379.872 456.007Z"
          fill="#BF6121"
        />
        <path
          d="M390.905 448.62C390.905 448.62 380.696 434.909 375.349 431.787C374.662 431.386 374.056 431.16 373.562 431.16H251.735H129.909C125.566 431.16 121.545 433.451 119.332 437.189L112.564 448.62C111.854 449.819 111.48 451.187 111.48 452.58L111.436 461.793C112.69 469.039 123.527 468.413 124.73 468.413H378.74C379.942 468.413 391.73 469.005 391.94 462.368L391.99 452.58C391.99 451.187 391.616 449.819 390.905 448.62Z"
          stroke="#550E00"
          strokeWidth="8.5986"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M355.606 373.292C355.561 367.83 351.123 363.432 345.663 363.432H159.419C153.959 363.432 149.52 367.83 149.475 373.292C149.345 389.217 149.497 420.51 149.547 429.788C149.556 431.487 150.266 433.097 151.508 434.257L162.679 444.687C163.796 445.729 165.267 446.309 166.795 446.309H338.287C339.815 446.309 341.287 445.729 342.403 444.687L353.575 434.257C354.817 433.097 355.525 431.487 355.534 429.788C355.566 423.822 355.641 408.757 355.655 394.525C355.663 386.622 355.652 378.977 355.606 373.292Z"
          fill="url(#paint1_linear_80_30)"
        />
        <path
          d="M355.606 373.292C355.561 367.83 351.123 363.432 345.663 363.432H159.419C153.959 363.432 149.52 367.83 149.475 373.292C149.345 389.217 149.497 420.51 149.547 429.788C149.556 431.487 150.266 433.097 151.508 434.257L162.679 444.687C163.796 445.729 165.267 446.309 166.795 446.309H338.287C339.815 446.309 341.287 445.729 342.403 444.687L353.575 434.257C354.817 433.097 355.525 431.487 355.534 429.788C355.566 423.822 355.641 408.757 355.655 394.525C355.663 386.622 355.652 378.977 355.606 373.292Z"
          stroke="#550E00"
          strokeWidth="8.5986"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M355.537 429.788C355.526 431.486 354.817 433.099 353.57 434.26L342.404 444.687C341.286 445.729 339.814 446.31 338.288 446.31H337.041V391.896C337.041 390.294 335.741 388.994 334.14 388.994L355.601 373.289C355.665 380.564 355.666 391.045 355.644 401.167C355.619 413.21 355.561 424.748 355.537 429.788Z"
          fill="#BF6121"
        />
        <path
          d="M355.537 429.788C355.526 431.486 354.817 433.099 353.57 434.26L342.404 444.687C341.286 445.729 339.814 446.31 338.288 446.31H337.041V391.896C337.041 390.294 335.741 388.994 334.14 388.994L355.601 373.289C355.665 380.564 355.666 391.045 355.644 401.167C355.619 413.21 355.561 424.748 355.537 429.788Z"
          stroke="#BF6E2C"
          strokeWidth="8.5986"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M169.624 388.994C168.023 388.994 166.723 390.294 166.723 391.896V446.31C165.218 446.288 163.778 445.708 162.682 444.687L156.111 433.58C154.875 432.419 149.56 431.486 149.549 429.788C149.495 420.511 149.345 389.219 149.474 373.289L169.624 388.994Z"
          fill="#672600"
        />
        <path
          d="M169.624 388.994C168.023 388.994 166.723 390.294 166.723 391.896V446.31C165.218 446.288 163.778 445.708 162.682 444.687L156.111 433.58C154.875 432.419 149.56 431.486 149.549 429.788C149.495 420.511 149.345 389.219 149.474 373.289L169.624 388.994Z"
          stroke="#631F04"
          strokeWidth="8.5986"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M355.606 373.292C355.561 367.83 351.123 363.432 345.663 363.432H159.419C153.959 363.432 149.52 367.83 149.475 373.292C149.345 389.217 149.497 420.51 149.547 429.788C149.556 431.487 150.266 433.097 151.508 434.257L162.679 444.687C163.796 445.729 165.267 446.309 166.795 446.309H338.287C339.815 446.309 341.287 445.729 342.403 444.687L353.575 434.257C354.817 433.097 355.525 431.487 355.534 429.788C355.566 423.822 355.641 408.757 355.655 394.525C355.663 386.622 355.652 378.977 355.606 373.292Z"
          stroke="#550E00"
          strokeWidth="8.5986"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M337.044 446.309H166.723V391.895C166.723 390.291 168.023 388.99 169.626 388.99H334.141C335.744 388.99 337.044 390.291 337.044 391.895V446.309Z"
          fill="url(#paint2_linear_80_30)"
        />
        <path
          d="M337.044 446.309H166.723V391.895C166.723 390.291 168.023 388.99 169.626 388.99H334.141C335.744 388.99 337.044 390.291 337.044 391.895V446.309Z"
          stroke="#672600"
          strokeWidth="8.5986"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0.2">
          <path
            d="M337.04 391.892V403.168C337.04 401.566 335.74 400.265 334.138 400.265H169.623C168.022 400.265 166.722 401.566 166.722 403.168V391.892C166.722 390.29 168.022 388.989 169.623 388.989H334.138C335.74 388.989 337.04 390.29 337.04 391.892Z"
            fill="#672600"
          />
        </g>
        <path
          d="M355.606 373.292C355.561 367.83 351.123 363.432 345.663 363.432H159.419C153.959 363.432 149.52 367.83 149.475 373.292C149.345 389.217 149.497 420.51 149.547 429.788C149.556 431.487 150.266 433.097 151.508 434.257L162.679 444.687C163.796 445.729 165.267 446.309 166.795 446.309H338.287C339.815 446.309 341.287 445.729 342.403 444.687L353.575 434.257C354.817 433.097 355.525 431.487 355.534 429.788C355.566 423.822 355.641 408.757 355.655 394.525C355.663 386.622 355.652 378.977 355.606 373.292Z"
          stroke="#6B2100"
          strokeWidth="8.5986"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M149.475 373.292C149.345 389.217 149.497 420.51 149.547 429.788C149.556 431.487 150.266 433.097 151.508 434.256L162.679 444.687C163.796 445.729 165.267 446.309 166.795 446.309H338.287"
          stroke="#470A00"
          strokeWidth="8.5986"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M337.044 446.309H166.723V391.895C166.723 390.291 168.023 388.99 169.626 388.99"
          stroke="#470A00"
          strokeWidth="8.5986"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M390.808 117.166C390.808 117.166 382.347 107.982 387.95 99.8851C393.998 91.1457 414.842 92.4857 422.212 104.666C429.581 116.846 424.455 135.436 401.382 153.065C378.31 170.695 361.995 180.924 352.702 194.707C343.409 208.489 352.037 221.181 365.171 221.311C375.703 221.414 380.553 215.247 380.553 215.247C380.553 215.247 367.027 216.366 367.094 207.555C367.152 200.121 388.72 191.933 412.598 176.144C427.055 166.585 456.82 145.638 456.82 116.525C456.82 91.83 436.205 70.6564 404.907 72.9063C373.609 75.1562 369.695 94.2678 370.619 102.422C371.882 113.558 385.04 120.692 390.808 117.166Z"
          fill="url(#paint3_radial_80_30)"
        />
        <g opacity="0.7">
          <path
            d="M422.028 151.639C397.399 174.049 366.234 185.956 357.029 197.003C347.834 208.04 353.786 221.045 365.167 221.312C352.036 221.183 343.405 208.485 352.699 194.709C361.993 180.922 378.307 170.697 401.383 153.063C424.45 135.44 429.582 116.848 422.216 104.664C414.84 92.4896 393.998 91.1446 387.947 99.887C382.35 107.977 390.804 117.164 390.804 117.164C390.804 117.164 376.352 114.399 381.421 100.322C387.078 84.6155 418.983 78.1398 433.863 98.2651C447.705 117.006 436.829 138.18 422.028 151.639Z"
            fill="url(#paint4_radial_80_30)"
          />
        </g>
        <path
          d="M409.307 87.0721C397.756 82.78 381.833 86.7903 378.621 98.7033C376.881 105.159 379.115 117.19 390.808 117.166C390.808 117.166 380.164 102.175 390.79 96.5345C401.417 90.8945 416.589 93.8801 422.212 104.666C422.212 104.666 422.658 92.0338 409.307 87.0721Z"
          fill="#FED759"
        />
        <path
          d="M390.808 117.166C390.808 117.166 382.347 107.982 387.95 99.8851C393.998 91.1457 414.842 92.4857 422.212 104.666C429.581 116.846 424.455 135.436 401.382 153.065C378.31 170.695 361.995 180.924 352.702 194.707C343.409 208.489 352.037 221.181 365.171 221.311C375.703 221.414 380.553 215.247 380.553 215.247C380.553 215.247 367.027 216.366 367.094 207.555C367.152 200.121 388.72 191.933 412.598 176.144C427.055 166.585 456.82 145.638 456.82 116.525C456.82 91.83 436.205 70.6564 404.907 72.9063C373.609 75.1562 369.695 94.2678 370.619 102.422C371.882 113.558 385.04 120.692 390.808 117.166Z"
          stroke="#A05700"
          strokeWidth="7.91072"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0.7">
          <path
            d="M370.619 102.422C371.882 113.558 385.04 120.692 390.808 117.166C390.808 117.166 382.347 107.982 387.951 99.8851C393.999 91.1457 414.842 92.4857 422.212 104.666C429.582 116.846 424.455 135.436 401.382 153.065C378.31 170.695 361.995 180.924 352.702 194.707"
            stroke="#7A3A00"
            strokeWidth="7.91072"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M113.882 117.166C113.882 117.166 122.341 107.982 116.738 99.885C110.69 91.1456 89.8477 92.4856 82.4778 104.666C75.1079 116.846 80.2344 135.436 103.307 153.065C126.379 170.695 142.695 180.924 151.988 194.706C161.281 208.489 152.652 221.181 139.518 221.31C128.986 221.414 124.137 215.247 124.137 215.247C124.137 215.247 137.662 216.366 137.595 207.555C137.538 200.121 115.97 191.932 92.0911 176.144C77.6341 166.584 47.8696 145.638 47.8696 116.525C47.8696 91.8299 68.4844 70.6563 99.7824 72.9062C131.08 75.1561 134.995 94.2677 134.07 102.422C132.808 113.558 119.65 120.692 113.882 117.166Z"
          fill="url(#paint5_radial_80_30)"
        />
        <g opacity="0.7">
          <path
            d="M139.521 221.311C150.901 221.044 156.853 208.04 147.658 197.003C138.453 185.956 107.289 174.049 82.6599 151.639C67.8588 138.18 56.9928 117.006 70.8348 98.2651C85.7052 78.1397 117.612 81.4498 122.278 99.3332C126.335 114.88 113.884 117.164 113.884 117.164C113.884 117.164 122.337 107.977 116.741 99.887C110.69 91.1446 89.8479 92.4896 82.482 104.664C75.1061 116.848 80.2376 135.44 103.304 153.063C126.381 170.697 142.695 180.922 151.989 194.708C161.283 208.485 152.651 221.183 139.521 221.311Z"
            fill="url(#paint6_radial_80_30)"
          />
        </g>
        <path
          d="M80.8354 108.018C84.9723 92.3007 100.088 82.5426 114.75 87.612C130.77 93.1512 126.185 113.122 116.863 116.944C116.863 116.944 123.732 98.189 107.787 95.2448C91.8409 92.3007 80.8354 108.018 80.8354 108.018Z"
          fill="#FED759"
        />
        <path
          d="M113.882 117.166C113.882 117.166 122.341 107.982 116.738 99.885C110.69 91.1456 89.8477 92.4856 82.4778 104.666C75.1079 116.846 80.2344 135.436 103.307 153.065C126.379 170.695 142.695 180.924 151.988 194.706C161.281 208.489 152.652 221.181 139.518 221.31C128.986 221.414 124.137 215.247 124.137 215.247C124.137 215.247 137.662 216.366 137.595 207.555C137.538 200.121 115.97 191.932 92.0911 176.144C77.6341 166.584 47.8696 145.638 47.8696 116.525C47.8696 91.8299 68.4844 70.6563 99.7824 72.9062C131.08 75.1561 134.995 94.2677 134.07 102.422C132.808 113.558 119.65 120.692 113.882 117.166Z"
          stroke="#A05700"
          strokeWidth="7.91072"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0.7">
          <path
            d="M113.882 117.166C113.882 117.166 122.341 107.982 116.738 99.885C110.69 91.1456 89.8477 92.4856 82.4778 104.666C75.1079 116.846 80.2344 135.436 103.307 153.065C126.379 170.695 142.695 180.924 151.988 194.706"
            stroke="#7A3A00"
            strokeWidth="7.91072"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M370.953 62.3864C380.475 57.9054 375.976 52.7005 367.637 49.8958C333.117 38.2854 275.127 36.356 252.525 36.356C225.853 36.356 130.051 42.3876 131.413 54.6379C131.985 59.7913 134.096 62.3864 134.096 62.3864C134.096 62.3864 131.41 139.047 154.272 200.015C173.2 250.491 215.545 274.359 252.525 274.359C289.505 274.359 331.85 250.491 350.778 200.015C373.64 139.047 370.953 62.3864 370.953 62.3864Z"
          fill="url(#paint7_radial_80_30)"
        />
        <g opacity="0.6">
          <path
            d="M370.953 62.3864C334.473 51.3634 281.333 47.8773 252.525 47.8773C221.347 47.8773 160.943 52.4374 134.096 62.3864"
            stroke="#FED759"
            strokeWidth="5.93304"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M177.598 41.6904C177.598 41.6904 185.195 259.634 254.352 259.634C323.508 259.634 325.803 41.6904 325.803 41.6904C325.803 41.6904 234.039 33.2082 177.598 41.6904Z"
          fill="url(#paint8_radial_80_30)"
        />
        <g opacity="0.8">
          <path
            d="M250.626 37.2954C248.757 118.617 248.756 137.652 248.756 237.404C248.756 260.903 220.875 246.723 208.554 148.949C202.621 101.866 202.682 66.355 203.246 49.3696C203.246 49.3696 196.548 43.8858 203.815 39.2733L250.626 37.2954Z"
            fill="url(#paint9_linear_80_30)"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M370.953 62.3864C334.473 51.3634 281.333 47.8773 252.525 47.8773C221.347 47.8773 160.943 52.4374 134.096 62.3864"
            stroke="#FED759"
            strokeWidth="5.93304"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g opacity="0.4">
          <path
            d="M350.781 200.019C331.847 250.495 289.5 274.359 252.522 274.359C215.544 274.359 173.197 250.495 154.273 200.019C131.404 139.05 134.093 62.3853 134.093 62.3853C116.629 45.9765 168.42 40.9447 168.42 40.9447C120.578 60.6379 180.172 49.786 180.172 49.786C148.516 53.4471 148.809 66.1513 148.501 70.8083C148.058 77.5006 149.77 146.204 165.366 190.752C174.946 218.123 187.522 233.026 206.207 243.958C219.9 251.971 239.36 255.424 253.076 255.424C268.485 255.424 285.028 251.317 300.09 241.15C316.728 229.919 330.97 215.645 339.678 190.752C353.96 149.958 356.996 80.6593 356.512 69.5256C356.02 58.2278 341.321 51.5206 316.839 48.8C316.839 48.8 371.051 57.5296 335.79 42.6368C335.79 42.6368 364.497 46.7568 372.413 51.8233C380.481 56.9866 370.951 62.3853 370.951 62.3853C370.951 62.3853 373.64 139.05 350.781 200.019Z"
            fill="url(#paint10_linear_80_30)"
          />
        </g>
        <g opacity="0.8">
          <path
            d="M228.183 269.212C221.994 266.425 210.729 246.98 219.944 250.022C229.672 253.233 242.192 255.425 252.67 255.423C262.679 255.421 273.685 253.361 279.835 251.129C297.605 244.679 283.458 268.618 273.009 271.072C259.849 274.162 238.09 273.675 228.183 269.212Z"
            fill="url(#paint11_radial_80_30)"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M293.042 209.06C272.095 209.546 260.579 219.849 210.208 207.795C190.486 203.076 211.799 232.527 249.45 232.559C283.133 232.587 313.147 208.594 293.042 209.06Z"
            fill="#FFE471"
          />
        </g>
        <path
          d="M134.096 62.3863C134.096 62.3863 128.598 59.2088 130.422 54.2689C133.107 47.0021 171.975 36.3519 252.525 36.3519C319.516 36.3519 372.734 48.1344 375.864 54.3965C378.994 60.6586 370.953 62.3863 370.953 62.3863"
          stroke="#A05700"
          strokeWidth="7.91072"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M134.096 62.3864C134.096 62.3864 131.41 139.047 154.272 200.015C173.2 250.491 215.545 274.359 252.525 274.359C289.505 274.359 331.85 250.491 350.778 200.015C373.64 139.047 370.953 62.3864 370.953 62.3864"
          stroke="#935400"
          strokeWidth="7.91072"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M134.096 62.3864C134.096 62.3864 131.41 139.047 154.272 200.015C173.2 250.491 215.545 274.359 252.525 274.359C289.505 274.359 331.85 250.491 350.778 200.015"
          stroke="#7A3A00"
          strokeWidth="7.91072"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M314.51 350.779C312.495 348.511 304.556 346.312 304.556 346.312C304.556 346.312 304.096 341.079 303.689 339.186C302.805 335.074 297.757 336.15 291.079 333.485C277.797 328.184 274.047 308.801 274.047 288.812L252.525 287.299L231.002 288.812C231.002 308.801 227.252 328.184 213.97 333.485C207.292 336.15 202.244 335.074 201.36 339.186C200.952 341.079 200.492 346.312 200.492 346.312C200.492 346.312 192.555 348.511 190.54 350.779C188.525 353.047 188.273 361.633 189.028 362.641C189.784 363.648 201.417 371.712 252.525 371.712C303.633 371.712 315.266 363.648 316.021 362.641C316.777 361.633 316.525 353.047 314.51 350.779Z"
          fill="url(#paint12_linear_80_30)"
        />
        <path
          d="M266.718 307.069C266.718 354.144 254.675 353.972 252.173 353.972C250.106 353.972 237.559 344.684 237.559 307.103C237.559 285.737 250.791 289.554 252.173 289.554C253.555 289.554 266.718 286.57 266.718 307.069Z"
          fill="url(#paint13_radial_80_30)"
        />
        <g opacity="0.8">
          <path
            d="M252.522 294.588C252.043 315.413 252.043 316.479 252.043 342.023C252.043 348.04 244.635 349.968 241.48 324.929C239.96 312.872 240.245 298.702 240.389 294.353"
            fill="url(#paint14_linear_80_30)"
          />
        </g>
        <path
          d="M316.018 362.643C315.266 363.652 303.629 371.712 252.522 371.712C201.415 371.712 189.788 363.652 189.027 362.643C188.275 361.635 188.522 353.051 190.539 350.776C192.556 348.511 200.496 346.316 200.496 346.316C200.496 346.316 200.951 341.074 201.356 339.185C201.702 337.603 202.661 333.815 204.095 333.261C204.095 333.261 216.978 338.295 252.522 338.295C288.067 338.295 299.744 332.876 299.744 332.876C301.859 333.449 303.263 337.188 303.689 339.185C304.094 341.074 304.559 346.316 304.559 346.316C304.559 346.316 312.498 348.511 314.505 350.776C316.522 353.051 316.779 361.635 316.018 362.643Z"
          fill="url(#paint15_radial_80_30)"
        />
        <path
          d="M289.05 360.892C289.05 365.055 273.291 369.067 253.85 369.067C234.409 369.067 218.648 365.055 218.648 360.892C218.648 356.729 234.409 359.954 253.85 359.954C273.291 359.954 289.05 356.729 289.05 360.892Z"
          fill="url(#paint16_radial_80_30)"
        />
        <g opacity="0.5">
          <path
            d="M228.484 324.099C228.484 324.099 223.275 338.091 250.945 338.328C277.208 338.553 278.115 328.187 274.393 318.706C274.393 318.706 283.403 331.925 301.502 337.745C301.502 337.745 292.441 344.213 252.525 344.147C233.825 344.116 222.346 342.987 213.428 341.507C207.604 340.539 206.064 353.565 222.49 358.501C223.533 358.814 197.583 353.885 202.485 368.084C202.485 368.084 193.274 368.03 189.028 362.641C187.344 360.501 192.548 346.645 200.493 346.312L203.366 338.553C203.366 338.553 217.442 331.646 228.484 324.099Z"
            fill="#894700"
          />
        </g>
        <path
          d="M284.175 347.812C284.175 351.975 270.598 354.01 253.85 354.01C237.102 354.01 223.524 351.975 223.524 347.812C223.524 343.65 237.102 344.231 253.85 344.231C270.598 344.231 284.175 343.65 284.175 347.812Z"
          fill="url(#paint17_radial_80_30)"
        />
        <g opacity="0.7">
          <path
            d="M249.841 344.222C249.841 344.222 251.038 351.707 251.086 358.02C251.144 365.768 250.398 373.728 248.543 371.695C248.543 371.695 226.837 371.768 228.101 363.915C228.427 361.887 230.413 360.431 233.782 359.171C235.705 358.452 237.386 356.664 233.483 354.431C230.735 352.859 228.566 350.363 230.135 347.462C232.828 342.482 249.841 344.222 249.841 344.222Z"
            fill="url(#paint18_linear_80_30)"
          />
        </g>
        <g opacity="0.5">
          <path
            d="M274.393 298.668C268.569 299.953 260.669 300.567 252.522 300.567C244.375 300.567 236.485 299.953 230.662 298.668C230.889 295.444 230.998 292.131 230.998 288.808L252.522 287.295L274.047 288.808C274.047 292.131 274.155 295.444 274.393 298.668Z"
            fill="#7C3200"
          />
        </g>
        <g opacity="0.7">
          <path
            d="M190.54 350.779C190.54 350.779 214.13 356.992 252.525 356.992C290.92 356.992 314.51 350.779 314.51 350.779"
            stroke="#914500"
            strokeWidth="5.93304"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g opacity="0.7">
          <path
            d="M204.099 336.232C204.099 336.232 216.979 341.264 252.525 341.264C288.072 341.264 299.742 335.843 299.742 335.843"
            stroke="#914500"
            strokeWidth="5.93304"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M314.51 350.779C312.495 348.511 304.556 346.312 304.556 346.312C304.556 346.312 304.096 341.079 303.689 339.186C302.805 335.074 297.757 336.15 291.079 333.485C277.797 328.184 274.047 308.801 274.047 288.812L252.525 287.299L231.002 288.812C231.002 308.801 227.252 328.184 213.97 333.485C207.292 336.15 202.244 335.074 201.36 339.186C200.952 341.079 200.492 346.312 200.492 346.312C200.492 346.312 192.555 348.511 190.54 350.779C188.525 353.047 188.273 361.633 189.028 362.641C189.784 363.648 201.417 371.712 252.525 371.712C303.633 371.712 315.266 363.648 316.021 362.641C316.777 361.633 316.525 353.047 314.51 350.779Z"
          stroke="#A05700"
          strokeWidth="7.91072"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M231.002 288.812C231.002 308.801 227.252 328.184 213.97 333.485C207.292 336.15 202.244 335.074 201.36 339.186C200.952 341.079 200.492 346.312 200.492 346.312C200.492 346.312 192.555 348.511 190.54 350.779C188.525 353.047 188.273 361.633 189.028 362.641C189.033 362.647 189.037 362.653 189.043 362.66C189.927 363.747 201.729 371.712 252.525 371.712C303.633 371.712 315.266 363.648 316.021 362.641"
          stroke="#7A3A00"
          strokeWidth="7.91072"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M279.836 276.742C279.836 276.742 280.112 272.526 275.696 270.306C271.279 268.087 268.509 269.511 252.525 269.511C239.327 269.511 233.771 268.087 229.354 270.306C224.938 272.526 225.214 276.742 225.214 276.742C225.214 276.742 218.187 280.957 222.017 285.398C225.374 289.289 238.579 291.075 252.525 291.075C266.471 291.075 279.676 289.289 283.033 285.398C286.863 280.957 279.836 276.742 279.836 276.742Z"
          fill="url(#paint19_radial_80_30)"
        />
        <path
          d="M273.55 276.656C273.55 283.388 268.626 294.042 252.522 294.042C239.216 294.042 231.494 283.388 231.494 276.656C231.494 269.925 243.629 269.665 252.522 269.665C261.416 269.665 273.55 269.925 273.55 276.656Z"
          fill="url(#paint20_radial_80_30)"
        />
        <g opacity="0.8">
          <path
            d="M252.522 272.618C252.095 280.749 252.096 280.61 252.096 290.583C252.096 292.759 234.758 289.337 239.188 280.876C239.878 279.558 239.953 278.028 239.497 276.611C239.101 275.38 239.108 273.825 240.718 272.526"
            fill="url(#paint21_linear_80_30)"
          />
        </g>
        <g opacity="0.6">
          <path
            d="M225.214 276.742C225.214 276.742 250.957 282.093 279.836 276.742"
            stroke="#914500"
            strokeWidth="5.93304"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M279.836 276.742C279.836 276.742 280.112 272.526 275.696 270.306C271.279 268.087 268.509 269.511 252.525 269.511C239.327 269.511 233.771 268.087 229.354 270.306C224.938 272.526 225.214 276.742 225.214 276.742C225.214 276.742 218.187 280.957 222.017 285.398C225.374 289.289 238.579 291.075 252.525 291.075C266.471 291.075 279.676 289.289 283.033 285.398C286.863 280.957 279.836 276.742 279.836 276.742Z"
          stroke="#9E6100"
          strokeWidth="7.91072"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M222.017 285.398C225.374 289.289 238.579 291.075 252.525 291.075C266.471 291.075 279.676 289.289 283.033 285.398"
          stroke="#7A3A00"
          strokeWidth="7.91072"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_80_30"
        x1="112.071"
        y1="450.559"
        x2="392.582"
        y2="450.559"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.14" stopColor="#853301" />
        <stop offset="0.57" stopColor="#933C01" />
        <stop offset="0.92" stopColor="#A24500" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_80_30"
        x1="149.686"
        y1="405.411"
        x2="355.92"
        y2="405.411"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#843D1C" />
        <stop offset="0.51" stopColor="#9A4B21" />
        <stop offset="0.92" stopColor="#B05926" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_80_30"
        x1="191.599"
        y1="384.987"
        x2="318.303"
        y2="456.114"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.02" stopColor="#E6AE45" />
        <stop offset="0.14" stopColor="#F3D06B" />
        <stop offset="0.34" stopColor="#FFF291" />
        <stop offset="0.47" stopColor="#EAC56C" />
        <stop offset="0.62" stopColor="#D59746" />
        <stop offset="0.79" stopColor="#EAB14F" />
        <stop offset="0.88" stopColor="#FECC57" />
      </linearGradient>
      <radialGradient
        id="paint3_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(399.146 151) scale(85.3196 85.3403)"
      >
        <stop offset="0.14" stopColor="#FFE978" />
        <stop offset="0.57" stopColor="#E8B63C" />
        <stop offset="0.92" stopColor="#D08201" />
      </radialGradient>
      <radialGradient
        id="paint4_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(411.01 122.32) scale(76.2629 76.2814)"
      >
        <stop offset="0.14" stopColor="#7C3200" />
        <stop offset="0.57" stopColor="#A65A01" />
        <stop offset="0.92" stopColor="#D08201" />
      </radialGradient>
      <radialGradient
        id="paint5_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(103.519 154.955) scale(80.9505 80.9701)"
      >
        <stop offset="0.14" stopColor="#FFE978" />
        <stop offset="0.57" stopColor="#E8B63C" />
        <stop offset="0.92" stopColor="#D08201" />
      </radialGradient>
      <radialGradient
        id="paint6_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(110.44 152.977) scale(58.1674 58.1815)"
      >
        <stop offset="0.14" stopColor="#7C3200" />
        <stop offset="0.57" stopColor="#A65A01" />
        <stop offset="0.92" stopColor="#D08201" />
      </radialGradient>
      <radialGradient
        id="paint7_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(257.759 163.175) scale(168.437 168.478)"
      >
        <stop offset="0.44" stopColor="#FEDA59" />
        <stop offset="0.7" stopColor="#E7AE2D" />
        <stop offset="0.92" stopColor="#D08201" />
      </radialGradient>
      <radialGradient
        id="paint8_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(252.364 29.293) scale(67.2521 229.538)"
      >
        <stop stopColor="#F5BF52" />
        <stop offset="0.53" stopColor="#DB9F2A" />
        <stop offset="0.82" stopColor="#C07F01" />
        <stop offset="0.91" stopColor="#C38301" stopOpacity="0.5" />
        <stop offset="1" stopColor="#C68701" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint9_linear_80_30"
        x1="208.324"
        y1="143.087"
        x2="245.812"
        y2="143.087"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.09" stopColor="#592A00" />
        <stop offset="0.75" stopColor="#6C3600" stopOpacity="0.5" />
        <stop offset="1" stopColor="#7F4200" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_80_30"
        x1="253.804"
        y1="54.081"
        x2="253.804"
        y2="256.531"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.36" stopColor="#A75602" />
        <stop offset="0.61" stopColor="#984F01" />
        <stop offset="0.69" stopColor="#894700" />
        <stop offset="0.87" stopColor="#793900" />
        <stop offset="1" stopColor="#682C00" />
      </linearGradient>
      <radialGradient
        id="paint11_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(252.891 249.009) scale(32.5467 32.5546)"
      >
        <stop offset="0.04" stopColor="#FFC952" />
        <stop offset="0.12" stopColor="#C28B29" />
        <stop offset="0.29" stopColor="#854E00" />
        <stop offset="0.5" stopColor="#C28A29" />
        <stop offset="0.69" stopColor="#FFC752" />
        <stop offset="0.84" stopColor="#FFC752" stopOpacity="0.5" />
        <stop offset="1" stopColor="#FFC852" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint12_linear_80_30"
        x1="250.838"
        y1="302.31"
        x2="252.164"
        y2="332.453"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.14" stopColor="#FED059" />
        <stop offset="0.57" stopColor="#E7A92D" />
        <stop offset="0.92" stopColor="#D08201" />
      </linearGradient>
      <radialGradient
        id="paint13_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(252.148 318.227) scale(13.5245 58.8165)"
      >
        <stop stopColor="#F5BF52" />
        <stop offset="0.33" stopColor="#DB9F2A" />
        <stop offset="0.63" stopColor="#C07F01" />
        <stop offset="0.83" stopColor="#C38301" stopOpacity="0.5" />
        <stop offset="1" stopColor="#C68701" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint14_linear_80_30"
        x1="242.928"
        y1="320.111"
        x2="252.08"
        y2="320.111"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.09" stopColor="#592A00" />
        <stop offset="0.75" stopColor="#6C3600" stopOpacity="0.5" />
        <stop offset="1" stopColor="#7F4200" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint15_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(252.816 352.747) scale(61.9651 61.9801)"
      >
        <stop offset="0.14" stopColor="#FFE978" />
        <stop offset="0.57" stopColor="#E8B63C" />
        <stop offset="0.92" stopColor="#D08201" />
      </radialGradient>
      <radialGradient
        id="paint16_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(388.078 364.152) scale(178.785 178.828)"
      >
        <stop stopColor="#DAA32A" />
        <stop offset="0.18" stopColor="#CD9115" />
        <stop offset="0.56" stopColor="#C07F01" />
        <stop offset="0.8" stopColor="#C38301" stopOpacity="0.5" />
        <stop offset="1" stopColor="#C68701" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint17_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(254.793 349.334) scale(28.5634 28.5703)"
      >
        <stop stopColor="#DAA32A" />
        <stop offset="0.18" stopColor="#CD9115" />
        <stop offset="0.56" stopColor="#C07F01" />
        <stop offset="0.8" stopColor="#C38301" stopOpacity="0.5" />
        <stop offset="1" stopColor="#C68701" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint18_linear_80_30"
        x1="232.053"
        y1="358.681"
        x2="249.262"
        y2="358.681"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.09" stopColor="#592A00" />
        <stop offset="0.75" stopColor="#6C3600" stopOpacity="0.5" />
        <stop offset="1" stopColor="#7F4200" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint19_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(252.816 283.468) scale(31.5362 31.5439)"
      >
        <stop offset="0.44" stopColor="#FCDA5F" />
        <stop offset="0.7" stopColor="#E6AE30" />
        <stop offset="0.92" stopColor="#D08201" />
      </radialGradient>
      <radialGradient
        id="paint20_radial_80_30"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(252.548 279.684) scale(21.2978 21.303)"
      >
        <stop stopColor="#F5BF52" stopOpacity="0" />
        <stop offset="0.33" stopColor="#DB9F2A" stopOpacity="0.5" />
        <stop offset="0.63" stopColor="#C07F01" />
        <stop offset="0.83" stopColor="#C38301" stopOpacity="0.5" />
        <stop offset="1" stopColor="#C68701" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint21_linear_80_30"
        x1="240.951"
        y1="282.531"
        x2="251.451"
        y2="282.531"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.09" stopColor="#592A00" />
        <stop offset="0.75" stopColor="#6C3600" stopOpacity="0.5" />
        <stop offset="1" stopColor="#7F4200" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_80_30">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Place1 = ({width, height}) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <g clipPath="url(#clip0_81_170)">
      <mask
        id="mask0_81_170"
        style={{maskType: 'luminance'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_81_170)">
        <path
          d="M174.432 33.05C178.161 42.7471 200.733 123.204 205.274 129.874C214.433 143.333 226.769 168.941 236.489 168.026C246.023 170.623 252.751 169.128 258.807 167.28C265.521 159.82 269.974 148.049 268.079 130.996C267.333 124.282 245.265 42.3741 240.789 32.675L174.432 33.05Z"
          fill="url(#paint0_linear_81_170)"
        />
        <path
          d="M217.666 32.5351C225.087 50.6201 250.135 150.809 258.807 167.28C265.521 159.82 269.974 148.049 268.079 130.996C267.333 124.282 245.265 42.3731 240.789 32.6741C240.789 32.6741 219.386 32.5071 217.666 32.5351Z"
          fill="url(#paint1_linear_81_170)"
        />
        <path
          d="M174.767 32.488C178.497 42.186 202.394 123.717 206.87 130.432C211.346 137.146 228.731 167.913 243.031 169.034C225.087 140.716 203.488 46.663 199.386 32.488H174.767Z"
          fill="url(#paint2_linear_81_170)"
        />
        <path
          d="M174.432 33.0491C178.161 42.7471 200.734 123.203 205.274 129.874C214.433 143.332 226.77 168.941 236.49 168.026C246.023 170.623 252.751 169.127 258.807 167.28"
          stroke="#091966"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M258.807 167.28C265.521 159.82 269.974 148.05 268.079 130.996C267.333 124.282 245.265 42.374 240.788 32.676"
          stroke="#B21010"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M239.667 160.062C232.377 139.314 205.46 140.717 200.413 119.408"
          stroke="#D3D3D3"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M242.471 162.305C245.555 141.276 211.349 136.51 200.974 118.285"
          stroke="#091966"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M272.931 197.748H226.007V170.263C226.007 164.096 231.007 159.096 237.174 159.096H261.763C267.93 159.096 272.931 164.096 272.931 170.263V197.748Z"
          stroke="#C17017"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M272.931 197.748H226.007V170.263C226.007 164.096 231.007 159.096 237.174 159.096H261.763C267.93 159.096 272.931 164.096 272.931 170.263V197.748Z"
          stroke="#F2C751"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M263.404 158.039C270.001 158.039 275.348 162.714 275.348 168.48V196.691"
          stroke="#FFE98D"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M267.014 33.001C258.062 66.571 234.8 107.469 231.817 118.66C233.308 130.594 240.158 162.557 241.65 169.27C248.363 170.762 256.13 170.762 262.099 170.016C267.321 164.795 283.67 145.496 291.876 139.528C300.083 133.56 305.101 123.116 309.577 109.688C314.052 96.26 333.511 42.699 337.241 33.001C334.403 32.844 311.455 32.894 303.526 33.001"
          fill="url(#paint3_linear_81_170)"
        />
        <path
          d="M239.41 162.742C241.275 170.762 260.792 174.492 267.506 164.234C258.927 166.659 262.783 156.859 257.314 157.147C252.59 157.396 245.564 165.166 239.41 162.742Z"
          fill="#D4D2CD"
        />
        <path
          d="M307.401 32.9049C302.426 62.0949 275.556 144.643 259.574 170.157C265.742 167.353 283.669 145.496 291.875 139.528C300.082 133.56 305.1 123.116 309.576 109.688C314.051 96.2599 333.51 42.6999 337.24 33.0019C334.398 32.8439 312.451 32.8369 307.401 32.9049Z"
          fill="url(#paint4_linear_81_170)"
        />
        <path
          d="M231.817 118.66C235.742 133.146 239.668 169.595 243.873 170.716C248.08 137.632 276.68 86.9109 285.415 32.7519C278.7 32.7519 267.014 33.0009 259.927 32.6279C252.467 74.4039 234.8 107.469 231.817 118.66Z"
          fill="url(#paint5_linear_81_170)"
        />
        <path
          d="M241.649 169.27C248.363 170.762 256.13 170.762 262.099 170.016"
          stroke="#9B9B9B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M259.428 33.001C252.714 76.269 234.8 107.47 231.817 118.66C233.308 130.596 240.157 162.557 241.649 169.271"
          stroke="#15236B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M262.098 170.016C267.32 164.794 283.669 145.495 291.875 139.527C300.081 133.559 305.1 123.115 309.576 109.687C314.051 96.2591 334.256 44.191 337.24 33.498"
          stroke="#C61717"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M114.279 321.716C114.279 398.317 176.378 460.415 252.977 460.415C329.577 460.415 391.675 398.317 391.675 321.716C391.675 245.117 329.577 183.019 252.977 183.019C176.378 183.019 114.279 245.117 114.279 321.716Z"
          fill="url(#paint6_linear_81_170)"
        />
        <path
          d="M114.279 321.716C114.279 398.317 176.378 460.415 252.977 460.415C329.577 460.415 391.675 398.317 391.675 321.716C391.675 245.117 329.577 183.019 252.977 183.019C176.378 183.019 114.279 245.117 114.279 321.716Z"
          fill="url(#paint7_radial_81_170)"
        />
        <path
          d="M114.279 321.716C114.279 398.317 176.378 460.415 252.977 460.415C329.577 460.415 391.675 398.317 391.675 321.716C391.675 245.117 329.577 183.019 252.977 183.019C176.378 183.019 114.279 245.117 114.279 321.716Z"
          fill="url(#paint8_radial_81_170)"
        />
        <path
          d="M252.977 183.019V195.696C322.576 195.696 378.998 252.118 378.998 321.717C378.998 391.317 322.576 447.738 252.977 447.738C183.379 447.738 126.957 391.317 126.957 321.717C126.957 252.118 183.379 195.696 252.977 195.696V183.019C176.378 183.019 114.279 245.118 114.279 321.717C114.279 398.318 176.378 460.415 252.977 460.415C329.577 460.415 391.675 398.318 391.675 321.717C391.675 245.118 329.577 183.019 252.977 183.019Z"
          fill="url(#paint9_linear_81_170)"
        />
        <path
          d="M252.977 183.717C329.139 183.717 390.977 245.555 390.977 321.717C390.977 397.879 329.139 459.717 252.977 459.717C176.814 459.717 114.977 397.879 114.977 321.717C114.977 245.555 176.814 183.717 252.977 183.717Z"
          stroke="#AA6100"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0.15">
          <path
            d="M185.485 258.624V325.96L226.133 298.104V412.94L287.661 412.692V226.27H235.29L185.485 258.624Z"
            fill="#5E1200"
          />
        </g>
        <path
          d="M190.339 262.032L207.49 275.484L251.859 258.334L237.356 231.49L190.339 262.032Z"
          fill="url(#paint10_linear_81_170)"
        />
        <path
          d="M190.34 316.622L214.202 288.907L213.457 273.248L190.34 262.032V316.622Z"
          fill="url(#paint11_linear_81_170)"
        />
        <path
          d="M245.521 260.572L230.623 288.923L231.354 407.471H282.806V231.489L245.521 260.572Z"
          fill="url(#paint12_linear_81_170)"
        />
        <path
          d="M210.473 282.197L190.34 316.622L230.622 288.923L244.03 264.3L210.473 282.197Z"
          fill="url(#paint13_linear_81_170)"
        />
        <path
          d="M237.357 231.49L241.046 249.386L267.891 247.895L282.806 231.49H237.357Z"
          fill="url(#paint14_linear_81_170)"
        />
        <path
          d="M245.024 396.038L231.353 407.471H282.805L267.891 396.038H245.024Z"
          fill="url(#paint15_linear_81_170)"
        />
        <path
          d="M239.734 241.789L199.164 267.492V301.15L239.734 270.805V400.201H273.67V241.789H239.734Z"
          fill="url(#paint16_linear_81_170)"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_81_170"
        x1="209"
        y1="38"
        x2="228.532"
        y2="106.553"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.5" stopColor="#E9E9E9" />
        <stop offset="1" stopColor="#D3D3D3" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_81_170"
        x1="227"
        y1="23.0001"
        x2="243.428"
        y2="83.2361"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF4040" />
        <stop offset="0.5" stopColor="#E62020" />
        <stop offset="1" stopColor="#CD0100" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_81_170"
        x1="193"
        y1="52"
        x2="220.574"
        y2="139.702"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3142A8" />
        <stop offset="0.01" stopColor="#3142A8" />
        <stop offset="0.51" stopColor="#2C399B" />
        <stop offset="1" stopColor="#262F8D" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_81_170"
        x1="294.001"
        y1="41"
        x2="258.001"
        y2="170.447"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.5" stopColor="#F5F4F1" />
        <stop offset="1" stopColor="#EBE9E3" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_81_170"
        x1="317"
        y1="45.9999"
        x2="271.809"
        y2="167.788"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF4040" />
        <stop offset="0.5" stopColor="#FF3632" />
        <stop offset="1" stopColor="#FF2B24" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_81_170"
        x1="271"
        y1="45.9999"
        x2="233.469"
        y2="153.234"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3142A8" />
        <stop offset="0.01" stopColor="#3142A8" />
        <stop offset="0.51" stopColor="#2A3CA1" />
        <stop offset="1" stopColor="#23379B" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_81_170"
        x1="167"
        y1="214"
        x2="336.532"
        y2="430"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D38D00" />
        <stop offset="0.26" stopColor="#E28C02" />
        <stop offset="0.52" stopColor="#F28B03" />
        <stop offset="0.76" stopColor="#E38F02" />
        <stop offset="1" stopColor="#D49201" />
      </linearGradient>
      <radialGradient
        id="paint7_radial_81_170"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(185 391) scale(193.413)"
      >
        <stop stopColor="#FFE20D" />
        <stop offset="0.04" stopColor="#FFE20D" />
        <stop offset="0.07" stopColor="#FFE20D" />
        <stop offset="0.54" stopColor="#F9BD09" stopOpacity="0.55" />
        <stop offset="1" stopColor="#F49806" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient
        id="paint8_radial_81_170"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(343 244) scale(178.246)"
      >
        <stop stopColor="#FFE20D" />
        <stop offset="0.05" stopColor="#FFE20D" />
        <stop offset="0.09" stopColor="#FFE20D" />
        <stop offset="0.55" stopColor="#F5B20F" stopOpacity="0.5" />
        <stop offset="1" stopColor="#EA8211" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint9_linear_81_170"
        x1="166"
        y1="213"
        x2="337.192"
        y2="429.383"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F5E827" stopOpacity="0" />
        <stop offset="0.26" stopColor="#FAEE2A" stopOpacity="0.5" />
        <stop offset="0.52" stopColor="#FFF42C" />
        <stop offset="0.76" stopColor="#FAEE2A" stopOpacity="0.5" />
        <stop offset="1" stopColor="#F5E827" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_81_170"
        x1="200"
        y1="271"
        x2="253.138"
        y2="240.002"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8BC05" />
        <stop offset="0.01" stopColor="#E8BC05" />
        <stop offset="0.02" stopColor="#E8BC05" />
        <stop offset="0.52" stopColor="#EBBE07" />
        <stop offset="1" stopColor="#EDC10A" />
      </linearGradient>
      <linearGradient
        id="paint11_linear_81_170"
        x1="202"
        y1="267"
        x2="202.255"
        y2="312.957"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EEC108" />
        <stop offset="0.01" stopColor="#EEC108" />
        <stop offset="0.5" stopColor="#F7D132" />
        <stop offset="1" stopColor="#FFE05C" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_81_170"
        x1="262.001"
        y1="325"
        x2="336.298"
        y2="396.744"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEFABE" />
        <stop offset="0.5" stopColor="#F9E56C" />
        <stop offset="1" stopColor="#F4D11B" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_81_170"
        x1="212"
        y1="282"
        x2="220.17"
        y2="298.085"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F1CB48" />
        <stop offset="0.01" stopColor="#F1CB48" />
        <stop offset="0.51" stopColor="#F3D055" />
        <stop offset="1" stopColor="#F4D463" />
      </linearGradient>
      <linearGradient
        id="paint14_linear_81_170"
        x1="250.001"
        y1="240"
        x2="273.235"
        y2="237.192"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F1CD09" />
        <stop offset="0.01" stopColor="#F1CD09" />
        <stop offset="0.5" stopColor="#F2D237" />
        <stop offset="1" stopColor="#F3D864" />
      </linearGradient>
      <linearGradient
        id="paint15_linear_81_170"
        x1="257"
        y1="418.999"
        x2="256.553"
        y2="401.319"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E5C536" />
        <stop offset="0.01" stopColor="#E5C536" />
        <stop offset="0.51" stopColor="#E3C329" />
        <stop offset="1" stopColor="#E1C01B" />
      </linearGradient>
      <linearGradient
        id="paint16_linear_81_170"
        x1="236"
        y1="243.001"
        x2="236"
        y2="397.979"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FBE17B" />
        <stop offset="0.51" stopColor="#FADF76" />
        <stop offset="1" stopColor="#F9DE71" />
      </linearGradient>
      <clipPath id="clip0_81_170">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Place2 = ({width, height}) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <g clipPath="url(#clip0_81_247)">
      <mask
        id="mask0_81_247"
        style={{maskType: 'luminance'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_81_247)">
        <path
          d="M174.432 33.0499C178.161 42.7469 201.021 122.138 205.562 128.808C214.721 142.267 227.107 168.552 236.827 167.637C246.361 170.234 252.751 168.857 258.807 167.009C265.521 159.549 269.974 148.049 268.079 130.996C267.333 124.282 245.798 42.3819 241.322 32.6829L174.432 33.0499Z"
          fill="url(#paint0_linear_81_247)"
        />
        <path
          d="M218.266 32.7381C225.687 50.8231 250.135 150.538 258.807 167.009C265.521 159.549 269.974 148.049 268.079 130.996C267.333 124.282 245.781 42.3781 241.305 32.6791C241.305 32.6791 219.902 32.5071 218.182 32.5351"
          fill="url(#paint1_linear_81_247)"
        />
        <path
          d="M174.767 32.488C178.497 42.186 202.631 122.618 207.107 129.333C211.583 136.047 228.664 167.918 243.2 168.56C225.96 140.464 204.808 49.832 199.707 32.47L174.767 32.488Z"
          fill="url(#paint2_linear_81_247)"
        />
        <path
          d="M174.432 33.0491C178.161 42.7471 201.258 122.526 205.798 129.197C214.957 142.655 227.175 168.518 236.895 167.603C246.428 170.2 252.751 168.856 258.807 167.009"
          stroke="#091966"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M258.807 167.01C265.521 159.55 269.974 148.05 268.079 130.996C267.333 124.282 245.806 42.3699 241.329 32.6719"
          stroke="#B21010"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M240.462 159.741C233.172 138.993 206.68 140.803 201.343 119.458"
          stroke="#D3D3D3"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M243.181 162.254C246.265 141.225 211.941 136.155 201.566 117.93"
          stroke="#091966"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M272.468 196.876C271.736 196.181 226.64 196.085 226.64 196.085L226.679 169.868C226.687 163.693 231.699 158.694 237.874 158.702L261.344 158.735C267.519 158.744 272.518 163.757 272.51 169.932C272.51 169.932 272.463 196.351 272.468 196.876Z"
          stroke="#6D6D6D"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M272.468 196.859C271.525 196.096 226.64 196.085 226.64 196.085L226.679 169.868C226.687 163.693 231.699 158.694 237.874 158.702L261.344 158.735C267.519 158.744 272.518 163.757 272.51 169.932C272.51 169.932 272.462 196.647 272.468 196.859Z"
          stroke="#B0B0B0"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M262.988 157.68C269.592 157.69 274.94 162.377 274.932 168.15L274.893 195.096"
          stroke="#E6EAEB"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M118.608 332.333C124.317 408.799 188.419 465.957 261.781 459.998C335.144 454.039 389.988 387.219 384.279 310.753C378.57 234.287 314.471 177.131 241.107 183.09C167.745 189.049 112.899 255.867 118.608 332.333Z"
          fill="url(#paint3_linear_81_247)"
        />
        <path
          d="M119.167 338.208C127.989 414.352 194.365 468.618 267.418 459.414C340.472 450.21 392.541 381.022 383.719 304.878C374.898 228.734 308.525 174.47 235.471 183.674C162.418 192.877 110.345 262.065 119.167 338.208Z"
          fill="url(#paint4_radial_81_247)"
        />
        <path
          d="M119.075 337.392C127.464 413.589 193.531 468.264 266.635 459.511C339.74 450.757 392.201 381.891 383.811 305.694C375.422 229.497 309.359 174.824 236.254 183.577C163.15 192.331 110.685 261.196 119.075 337.392Z"
          fill="url(#paint5_radial_81_247)"
        />
        <path
          d="M263.421 183.23C262.3 183.124 261.179 183.035 260.062 182.959L258.967 195.606C260.084 195.679 261.204 195.766 262.327 195.872C328.914 202.128 378.024 263.465 372.014 332.871C366.003 402.278 307.15 453.471 240.562 447.214C173.973 440.958 124.865 379.622 130.875 310.215C136.784 241.979 193.769 191.349 258.967 195.606L260.062 182.959C188.164 178.076 125.26 233.856 118.747 309.075C112.132 385.464 166.18 452.97 239.467 459.856C312.754 466.742 377.527 410.399 384.142 334.011C390.757 257.622 336.708 190.116 263.421 183.23Z"
          fill="url(#paint6_linear_81_247)"
        />
        <mask
          id="mask1_81_247"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="118"
          y="182"
          width="267"
          height="279"
        >
          <path
            d="M251.473 182.702C325.015 182.805 384.638 245.084 384.531 321.688C384.424 398.291 324.627 460.404 251.085 460.302C177.544 460.199 117.92 397.919 118.027 321.316C118.134 244.712 177.931 182.599 251.473 182.702Z"
            fill="url(#paint7_linear_81_247)"
          />
        </mask>
        <g mask="url(#mask1_81_247)">
          <path
            d="M251.473 182.702C325.015 182.805 384.638 245.084 384.531 321.688C384.424 398.291 324.627 460.404 251.085 460.302C177.544 460.199 117.92 397.919 118.027 321.316C118.134 244.712 177.931 182.599 251.473 182.702Z"
            fill="url(#paint8_linear_81_247)"
            fillOpacity="0.61"
          />
        </g>
        <path
          d="M251.473 182.702C325.015 182.805 384.638 245.084 384.531 321.688C384.424 398.291 324.627 460.404 251.085 460.302C177.544 460.199 117.92 397.919 118.027 321.316C118.134 244.712 177.931 182.599 251.473 182.702Z"
          stroke="#666666"
          strokeWidth="8"
        />
        <g opacity="0.15">
          <path
            d="M188.988 297.564L237.698 297.632C237.708 290.759 238.442 274.487 250.625 274.504C257.788 274.514 265.304 278.632 262.066 288.707C259.908 295.423 229.778 327.113 188.37 366.626L188.319 403.21L316.645 403.389L316.71 357.1C311.13 357.092 287.915 356.686 264.837 356.654C292.814 327.574 313.604 315.085 313.653 280.192C313.694 250.586 289.729 228.268 253.554 228.217C220.585 228.171 185.117 248.281 188.988 297.564Z"
            fill="black"
          />
        </g>
        <path
          d="M191.978 293.586L233.285 293.644C233.295 287.173 235.229 270.501 250.033 270.521C264.836 270.542 267.658 280.676 265.766 288.71C263.364 298.912 232.282 329.48 192.113 368.001L192.069 399.359L312.89 399.527L312.944 360.703L256.354 360.624C285.769 328.309 309.666 313.413 309.712 280.561C309.751 252.686 285.904 231.249 253.908 231.205C222.868 231.161 191.799 250.53 191.978 293.586Z"
          fill="url(#paint9_linear_81_247)"
        />
        <path
          d="M191.978 293.586L233.285 293.644C233.295 287.173 235.229 270.501 250.033 270.521C264.836 270.542 267.658 280.676 265.766 288.71C263.364 298.912 232.282 329.48 192.113 368.001L192.069 399.359L312.89 399.527L312.944 360.703L256.354 360.624C285.769 328.309 309.666 313.413 309.712 280.561C309.751 252.686 285.904 231.249 253.908 231.205C222.868 231.161 191.799 250.53 191.978 293.586Z"
          fill="url(#paint10_radial_81_247)"
        />
        <path
          d="M191.978 293.585L233.286 293.643L225.186 280.442L203.695 281.407L191.978 293.585Z"
          fill="#B9B9B9"
        />
        <path
          d="M192.113 368.001L192.069 399.359L290.948 380.583L312.944 360.703L256.354 360.624L218.84 378.988L192.113 368.001Z"
          fill="#D3D3D3"
        />
        <path
          d="M192.069 399.358L312.89 399.526C308.122 393.547 299.062 384.077 293.343 376.105C290.019 376.1 238.131 378.453 209.759 384.947C203.544 389.916 196.371 395.88 192.069 399.358Z"
          fill="#A6A6A6"
        />
        <path
          d="M197.956 287.87C204.469 287.879 222.963 287.158 229.476 287.167C230.446 275.969 235.474 265.771 250.516 266.042C266.989 266.337 274.126 279.086 271.02 289.465C266.702 303.894 242.792 326.756 198.317 370.995C198.309 376.878 197.816 388.414 197.809 393.392L307.407 393.546L307.445 366.42L244.168 366.331C287.211 321.344 303.75 307.3 304.458 282.045C305.212 255.167 281.598 237.215 253.781 237.176C225.556 237.137 198.48 254.271 197.956 287.87Z"
          fill="url(#paint11_linear_81_247)"
        />
        <mask
          id="mask2_81_247"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="197"
          y="237"
          width="111"
          height="157"
        >
          <path
            d="M197.956 287.87C204.469 287.879 222.963 287.158 229.476 287.167C230.446 275.969 235.474 265.771 250.516 266.042C266.989 266.337 274.126 279.086 271.02 289.465C266.702 303.894 242.792 326.756 198.317 370.995C198.309 376.878 197.816 388.414 197.809 393.392L307.407 393.546L307.445 366.42L244.168 366.331C287.211 321.344 303.75 307.3 304.458 282.045C305.212 255.167 281.598 237.215 253.781 237.176C225.556 237.137 198.48 254.271 197.956 287.87Z"
            fill="url(#paint12_linear_81_247)"
          />
        </mask>
        <g mask="url(#mask2_81_247)">
          <path
            d="M197.956 287.87C204.469 287.879 222.963 287.158 229.476 287.167C230.446 275.969 235.474 265.771 250.516 266.042C266.989 266.337 274.126 279.086 271.02 289.465C266.702 303.894 242.792 326.756 198.317 370.995C198.309 376.878 197.816 388.414 197.809 393.392L307.407 393.546L307.445 366.42L244.168 366.331C287.211 321.344 303.75 307.3 304.458 282.045C305.212 255.167 281.598 237.215 253.781 237.176C225.556 237.137 198.48 254.271 197.956 287.87Z"
            fill="url(#paint13_linear_81_247)"
          />
        </g>
        <path
          d="M303.526 33.001C289.792 33.188 275.593 33.375 267.014 33.001C258.062 66.571 234.959 107.51 231.97 118.677C233.153 130.537 240.225 162.387 241.717 169.1C248.43 170.592 255.681 170.6 261.65 169.854C266.872 164.633 283.67 145.495 291.876 139.527C300.083 133.559 305.101 123.115 309.577 109.687C314.052 96.259 333.511 42.699 337.241 33.001C334.403 32.844 311.455 32.894 303.526 33.001Z"
          fill="url(#paint14_linear_81_247)"
        />
        <path
          d="M239.478 162.573C241.343 170.593 260.149 174.475 266.863 164.217C258.284 166.642 262.426 156.023 257.72 155.337C252.499 156.151 245.632 164.997 239.478 162.573Z"
          fill="#D4D2CD"
        />
        <path
          d="M307.689 32.8882C302.714 62.0782 275.133 144.338 259.151 169.852C265.319 167.048 283.669 145.495 291.875 139.527C300.082 133.559 305.1 123.115 309.576 109.687C314.051 96.2592 333.781 42.6982 337.511 33.0002C334.669 32.8422 312.739 32.8202 307.689 32.8882Z"
          fill="url(#paint15_linear_81_247)"
        />
        <path
          d="M232.037 118.728C235.574 132.849 239.634 169.054 243.839 170.175C248.046 137.091 276.747 86.9111 285.482 32.7521C278.767 32.7521 267.301 32.9841 260.214 32.6111C252.754 74.3871 235.071 107.452 232.088 118.643"
          fill="url(#paint16_linear_81_247)"
        />
        <path
          d="M241.582 168.695C248.221 170.609 255.69 170.644 261.659 169.898"
          stroke="#9B9B9B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M259.784 33.001C253.07 76.269 234.874 107.392 231.987 118.643C233.271 130.589 240.022 161.812 241.514 168.526"
          stroke="#15236B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M261.591 169.847C266.813 164.625 283.669 145.495 291.875 139.527C300.081 133.559 305.1 123.115 309.576 109.687C314.051 96.2591 334.645 44.191 337.629 33.498"
          stroke="#C61717"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_81_247"
        x1="209"
        y1="37.9999"
        x2="228.532"
        y2="106.553"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.5" stopColor="#E9E9E9" />
        <stop offset="1" stopColor="#D3D3D3" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_81_247"
        x1="227"
        y1="23.0001"
        x2="243.428"
        y2="83.2371"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF4040" />
        <stop offset="0.5" stopColor="#E62020" />
        <stop offset="1" stopColor="#CD0100" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_81_247"
        x1="193"
        y1="52"
        x2="220.574"
        y2="139.702"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3142A8" />
        <stop offset="0.01" stopColor="#3142A8" />
        <stop offset="0.51" stopColor="#2C399B" />
        <stop offset="1" stopColor="#262F8D" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_81_247"
        x1="131.849"
        y1="255.489"
        x2="378.224"
        y2="382.027"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#79797A" />
        <stop offset="0.24" stopColor="#8D8D8D" />
        <stop offset="0.48" stopColor="#A0A0A0" />
        <stop offset="0.74" stopColor="#919191" />
        <stop offset="1" stopColor="#828282" />
      </linearGradient>
      <radialGradient
        id="paint4_radial_81_247"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(217.212 377.689) rotate(-7.18076) scale(133.322 138.786)"
      >
        <stop offset="0.16" stopColor="#AFAFAF" />
        <stop offset="0.31" stopColor="#AFAFAF" stopOpacity="0.5" />
        <stop offset="0.6" stopColor="#AFAFAF" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint5_radial_81_247"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(348.131 245.003) rotate(-6.82784) scale(154.445 160.793)"
      >
        <stop offset="0.04" stopColor="#BCBCBC" />
        <stop offset="0.34" stopColor="#BCBCBC" stopOpacity="0.5" />
        <stop offset="0.62" stopColor="#BCBCBC" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint6_linear_81_247"
        x1="183.167"
        y1="196.105"
        x2="326.085"
        y2="441.564"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.07" stopColor="#D9D9D9" stopOpacity="0.1" />
        <stop offset="0.29" stopColor="#D9D9D9" stopOpacity="0.55" />
        <stop offset="0.51" stopColor="#D9D9D9" />
        <stop offset="0.72" stopColor="#D9D9D9" stopOpacity="0.55" />
        <stop offset="0.94" stopColor="#D9D9D9" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_81_247"
        x1="328.195"
        y1="237.155"
        x2="383.91"
        y2="178.402"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.21" stopColor="white" stopOpacity="0" />
        <stop offset="0.4" stopColor="white" stopOpacity="0.5" />
        <stop offset="0.5" stopColor="white" />
        <stop offset="0.61" stopColor="white" stopOpacity="0.5" />
        <stop offset="0.83" stopColor="white" stopOpacity="0" />
        <stop offset="0.84" stopColor="white" stopOpacity="0" />
        <stop offset="0.85" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_81_247"
        x1="328.195"
        y1="237.155"
        x2="383.91"
        y2="178.402"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.25" stopColor="white" />
        <stop offset="0.5" stopColor="white" />
        <stop offset="0.75" stopColor="white" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_81_247"
        x1="190.414"
        y1="258.916"
        x2="272.302"
        y2="350.894"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D0D0D0" />
        <stop offset="0.35" stopColor="#DEDEDE" />
        <stop offset="0.69" stopColor="#ECECEC" />
        <stop offset="0.84" stopColor="#CACACA" />
        <stop offset="1" stopColor="#A9A9A9" />
      </linearGradient>
      <radialGradient
        id="paint10_radial_81_247"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(251.842 240.002) rotate(0.08) scale(61.8423 64.4586)"
      >
        <stop stopColor="#AFAFAF" />
        <stop offset="0.5" stopColor="#ACACAC" stopOpacity="0.5" />
        <stop offset="1" stopColor="#AAAAAA" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint11_linear_81_247"
        x1="226.884"
        y1="249.967"
        x2="266.745"
        y2="381.256"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D3D3D3" />
        <stop offset="0.51" stopColor="#D0D0D0" />
        <stop offset="1" stopColor="#CDCDCD" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_81_247"
        x1="301.154"
        y1="258.596"
        x2="361.043"
        y2="195.644"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.3" stopColor="white" stopOpacity="0" />
        <stop offset="0.34" stopColor="white" stopOpacity="0.5" />
        <stop offset="0.37" stopColor="white" />
        <stop offset="0.44" stopColor="white" />
        <stop offset="0.6" stopColor="white" />
        <stop offset="0.64" stopColor="white" stopOpacity="0.5" />
        <stop offset="0.68" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_81_247"
        x1="301.154"
        y1="258.596"
        x2="361.043"
        y2="195.644"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.25" stopColor="white" />
        <stop offset="0.5" stopColor="white" />
        <stop offset="0.75" stopColor="white" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint14_linear_81_247"
        x1="294.001"
        y1="41"
        x2="258.001"
        y2="170.447"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.5" stopColor="#F5F4F1" />
        <stop offset="1" stopColor="#EBE9E3" />
      </linearGradient>
      <linearGradient
        id="paint15_linear_81_247"
        x1="317"
        y1="46.0002"
        x2="271.809"
        y2="167.787"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF4040" />
        <stop offset="0.5" stopColor="#FF3632" />
        <stop offset="1" stopColor="#FF2B24" />
      </linearGradient>
      <linearGradient
        id="paint16_linear_81_247"
        x1="271"
        y1="46.0001"
        x2="233.469"
        y2="153.234"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3142A8" />
        <stop offset="0.01" stopColor="#3142A8" />
        <stop offset="0.51" stopColor="#2A3CA1" />
        <stop offset="1" stopColor="#23379B" />
      </linearGradient>
      <clipPath id="clip0_81_247">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Place3 = ({width, height}) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <g clipPath="url(#clip0_81_325)">
      <mask
        id="mask0_81_325"
        style={{maskType: 'luminance'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_81_325)">
        <path
          d="M175.691 33.0501C179.42 42.7471 201.229 131.221 205.657 137.845C214.499 150.958 227.018 178.22 236.508 177.554C245.82 180.245 252.427 178.777 258.483 176.929C265.197 169.469 269.319 156.241 267.424 139.188C266.678 132.474 245.574 42.3681 241.098 32.6691L175.691 33.0501Z"
          fill="url(#paint0_linear_81_325)"
        />
        <path
          d="M218.504 32.699C226.265 60.304 249.811 160.458 258.483 176.929C265.197 169.469 269.308 156.23 267.413 139.177C266.667 132.463 245.596 42.375 241.12 32.676C241.12 32.676 220.225 32.502 218.505 32.53"
          fill="url(#paint1_linear_81_325)"
        />
        <path
          d="M176.026 32.4871C179.756 42.1851 202.804 131.618 207.198 138.326C211.592 145.034 228.727 177.551 243.027 178.672C225.083 150.354 204.426 46.6621 200.324 32.4871H176.026Z"
          fill="url(#paint2_linear_81_325)"
        />
        <path
          d="M175.712 33.052C179.441 42.75 201.24 130.646 205.678 137.735C214.531 151.311 227.128 178.352 236.618 177.675C245.929 180.355 252.575 178.872 258.505 176.973"
          stroke="#091966"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M258.505 176.907C265.219 169.447 269.319 156.208 267.424 139.154C266.678 132.44 245.607 42.3711 241.13 32.6731"
          stroke="#B21010"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M239.752 169.59C232.462 148.842 206.475 149.594 201.428 128.285"
          stroke="#D3D3D3"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M242.434 171.932C245.518 150.903 212.172 145.233 201.655 126.776"
          stroke="#091966"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M273.973 207.271H227.038L227.478 180.695C227.478 174.527 232.478 169.526 238.647 169.526H262.215C268.383 169.526 273.384 174.527 273.384 180.695L273.973 207.271Z"
          stroke="#B24610"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M273.973 207.271H227.038L227.478 180.695C227.478 174.527 232.478 169.526 238.647 169.526H262.215C268.383 169.526 273.384 174.527 273.384 180.695L273.973 207.271Z"
          stroke="#EF9737"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M263.854 168.469C270.453 168.469 275.801 173.144 275.801 178.911L276.39 206.214"
          stroke="#FFCD44"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M302.664 33.0071C288.93 33.1941 275.063 33.3771 266.484 33.0031C257.629 66.5681 235.09 115.799 232.107 126.99C233.598 138.924 240.414 172.167 241.906 178.88C248.619 180.372 255.9 180.306 261.869 179.56C267.091 174.339 283.09 154.832 291.094 148.409C299.099 141.986 304.067 130.695 308.353 117.3C312.638 103.905 331.81 42.7011 335.54 33.0031C332.702 32.8461 310.45 32.8961 302.521 33.0031"
          fill="url(#paint3_linear_81_325)"
        />
        <path
          d="M239.578 172.342C241.443 180.362 260.562 184.059 267.276 173.801C258.697 176.226 262.918 163.004 257.449 163.292C252.725 163.541 245.754 174.49 239.6 172.066"
          fill="#D4D2CD"
        />
        <path
          d="M306.354 32.9291C301.379 62.1191 275.326 154.187 259.344 179.701C265.512 176.897 282.99 154.789 291.06 148.421C299.131 142.053 304.001 130.673 308.364 117.366C312.726 104.059 331.821 42.6991 335.551 33.0011C332.709 32.8431 311.391 32.8291 306.341 32.8971"
          fill="url(#paint4_linear_81_325)"
        />
        <path
          d="M232.129 127.013C235.845 141.283 239.835 179.007 244.04 180.128C248.247 147.044 276.052 86.9151 284.787 32.7561C278.072 32.7561 266.793 32.9991 259.706 32.6261C252.246 74.4021 235.101 115.7 232.118 126.891"
          fill="url(#paint5_linear_81_325)"
        />
        <path
          d="M241.645 179.109C248.122 180.623 255.711 180.656 261.52 179.866"
          stroke="#9B9B9B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M259.23 33.0071C252.516 76.2751 235.105 114.976 232.118 126.979C233.408 139.695 240.403 172.157 241.895 178.871"
          stroke="#15236B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M261.769 179.605C266.991 174.383 282.902 155.396 291.038 148.354C299.174 141.312 303.968 130.861 308.32 117.377C312.671 103.893 332.545 44.191 335.529 33.498"
          stroke="#C61717"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M392.751 326.231C392.751 400.498 330.638 460.704 254.016 460.704C177.395 460.704 115.279 400.498 115.279 326.231C115.279 251.963 177.395 191.758 254.016 191.758C330.638 191.758 392.751 251.963 392.751 326.231Z"
          fill="#BC6529"
        />
        <path
          d="M115.485 333.581C119.673 407.737 185.091 464.562 261.597 460.503C338.105 456.444 396.73 393.038 392.542 318.882C388.355 244.724 322.94 187.9 246.432 191.959C169.926 196.018 111.298 259.423 115.485 333.581Z"
          fill="url(#paint6_linear_81_325)"
        />
        <path
          d="M115.502 333.869C119.854 408.016 185.397 464.705 261.895 460.487C338.393 456.269 396.878 392.741 392.526 318.593C388.174 244.445 322.633 187.757 246.135 191.975C169.638 196.193 111.15 259.72 115.502 333.869Z"
          fill="url(#paint7_linear_81_325)"
        />
        <path
          d="M115.726 337.034C121.882 411.062 188.787 466.236 265.161 460.269C341.535 454.303 398.457 389.455 392.301 315.428C386.146 241.4 319.243 186.226 242.869 192.193C166.496 198.159 109.571 263.006 115.726 337.034Z"
          fill="url(#paint8_radial_81_325)"
        />
        <path
          d="M115.502 333.869C119.854 408.016 185.397 464.705 261.895 460.487C338.393 456.269 396.878 392.741 392.526 318.593C388.174 244.445 322.633 187.757 246.135 191.975C169.638 196.193 111.15 259.72 115.502 333.869Z"
          fill="url(#paint9_radial_81_325)"
        />
        <path
          d="M246.772 191.948L247.493 204.218C316.724 200.735 375.925 252.127 379.867 319.291C383.821 386.662 330.68 444.384 261.174 448.216C191.668 452.049 132.117 400.541 128.163 333.171C124.209 265.8 177.349 208.078 246.855 204.246C247.068 204.234 247.28 204.229 247.493 204.218L246.772 191.948C246.56 191.958 246.348 191.963 246.135 191.975C169.638 196.193 111.152 259.72 115.504 333.869C119.856 408.016 185.397 464.705 261.895 460.487C338.393 456.269 396.878 392.741 392.526 318.593C388.186 244.651 322.997 188.079 246.772 191.948Z"
          fill="url(#paint10_linear_81_325)"
        />
        <mask
          id="mask1_81_325"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="115"
          y="191"
          width="278"
          height="270"
        >
          <path
            d="M254 191.79C330.548 191.79 392.7 252.042 392.7 326.251C392.7 400.46 330.548 460.712 254 460.712C177.451 460.712 115.3 400.46 115.3 326.251C115.3 252.042 177.451 191.79 254 191.79Z"
            fill="url(#paint11_linear_81_325)"
          />
        </mask>
        <g mask="url(#mask1_81_325)">
          <path
            d="M254 191.79C330.548 191.79 392.7 252.042 392.7 326.251C392.7 400.46 330.548 460.712 254 460.712C177.451 460.712 115.3 400.46 115.3 326.251C115.3 252.042 177.451 191.79 254 191.79Z"
            fill="url(#paint12_linear_81_325)"
            fillOpacity="0.74"
          />
        </g>
        <path
          d="M254 191.79C330.548 191.79 392.7 252.042 392.7 326.251C392.7 400.46 330.548 460.712 254 460.712C177.451 460.712 115.3 400.46 115.3 326.251C115.3 252.042 177.451 191.79 254 191.79Z"
          stroke="#762801"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0.3">
          <path
            d="M183.861 303.743H233.668C234.125 294.727 236.064 282.15 251.031 281.592C260.727 281.231 264.83 285.207 264.457 292.076C264.103 298.589 258.863 302.197 249.659 302.197H218.958V344.853H249.659C258.873 344.853 267.192 347.744 267.441 357.143C267.619 363.889 261.97 367.506 252.026 367.506C239.591 367.506 231.375 358.747 229.649 348.709H179.073C178.68 375.459 195.09 416.668 255.009 416.668C297.071 416.668 322.885 392.087 323.735 362.223C324.23 344.837 316.421 326.779 299.762 320.994C309.211 318.826 321.393 301.957 318.232 280.303C315.088 258.768 292.025 235.924 251.031 235.924C213.058 235.924 183.652 260.747 183.861 303.743Z"
            fill="#5B0000"
          />
        </g>
        <path
          d="M187.523 300.389H230.893C230.893 294.041 232.771 278.743 252.525 277.977C261.848 277.617 266.899 283.452 267.814 290.991C268.56 297.136 262.593 305.089 249.749 305.089H221.942V341.961H249.749C258.491 341.961 270.053 345.575 270.053 356.059C270.053 364.372 266.126 370.156 251.387 370.156C236.114 370.156 229.174 360.883 227.536 351.36H182.784C182.784 374.856 197.874 413.536 254.762 413.536C294.667 413.536 320.027 390.157 320.027 360.396C320.027 342.322 310.702 326.416 294.293 321.267C303.989 319.186 317.417 305.089 314.805 282.677C312.417 262.173 291.915 239.661 253.023 239.661C216.998 239.661 187.631 262.072 187.523 300.389Z"
          fill="url(#paint13_linear_81_325)"
        />
        <path
          d="M187.523 300.389H230.893C230.893 294.041 232.771 278.743 252.525 277.977C261.848 277.617 266.899 283.452 267.814 290.991C268.56 297.136 262.593 305.089 249.749 305.089H221.942V341.961H249.749C258.491 341.961 270.053 345.575 270.053 356.059C270.053 364.372 266.126 370.156 251.387 370.156C236.114 370.156 229.174 360.883 227.536 351.36H182.784C182.784 374.856 197.874 413.536 254.762 413.536C294.667 413.536 320.027 390.157 320.027 360.396C320.027 342.322 310.702 326.416 294.293 321.267C303.989 319.186 317.417 305.089 314.805 282.677C312.417 262.173 291.915 239.661 253.023 239.661C216.998 239.661 187.631 262.072 187.523 300.389Z"
          fill="url(#paint14_radial_81_325)"
        />
        <path
          d="M187.523 300.389H230.893C230.893 294.041 232.771 278.743 252.525 277.977C261.848 277.617 266.899 283.452 267.814 290.991C268.56 297.136 262.593 305.089 249.749 305.089H221.942V341.961H249.749C258.491 341.961 270.053 345.575 270.053 356.059C270.053 364.372 266.126 370.156 251.387 370.156C236.114 370.156 229.174 360.883 227.536 351.36H182.784C182.784 374.856 197.874 413.536 254.762 413.536C294.667 413.536 320.027 390.157 320.027 360.396C320.027 342.322 310.702 326.416 294.293 321.267C303.989 319.186 317.417 305.089 314.805 282.677C312.417 262.173 291.915 239.661 253.023 239.661C216.998 239.661 187.631 262.072 187.523 300.389Z"
          fill="url(#paint15_linear_81_325)"
        />
        <path
          d="M187.523 300.389H230.893C230.893 294.041 232.771 278.743 252.525 277.977C261.848 277.617 266.899 283.452 267.814 290.991C268.56 297.136 262.593 305.089 249.749 305.089H221.942V341.961H249.749C258.491 341.961 270.053 345.575 270.053 356.059C270.053 364.372 266.126 370.156 251.387 370.156C236.114 370.156 229.174 360.883 227.536 351.36H182.784C182.784 374.856 197.874 413.536 254.762 413.536C294.667 413.536 320.027 390.157 320.027 360.396C320.027 342.322 310.702 326.416 294.293 321.267C303.989 319.186 317.417 305.089 314.805 282.677C312.417 262.173 291.915 239.661 253.023 239.661C216.998 239.661 187.631 262.072 187.523 300.389Z"
          fill="url(#paint16_radial_81_325)"
        />
        <path
          d="M187.523 300.389H230.893C230.893 294.041 232.771 278.743 252.525 277.977C261.848 277.617 266.899 283.452 267.814 290.991C268.56 297.136 262.593 305.089 249.749 305.089H221.942V341.961H249.749C258.491 341.961 270.053 345.575 270.053 356.059C270.053 364.372 266.126 370.156 251.387 370.156C236.114 370.156 229.174 360.883 227.536 351.36H182.784C182.784 374.856 197.874 413.536 254.762 413.536C294.667 413.536 320.027 390.157 320.027 360.396C320.027 342.322 310.702 326.416 294.293 321.267C303.989 319.186 317.417 305.089 314.805 282.677C312.417 262.173 291.915 239.661 253.023 239.661C216.998 239.661 187.631 262.072 187.523 300.389Z"
          fill="url(#paint17_linear_81_325)"
        />
        <path
          d="M187.523 300.389H230.893C230.893 294.041 232.771 278.743 252.525 277.977C261.848 277.617 266.899 283.452 267.814 290.991C268.56 297.136 262.593 305.089 249.749 305.089H221.942V341.961H249.749C258.491 341.961 270.053 345.575 270.053 356.059C270.053 364.372 266.126 370.156 251.387 370.156C236.114 370.156 229.174 360.883 227.536 351.36H182.784C182.784 374.856 197.874 413.536 254.762 413.536C294.667 413.536 320.027 390.157 320.027 360.396C320.027 342.322 310.702 326.416 294.293 321.267C303.989 319.186 317.417 305.089 314.805 282.677C312.417 262.173 291.915 239.661 253.023 239.661C216.998 239.661 187.631 262.072 187.523 300.389Z"
          fill="url(#paint18_linear_81_325)"
        />
        <path
          d="M187.523 300.389H230.893C230.893 294.041 232.77 278.743 252.524 277.978C261.847 277.617 266.899 283.452 267.814 290.991C268.56 297.136 262.593 305.089 249.749 305.089H221.942V323.887C240.589 323.887 270.798 321.959 294.293 321.267C303.989 319.186 317.417 305.089 314.805 282.677C312.417 262.173 291.915 239.661 253.023 239.661C216.998 239.661 187.631 262.072 187.523 300.389Z"
          fill="url(#paint19_linear_81_325)"
        />
        <mask
          id="mask2_81_325"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="187"
          y="239"
          width="129"
          height="85"
        >
          <path
            d="M187.523 300.389H230.893C230.893 294.041 232.77 278.743 252.524 277.978C261.847 277.617 266.899 283.452 267.814 290.991C268.56 297.136 262.593 305.089 249.749 305.089H221.942V323.887C240.589 323.887 270.798 321.959 294.293 321.267C303.989 319.186 317.417 305.089 314.805 282.677C312.417 262.173 291.915 239.661 253.023 239.661C216.998 239.661 187.631 262.072 187.523 300.389Z"
            fill="url(#paint20_radial_81_325)"
          />
        </mask>
        <g mask="url(#mask2_81_325)">
          <path
            d="M187.523 300.389H230.893C230.893 294.041 232.77 278.743 252.524 277.978C261.847 277.617 266.899 283.452 267.814 290.991C268.56 297.136 262.593 305.089 249.749 305.089H221.942V323.887C240.589 323.887 270.798 321.959 294.293 321.267C303.989 319.186 317.417 305.089 314.805 282.677C312.417 262.173 291.915 239.661 253.023 239.661C216.998 239.661 187.631 262.072 187.523 300.389Z"
            fill="url(#paint21_radial_81_325)"
          />
        </g>
        <path
          d="M187.523 300.389H230.893C230.893 294.041 232.77 278.743 252.524 277.978C261.847 277.617 266.899 283.452 267.814 290.991C268.56 297.136 262.593 305.089 249.749 305.089H221.942V323.887C240.589 323.887 270.798 321.959 294.293 321.267C303.989 319.186 317.417 305.089 314.805 282.677C312.417 262.173 291.915 239.661 253.023 239.661C216.998 239.661 187.631 262.072 187.523 300.389Z"
          fill="url(#paint22_linear_81_325)"
        />
        <path
          d="M187.523 300.389H230.893C230.893 294.041 232.77 278.743 252.524 277.978C261.847 277.617 266.899 283.452 267.814 290.991C268.56 297.136 262.593 305.089 249.749 305.089H221.942V323.887C240.589 323.887 270.798 321.959 294.293 321.267C303.989 319.186 317.417 305.089 314.805 282.677C312.417 262.173 291.915 239.661 253.023 239.661C216.998 239.661 187.631 262.072 187.523 300.389Z"
          fill="url(#paint23_radial_81_325)"
        />
        <path
          d="M187.523 300.389H230.893C230.893 294.041 232.77 278.743 252.524 277.978C261.847 277.617 266.899 283.452 267.814 290.991C268.56 297.136 262.593 305.089 249.749 305.089H221.942V323.887C240.589 323.887 270.798 321.959 294.293 321.267C303.989 319.186 317.417 305.089 314.805 282.677C312.417 262.173 291.915 239.661 253.023 239.661C216.998 239.661 187.631 262.072 187.523 300.389Z"
          fill="url(#paint24_radial_81_325)"
        />
        <path
          d="M235.119 314.487L221.941 305.089V341.961L235.119 331.838V314.487Z"
          fill="#DE770C"
        />
        <path
          d="M217.218 364.855L227.536 351.36H182.782L196.084 364.133L217.218 364.855Z"
          fill="#C26511"
        />
        <path
          d="M187.523 300.389H230.893L218.026 288.099L198.82 288.279L187.523 300.389Z"
          fill="#A64801"
        />
        <path
          d="M193.225 294.244H224.18C224.18 288.46 231.639 270.386 250.285 270.386C268.933 270.386 275.273 280.87 275.273 291.353C275.273 301.835 264.457 311.235 249.914 311.235H229.774V335.454H249.914C268.56 335.454 277.138 340.876 277.138 357.866C277.138 368.35 264.83 377.387 251.404 377.387C231.639 377.387 223.434 367.267 221.942 358.59H190.241C190.241 366.544 197.7 406.488 253.642 406.488C295.412 406.488 312.941 385.339 312.941 358.228C312.941 342.865 302.312 325.333 279.748 321.717C293.174 319.186 308.092 310.511 307.719 286.292C307.43 267.497 288.327 246.167 252.896 246.167C220.077 246.167 193.225 270.386 193.225 294.244Z"
          fill="url(#paint25_radial_81_325)"
        />
        <mask
          id="mask3_81_325"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="190"
          y="246"
          width="123"
          height="161"
        >
          <path
            d="M193.225 294.244H224.18C224.18 288.46 231.639 270.386 250.285 270.386C268.933 270.386 275.273 280.87 275.273 291.353C275.273 301.835 264.457 311.235 249.914 311.235H229.774V335.454H249.914C268.56 335.454 277.138 340.876 277.138 357.866C277.138 368.35 264.83 377.387 251.404 377.387C231.639 377.387 223.434 367.267 221.942 358.59H190.241C190.241 366.544 197.7 406.488 253.642 406.488C295.412 406.488 312.941 385.339 312.941 358.228C312.941 342.865 302.312 325.333 279.748 321.717C293.174 319.186 308.092 310.511 307.719 286.292C307.43 267.497 288.327 246.167 252.896 246.167C220.077 246.167 193.225 270.386 193.225 294.244Z"
            fill="url(#paint26_linear_81_325)"
          />
        </mask>
        <g mask="url(#mask3_81_325)">
          <path
            d="M193.225 294.244H224.18C224.18 288.46 231.639 270.386 250.285 270.386C268.933 270.386 275.273 280.87 275.273 291.353C275.273 301.835 264.457 311.235 249.914 311.235H229.774V335.454H249.914C268.56 335.454 277.138 340.876 277.138 357.866C277.138 368.35 264.83 377.387 251.404 377.387C231.639 377.387 223.434 367.267 221.942 358.59H190.241C190.241 366.544 197.7 406.488 253.642 406.488C295.412 406.488 312.941 385.339 312.941 358.228C312.941 342.865 302.312 325.333 279.748 321.717C293.174 319.186 308.092 310.511 307.719 286.292C307.43 267.497 288.327 246.167 252.896 246.167C220.077 246.167 193.225 270.386 193.225 294.244Z"
            fill="url(#paint27_linear_81_325)"
          />
        </g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_81_325"
        x1="209"
        y1="38.0001"
        x2="228.532"
        y2="106.553"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.5" stopColor="#E9E9E9" />
        <stop offset="1" stopColor="#D3D3D3" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_81_325"
        x1="227"
        y1="23"
        x2="243.428"
        y2="83.237"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF4040" />
        <stop offset="0.5" stopColor="#E62020" />
        <stop offset="1" stopColor="#CD0100" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_81_325"
        x1="193"
        y1="52.0001"
        x2="220.574"
        y2="139.702"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3142A8" />
        <stop offset="0.01" stopColor="#3142A8" />
        <stop offset="0.51" stopColor="#2C399B" />
        <stop offset="1" stopColor="#262F8D" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_81_325"
        x1="294.001"
        y1="41.0001"
        x2="258.001"
        y2="170.447"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.5" stopColor="#F5F4F1" />
        <stop offset="1" stopColor="#EBE9E3" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_81_325"
        x1="317"
        y1="46.0001"
        x2="271.809"
        y2="167.787"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF4040" />
        <stop offset="0.5" stopColor="#FF3632" />
        <stop offset="1" stopColor="#FF2B24" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_81_325"
        x1="271"
        y1="46.0001"
        x2="233.469"
        y2="153.234"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3142A8" />
        <stop offset="0.01" stopColor="#3142A8" />
        <stop offset="0.51" stopColor="#2A3CA1" />
        <stop offset="1" stopColor="#23379B" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_81_325"
        x1="290.153"
        y1="363.454"
        x2="408.985"
        y2="490.393"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7F3005" stopOpacity="0" />
        <stop offset="0.5" stopColor="#802F05" stopOpacity="0.5" />
        <stop offset="1" stopColor="#802F05" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_81_325"
        x1="137.778"
        y1="223.245"
        x2="233.612"
        y2="314.161"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7F2F04" />
        <stop offset="0.44" stopColor="#7F2F04" stopOpacity="0.5" />
        <stop offset="0.87" stopColor="#7F3004" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint8_radial_81_325"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(162.296 224.796) rotate(-4.46702) scale(165.461 160.44)"
      >
        <stop stopColor="#802F05" />
        <stop offset="0.55" stopColor="#802F05" stopOpacity="0.5" />
        <stop offset="1" stopColor="#802F05" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint9_radial_81_325"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(352.401 432.764) rotate(-3.15618) scale(152.608 147.949)"
      >
        <stop stopColor="#7E2F04" />
        <stop offset="0.54" stopColor="#7F2F04" stopOpacity="0.5" />
        <stop offset="1" stopColor="#803004" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint10_linear_81_325"
        x1="166.731"
        y1="221.649"
        x2="336.285"
        y2="440.676"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#822D01" />
        <stop offset="0.2" stopColor="#AF591C" />
        <stop offset="0.51" stopColor="#DD8536" />
        <stop offset="0.7" stopColor="#AE5722" />
        <stop offset="0.96" stopColor="#7F290E" />
      </linearGradient>
      <linearGradient
        id="paint11_linear_81_325"
        x1="146"
        y1="430.051"
        x2="161.5"
        y2="414.551"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.13" stopColor="white" stopOpacity="0" />
        <stop offset="0.37" stopColor="white" stopOpacity="0.5" />
        <stop offset="0.49" stopColor="white" />
        <stop offset="0.59" stopColor="white" stopOpacity="0.5" />
        <stop offset="0.88" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_81_325"
        x1="146"
        y1="430.051"
        x2="161.5"
        y2="414.551"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA748" />
        <stop offset="0.25" stopColor="#FFA748" />
        <stop offset="0.49" stopColor="#FFA748" />
        <stop offset="0.75" stopColor="#FFA748" />
        <stop offset="1" stopColor="#FFA748" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_81_325"
        x1="254"
        y1="336.305"
        x2="278.621"
        y2="411.262"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C6610A" />
        <stop offset="0.25" stopColor="#CD6406" />
        <stop offset="0.5" stopColor="#D36802" />
        <stop offset="0.75" stopColor="#A73E01" />
        <stop offset="1" stopColor="#7B1401" />
      </linearGradient>
      <radialGradient
        id="paint14_radial_81_325"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(229 358.598) scale(33.434 32.4069)"
      >
        <stop stopColor="#D87B1F" />
        <stop offset="0.49" stopColor="#DF8222" stopOpacity="0.5" />
        <stop offset="1" stopColor="#E68A26" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint15_linear_81_325"
        x1="183"
        y1="363.445"
        x2="206.417"
        y2="350.715"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CD5C10" />
        <stop offset="0.5" stopColor="#B14508" stopOpacity="0.5" />
        <stop offset="1" stopColor="#952E00" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint16_radial_81_325"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(250 371.199) scale(79.856 77.4028)"
      >
        <stop stopColor="#C86309" />
        <stop offset="0.25" stopColor="#D0761A" stopOpacity="0.5" />
        <stop offset="0.31" stopColor="#D8882A" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint17_linear_81_325"
        x1="251"
        y1="333.397"
        x2="251.327"
        y2="354.615"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9B3B01" />
        <stop offset="0.47" stopColor="#9C3C01" stopOpacity="0.5" />
        <stop offset="0.93" stopColor="#9C3C00" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint18_linear_81_325"
        x1="275"
        y1="297.534"
        x2="256.173"
        y2="326.291"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C7560B" />
        <stop offset="0.49" stopColor="#C4540A" stopOpacity="0.5" />
        <stop offset="0.93" stopColor="#C25208" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint19_linear_81_325"
        x1="240"
        y1="252.947"
        x2="259.827"
        y2="330.905"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A14003" />
        <stop offset="0.28" stopColor="#B04E05" />
        <stop offset="0.57" stopColor="#C05B07" />
        <stop offset="0.79" stopColor="#B54A04" />
        <stop offset="1" stopColor="#A93900" />
      </linearGradient>
      <radialGradient
        id="paint20_radial_81_325"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(310 269.425) scale(54.584 52.9072)"
      >
        <stop stopColor="white" />
        <stop offset="0.01" stopColor="white" />
        <stop offset="0.36" stopColor="white" stopOpacity="0.5" />
        <stop offset="0.7" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint21_radial_81_325"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(310 269.425) scale(54.584 52.9072)"
      >
        <stop stopColor="#D88826" />
        <stop offset="0.03" stopColor="#D88826" />
        <stop offset="0.05" stopColor="#D88826" />
        <stop offset="0.39" stopColor="#D38020" />
        <stop offset="0.73" stopColor="#CD781A" />
      </radialGradient>
      <linearGradient
        id="paint22_linear_81_325"
        x1="180"
        y1="271.363"
        x2="236.054"
        y2="281.878"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BF4B02" />
        <stop offset="0.51" stopColor="#C45004" stopOpacity="0.5" />
        <stop offset="1" stopColor="#C95606" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint23_radial_81_325"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(268 292.687) scale(54.584 52.9072)"
      >
        <stop stopColor="#CC5E07" />
        <stop offset="0.22" stopColor="#CD5D09" stopOpacity="0.5" />
        <stop offset="0.43" stopColor="#CE5D0B" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint24_radial_81_325"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(230 287.841) scale(54.584 52.9072)"
      >
        <stop stopColor="#D86F0C" />
        <stop offset="0.17" stopColor="#D56B0C" stopOpacity="0.5" />
        <stop offset="0.34" stopColor="#D1680C" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint25_radial_81_325"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(296 279.117) scale(141.557 137.208)"
      >
        <stop stopColor="#E2953C" />
        <stop offset="0.5" stopColor="#DD8B33" />
        <stop offset="1" stopColor="#D7812B" />
      </radialGradient>
      <linearGradient
        id="paint26_linear_81_325"
        x1="166.091"
        y1="434.887"
        x2="189.196"
        y2="405.587"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.28" stopColor="white" stopOpacity="0" />
        <stop offset="0.32" stopColor="white" stopOpacity="0.5" />
        <stop offset="0.47" stopColor="white" />
        <stop offset="0.65" stopColor="white" stopOpacity="0.5" />
        <stop offset="0.68" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint27_linear_81_325"
        x1="166.091"
        y1="434.887"
        x2="189.196"
        y2="405.587"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.47" stopColor="#FFDCA0" />
        <stop offset="0.73" stopColor="#FFD58C" />
        <stop offset="1" stopColor="#FFCE78" />
      </linearGradient>
      <clipPath id="clip0_81_325">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const X = ({width, height, className}) => (
  <svg
    width="34"
    height="31"
    viewBox="0 0 34 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
    className={classnames(className)}
  >
    <path
      d="M26.777 0H31.9905L20.6005 13.1313L34 31H23.5083L15.2908 20.1627L5.88812 31H0.671364L12.8542 16.9546L0 0H10.758L18.1859 9.90571L26.777 0ZM24.9472 27.8523H27.8361L9.18836 2.98234H6.08824L24.9472 27.8523Z"
      fill="white"
    />
  </svg>
)

export const Telegram = ({width, height, className, withoutBackground}) => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
    className={classnames(className)}
  >
    <path
      style={{...(withoutBackground ? {visibility: `hidden`} : {})}}
      d="M38 19C38 29.4975 29.4975 38 19 38C8.5025 38 0 29.4975 0 19C0 8.5025 8.5025 0 19 0C29.4975 0 38 8.5025 38 19Z"
      fill="url(#paint0_linear_84_578)"
    />
    <path
      d="M15.5167 27.7084C14.8992 27.7084 15.0101 27.4709 14.7884 26.885L12.9834 20.9317L24.1934 13.9333L25.5076 14.2817L24.4151 17.2583L15.5167 27.7084Z"
      fill="#C8DAEA"
    />
    <path
      d="M15.5166 27.7084C15.9916 27.7084 16.1974 27.4867 16.4666 27.2334C16.8783 26.8375 22.1666 21.6917 22.1666 21.6917L18.9208 20.9L15.9124 22.8L15.5166 27.55V27.7084Z"
      fill="#A9C9DD"
    />
    <path
      d="M15.8332 22.8633L23.4966 28.5158C24.3674 28.9908 25.0007 28.7533 25.2224 27.7083L28.3416 13.015C28.6582 11.7325 27.8507 11.1625 27.0116 11.5425L8.70824 18.6042C7.4574 19.1108 7.47324 19.8075 8.48657 20.1083L13.1891 21.5808L24.0666 14.725C24.5732 14.4083 25.0482 14.5825 24.6682 14.9308L15.8332 22.8633Z"
      fill="url(#paint1_linear_84_578)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_84_578"
        x1="24.5686"
        y1="6.00558"
        x2="15.0686"
        y2="28.1719"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#37AEE2" />
        <stop offset="1" stopColor="#1E96C8" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_84_578"
        x1="20.4235"
        y1="19.5945"
        x2="24.3818"
        y2="25.9279"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EFF7FC" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
)

export const Hands = ({width, height, className}) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
    className={classnames(className)}
  >
    <g clipPath="url(#clip0_88_11)">
      <mask
        id="mask0_88_11"
        style={{maskType: 'luminance'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_88_11)">
        <path
          d="M145.668 158.031C157.782 154.662 176.413 143.698 222.429 151.175C243.477 154.594 258.686 141.031 274.673 151.185C288.784 160.148 302.903 179.302 315.562 186.539C329.852 194.707 331.283 212.098 305.785 218.047C281.157 223.793 276.96 206.161 259.308 199.04C247.98 194.47 231.933 200.194 244.553 212.427C244.553 212.427 269.259 255.25 192.691 245.352C116.123 235.455 109.354 168.127 145.668 158.031Z"
          fill="#FCCE2C"
        />
        <path
          d="M306.456 218.465C301.814 219.005 297.488 219.64 293.287 219.327L291.496 218.21C291.496 218.21 314.569 214.483 309.693 202.629C306.628 195.178 295.197 184.86 276.446 165.427C263.306 151.809 236.406 166.988 201.322 150.265C201.092 150.155 200.832 150.119 200.587 150.055C207.085 150.137 214.333 150.476 222.428 151.172C237.113 152.432 262.472 143.511 274.042 151.681C287.837 161.422 302.148 177.634 315.958 186.744C328.433 194.975 333.113 215.366 306.456 218.465Z"
          fill="#FFD75D"
        />
        <g opacity="0.5">
          <path
            d="M158.259 157.733C158.259 157.733 171.012 162.472 178.901 171.197C183.987 176.823 196.036 186.485 219.814 198.257C229.144 202.876 241.755 213.48 241.755 213.48C237.603 204.438 249.473 198.738 249.473 198.738L270.167 189.882L205.026 150.149C205.026 150.149 175.632 150.9 158.259 157.733Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M158.259 157.733C158.259 157.733 171.012 162.472 178.901 171.197C183.987 176.823 196.036 186.485 219.814 198.257C229.144 202.876 241.755 213.48 241.755 213.48C237.603 204.438 249.473 198.738 249.473 198.738L270.167 189.882L205.026 150.149C205.026 150.149 175.632 150.9 158.259 157.733Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.2">
          <path
            d="M158.259 157.733C158.259 157.733 171.012 162.472 178.901 171.197C183.987 176.823 196.036 186.485 219.814 198.257C229.144 202.876 241.755 213.48 241.755 213.48C237.603 204.438 249.473 198.738 249.473 198.738L270.167 189.882L205.026 150.149C205.026 150.149 175.632 150.9 158.259 157.733Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.1">
          <path
            d="M158.259 157.733C158.259 157.733 171.012 162.472 178.901 171.197C183.987 176.823 196.036 186.485 219.814 198.257C229.144 202.876 241.755 213.48 241.755 213.48C237.603 204.438 249.473 198.738 249.473 198.738L270.167 189.882L205.026 150.149C205.026 150.149 175.632 150.9 158.259 157.733Z"
            fill="#F09201"
          />
        </g>
        <path
          d="M145.669 158.03C158.229 157.466 175.979 147.194 222.428 151.174C239.837 152.666 252.174 144.043 272.224 151.101C285.009 155.601 302.307 180.34 314.086 185.908C328.966 192.943 330.813 212.075 305.268 217.816C277.424 224.073 277.345 201.781 256.711 198.274C244.668 196.229 231.933 200.193 244.553 212.426"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M428.596 271.713C444.049 259.608 463.43 257.298 468.489 248.347C473.831 238.896 441.455 165.32 416.482 157.72C404.64 154.116 391.062 173.997 362.011 177.376C322.348 186.61 382.187 278.562 428.596 271.713Z"
          fill="#FCCE2C"
        />
        <path
          d="M440.086 179.367C429.707 171.152 417.128 167.151 408.497 173.195C402.691 177.26 385.787 186.564 369.222 189.274C367.45 184.302 363.06 178.988 362.014 177.38C391.06 173.998 404.635 154.111 416.483 157.724C424.089 160.044 432.387 168.481 440.086 179.367Z"
          fill="#FFD75D"
        />
        <path
          d="M358.543 178.293C388.423 174.75 404.639 154.115 416.482 157.719C441.455 165.32 473.831 238.895 468.49 248.345C463.43 257.296 444.048 259.607 428.596 271.712"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M343.353 348.491C398.012 320.189 425.834 276.835 428.595 271.713C408.574 269.786 370.684 185.227 363.858 181.766C352.685 176.102 345.523 168.353 306.031 160.374C284.381 156 261.257 138.45 229.588 136.501C229.588 136.501 203.595 173.21 247.338 179.371C255.038 182.451 253.004 194.465 257.932 199.085C244.05 215.087 238.251 225.655 222.701 234.265C229.128 283.181 343.353 348.491 343.353 348.491Z"
          fill="#FCCE2C"
        />
        <g opacity="0.4">
          <path
            d="M428.599 271.717C426.456 273.395 423.895 293.157 397.149 300.46C383.43 314.636 367.774 335.848 343.356 348.495C343.356 348.495 285.043 312.916 244.307 269.934L252.362 193.245L253.404 183.338C268.041 190.597 280.019 198.027 291.255 205.244C312.343 218.789 330.82 231.585 359.377 241.096C371.808 245.237 389.353 271.256 405.5 271.982C418.749 272.577 417.651 264.975 427.334 260.713C438.227 255.917 469.833 246.485 467.809 236.896C470.2 244.402 471.349 248.286 466.935 251.082C454.275 259.102 437.448 267.543 428.599 271.717Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.4">
          <path
            d="M428.599 271.717C426.456 273.395 423.895 293.157 397.149 300.46C383.43 314.636 367.774 335.848 343.356 348.495C343.356 348.495 285.043 312.916 244.307 269.934L252.362 193.245L253.404 183.338C295.515 204.222 311.745 227.766 361.214 238.156C374.037 240.849 387.761 266.111 403.907 266.836C417.157 267.431 417.283 258.727 426.967 254.465C437.859 249.669 468.118 239.503 466.094 230.771C468.485 238.277 471.349 248.286 466.935 251.082C454.275 259.102 437.448 267.543 428.599 271.717Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M428.599 271.717C426.456 273.395 423.895 293.157 397.149 300.46C383.43 314.636 367.774 335.848 343.356 348.495C343.356 348.495 285.043 312.916 244.307 269.934L252.362 193.245L253.404 183.338C295.515 204.222 310.459 227.742 363.051 234.849C372.63 236.143 383.968 262.262 402.315 262.917C412.135 263.267 415.482 257.175 424.027 251.157C432.321 245.316 467.26 235.092 464.134 222.931C466.769 230.437 471.349 248.286 466.935 251.082C454.275 259.102 437.448 267.543 428.599 271.717Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.2">
          <path
            d="M428.599 271.717C426.456 273.395 423.895 293.157 397.149 300.46C383.43 314.636 367.774 335.848 343.356 348.495C343.356 348.495 285.043 312.916 244.307 269.934L252.362 193.245L253.404 183.338C295.515 204.222 312.525 227.594 364.399 231.541C374.036 232.275 378.937 256.652 401.825 259.119C413.829 260.412 414.339 250.282 423.291 245.032C432.043 239.9 465.055 228.477 462.052 218.766C466.647 225.292 471.349 248.286 466.935 251.082C454.275 259.102 437.448 267.543 428.599 271.717Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.15">
          <path
            d="M428.599 271.717C426.456 273.395 423.895 293.157 397.149 300.46C383.43 314.636 367.774 335.848 343.356 348.495C343.356 348.495 285.043 312.916 244.307 269.934L252.362 193.245L253.404 183.338C295.515 204.222 312.664 225.169 365.501 228.724C375.145 229.372 378.324 252.978 400.845 255.199C412.861 256.385 413.36 244.403 422.312 239.152C431.063 234.021 462.237 223.7 460.213 214.969C464.809 221.495 471.349 248.286 466.935 251.082C454.275 259.102 437.448 267.543 428.599 271.717Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.1">
          <path
            d="M428.599 271.717C426.456 273.395 423.895 293.157 397.149 300.46C383.43 314.636 367.774 335.848 343.356 348.495C343.356 348.495 285.043 312.916 244.307 269.934L252.362 193.245L253.404 183.338C295.515 204.222 313.645 226.028 368.687 223.089C378.339 222.573 378.815 249.301 398.15 251.156C415.579 252.828 411.4 238.032 420.107 234.007C429.316 229.75 460.496 221.306 456.294 207.006C466.28 225.537 471.349 248.286 466.935 251.082C454.275 259.102 437.448 267.543 428.599 271.717Z"
            fill="#F09201"
          />
        </g>
        <path
          d="M428.596 271.713C424.748 276.717 420.82 301.9 381.475 299.512"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M236.222 178.296C249.16 181.068 263.561 195.17 252.857 206.944C248.236 212.027 238.533 221.73 228.367 231.434"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
        />
        <path
          d="M235.786 378.873C210.86 371.962 183.15 360.11 154.825 332.531C126.5 304.952 110.651 282.091 91.8792 263.788C73.1071 245.486 50.5812 245.955 49.6423 235.888C44.2721 178.298 84.3687 144.582 97.0414 139.424C102.157 137.342 116.459 149.041 127.184 153.267C137.91 157.492 140.571 157.516 144.677 156.995C144.677 156.995 242.975 175.631 265.948 191.217C288.133 205.847 287.646 204.202 304.704 216.62C321.243 228.662 329.032 235.365 342.17 257.967C379.926 322.923 269.832 388.313 235.786 378.873Z"
          fill="#FCCE2C"
        />
        <path
          d="M235.787 378.873C269.832 388.313 308.921 399.975 316.321 376.055C316.321 376.055 318.498 356.806 301.247 354.033C289.047 352.072 267.67 343.868 256.888 339.247"
          fill="#FFD140"
        />
        <path
          d="M61.0435 177.228C61.0435 177.228 84.2311 150.13 99.0718 153.242C113.913 156.353 118.504 166.149 148.881 153.472C148.881 153.472 133.301 156.833 119.657 147.976C106.013 139.12 100.404 135.973 87.1707 145.565C73.9389 155.156 61.0435 177.228 61.0435 177.228Z"
          fill="#FFD75D"
        />
        <path
          d="M229.708 179.586C212.657 212.026 196.946 217.572 186.377 218.781C170.548 220.591 156.122 218.081 152.381 206.428C148.624 194.722 159.24 185.964 158.376 173.941C157.572 162.754 141.738 156.827 128.108 156.963C128.108 156.963 179.998 149.236 192.767 149.886C205.537 150.536 229.708 179.586 229.708 179.586Z"
          fill="#FCCE2C"
        />
        <g opacity="0.5">
          <path
            d="M229.708 179.586C212.657 212.026 198.288 219.292 187.719 220.5C171.89 222.311 161.027 216.874 157.286 205.221C153.528 193.515 178.809 168.99 178.273 159.805C177.814 151.936 174.949 152.805 128.108 156.963C128.108 156.963 179.998 149.236 192.767 149.886C205.537 150.536 229.708 179.586 229.708 179.586Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M229.708 179.586C212.657 212.026 197.549 220.269 186.979 221.478C171.151 223.289 158.78 219.019 154.833 205.947C151.28 194.178 175.13 170.201 173.984 160.157C173.26 153.802 155.333 157.02 128.108 156.963C128.108 156.963 179.998 149.236 192.767 149.886C205.537 150.536 229.708 179.586 229.708 179.586Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.2">
          <path
            d="M229.708 179.586C212.657 212.026 196.933 221.247 186.364 222.456C170.535 224.266 157.057 221.463 152.378 207.408C148.494 195.744 170.475 170.184 169.321 162.344C168.129 154.243 147.118 158.951 128.108 156.963C128.108 156.963 179.998 149.236 192.767 149.886C205.537 150.536 229.708 179.586 229.708 179.586Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.1">
          <path
            d="M229.708 179.586C212.657 212.026 196.563 222.103 185.993 223.312C170.165 225.122 153.988 223.289 149.312 208.254C145.662 196.514 164.932 176.341 164.903 164.288C164.887 157.3 155.445 160.084 128.108 156.963C128.108 156.963 179.998 149.236 192.767 149.886C205.537 150.536 229.708 179.586 229.708 179.586Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.4">
          <path
            d="M68.6481 165.684C68.6481 165.684 39.4906 222.352 66.3257 234.178C79.1491 239.83 91.0262 245.783 98.508 250.714C103.638 254.096 116.664 273.059 131.98 287.962C134.585 290.496 146.621 300.469 156.24 302.796C185.266 309.817 175.076 338.349 194.589 336.015C237.451 330.888 223.528 361.903 235.037 359.861C264.401 354.652 271.996 390.912 313.9 375.084C314.136 376.212 317.134 405.142 243.957 380.278C230.055 375.553 190.283 366.863 147.877 325.51C105.471 284.158 99.7759 264.365 80.7044 255.039C61.633 245.712 51.8297 246.229 49.1515 232.533C46.4734 218.838 51.9276 185.262 68.6481 165.684Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.4">
          <path
            d="M68.6481 165.684C68.6481 165.684 41.2058 216.472 68.041 228.298C80.8643 233.949 92.9853 238.188 100.467 243.12C105.597 246.501 118.869 268.649 134.185 283.552C136.79 286.086 148.457 297.566 157.954 300.346C191.146 310.062 177.42 333.493 197.039 332.34C238.431 329.907 225.244 359.453 236.752 357.412C266.116 352.202 266.116 381.112 313.9 375.084C314.136 376.212 317.134 405.142 243.957 380.278C230.055 375.553 190.283 366.863 147.877 325.51C105.471 284.158 99.7759 264.365 80.7044 255.039C61.633 245.712 51.8297 246.229 49.1515 232.533C46.4734 218.838 51.9276 185.262 68.6481 165.684Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M68.6481 165.684C68.6481 165.684 45.0585 210.214 69.7562 221.683C93.8808 232.886 96.6606 230.103 104.142 235.034C109.272 238.416 118.559 261.488 136.39 275.711C144.438 282.13 152.264 290.124 160.846 295.814C180.856 309.082 188.966 325.502 199.238 327.381C231.815 333.338 231.081 353.55 239.202 353.981C265.188 355.363 275.548 375.355 313.9 375.084C314.626 375.967 317.134 405.142 243.957 380.278C230.055 375.553 190.283 366.863 147.877 325.51C105.471 284.158 99.7759 264.365 80.7044 255.039C61.633 245.712 51.8297 246.229 49.1515 232.533C46.4734 218.838 51.9276 185.262 68.6481 165.684Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.2">
          <path
            d="M68.6481 165.684C68.6481 165.684 47.4428 202.821 72.4509 213.599C97.3112 224.312 101.071 222.263 108.552 227.194C113.682 230.575 119.606 251.017 139.821 268.117C183.396 304.976 203.641 325.007 243.612 350.061C272.525 368.184 295.516 370.332 313.9 375.084C313.646 377.437 317.134 405.142 243.957 380.278C230.055 375.553 190.283 366.863 147.877 325.51C105.471 284.158 99.7759 264.365 80.7044 255.039C61.633 245.712 51.8297 246.229 49.1515 232.533C46.4734 218.838 51.9276 185.262 68.6481 165.684Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.15">
          <path
            d="M68.6481 165.684C68.6481 165.684 50.3825 196.451 75.3906 207.229C100.251 217.942 106.706 212.463 114.188 217.394C119.318 220.776 124.751 240.972 144.965 258.071C188.54 294.93 206.661 322.682 245.572 346.387C267.586 359.798 289.146 368.372 313.9 375.084C313.646 377.437 317.134 405.142 243.957 380.278C230.055 375.553 190.283 366.863 147.877 325.51C105.471 284.158 99.7759 264.365 80.7044 255.039C61.633 245.712 51.8297 246.229 49.1515 232.533C46.4734 218.838 51.9276 185.262 68.6481 165.684Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.1">
          <path
            d="M68.6481 165.684C68.6481 165.684 56.2425 184.428 81.026 195.713C100.251 204.466 116.506 198.988 123.987 203.919C129.117 207.301 126.891 226.336 155.011 250.721C209.031 297.567 226.185 334.239 247.041 343.446C267.897 352.653 313.9 375.084 313.9 375.084C313.9 375.084 317.134 405.142 243.957 380.278C230.055 375.553 190.283 366.863 147.877 325.51C105.471 284.158 99.7759 264.365 80.7044 255.039C61.633 245.712 51.8297 246.229 49.1515 232.533C46.4734 218.838 51.9276 185.262 68.6481 165.684Z"
            fill="#F09201"
          />
        </g>
        <path
          d="M215.264 150.389C177.417 147.251 137.909 157.492 127.184 153.267C116.458 149.041 102.158 137.342 97.0419 139.424C84.3692 144.582 44.2726 178.298 49.6428 235.888C50.5817 245.955 73.1076 245.486 91.8797 263.788C110.652 282.091 126.501 304.952 154.826 332.531C183.151 360.11 210.861 371.962 235.787 378.873C269.832 388.313 308.92 399.975 316.321 376.055C316.321 376.055 318.497 356.806 301.246 354.033C289.047 352.072 267.67 343.868 256.888 339.247"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M381.354 329.003C381.354 329.003 382.088 329.07 383.303 329.054C387.293 329 396.461 328.048 401.828 320.89C409.946 310.06 405.893 292.238 389.742 273.732C373.591 255.226 335.149 237.691 306.1 218.143C277.05 198.595 257.168 182.715 235.787 178.059"
          fill="#FCCE2C"
        />
        <g opacity="0.4">
          <path
            d="M376.404 266.074C406.99 286.175 380.04 309.695 363.2 303.8C363.2 303.8 369.037 308.053 374.359 316.316C379.681 324.579 380.246 330.831 390.508 328.09C400.769 325.348 410.248 312.787 402.239 292.623C394.229 272.459 376.404 266.074 376.404 266.074Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M376.405 266.074C401.355 283.479 376.978 306.51 361.241 302.086C361.241 302.086 369.037 308.053 374.359 316.316C379.682 324.579 380.246 330.831 390.508 328.09C400.769 325.348 410.248 312.787 402.239 292.623C394.229 272.459 376.405 266.074 376.405 266.074Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.2">
          <path
            d="M376.404 266.074C396.211 278.703 375.14 302.836 358.545 299.881C358.545 299.881 369.037 308.053 374.359 316.316C379.681 324.579 380.246 330.831 390.508 328.09C400.769 325.348 410.248 312.787 402.239 292.623C394.229 272.459 376.404 266.074 376.404 266.074Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.1">
          <path
            d="M376.404 266.074C389.596 274.659 375.997 300.385 354.38 296.94C354.38 296.94 369.037 308.053 374.359 316.316C379.681 324.579 380.246 330.831 390.508 328.09C400.769 325.348 410.248 312.787 402.239 292.623C394.229 272.459 376.404 266.074 376.404 266.074Z"
            fill="#F09201"
          />
        </g>
        <path
          d="M231.572 179.641C231.572 179.641 254.687 189.748 292.603 220.677C324.333 246.56 396.684 269.991 402.723 307.623C402.723 307.623 403.508 305.707 403.241 302.09C402.494 291.985 393.532 268.602 336.28 236.647C294.653 213.414 272.345 186.694 231.572 179.641Z"
          fill="#FFD75D"
        />
        <path
          d="M381.354 329.003C381.354 329.003 382.088 329.07 383.303 329.054C387.293 329 396.461 328.048 401.828 320.89C409.946 310.06 405.893 292.238 389.742 273.732C373.591 255.226 335.149 237.691 306.1 218.143C277.05 198.595 257.168 182.715 235.787 178.059"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M234.324 338.657C252.824 344.932 275.485 356.195 291.088 363.931C306.69 371.667 309.791 373.475 322.284 376.3C350.355 382.647 353.012 354.806 346.949 350.896C343.315 348.551 291.088 314.817 264.189 307.624"
          fill="#FCCE2C"
        />
        <g opacity="0.3">
          <path
            d="M293.504 361.329C293.504 361.329 312.738 375.513 327.6 365.642C334.17 361.279 337.533 356.857 336.216 351.028C335.101 346.091 324.071 340.982 324.071 340.982C324.071 340.982 337.377 344.179 343.354 348.491C349.332 352.803 354.64 366.369 337.741 375.013C322.474 382.823 293.504 361.329 293.504 361.329Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M293.504 361.329C293.504 361.329 310.043 373.186 324.905 363.315C331.475 358.952 334.952 353.583 333.889 350.048C332.144 344.239 324.071 340.982 324.071 340.982C324.071 340.982 337.377 344.179 343.354 348.491C349.332 352.803 354.64 366.369 337.741 375.013C322.474 382.823 293.504 361.329 293.504 361.329Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.2">
          <path
            d="M293.504 361.329C293.504 361.329 308.746 370.699 322.21 361.477C328.718 357.02 331.531 352.814 331.317 349.19C331.018 344.137 324.071 340.982 324.071 340.982C324.071 340.982 337.377 344.179 343.354 348.491C349.332 352.803 354.64 366.369 337.741 375.013C322.474 382.823 293.504 361.329 293.504 361.329Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.1">
          <path
            d="M293.504 361.329C293.504 361.329 307.399 366.901 319.392 359.517C326.109 355.382 327.99 351.986 328.009 348.455C328.037 343.394 324.071 340.982 324.071 340.982C324.071 340.982 337.377 344.179 343.354 348.491C349.332 352.803 354.64 366.369 337.741 375.013C322.474 382.823 293.504 361.329 293.504 361.329Z"
            fill="#F09201"
          />
        </g>
        <path
          d="M234.324 338.657C252.824 344.932 275.485 356.195 291.088 363.931C306.69 371.667 309.791 373.475 322.284 376.3C350.355 382.647 353.012 354.806 346.949 350.896C343.315 348.551 291.088 314.817 264.189 307.624"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M295.727 269.993C340.843 288.428 365.795 306.194 374.359 316.315C382.923 326.437 385.318 338.297 373.64 347.895C361.962 357.493 346.949 350.897 339.275 345.98C339.275 345.98 286.306 312.063 263.665 307.442"
          fill="#FCCE2C"
        />
        <path
          d="M294.422 266.991C289.852 265.399 280.557 274.415 292.168 278.83C304.567 283.544 349.126 301.915 364.758 312.249C364.758 312.249 339.974 282.861 294.422 266.991Z"
          fill="#FFD75D"
        />
        <g opacity="0.4">
          <path
            d="M305.748 324.226C305.748 324.226 345.74 351.59 361.693 331.941C376.034 314.275 356.688 305.09 356.688 305.09C356.688 305.09 375.214 314.681 378.284 321.843C381.354 329.004 385.836 344.308 367.353 351.498C348.869 358.688 305.748 324.226 305.748 324.226Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M305.748 324.226C305.748 324.226 343.78 346.445 358.753 329.491C372.754 313.637 356.688 305.09 356.688 305.09C356.688 305.09 375.214 314.681 378.284 321.843C381.354 329.004 385.836 344.308 367.353 351.498C348.869 358.688 305.748 324.226 305.748 324.226Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.2">
          <path
            d="M305.748 324.226C305.748 324.226 343.412 341.178 356.18 327.409C369.406 313.146 356.688 305.09 356.688 305.09C356.688 305.09 375.214 314.681 378.284 321.843C381.354 329.004 385.836 344.308 367.353 351.498C348.869 358.688 305.748 324.226 305.748 324.226Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.1">
          <path
            d="M305.748 324.226C305.748 324.226 343.903 335.665 353.485 325.326C365.513 312.348 356.688 305.09 356.688 305.09C356.688 305.09 375.214 314.681 378.284 321.843C381.354 329.004 385.836 344.308 367.353 351.498C348.869 358.688 305.748 324.226 305.748 324.226Z"
            fill="#F09201"
          />
        </g>
        <path
          d="M295.727 269.993C340.843 288.428 365.795 306.194 374.359 316.315C382.923 326.437 385.318 338.297 373.64 347.895C361.962 357.493 346.949 350.897 339.275 345.98C339.275 345.98 286.306 312.063 263.665 307.442"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M274.986 366.737C263.416 365.756 255.295 374.052 253.135 392.113C250.975 410.173 260.324 418.813 271.209 418.807C280.656 418.801 288.477 407.746 290.635 394.256C292.793 380.766 287.158 367.768 274.986 366.737Z"
          fill="#FCCE2C"
        />
        <path
          d="M274.986 366.737C263.416 365.756 255.295 374.052 253.135 392.113C250.975 410.173 260.324 418.813 271.209 418.807C280.656 418.801 288.477 407.746 290.635 394.256C292.793 380.766 287.158 367.768 274.986 366.737Z"
          fill="#F09201"
          fillOpacity="0.7"
        />
        <path
          d="M275.036 367.167C269.109 366.358 262.456 370.887 259.903 377.332C251.827 397.726 261.045 408.195 269.593 410.043C278.141 411.891 290.22 402.35 288.09 385.649C287.138 378.187 287.743 368.899 275.036 367.167Z"
          fill="#FCCE2C"
          fillOpacity="0.5"
        />
        <path
          d="M275.036 367.167C269.109 366.358 262.109 370.761 259.903 377.332C254.243 394.198 262.329 402.515 270.878 404.363C279.426 406.212 288.436 399.049 288.09 385.649C287.896 378.129 287.743 368.899 275.036 367.167Z"
          fill="#FCCE2C"
        />
        <path
          d="M274.986 366.737C263.416 365.756 255.295 374.052 253.135 392.113C250.975 410.173 260.324 418.813 271.209 418.807C280.656 418.801 288.477 407.746 290.635 394.256C292.793 380.766 287.158 367.768 274.986 366.737Z"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M243.916 357.283C231.614 353.423 221.21 360.159 215.682 377.591C210.97 392.451 210.162 411.221 228.255 413.332C246.348 415.442 251.455 398.293 253.867 389.548C256.279 380.803 259.294 362.107 243.916 357.283Z"
          fill="#FCCE2C"
        />
        <path
          d="M243.916 357.283C231.614 353.423 221.21 360.159 215.682 377.591C210.97 392.451 210.162 411.221 228.255 413.332C246.348 415.442 251.455 398.293 253.867 389.548C256.279 380.803 259.294 362.107 243.916 357.283Z"
          fill="#F09201"
          fillOpacity="0.7"
        />
        <path
          d="M244.078 358.272C238.764 356.771 233.157 357.003 228.599 361.507C211.235 378.663 222.629 392.699 231.042 395.531C243.056 399.574 253.866 395.813 252.857 373.174C252.482 364.75 251.078 360.251 244.078 358.272Z"
          fill="#FCCE2C"
          fillOpacity="0.5"
        />
        <path
          d="M244.078 358.272C238.764 356.771 233.497 357.377 228.599 361.507C216.816 371.441 224.344 387.555 232.757 390.386C244.771 394.429 252.858 388.45 252.858 373.174C252.858 364.741 251.078 360.251 244.078 358.272Z"
          fill="#FCCE2C"
        />
        <path
          d="M243.916 357.283C231.614 353.423 221.21 360.159 215.682 377.591C210.97 392.451 210.162 411.221 228.255 413.332C246.348 415.442 251.455 398.293 253.867 389.548C256.279 380.803 259.294 362.107 243.916 357.283Z"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M228.308 390.683C228.308 390.683 230.064 392.285 236.008 393.542"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M219.712 342.119C217.506 339.913 214.83 338.251 211.908 337.18C203.306 334.025 192.581 335.976 185.499 344.131C176.011 355.056 166.682 369.779 173.136 382.082C178.955 393.174 196.999 394.732 205.05 388.407C210.494 384.129 220.671 369.859 223.044 357.422C224.181 351.468 223.529 345.935 219.712 342.119Z"
          fill="#FCCE2C"
        />
        <path
          d="M219.712 342.119C217.506 339.913 214.83 338.251 211.908 337.18C203.306 334.025 192.581 335.976 185.499 344.131C176.011 355.056 166.682 369.779 173.136 382.082C178.955 393.174 196.999 394.732 205.05 388.407C210.494 384.129 220.671 369.859 223.044 357.422C224.181 351.468 223.529 345.935 219.712 342.119Z"
          fill="#F09201"
          fillOpacity="0.7"
        />
        <path
          d="M209.654 336.785C199.141 335.977 178.313 348.821 184.542 359.455C192.492 373.026 214.665 385.4 220.778 358.716C224.574 342.15 213.8 337.104 209.654 336.785Z"
          fill="#FCCE2C"
          fillOpacity="0.5"
        />
        <path
          d="M209.653 336.785C199.141 335.977 184.608 348.683 191.402 358.965C199.95 371.903 215.342 373.192 220.166 357.001C225.017 340.713 213.8 337.104 209.653 336.785Z"
          fill="#FCCE2C"
        />
        <path
          d="M219.712 342.119C217.506 339.913 214.83 338.251 211.908 337.18C203.306 334.025 192.581 335.976 185.499 344.131C176.011 355.056 166.682 369.779 173.136 382.082C178.955 393.174 196.999 394.732 205.05 388.407C210.494 384.129 220.671 369.859 223.044 357.422C224.181 351.468 223.529 345.935 219.712 342.119Z"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M193.152 364.355C193.152 364.355 195.695 367.514 200.194 369.347"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M174.289 341.428C174.289 329.401 172.64 316.017 165.025 310.711C154.702 303.516 139.261 306.586 133.839 321.925C131.548 328.407 132.292 340.413 134.308 347.331C136.333 354.28 145.604 363.87 157.224 361.905C167.437 360.179 174.073 353.826 174.283 342.012"
          fill="#FCCE2C"
        />
        <path
          d="M174.289 341.428C174.289 329.401 172.64 316.017 165.025 310.711C154.702 303.516 139.261 306.586 133.839 321.925C131.548 328.407 132.292 340.413 134.308 347.331C136.333 354.28 145.604 363.87 157.224 361.905C167.437 360.179 174.073 353.826 174.283 342.012"
          fill="#F09201"
          fillOpacity="0.7"
        />
        <path
          d="M155.304 308.022C146.12 307.041 144.062 312.476 141.382 316.219C138.321 320.493 134.49 335.175 149.93 339.651C161.281 342.941 172.281 333.705 168.85 320.974C167.507 315.987 167.845 309.363 155.304 308.022Z"
          fill="#FCCE2C"
          fillOpacity="0.5"
        />
        <path
          d="M155.304 308.022C146.12 307.041 145.104 311.557 142.424 315.3C139.363 319.574 138.259 330.737 150.972 334.996C162.177 338.75 170.841 328.585 168.3 320.729C166.709 315.814 167.845 309.363 155.304 308.022Z"
          fill="#FCCE2C"
        />
        <path
          d="M174.289 341.428C174.289 329.401 172.64 316.017 165.025 310.711C154.702 303.516 139.261 306.586 133.839 321.925C131.548 328.407 132.292 340.413 134.308 347.331C136.333 354.28 145.604 363.87 157.224 361.905C167.437 360.179 174.073 353.826 174.283 342.012"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M147.448 335.616C149.71 336.731 151.561 337.662 156.728 337.661"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M229.589 136.5C211.499 135.105 196.295 141.421 187.96 157.003C179.723 172.402 174.711 178.277 163.587 195.168C152.813 211.526 179.031 225.246 199.973 214.095C222.173 202.273 222.871 181.501 235.787 178.059C242.657 176.228 248.008 178.054 250.433 178.983"
          fill="#FCCE2C"
        />
        <g opacity="0.5">
          <path
            d="M161.797 199.368C161.797 199.368 164.55 214.893 190.403 208.691C217.773 202.126 216.834 174.624 237.959 174.373C241.133 174.336 244.734 173.484 248.625 174.656C248.625 174.656 230.726 174.528 219.036 196.447C207.346 218.365 177.307 222.914 163.76 210.054C159.89 206.379 161.797 199.368 161.797 199.368Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M161.797 199.368C161.797 199.368 167.543 210.995 190.135 205.386C212.489 199.835 216.578 173.033 237.703 172.782C240.877 172.744 244.734 173.484 248.625 174.656C248.625 174.656 230.726 174.528 219.036 196.447C207.346 218.365 177.307 222.914 163.76 210.054C159.89 206.379 161.797 199.368 161.797 199.368Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.2">
          <path
            d="M161.797 199.368C161.797 199.368 169.208 208.749 189.995 202.814C211.121 196.782 216.569 171.685 237.694 171.435C240.868 171.397 244.734 173.484 248.625 174.656C248.625 174.656 230.726 174.528 219.036 196.447C207.346 218.365 177.307 222.914 163.76 210.054C159.89 206.379 161.797 199.368 161.797 199.368Z"
            fill="#F09201"
          />
        </g>
        <g opacity="0.1">
          <path
            d="M161.797 199.368C161.797 199.368 168.352 204.975 189.235 199.389C208.53 194.228 216.436 170.217 237.56 169.966C240.735 169.928 245.617 172.163 248.625 174.656C248.625 174.656 230.726 174.528 219.036 196.447C207.346 218.365 177.307 222.914 163.76 210.054C159.89 206.379 161.797 199.368 161.797 199.368Z"
            fill="#F09201"
          />
        </g>
        <path
          d="M231.572 149.786C229.853 149.749 228.116 149.768 226.342 149.851C203.34 150.904 196.63 174.045 185.966 186.595C175.606 198.784 164.202 194.819 167.77 188.896C167.89 188.72 168.001 188.554 168.121 188.378V188.369C170.81 184.774 173.056 181.419 174.987 178.296C185.855 160.774 187.066 150.248 202.046 142.014C202.055 142.005 202.064 141.996 202.074 141.996C203.793 141.053 205.687 140.138 207.803 139.251C207.859 139.223 207.914 139.205 207.97 139.177C214.411 136.737 221.73 135.887 229.585 136.497L231.572 149.786Z"
          fill="#FFD75D"
        />
        <path
          d="M369.804 189.176C361.543 190.604 353.334 190.427 346.592 187.182C323.792 176.211 312.424 174.072 295.51 169.132C271.885 162.232 256.292 151.292 231.572 149.785L222.248 139.444C226.369 136.838 229.585 136.496 229.585 136.496C261.256 138.446 284.377 155.995 306.03 160.376C345.519 168.351 349.566 178.822 362.015 177.38C363.523 180.605 367.681 185.226 369.804 189.176Z"
          fill="#FFD75D"
        />
        <path
          d="M229.465 136.274C243.673 137.173 259.055 141.225 292.853 156.268C306.869 162.506 338.366 163.814 369.016 185.455"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M229.589 136.5C211.499 135.105 196.295 141.421 187.96 157.003C179.723 172.402 174.711 178.277 163.587 195.168C152.813 211.526 179.031 225.246 199.973 214.095C222.173 202.273 222.871 181.501 235.787 178.059C242.657 176.228 248.008 178.054 250.433 178.983"
          stroke="#E17C00"
          strokeWidth="7.39312"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_88_11">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Youtube = ({width, height, className}) => (
  <svg
    width="38"
    height="27"
    viewBox="0 0 38 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
    className={classnames(className)}
  >
    <path
      d="M25.3124 12.9553C21.8283 11.0933 18.4922 9.38156 15.082 7.59436V18.2858C18.6705 16.3351 22.4529 14.5486 25.3272 12.9553H25.3124Z"
      fill="white"
    />
    <path
      d="M25.3124 12.9553C21.8283 11.0933 15.082 7.59436 15.082 7.59436L24.0766 13.6398C24.0766 13.6398 22.4381 14.5486 25.3124 12.9553Z"
      fill="#E8E0E0"
    />
    <path
      d="M15.7379 26.655C8.50094 26.5218 6.02917 26.4019 4.50988 26.0889C3.48197 25.8809 2.58872 25.4192 1.93377 24.7494C1.42757 24.2425 1.02501 23.4691 0.712688 22.3961C0.444784 21.5021 0.340442 20.7583 0.191685 18.9415C-0.0360335 14.8412 -0.0903193 11.4889 0.191685 7.74313C0.424339 5.67463 0.53714 3.21908 2.08252 1.7865C2.81221 1.11603 3.66104 0.684566 4.61422 0.506198C6.1032 0.223489 12.4469 0 19.0141 0C25.5664 0 31.9242 0.223489 33.4146 0.506198C34.6054 0.729686 35.7221 1.39945 36.3778 2.26308C37.7878 4.48105 37.8125 7.23905 37.9556 9.39638C38.0148 10.4243 38.0148 16.2611 37.9556 17.289C37.7328 20.6984 37.5537 21.9047 37.0475 23.1554C36.7345 23.945 36.4673 24.3616 36.0048 24.8234C35.2795 25.534 34.3548 26.0067 33.354 26.1785C27.0914 26.6494 21.7735 26.7516 15.7379 26.655ZM25.3281 12.9553C21.844 11.0933 18.5079 9.36677 15.0977 7.57957V18.2718C18.6862 16.321 22.4693 14.5338 25.3429 12.9405L25.3281 12.9553Z"
      fill="#CD201F"
    />
  </svg>
)

export const FaceScary = ({width, height}) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <g clipPath="url(#clip0_110_22)">
      <mask
        id="mask0_110_22"
        style={{maskType: 'luminance'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_110_22)">
        <path
          d="M451.047 255.586C451.047 363.338 363.697 450.687 255.946 450.687C148.194 450.687 60.8442 363.338 60.8442 255.586C60.8442 147.834 148.194 60.4843 255.946 60.4843C363.697 60.4843 451.047 147.834 451.047 255.586Z"
          fill="url(#paint0_linear_110_22)"
        />
        <path
          d="M429.905 256.321C428.4 354.483 349.323 432.865 253.28 431.392C157.237 429.919 80.598 349.153 82.1028 250.991C83.6076 152.83 162.685 74.4488 258.728 75.9205C354.771 77.3933 431.41 158.161 429.905 256.321Z"
          fill="url(#paint1_radial_110_22)"
        />
        <path
          d="M451.047 255.586C451.047 363.338 363.697 450.687 255.946 450.687C148.194 450.687 60.8442 363.338 60.8442 255.586C60.8442 147.834 148.194 60.4843 255.946 60.4843C363.697 60.4843 451.047 147.834 451.047 255.586Z"
          stroke="#E76900"
          strokeWidth="8.26343"
          strokeMiterlimit="10"
        />
        <path
          d="M252.551 396.029C223.081 396.029 212.695 401.473 211.439 398.532C209.845 394.794 224.156 384.01 252.551 384.01C280.947 384.01 295.257 394.794 293.663 398.532C292.408 401.473 282.021 396.029 252.551 396.029Z"
          fill="#EF960C"
        />
        <path
          d="M252.551 326.519C227.81 326.519 208.877 336.205 195.407 347.099C178.101 361.095 169.814 377.083 169.814 377.083C177.133 378.894 183.293 372.887 197.751 367.218C209.221 362.721 225.913 358.436 252.551 358.436C280.209 358.436 297.145 363.055 308.646 367.736C322.184 373.245 328.19 378.839 335.287 377.083C335.287 377.083 327.559 362.172 311.444 348.545C297.883 337.077 278.382 326.519 252.551 326.519Z"
          fill="#FEDD78"
        />
        <path
          d="M252.551 315.291C227.058 315.291 207.349 325.55 193.457 337.709C174.202 354.561 166.119 375.061 169.291 376.952C171.733 378.408 178.738 367.936 195.159 358.515C207.883 351.215 226.261 344.546 252.551 344.546C279.65 344.546 298.343 351.633 311.103 359.192C326.695 368.43 333.427 378.373 335.811 376.952C338.913 375.103 331.251 355.457 312.903 338.83C298.952 326.188 278.824 315.291 252.551 315.291Z"
          fill="#EAAC1F"
        />
        <path
          d="M252.551 352.925C281.839 352.925 300.264 358.488 311.886 363.855C324.159 369.523 328.847 374.974 330.729 373.43C334.049 370.709 309.079 321.01 252.551 321.01C196.023 321.01 171.053 370.709 174.373 373.43C176.311 375.02 181.223 369.193 194.329 363.35C206.004 358.145 224.182 352.925 252.551 352.925Z"
          fill="#974800"
        />
        <path
          d="M176.028 373.521C179.652 365.917 188.371 353.603 202.429 343.71C214.887 334.942 231.538 328.075 252.55 328.075C274.276 328.075 291.34 335.415 303.927 344.609C317.25 354.339 325.559 366.146 329.073 373.521C329.787 373.77 330.323 373.763 330.728 373.43C332.487 371.989 326.306 357.361 311.698 343.924C298.733 331.998 279.13 321.009 252.55 321.009C226.357 321.009 206.941 331.68 193.974 343.404C178.956 356.981 172.59 371.97 174.372 373.43C174.778 373.763 175.314 373.77 176.028 373.521Z"
          fill="#632900"
        />
        <path
          d="M177.018 229.527C164.183 229.527 153.778 241.495 153.778 256.257C153.778 271.019 164.183 282.986 177.018 282.986C189.854 282.986 200.538 269.757 200.259 256.257C199.983 242.831 189.854 229.527 177.018 229.527Z"
          fill="#FEDF9F"
        />
        <path
          d="M177.018 219.258C164.183 219.258 153.778 231.225 153.778 245.987C153.778 260.75 164.183 272.717 177.018 272.717C189.854 272.717 200.513 260.749 200.259 245.987C200.006 231.225 189.854 219.258 177.018 219.258Z"
          fill="#EAAC1F"
        />
        <path
          d="M177.017 224.385C164.984 224.385 155.23 236.352 155.23 251.114C155.23 265.877 164.984 277.844 177.017 277.844C189.051 277.844 198.941 263.477 198.806 251.114C198.747 245.78 189.051 224.385 177.017 224.385Z"
          fill="#974800"
        />
        <path
          d="M177.02 224.389C164.988 224.389 155.233 236.352 155.233 251.117C155.233 252.29 155.296 253.448 155.423 254.58C156.79 241.441 165.941 231.303 177.02 231.303C188.099 231.303 197.249 241.441 198.616 254.58C198.744 253.448 198.806 251.117 198.806 251.117C198.806 236.352 189.052 224.389 177.02 224.389Z"
          fill="#632900"
        />
        <path
          d="M333.575 229.527C346.41 229.527 356.814 241.495 356.814 256.257C356.814 271.019 346.41 282.986 333.575 282.986C320.739 282.986 310.055 269.757 310.333 256.257C310.61 242.831 320.739 229.527 333.575 229.527Z"
          fill="#FEDF9F"
        />
        <path
          d="M333.575 219.258C346.41 219.258 356.814 231.225 356.814 245.987C356.814 260.75 346.41 272.717 333.575 272.717C320.739 272.717 310.08 260.749 310.333 245.987C310.587 231.225 320.739 219.258 333.575 219.258Z"
          fill="#EAAC1F"
        />
        <path
          d="M333.576 224.385C345.609 224.385 355.363 236.352 355.363 251.114C355.363 265.877 345.609 277.844 333.576 277.844C321.542 277.844 311.652 263.477 311.787 251.114C311.846 245.78 321.542 224.385 333.576 224.385Z"
          fill="#974800"
        />
        <path
          d="M333.573 224.389C345.605 224.389 355.359 236.352 355.359 251.117C355.359 252.29 355.296 253.448 355.169 254.58C353.803 241.441 344.652 231.303 333.573 231.303C322.494 231.303 313.344 241.441 311.977 254.58C311.849 253.448 311.787 251.117 311.787 251.117C311.787 236.352 321.541 224.389 333.573 224.389Z"
          fill="#632900"
        />
        <path
          d="M306.358 159.78C305.838 154.628 313.191 145.382 334.297 147.68C379.77 152.633 398.821 185.546 393.268 190.083C388.222 194.206 380.672 174.217 339.649 166.037C322.281 162.572 307.037 166.517 306.358 159.78Z"
          fill="#FFE4AD"
        />
        <path
          d="M309.007 155.699C308.51 150.662 316.64 144.063 335.381 145.733C372.92 149.079 397.382 180.897 392.074 185.334C387.252 189.366 380.035 169.818 340.826 161.817C324.225 158.431 309.656 162.287 309.007 155.699Z"
          fill="#974800"
        />
        <path
          d="M391.565 185.662C386.359 175.141 364.937 154.643 335.381 152.009C321.377 150.76 313.279 154.383 310.311 158.107C309.561 157.518 309.11 156.739 309.007 155.699C308.51 150.662 316.64 144.063 335.381 145.733C372.92 149.079 397.382 180.897 392.074 185.334C391.908 185.473 391.738 185.577 391.565 185.662Z"
          fill="#632900"
        />
        <path
          d="M198.744 159.78C199.264 154.628 191.911 145.382 170.805 147.68C125.332 152.633 106.281 185.546 111.834 190.083C116.88 194.206 124.43 174.217 165.453 166.037C182.821 162.572 198.064 166.517 198.744 159.78Z"
          fill="#FFE4AD"
        />
        <path
          d="M196.095 155.699C196.592 150.662 188.462 144.063 169.721 145.733C132.182 149.079 107.72 180.897 113.028 185.334C117.85 189.366 125.067 169.818 164.276 161.817C180.877 158.431 195.446 162.287 196.095 155.699Z"
          fill="#974800"
        />
        <path
          d="M113.537 185.662C118.743 175.141 140.165 154.643 169.721 152.009C183.725 150.76 191.823 154.383 194.791 158.107C195.541 157.518 195.992 156.739 196.095 155.699C196.592 150.662 188.462 144.063 169.721 145.733C132.182 149.079 107.72 180.897 113.028 185.334C113.194 185.473 113.364 185.577 113.537 185.662Z"
          fill="#632900"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_110_22"
        x1="254.905"
        y1="78.9912"
        x2="256.906"
        y2="444.576"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FDCF18" />
        <stop offset="0.47" stopColor="#F5AB0C" />
        <stop offset="0.93" stopColor="#ED8700" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_110_22"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(249.961 93.4479) scale(342.856 342.856)"
      >
        <stop offset="0.07" stopColor="#FEFEE2" />
        <stop offset="0.28" stopColor="#FDEE8C" />
        <stop offset="0.49" stopColor="#FCDE36" />
        <stop offset="0.82" stopColor="#F5B820" />
        <stop offset="1" stopColor="#EE910A" />
      </radialGradient>
      <clipPath id="clip0_110_22">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Firework = ({width, height}) => (
  <svg
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_146_79)">
      <mask
        id="mask0_146_79"
        style={{maskType: 'luminance'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_146_79)">
        <path
          d="M84.2025 57.5383C84.2025 57.5383 7.74935 107.499 81.3006 117.713C93.8513 119.456 104.46 118.867 99.0742 123.631C80.0003 140.5 39.8037 174.435 80.5575 170.889C131 166.5 124.749 195.25 106.712 214.257"
          stroke="#004BB7"
          strokeWidth="16.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M86.9654 57.5632C86.9654 57.5632 23.0002 100.75 96.1011 106.893C139.938 110.577 32.1943 163.315 81.6172 158.9C153.249 152.501 136.717 196.937 110.363 217.327"
          stroke="#235DFD"
          strokeWidth="16.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M392.073 332.649L383.402 337.114C383.39 337.113 383.391 337.114 383.379 337.113C359.675 341.466 305.937 312.002 253.21 264.044C200.466 216.071 166.044 165.345 168.164 141.335L171.783 132.275C187.653 114.833 249.831 145.551 310.658 200.881C371.486 256.212 407.944 315.207 392.073 332.649Z"
          fill="#D19A1F"
        />
        <mask
          id="mask1_146_79"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="343"
          y="301"
          width="53"
          height="37"
        >
          <path
            d="M343.22 326.92L391.017 301.747C391.017 301.747 398.702 317.599 394.956 327.455C391.21 337.311 382.095 345.179 343.22 326.92Z"
            fill="url(#paint0_linear_146_79)"
          />
        </mask>
        <g mask="url(#mask1_146_79)">
          <path
            d="M343.22 326.92L391.017 301.747C391.017 301.747 398.702 317.599 394.956 327.455C391.21 337.311 382.095 345.179 343.22 326.92Z"
            fill="url(#paint1_linear_146_79)"
          />
        </g>
        <mask
          id="mask2_146_79"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="230"
          y="171"
          width="134"
          height="129"
        >
          <path
            d="M363.607 255.638L297.448 299.393C284.553 289.247 245.999 258.498 230.385 240.924L273.213 171.632C273.213 171.632 341.687 228.329 363.607 255.638Z"
            fill="url(#paint2_linear_146_79)"
          />
        </mask>
        <g mask="url(#mask2_146_79)">
          <path
            d="M363.607 255.638L297.448 299.393C284.553 289.247 245.999 258.498 230.385 240.924L273.213 171.632C273.213 171.632 341.687 228.329 363.607 255.638Z"
            fill="url(#paint3_linear_146_79)"
          />
        </g>
        <mask
          id="mask3_146_79"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="169"
          y="127"
          width="70"
          height="84"
        >
          <path
            d="M238.47 147.603L205.553 210.406C205.553 210.406 196.967 204.923 183.22 183.105C161.325 148.356 168.169 127.391 187.749 127.471L187.987 127.473C190.752 127.51 193.738 127.917 196.853 128.606C210.939 131.722 227.671 140.642 238.47 147.603Z"
            fill="url(#paint4_linear_146_79)"
          />
        </mask>
        <g mask="url(#mask3_146_79)">
          <path
            d="M238.47 147.603L205.553 210.406C205.553 210.406 196.967 204.923 183.22 183.105C161.325 148.356 168.169 127.391 187.749 127.471L187.987 127.473C190.752 127.51 193.738 127.917 196.853 128.606C210.939 131.722 227.671 140.642 238.47 147.603Z"
            fill="url(#paint5_linear_146_79)"
          />
        </g>
        <path
          d="M262.294 279.446C218.998 247.5 169.249 183.249 169.501 161.682"
          stroke="#F4C439"
          strokeWidth="8.64"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M392.073 332.649L383.402 337.114C383.39 337.113 383.391 337.114 383.379 337.113C359.675 341.466 305.937 312.002 253.21 264.044C200.466 216.071 166.044 165.345 168.164 141.335L171.783 132.275C187.653 114.833 249.831 145.551 310.658 200.881C371.486 256.212 407.944 315.207 392.073 332.649Z"
          stroke="#9B5C00"
          strokeWidth="8.64"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M191.591 69.0601C226.75 83.7495 260 150 207.188 323.152"
          stroke="#C1214A"
          strokeWidth="14.9956"
          strokeLinejoin="round"
        />
        <path
          d="M195.82 58.6599C202.5 61.9999 291.5 80.4999 211.13 327.003"
          stroke="#FB4984"
          strokeWidth="20"
          strokeLinejoin="round"
        />
        <path
          d="M487.96 240.477C451.999 242.375 328.5 246 249.643 309.438"
          stroke="#004BB7"
          strokeWidth="14.9956"
          strokeLinejoin="round"
        />
        <path
          d="M487.529 227.733C466.5 228.75 355 223.501 239.453 302.046"
          stroke="#235DFD"
          strokeWidth="20"
          strokeLinejoin="round"
        />
        <path
          d="M383.382 337.114L117.872 473.595C81.9671 492.054 42.4044 456.066 57.3772 418.57L168.167 141.335C166.046 165.346 200.472 216.067 253.212 264.044C305.934 312.007 359.677 341.467 383.382 337.114Z"
          fill="url(#paint6_linear_146_79)"
        />
        <mask
          id="mask4_146_79"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="92"
          y="320"
          width="290"
          height="158"
        >
          <path
            d="M330.922 320.585L92.6514 477.186L106.309 476.021L381.92 335.748C381.92 335.748 355.345 341.29 330.922 320.585Z"
            fill="url(#paint7_linear_146_79)"
          />
        </mask>
        <g mask="url(#mask4_146_79)">
          <path
            d="M330.922 320.585L92.6514 477.186L106.309 476.021L381.92 335.748C381.92 335.748 355.345 341.29 330.922 320.585Z"
            fill="url(#paint8_linear_146_79)"
          />
        </g>
        <path
          d="M325.65 366.791L296.073 382.643C261.027 373.559 231.832 354.149 198.925 324.211C165.678 293.964 141.699 259.889 130.561 235.438L145.604 197.778C149.619 222.842 178.359 264.154 220.807 302.745C259.696 338.1 299.734 361.812 325.65 366.791Z"
          fill="url(#paint9_linear_146_79)"
        />
        <path
          d="M218.141 422.054L187.685 437.703C181.994 435.359 175.923 432.412 169.635 428.923C162.942 425.208 156.032 420.837 149.12 415.863C142.641 411.2 136.17 406.004 129.882 400.288C110.224 382.419 95.2169 363.223 86.6761 345.255L98.4188 315.872C106.18 333.216 123.859 355.979 147.586 377.571C155.263 384.557 163.012 390.906 170.584 396.487C171.119 396.881 171.65 397.268 172.17 397.647C173.747 398.796 175.335 399.898 176.88 400.987C177.921 401.721 178.961 402.422 179.992 403.112C182.675 404.908 185.326 406.597 187.925 408.177C188.667 408.638 189.417 409.078 190.158 409.516C191.791 410.483 193.391 411.392 194.981 412.263C203.512 416.934 211.387 420.272 218.141 422.054Z"
          fill="url(#paint10_linear_146_79)"
        />
        <path
          d="M134.132 465.24L131.05 466.819L117.872 473.595C114.519 475.323 112.04 475.839 108.673 476.661C106.272 475.914 103.84 474.942 101.401 473.772C98.0465 472.163 94.6824 470.199 91.357 467.973C86.4961 464.719 81.7158 460.892 77.2404 456.821C66.4798 447.03 59.4674 438.279 54.8535 427.229C55.3695 424.09 56.1038 421.755 57.3772 418.57L62.5111 405.724L63.8722 402.313C64.4317 403.744 65.1355 405.259 65.9565 406.836C70.9304 416.389 80.459 428.222 92.8503 439.506C98.172 444.352 103.558 448.626 108.734 452.295C110.526 453.564 112.308 454.76 114.046 455.867C114.39 456.087 114.734 456.296 115.067 456.503C117.386 457.94 119.643 459.22 121.812 460.348C124.563 461.779 127.181 462.95 129.609 463.846C131.202 464.434 132.71 464.902 134.132 465.24Z"
          fill="url(#paint11_linear_146_79)"
        />
        <path
          d="M383.382 337.114L117.872 473.595C112.37 476.424 105.496 479.588 100.023 480.869C82.075 485.066 51.748 459.535 51.9514 439.527C52.0098 433.798 54.9715 424.594 57.3771 418.57L168.167 141.335C166.046 165.346 200.472 216.067 253.212 264.044C305.934 312.007 359.677 341.467 383.382 337.114Z"
          stroke="#9B5C00"
          strokeWidth="8.64"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M133.098 240.731L128.343 229.346L142.82 193.118L147.431 204.864L133.098 240.731Z"
          fill="#4F0082"
        />
        <path
          d="M89.2754 350.391C89.2754 350.391 85.2442 342.761 84.6611 338.656L95.4965 311.54L100.902 321.298L89.2754 350.391Z"
          fill="#4F0082"
        />
        <path
          d="M57.351 432.55C52.8469 424.529 51.9949 420.62 51.9949 420.62C51.9949 420.62 51.9185 420.591 53.3654 416.969L61.1839 397.266L66.3909 407.655L61.3878 420.174C60.1896 423.174 57.351 432.55 57.351 432.55Z"
          fill="#4F0082"
        />
        <path
          d="M117.647 478.536C117.647 478.536 111.233 478.182 104.245 475.045C104.099 474.981 113.269 471.105 115.898 469.753L128.332 463.359L139.364 467.378L119.848 477.437C118.524 478.114 117.647 478.536 117.647 478.536Z"
          fill="#44006B"
        />
        <path
          d="M195.547 438.525C188.714 437.713 182.57 435.481 182.57 435.481L212.274 420.212L222.755 424.539L195.547 438.525Z"
          fill="#44006B"
        />
        <path
          d="M303.158 383.208C296.559 382.648 289.152 380.693 289.152 380.693L319.198 365.249L331.176 368.839L303.158 383.208Z"
          fill="#44006B"
        />
        <path
          d="M262.296 279.446C219 247.501 169.251 183.25 169.503 161.682"
          stroke="#F4C439"
          strokeWidth="8.64"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M392.075 332.649L383.403 337.114C383.392 337.114 383.393 337.114 383.381 337.114C359.676 341.467 305.939 312.002 253.212 264.044C200.468 216.071 166.046 165.346 168.166 141.335L171.784 132.275C177.657 125.822 189.867 125.961 206.002 131.5"
          stroke="#9B5C00"
          strokeWidth="8.64"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M125.117 118.093L138.615 103.222C139.786 101.931 141.782 101.835 143.073 103.007L157.943 116.504C159.235 117.676 159.331 119.671 158.16 120.962L144.661 135.833C143.49 137.124 141.495 137.22 140.204 136.048L125.334 122.551C124.043 121.379 123.946 119.384 125.117 118.093Z"
          fill="#BCBC42"
        />
        <path
          d="M125.117 118.093L136.902 105.11C138.074 103.819 140.07 103.723 141.361 104.894L154.343 116.678C155.634 117.85 155.73 119.846 154.559 121.137L142.774 134.119C141.603 135.41 139.607 135.506 138.316 134.335L125.334 122.551C124.043 121.379 123.946 119.384 125.117 118.093Z"
          fill="#F8F74A"
        />
        <path
          d="M408.108 308.508L426.193 299.777C427.763 299.019 429.65 299.677 430.408 301.247L439.139 319.332C439.897 320.902 439.24 322.789 437.67 323.547L419.583 332.278C418.014 333.036 416.128 332.378 415.37 330.808L406.639 312.723C405.881 311.153 406.538 309.266 408.108 308.508Z"
          fill="#BCBC42"
        />
        <path
          d="M408.108 308.508L423.898 300.885C425.468 300.127 427.355 300.786 428.113 302.356L435.736 318.145C436.494 319.715 435.835 321.601 434.265 322.36L418.476 329.982C416.906 330.74 415.02 330.082 414.261 328.512L406.639 312.723C405.881 311.153 406.538 309.266 408.108 308.508Z"
          fill="#F8F74A"
        />
        <path
          d="M468.789 62.0073C491 75.4998 509.999 134.5 432.949 120.963C377.32 111.191 440.5 158 422.943 166.389C402.896 175.968 364 138.999 360.037 151.007C354.533 167.685 354.501 182.5 354.795 201.23"
          stroke="#C1214A"
          strokeWidth="16.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M463.288 64.5065C463.288 64.5065 509 123 427.149 116.143C370.866 111.428 445.152 162.361 420.382 167.649C400 171.999 347.469 117.997 345.137 149.826C343 178.999 345.5 189 348.794 204.071"
          stroke="#FB4984"
          strokeWidth="16.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M176.671 96.6224L190.707 82.259C191.925 81.0127 193.924 80.9885 195.171 82.2067L209.534 96.2435C210.78 97.4617 210.803 99.4595 209.585 100.706L195.549 115.069C194.33 116.315 192.333 116.339 191.086 115.12L176.723 101.085C175.477 99.8664 175.453 97.8687 176.671 96.6224Z"
          fill="#CE194D"
        />
        <path
          d="M176.671 96.6224L188.926 84.0818C190.144 82.8355 192.143 82.8123 193.389 84.0305L205.929 96.2846C207.175 97.5028 207.198 99.5016 205.98 100.748L193.726 113.288C192.508 114.534 190.509 114.557 189.263 113.339L176.723 101.085C175.477 99.8665 175.453 97.8687 176.671 96.6224Z"
          fill="#F95890"
        />
        <path
          d="M89.1649 293.838L71.6582 283.998C70.1391 283.144 69.5984 281.219 70.4525 279.7L80.2935 262.194C81.1477 260.674 83.0713 260.135 84.5904 260.989L102.097 270.83C103.616 271.684 104.156 273.608 103.302 275.127L93.4618 292.633C92.6077 294.152 90.684 294.692 89.1649 293.838Z"
          fill="#CE194D"
        />
        <path
          d="M89.1649 293.838L73.8799 285.247C72.3607 284.393 71.821 282.468 72.6752 280.949L81.2662 265.665C82.1204 264.146 84.045 263.606 85.5641 264.46L100.848 273.051C102.367 273.906 102.907 275.83 102.053 277.349L93.4618 292.633C92.6076 294.152 90.684 294.692 89.1649 293.838Z"
          fill="#F95890"
        />
        <path
          d="M429.362 429.367L447.464 420.67C449.035 419.916 450.922 420.577 451.676 422.148L460.372 440.251C461.127 441.822 460.466 443.707 458.895 444.461L440.792 453.158C439.221 453.912 437.335 453.251 436.581 451.68L427.884 433.578C427.13 432.007 427.791 430.122 429.362 429.367Z"
          fill="#CE194D"
        />
        <path
          d="M429.362 429.367L445.167 421.774C446.738 421.02 448.624 421.681 449.378 423.252L456.971 439.056C457.725 440.627 457.063 442.513 455.492 443.268L439.688 450.86C438.117 451.615 436.231 450.953 435.477 449.382L427.885 433.578C427.13 432.007 427.791 430.122 429.362 429.367Z"
          fill="#F95890"
        />
        <path
          d="M278.463 84.5456L263.749 98.2135C262.471 99.3996 260.474 99.3269 259.288 98.0494L245.62 83.3355C244.434 82.058 244.507 80.0611 245.785 78.8751L260.498 65.2071C261.776 64.021 263.773 64.0937 264.959 65.3712L278.627 80.0851C279.813 81.3626 279.74 83.3595 278.463 84.5456Z"
          fill="#184D9B"
        />
        <path
          d="M278.463 84.5455L265.616 96.4789C264.339 97.665 262.342 97.5914 261.156 96.3138L249.222 83.4677C248.036 82.1902 248.109 80.1943 249.387 79.0082L262.233 67.0748C263.51 65.8887 265.507 65.9614 266.693 67.2389L278.627 80.085C279.813 81.3626 279.74 83.3594 278.463 84.5455Z"
          fill="#2C67EA"
        />
        <path
          d="M353.888 375.168L365.159 389.879C366.137 391.156 365.764 392.934 364.324 393.849L347.736 404.404C346.296 405.32 344.336 405.028 343.358 403.751L332.087 389.04C331.109 387.763 331.482 385.985 332.923 385.069L349.51 374.515C350.95 373.599 352.91 373.89 353.888 375.168Z"
          fill="#184D9B"
        />
        <path
          d="M353.888 375.168L363.729 388.011C364.707 389.289 364.333 391.066 362.893 391.982L348.411 401.198C346.971 402.113 345.011 401.822 344.033 400.545L334.193 387.701C333.215 386.424 333.588 384.646 335.028 383.73L349.51 374.515C350.95 373.599 352.91 373.89 353.888 375.168Z"
          fill="#2C67EA"
        />
        <path
          d="M282.028 163.851L269.358 148.87C268.259 147.569 268.269 145.589 269.383 144.447L282.211 131.284C283.324 130.142 285.118 130.269 286.218 131.57L298.888 146.551C299.987 147.852 299.977 149.832 298.863 150.974L286.035 164.137C284.921 165.279 283.127 165.152 282.028 163.851Z"
          fill="#184D9B"
        />
        <path
          d="M282.028 163.851L270.966 150.772C269.866 149.471 269.877 147.49 270.991 146.348L282.191 134.856C283.305 133.714 285.098 133.841 286.197 135.142L297.259 148.221C298.359 149.522 298.348 151.502 297.234 152.645L286.035 164.137C284.921 165.279 283.127 165.152 282.028 163.851Z"
          fill="#2C67EA"
        />
        <path
          d="M380.902 77.337L397.397 64.4678C398.828 63.3512 400.684 63.5969 401.539 65.0183L411.398 81.3959C412.253 82.8173 411.787 84.8747 410.355 85.9913L393.859 98.8601C392.428 99.9767 390.574 99.7305 389.718 98.3091L379.859 81.9324C379.004 80.5111 379.47 78.4536 380.902 77.337Z"
          fill="#CE194D"
        />
        <path
          d="M380.901 77.3371L395.303 66.1009C396.735 64.9843 398.59 65.231 399.445 66.6524L408.052 80.9502C408.908 82.3715 408.441 84.4299 407.009 85.5465L392.608 96.7817C391.176 97.8983 389.322 97.6516 388.466 96.2303L379.859 81.9324C379.003 80.5111 379.47 78.4537 380.901 77.3371Z"
          fill="#F95890"
        />
        <path
          d="M474.081 327.255L484.788 344.245C485.718 345.72 485.276 347.669 483.801 348.598L466.811 359.306C465.336 360.236 463.388 359.793 462.458 358.318L451.75 341.328C450.821 339.854 451.263 337.905 452.738 336.975L469.728 326.269C471.202 325.339 473.151 325.781 474.081 327.255Z"
          fill="#D18927"
        />
        <path
          d="M474.081 327.255L483.429 342.089C484.359 343.564 483.916 345.511 482.442 346.441L467.608 355.79C466.134 356.72 464.185 356.277 463.255 354.803L453.907 339.97C452.977 338.495 453.419 336.546 454.894 335.616L469.728 326.269C471.202 325.339 473.151 325.781 474.081 327.255Z"
          fill="#FC9826"
        />
        <path
          d="M427.431 369.929L444.17 376.951C445.624 377.561 446.397 379.377 445.897 381.008L440.144 399.797C439.645 401.428 438.062 402.255 436.609 401.645L419.869 394.622C418.416 394.013 417.643 392.197 418.143 390.566L423.896 371.778C424.395 370.147 425.978 369.319 427.431 369.929Z"
          fill="#D18927"
        />
        <path
          d="M427.432 369.929L442.046 376.061C443.499 376.67 444.272 378.485 443.772 380.116L438.749 396.52C438.25 398.151 436.667 398.978 435.214 398.369L420.6 392.238C419.146 391.629 418.373 389.812 418.873 388.181L423.896 371.778C424.396 370.147 425.978 369.319 427.432 369.929Z"
          fill="#FC9826"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_146_79"
        x1="387.881"
        y1="327.932"
        x2="375.877"
        y2="310.875"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.71" stopColor="white" stopOpacity="0.5" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_146_79"
        x1="387.881"
        y1="327.932"
        x2="375.877"
        y2="310.875"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.19" stopColor="#FCD642" />
        <stop offset="0.88" stopColor="#E7B831" />
        <stop offset="1" stopColor="#D29A20" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_146_79"
        x1="253.381"
        y1="210.057"
        x2="320.127"
        y2="274.626"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.11" stopColor="white" stopOpacity="0.5" />
        <stop offset="0.49" stopColor="white" />
        <stop offset="0.86" stopColor="white" stopOpacity="0.505" />
        <stop offset="1" stopColor="white" stopOpacity="0.01" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_146_79"
        x1="253.381"
        y1="210.057"
        x2="320.127"
        y2="274.626"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FCD642" />
        <stop offset="0.14" stopColor="#FCD642" />
        <stop offset="0.5" stopColor="#FCD642" />
        <stop offset="0.84" stopColor="#FCD642" />
        <stop offset="0.99" stopColor="#FCD642" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_146_79"
        x1="178.382"
        y1="143.933"
        x2="221.877"
        y2="174.377"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.71" stopColor="white" stopOpacity="0.5" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_146_79"
        x1="178.382"
        y1="143.933"
        x2="221.877"
        y2="174.377"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.29" stopColor="#9A6C07" />
        <stop offset="0.9" stopColor="#B68314" />
        <stop offset="1" stopColor="#D29A20" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_146_79"
        x1="158.883"
        y1="264.058"
        x2="250.128"
        y2="350.627"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.11" stopColor="#C0951B" />
        <stop offset="0.42" stopColor="#DBAD2A" />
        <stop offset="0.72" stopColor="#F5C539" />
        <stop offset="0.82" stopColor="#FAE24F" />
        <stop offset="1" stopColor="#FFFF64" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_146_79"
        x1="239.67"
        y1="403.567"
        x2="230.167"
        y2="388.761"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.71" stopColor="white" stopOpacity="0.5" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_146_79"
        x1="239.67"
        y1="403.567"
        x2="230.167"
        y2="388.761"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.29" stopColor="#9A6C07" />
        <stop offset="0.9" stopColor="#CDB636" />
        <stop offset="1" stopColor="#FFFF64" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_146_79"
        x1="151.133"
        y1="238.558"
        x2="261.628"
        y2="396.876"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.27" stopColor="#8A48BE" />
        <stop offset="0.63" stopColor="#C579DE" />
        <stop offset="0.88" stopColor="#FFABFD" />
        <stop offset="0.92" stopColor="#B064BC" />
        <stop offset="0.99" stopColor="#611E7B" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_146_79"
        x1="103.132"
        y1="351.557"
        x2="168.628"
        y2="448.376"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.27" stopColor="#8A48BE" />
        <stop offset="0.62" stopColor="#C579DE" />
        <stop offset="0.85" stopColor="#FFABFD" />
        <stop offset="0.92" stopColor="#B064BC" />
        <stop offset="0.99" stopColor="#611E7B" />
      </linearGradient>
      <linearGradient
        id="paint11_linear_146_79"
        x1="71.3821"
        y1="431.557"
        x2="103.878"
        y2="478.126"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.27" stopColor="#8A48BE" />
        <stop offset="0.7" stopColor="#B76BD9" />
        <stop offset="0.88" stopColor="#E38EF4" />
        <stop offset="0.92" stopColor="#A256B7" />
        <stop offset="0.99" stopColor="#611E7B" />
      </linearGradient>
      <clipPath id="clip0_146_79">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Person = ({width, height}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.111 5.13044C13.4632 5.13044 12.1836 6.41058 12.1836 7.92165C12.1836 9.43273 13.4632 10.7129 15.111 10.7129C16.7588 10.7129 18.0385 9.43273 18.0385 7.92165C18.0385 6.41058 16.7588 5.13044 15.111 5.13044ZM10.3836 7.92165C10.3836 5.35553 12.5311 3.33044 15.111 3.33044C17.6909 3.33044 19.8385 5.35553 19.8385 7.92165C19.8385 10.4878 17.6909 12.5129 15.111 12.5129C12.5311 12.5129 10.3836 10.4878 10.3836 7.92165ZM4.58553 7.02165C5.08258 7.02165 5.48553 7.4246 5.48553 7.92165V9.79006H7.45612C7.95317 9.79006 8.35611 10.193 8.35611 10.6901C8.35611 11.1871 7.95317 11.5901 7.45612 11.5901H5.48553V13.4585C5.48553 13.9555 5.08258 14.3585 4.58553 14.3585C4.08847 14.3585 3.68553 13.9555 3.68553 13.4585V11.5901H1.71494C1.21789 11.5901 0.814941 11.1871 0.814941 10.6901C0.814941 10.193 1.21789 9.79006 1.71494 9.79006H3.68553V7.92165C3.68553 7.4246 4.08847 7.02165 4.58553 7.02165ZM15.111 15.7427C10.1851 15.7427 8.93877 18.498 8.82975 19.5495C8.77848 20.0439 8.33613 20.4031 7.84172 20.3519C7.34732 20.3006 6.98808 19.8583 7.03935 19.3639C7.24927 17.3393 9.32004 13.9427 15.111 13.9427C20.902 13.9427 22.9728 17.3393 23.1827 19.3639C23.2339 19.8583 22.8747 20.3006 22.3803 20.3519C21.8859 20.4031 21.4435 20.0439 21.3923 19.5495C21.2833 18.498 20.0369 15.7427 15.111 15.7427Z"
      fill="#1A270F"
    />
  </svg>
)

export const Metamask = ({width, height}) => (
  <svg
    width="319"
    height="319"
    viewBox="0 0 319 319"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <path
      d="M274.1 35.5L174.6 109.4L193 65.8L274.1 35.5Z"
      fill="#E2761B"
      stroke="#E2761B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M44.3999 35.5L143.1 110.1L125.6 65.8L44.3999 35.5ZM238.3 206.8L211.8 247.4L268.5 263L284.8 207.7L238.3 206.8ZM33.8999 207.7L50.0999 263L106.8 247.4L80.2999 206.8L33.8999 207.7Z"
      fill="#E4761B"
      stroke="#E4761B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M103.6 138.2L87.7998 162.1L144.1 164.6L142.1 104.1L103.6 138.2ZM214.9 138.2L175.9 103.4L174.6 164.6L230.8 162.1L214.9 138.2ZM106.8 247.4L140.6 230.9L111.4 208.1L106.8 247.4ZM177.9 230.9L211.8 247.4L207.1 208.1L177.9 230.9Z"
      fill="#E4761B"
      stroke="#E4761B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M211.8 247.4L177.9 230.9L180.6 253L180.3 262.3L211.8 247.4ZM106.8 247.4L138.3 262.3L138.1 253L140.6 230.9L106.8 247.4Z"
      fill="#D7C1B3"
      stroke="#D7C1B3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M138.8 193.5L110.6 185.2L130.5 176.1L138.8 193.5ZM179.7 193.5L188 176.1L208 185.2L179.7 193.5Z"
      fill="#233447"
      stroke="#233447"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M106.8 247.4L111.6 206.8L80.2998 207.7L106.8 247.4ZM207 206.8L211.8 247.4L238.3 207.7L207 206.8ZM230.8 162.1L174.6 164.6L179.8 193.5L188.1 176.1L208.1 185.2L230.8 162.1ZM110.6 185.2L130.6 176.1L138.8 193.5L144.1 164.6L87.7998 162.1L110.6 185.2Z"
      fill="#CD6116"
      stroke="#CD6116"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M87.7998 162.1L111.4 208.1L110.6 185.2L87.7998 162.1ZM208.1 185.2L207.1 208.1L230.8 162.1L208.1 185.2ZM144.1 164.6L138.8 193.5L145.4 227.6L146.9 182.7L144.1 164.6ZM174.6 164.6L171.9 182.6L173.1 227.6L179.8 193.5L174.6 164.6Z"
      fill="#E4751F"
      stroke="#E4751F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M179.8 193.5L173.1 227.6L177.9 230.9L207.1 208.1L208.1 185.2L179.8 193.5ZM110.6 185.2L111.4 208.1L140.6 230.9L145.4 227.6L138.8 193.5L110.6 185.2Z"
      fill="#F6851B"
      stroke="#F6851B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M180.3 262.3L180.6 253L178.1 250.8H140.4L138.1 253L138.3 262.3L106.8 247.4L117.8 256.4L140.1 271.9H178.4L200.8 256.4L211.8 247.4L180.3 262.3Z"
      fill="#C0AD9E"
      stroke="#C0AD9E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M177.9 230.9L173.1 227.6H145.4L140.6 230.9L138.1 253L140.4 250.8H178.1L180.6 253L177.9 230.9Z"
      fill="#161616"
      stroke="#161616"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M278.3 114.2L286.8 73.4L274.1 35.5L177.9 106.9L214.9 138.2L267.2 153.5L278.8 140L273.8 136.4L281.8 129.1L275.6 124.3L283.6 118.2L278.3 114.2ZM31.7998 73.4L40.2998 114.2L34.8998 118.2L42.8998 124.3L36.7998 129.1L44.7998 136.4L39.7998 140L51.2998 153.5L103.6 138.2L140.6 106.9L44.3998 35.5L31.7998 73.4Z"
      fill="#763D16"
      stroke="#763D16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M267.2 153.5L214.9 138.2L230.8 162.1L207.1 208.1L238.3 207.7H284.8L267.2 153.5ZM103.6 138.2L51.2999 153.5L33.8999 207.7H80.2999L111.4 208.1L87.7999 162.1L103.6 138.2ZM174.6 164.6L177.9 106.9L193.1 65.8H125.6L140.6 106.9L144.1 164.6L145.3 182.8L145.4 227.6H173.1L173.3 182.8L174.6 164.6Z"
      fill="#F6851B"
      stroke="#F6851B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Fox = ({width, height}) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`, minHeight: `${height}px`} : {}),
    }}
  >
    <g clipPath="url(#clip0_180_19)">
      <mask
        id="mask0_180_19"
        style={{maskType: 'luminance'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_180_19)">
        <path
          d="M212.529 117.938C181.983 87.7313 136.311 68.7741 87.1924 59.295C87.1924 59.295 89.7776 195.448 116.491 221.3C144.46 135.8 212.529 117.938 212.529 117.938Z"
          fill="url(#paint0_radial_180_19)"
        />
        <path
          d="M95.2702 132.047L87.1924 59.295C114.522 64.5688 134.146 73.0353 157.33 84.4834C157.33 84.4834 155.215 89.889 154.196 92.083L102.781 131.467C102.781 131.467 98.0062 132.004 95.2702 132.047Z"
          fill="url(#paint1_linear_180_19)"
        />
        <path
          d="M212.529 117.938C181.983 87.7313 136.311 68.7741 87.1924 59.295C87.1924 59.295 88.7745 194.08 115.414 220.008"
          stroke="#B13E00"
          strokeWidth="6.89384"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M195.079 123.829C174.944 103.379 144.02 86.3499 100.98 78.0437C100.98 78.0437 105.035 173.501 123.852 197.595C153.508 137.739 195.079 123.829 195.079 123.829Z"
          fill="url(#paint2_radial_180_19)"
        />
        <g opacity="0.2">
          <path
            d="M100.98 78.0437C100.98 78.0437 176.56 106.717 145.854 161.288C145.854 161.288 166.973 132.461 195.657 124.406C196.703 122.551 157.329 84.4834 100.98 78.0437Z"
            fill="#852500"
          />
        </g>
        <path
          d="M195.079 123.829C176.021 104.24 144.02 86.3499 100.98 78.0437C100.98 78.0437 105.897 173.716 123.852 197.595C153.508 139.247 195.079 123.829 195.079 123.829Z"
          stroke="#882B00"
          strokeWidth="6.89384"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M151.268 93.9254C136.756 87.2211 119.939 81.7026 100.98 78.0437C100.98 78.0437 102.293 103.604 106.043 131.6"
          stroke="#372019"
          strokeWidth="6.89384"
        />
        <path
          d="M156.871 80.8641C135.483 71.1542 111.769 64.038 87.1924 59.295C87.1924 59.295 87.6077 94.6966 91.5993 132.703"
          stroke="#40261C"
          strokeWidth="6.89384"
        />
        <path
          d="M309.377 117.938C339.924 87.7313 385.596 68.7741 434.714 59.295C434.714 59.295 432.129 195.448 405.416 221.3C377.446 135.8 309.377 117.938 309.377 117.938Z"
          fill="url(#paint3_radial_180_19)"
        />
        <path
          d="M426.636 132.047L434.714 59.295C407.385 64.5688 387.76 73.0353 364.576 84.4834C364.576 84.4834 366.692 89.889 367.711 92.083L419.126 131.467C419.126 131.467 423.901 132.004 426.636 132.047Z"
          fill="url(#paint4_linear_180_19)"
        />
        <path
          d="M309.377 117.938C339.924 87.7313 385.596 68.7741 434.714 59.295C434.714 59.295 433.132 194.08 406.493 220.008"
          stroke="#B13E00"
          strokeWidth="6.89384"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M326.828 123.829C346.963 103.379 377.887 86.3499 420.927 78.0437C420.927 78.0437 416.871 173.501 398.055 197.595C368.399 137.739 326.828 123.829 326.828 123.829Z"
          fill="url(#paint5_radial_180_19)"
        />
        <g opacity="0.2">
          <path
            d="M420.927 78.0437C420.927 78.0437 345.347 106.717 376.053 161.288C376.053 161.288 354.934 132.461 326.249 124.406C325.204 122.551 364.577 84.4834 420.927 78.0437Z"
            fill="#852500"
          />
        </g>
        <path
          d="M326.828 123.829C345.886 104.24 377.887 86.3499 420.927 78.0437C420.927 78.0437 416.01 173.716 398.055 197.595C368.399 139.247 326.828 123.829 326.828 123.829Z"
          stroke="#882B00"
          strokeWidth="6.89384"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M370.639 93.9254C385.151 87.2211 401.968 81.7026 420.927 78.0437C420.927 78.0437 419.613 103.604 415.864 131.6"
          stroke="#372019"
          strokeWidth="6.89384"
        />
        <path
          d="M365.036 80.8641C386.424 71.1542 410.138 64.038 434.714 59.295C434.714 59.295 434.299 94.6966 430.307 132.703"
          stroke="#40261C"
          strokeWidth="6.89384"
        />
        <path
          d="M436.194 388.477C436.194 388.477 444.811 391.062 453.428 391.062C453.428 391.062 439.641 410.882 382.766 416.914C339.706 421.482 319.86 438.906 260.401 438.906H260.203C200.898 438.863 181.044 421.473 138.035 416.914C81.1609 410.882 67.3732 391.062 67.3732 391.062C75.9905 391.062 84.6078 388.477 84.6078 388.477C59.6176 382.445 49.2769 366.934 49.2769 366.934C78.9635 350.82 84.4441 338.04 84.5992 337.644C82.6861 338.807 80.7817 339.841 78.9031 340.763L78.8256 340.798C65.4601 347.312 53.5855 347.976 53.5855 347.976C75.1288 322.124 90.4589 297.78 100.619 272.773C107.874 254.909 110.089 244.25 115.63 220.44C132.865 146.331 194.047 110.095 260.401 110.095C326.754 110.095 388.798 146.331 406.033 220.44C411.574 244.25 412.065 252.324 419.321 271.911C428.697 297.22 445.673 322.124 467.216 347.976C467.216 347.976 451.713 347.114 436.202 337.644C436.357 338.04 441.838 350.82 471.525 366.934C471.525 366.934 459.46 382.445 436.194 388.477Z"
          fill="url(#paint6_radial_180_19)"
        />
        <g opacity="0.3">
          <path
            d="M360.948 199.597C360.948 232.808 315.547 259.731 259.543 259.731C203.539 259.731 158.138 232.808 158.138 199.597C158.138 166.386 203.539 139.463 259.543 139.463C315.547 139.463 360.948 166.386 360.948 199.597Z"
            fill="url(#paint7_radial_180_19)"
          />
        </g>
        <path
          d="M299.989 360.187C283.71 370.321 275.989 386.84 275.989 386.84H247.121C239.667 373.052 230.395 364.289 220.313 359.058C226.474 349.743 232.86 337.127 234.213 320.926C237.539 281.071 243.218 210.289 260.383 210.289C277.549 210.289 284.331 274.496 286.658 320.926C287.528 338.17 293.793 350.992 299.989 360.187Z"
          fill="url(#paint8_linear_180_19)"
        />
        <g opacity="0.8">
          <path
            d="M325.285 340.409C346.152 340.409 363.068 311.451 363.068 275.732C363.068 240.013 346.152 211.056 325.285 211.056C304.419 211.056 287.503 240.013 287.503 275.732C287.503 311.451 304.419 340.409 325.285 340.409Z"
            fill="url(#paint9_radial_180_19)"
          />
        </g>
        <g opacity="0.8">
          <path
            d="M196.298 340.409C175.431 340.409 158.515 311.451 158.515 275.732C158.515 240.013 175.431 211.056 196.298 211.056C217.164 211.056 234.08 240.013 234.08 275.732C234.08 311.451 217.164 340.409 196.298 340.409Z"
            fill="url(#paint10_radial_180_19)"
          />
        </g>
        <path
          d="M436.194 388.477C436.194 388.477 444.811 391.063 453.428 391.063C453.428 391.063 439.641 410.882 382.767 416.914C339.706 421.482 319.86 438.906 260.401 438.906C200.941 438.906 181.096 421.482 138.035 416.914C81.161 410.882 67.3733 391.063 67.3733 391.063C75.9906 391.063 84.6079 388.477 84.6079 388.477C60.0056 382.54 49.6045 367.417 49.2856 366.943C87.1931 375.235 121.861 371.63 149.858 361.135C177.856 350.639 222.459 341.194 247.122 386.84H275.99C275.99 386.84 291.805 353.021 325.841 352.466C357.954 351.943 408.292 383.171 471.525 366.934C471.525 366.934 459.46 382.445 436.194 388.477Z"
          fill="url(#paint11_radial_180_19)"
        />
        <g opacity="0.2">
          <path
            d="M78.2912 341.056C65.1499 347.33 53.5854 347.976 53.5854 347.976C75.1287 322.124 90.4589 297.78 100.619 272.773C107.874 254.909 110.089 244.25 115.63 220.44C132.865 146.331 194.047 110.095 260.401 110.095C326.754 110.095 388.798 146.331 406.033 220.44C411.574 244.25 412.065 252.324 419.321 271.911C428.696 297.22 445.673 322.124 467.216 347.976C467.216 347.976 455.643 347.33 442.493 341.039C424.948 319.47 411.143 298.564 403.284 277.349C396.761 259.735 396.313 252.47 391.332 231.065C375.838 164.436 320.058 131.854 260.401 131.854C200.743 131.854 145.739 164.436 130.245 231.065C125.264 252.47 123.274 262.053 116.742 278.124C108.228 299.09 95.6637 319.539 78.2912 341.056Z"
            fill="url(#paint12_linear_180_19)"
          />
        </g>
        <g opacity="0.3">
          <path
            d="M436.194 388.477C436.194 388.477 444.811 391.063 453.428 391.063C453.428 391.063 439.641 410.882 382.766 416.914C339.706 421.482 319.86 438.906 260.401 438.906C200.941 438.906 181.096 421.482 138.035 416.914C81.1609 410.882 67.3732 391.063 67.3732 391.063C75.9905 391.063 84.6078 388.477 84.6078 388.477C59.6176 382.445 49.2769 366.934 49.2769 366.934C65.3912 358.188 74.3704 350.423 79.2306 345.098C84.5044 344.167 93.4233 341.884 102.342 336.438C102.204 336.791 97.2838 348.286 70.5874 362.772C70.5874 362.772 79.8855 376.723 102.351 382.144C102.351 382.144 94.6039 384.47 86.8569 384.47C86.8569 384.47 99.2486 402.291 150.384 407.711C189.101 411.813 206.939 427.479 260.401 427.479C313.862 427.479 331.7 411.813 370.418 407.711C421.553 402.291 433.945 384.47 433.945 384.47C426.198 384.47 418.451 382.144 418.451 382.144C439.365 376.723 450.214 362.772 450.214 362.772C423.518 348.286 418.597 336.791 418.459 336.438C427.378 341.884 436.297 344.167 441.571 345.098C446.431 350.423 455.41 358.188 471.525 366.934C471.525 366.934 459.46 382.445 436.194 388.477Z"
            fill="url(#paint13_linear_180_19)"
          />
        </g>
        <g opacity="0.6">
          <path
            d="M469.603 366.934C439.916 350.82 434.436 338.04 434.281 337.644L434.272 337.635C434.272 337.635 436.59 351.569 449.059 364.03C449.059 364.03 398.82 408.745 324.151 385.823L259.44 396.108L194.728 385.823C120.059 408.745 69.8205 364.03 69.8205 364.03C82.2897 351.569 84.6078 337.635 84.6078 337.635L84.5992 337.644C84.4441 338.04 78.9635 350.82 49.2769 366.934C49.2769 366.934 59.6176 382.445 84.6078 388.477C84.6078 388.477 75.9905 391.063 67.3732 391.063C67.3732 391.063 81.1609 410.882 138.035 416.914C180.672 421.433 200.56 438.559 258.677 438.898V438.906C258.934 438.906 259.185 438.902 259.44 438.901C259.695 438.902 259.946 438.906 260.202 438.906V438.898C318.32 438.559 338.208 421.433 380.845 416.914C437.719 410.882 451.507 391.063 451.507 391.063C442.889 391.063 434.272 388.477 434.272 388.477C459.262 382.445 469.603 366.934 469.603 366.934Z"
            fill="url(#paint14_linear_180_19)"
          />
        </g>
        <path
          d="M471.525 366.933C441.364 350.56 436.194 337.634 436.194 337.634C451.705 347.113 467.216 347.975 467.216 347.975C445.673 322.123 428.7 297.221 419.324 271.914C412.065 252.323 411.571 244.25 406.033 220.439C388.798 146.33 326.754 110.092 260.401 110.092C194.047 110.092 132.865 146.33 115.63 220.439C110.093 244.25 107.874 254.908 100.616 272.775C90.4589 297.78 75.1288 322.123 53.5855 347.975C53.5855 347.975 69.0966 347.113 84.6078 337.634C84.6078 337.634 79.4374 350.56 49.2769 366.933C49.2769 366.933 59.6176 382.444 84.6078 388.477C84.6078 388.477 75.9905 391.062 67.3732 391.062C67.3732 391.062 81.1609 410.881 138.035 416.914C181.095 421.481 200.941 438.906 260.401 438.906C319.86 438.906 339.707 421.481 382.766 416.914C439.641 410.881 453.428 391.062 453.428 391.062C444.811 391.062 436.194 388.477 436.194 388.477C459.46 382.444 471.525 366.933 471.525 366.933Z"
          stroke="#7A5943"
          strokeWidth="6.89384"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M471.525 366.934C441.364 350.561 436.194 337.635 436.194 337.635C451.705 347.114 467.216 347.976 467.216 347.976C445.673 322.124 428.7 297.222 419.324 271.915C412.065 252.324 411.571 244.25 406.033 220.44C388.798 146.331 326.754 110.092 260.401 110.092C194.047 110.092 132.865 146.331 115.63 220.44C110.093 244.25 107.874 254.909 100.616 272.776C90.4589 297.781 75.1288 322.124 53.5855 347.976C53.5855 347.976 69.0966 347.114 84.6078 337.635C84.6078 337.635 79.4374 350.561 49.2769 366.934"
          stroke="#A72B00"
          strokeWidth="6.89384"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0.1">
          <path
            d="M307.631 286.809C307.631 306.364 316.224 322.216 326.824 322.216C337.423 322.216 346.016 306.364 346.016 286.809C346.016 267.255 337.423 251.403 326.824 251.403C316.224 251.403 307.631 267.255 307.631 286.809Z"
            fill="black"
          />
        </g>
        <g opacity="0.4">
          <path
            d="M307.631 300.597C307.631 320.152 316.224 336.004 326.824 336.004C337.423 336.004 346.016 320.152 346.016 300.597C346.016 281.043 337.423 265.19 326.824 265.19C316.224 265.19 307.631 281.043 307.631 300.597Z"
            fill="white"
          />
        </g>
        <path
          d="M307.473 293.703C307.473 313.258 316.066 329.11 326.665 329.11C337.264 329.11 345.857 313.258 345.857 293.703C345.857 274.149 337.264 258.297 326.665 258.297C316.066 258.297 307.473 274.149 307.473 293.703Z"
          fill="black"
        />
        <g opacity="0.3">
          <path
            d="M312.981 305.377C312.981 318.203 319.107 328.6 326.665 328.6C334.222 328.6 340.349 318.203 340.349 305.377C340.349 292.552 334.222 282.155 326.665 282.155C319.107 282.155 312.981 292.552 312.981 305.377Z"
            fill="url(#paint15_radial_180_19)"
          />
        </g>
        <path
          d="M326.671 280.626C330.61 280.673 333.317 282.207 335.031 282.354C336.827 282.509 337.534 281.226 337.429 278.91C337.153 272.818 331.911 266.5 326.671 266.5C321.63 266.5 315.951 271.928 316.216 278.874C316.3 281.064 317.059 282.455 318.524 282.396C320.247 282.326 322.945 280.581 326.671 280.626Z"
          fill="url(#paint16_linear_180_19)"
        />
        <g opacity="0.1">
          <path
            d="M212.861 286.4C212.861 305.955 204.268 321.807 193.669 321.807C183.069 321.807 174.476 305.955 174.476 286.4C174.476 266.846 183.069 250.994 193.669 250.994C204.268 250.994 212.861 266.846 212.861 286.4Z"
            fill="black"
          />
        </g>
        <g opacity="0.4">
          <path
            d="M212.861 300.188C212.861 319.742 204.268 335.595 193.669 335.595C183.069 335.595 174.476 319.742 174.476 300.188C174.476 280.634 183.069 264.781 193.669 264.781C204.268 264.781 212.861 280.634 212.861 300.188Z"
            fill="white"
          />
        </g>
        <path
          d="M213.02 293.294C213.02 312.849 204.426 328.701 193.827 328.701C183.228 328.701 174.635 312.849 174.635 293.294C174.635 273.74 183.228 257.887 193.827 257.887C204.426 257.887 213.02 273.74 213.02 293.294Z"
          fill="black"
        />
        <g opacity="0.3">
          <path
            d="M207.511 304.968C207.511 317.794 201.385 328.19 193.827 328.19C186.27 328.19 180.144 317.794 180.144 304.968C180.144 292.142 186.27 281.746 193.827 281.746C201.385 281.746 207.511 292.142 207.511 304.968Z"
            fill="url(#paint17_radial_180_19)"
          />
        </g>
        <path
          d="M193.821 280.217C189.882 280.264 187.176 281.798 185.461 281.945C183.665 282.099 182.958 280.817 183.063 278.501C183.339 272.409 188.581 266.091 193.821 266.091C198.862 266.091 204.541 271.519 204.276 278.465C204.192 280.655 203.433 282.046 201.968 281.987C200.245 281.917 197.547 280.172 193.821 280.217Z"
          fill="url(#paint18_linear_180_19)"
        />
        <path
          d="M303.999 429.316C303.999 444.151 284.48 456.178 260.401 456.178C236.323 456.178 216.803 444.151 216.803 429.316C216.803 414.48 236.323 402.454 260.401 402.454C284.48 402.454 303.999 414.48 303.999 429.316Z"
          fill="url(#paint19_linear_180_19)"
        />
        <g opacity="0.4">
          <path
            d="M303.134 426.729C303.134 434.726 298.582 442.995 289.585 447.915C286.552 447.571 283.313 447.104 280.583 446.419C276.966 445.512 273.663 444.66 270.824 443.915C264.206 442.18 257.262 442.195 250.655 443.972C248.058 444.671 244.887 445.489 241.081 446.419C237.913 447.193 234.42 447.471 230.878 447.824C221.727 442.912 215.944 434.803 215.944 426.729C215.944 411.898 235.463 399.869 259.539 399.869C283.616 399.869 303.134 411.898 303.134 426.729Z"
            fill="#6A4E3A"
          />
        </g>
        <path
          d="M266.635 402.726C287.76 404.59 303.999 415.784 303.999 429.316C303.999 444.151 284.48 456.178 260.401 456.178C236.323 456.178 216.803 444.151 216.803 429.316C216.803 414.48 236.323 402.454 260.401 402.454C262.518 402.454 264.599 402.547 266.635 402.726Z"
          stroke="#7A5943"
          strokeWidth="6.89384"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M331.2 427.652C331.071 427.884 330.933 428.108 330.795 428.332C322.212 442.155 297.446 440.845 279.72 437.803C268.699 435.916 260.4 433.356 260.4 433.356C260.4 433.356 252.102 435.916 241.08 437.803C223.354 440.845 198.597 442.155 190.014 428.341C189.876 428.117 189.738 427.884 189.609 427.652C175.037 401.757 200.191 379.3 200.191 379.3C200.191 379.3 210.989 372.751 220.313 358.627C230.395 363.858 239.667 372.622 247.121 386.409H275.989C275.989 386.409 283.71 369.89 299.988 359.756C309.39 373.699 320.618 379.3 320.618 379.3C320.618 379.3 345.763 401.757 331.2 427.652Z"
          fill="url(#paint20_linear_180_19)"
        />
        <g opacity="0.5">
          <path
            d="M294.817 389.955C292.732 382.364 285.317 375.856 260.405 375.856C235.492 375.856 228.078 382.364 225.993 389.955C224.16 396.628 230.017 406.396 238.251 415.166C245.93 423.344 255.789 430.774 260.401 430.774V430.761L260.409 430.774C265.02 430.774 274.879 423.344 282.558 415.166C290.793 406.396 296.65 396.628 294.817 389.955Z"
            fill="#FFF7E8"
          />
        </g>
        <path
          d="M200.188 379.303C200.188 379.303 175.038 401.756 189.609 427.655C205.001 455.015 258.197 432.316 260.4 431.637C262.604 432.315 315.804 455.015 331.197 427.655C345.768 401.756 320.618 379.303 320.618 379.303"
          stroke="#B18E68"
          strokeWidth="6.89384"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M187.889 424.208C188.387 425.349 188.959 426.498 189.609 427.654C194.419 436.204 202.921 439.866 212.405 440.839C233.269 442.978 258.886 432.102 260.401 431.636C262.605 432.314 315.804 455.014 331.197 427.654C332.077 426.088 332.813 424.536 333.418 423"
          stroke="#7A5943"
          strokeWidth="6.89384"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0.2">
          <path
            d="M294.817 381.864C292.732 373.989 285.317 367.238 260.405 367.238C235.492 367.238 228.078 373.989 225.992 381.864C224.159 388.785 230.878 398.918 239.113 408.015C246.792 416.498 255.789 424.207 260.4 424.207V424.193L260.409 424.207C265.02 424.207 274.017 416.498 281.696 408.015C289.931 398.918 296.65 388.785 294.817 381.864Z"
            fill="#BA3E00"
          />
        </g>
        <path
          d="M294.817 386.347C292.732 379.307 285.317 374.132 260.405 374.132C235.492 374.132 228.078 379.307 225.992 386.347C224.159 392.535 230.878 401.596 239.113 409.73C246.792 417.315 255.789 424.207 260.4 424.207V424.194L260.409 424.207C265.02 424.207 274.017 417.315 281.696 409.73C289.931 401.596 296.65 392.535 294.817 386.347Z"
          fill="url(#paint21_radial_180_19)"
        />
        <g opacity="0.6">
          <path
            d="M237.712 384.496C244.037 389.928 276.342 389.792 282.081 383.634C283.955 381.624 278.674 382.605 259.539 382.605C239.618 382.605 235.126 382.275 237.712 384.496Z"
            fill="url(#paint22_radial_180_19)"
          />
        </g>
      </g>
    </g>
    <defs>
      <radialGradient
        id="paint0_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(149.846 141.617) scale(73.378)"
      >
        <stop stopColor="#FFB000" />
        <stop offset="0.52" stopColor="#EE7A00" />
        <stop offset="1" stopColor="#DD4500" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_180_19"
        x1="101.589"
        y1="68.3699"
        x2="117.484"
        y2="94.2442"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#564E48" />
        <stop offset="0.61" stopColor="#50443C" />
        <stop offset="1" stopColor="#493A30" />
      </linearGradient>
      <radialGradient
        id="paint2_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(124.856 151.096) scale(60.8907 60.8907)"
      >
        <stop stopColor="#ED6A00" />
        <stop offset="0.61" stopColor="#C44C00" />
        <stop offset="1" stopColor="#9A2E00" />
      </radialGradient>
      <radialGradient
        id="paint3_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(372.061 141.617) rotate(180) scale(73.378)"
      >
        <stop stopColor="#FFB000" />
        <stop offset="0.52" stopColor="#EE7A00" />
        <stop offset="1" stopColor="#DD4500" />
      </radialGradient>
      <linearGradient
        id="paint4_linear_180_19"
        x1="420.317"
        y1="68.3699"
        x2="404.423"
        y2="94.2442"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#564E48" />
        <stop offset="0.61" stopColor="#50443C" />
        <stop offset="1" stopColor="#493A30" />
      </linearGradient>
      <radialGradient
        id="paint5_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(397.051 151.096) rotate(180) scale(60.8907 60.8907)"
      >
        <stop stopColor="#ED6A00" />
        <stop offset="0.61" stopColor="#C44C00" />
        <stop offset="1" stopColor="#9A2E00" />
      </radialGradient>
      <radialGradient
        id="paint6_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(260.148 274.325) scale(189.212 189.212)"
      >
        <stop stopColor="#FFB000" />
        <stop offset="0.52" stopColor="#EE7000" />
        <stop offset="1" stopColor="#DE3100" />
      </radialGradient>
      <radialGradient
        id="paint7_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(222.247 232.027) scale(44.508)"
      >
        <stop stopColor="#FFBA00" />
        <stop offset="0.68" stopColor="#FFBA00" stopOpacity="0.5" />
        <stop offset="1" stopColor="#FFBA00" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint8_linear_180_19"
        x1="260.148"
        y1="372.562"
        x2="260.148"
        y2="249.104"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.16" stopColor="#FF9D00" />
        <stop offset="0.28" stopColor="#FFAD0A" />
        <stop offset="0.46" stopColor="#FFBE14" />
        <stop offset="0.73" stopColor="#FFAC0A" stopOpacity="0.5" />
        <stop offset="1" stopColor="#FF9B00" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint9_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(325.561 275.133) rotate(180) scale(37.7214 46.4443)"
      >
        <stop offset="0.07" stopColor="#A72B00" />
        <stop offset="0.61" stopColor="#A72B00" stopOpacity="0.5" />
        <stop offset="1" stopColor="#A72B00" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint10_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(196.022 275.133) scale(37.7214 46.4443)"
      >
        <stop offset="0.07" stopColor="#A72B00" />
        <stop offset="0.61" stopColor="#A72B00" stopOpacity="0.5" />
        <stop offset="1" stopColor="#A72B00" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint11_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(258.425 379.456) scale(207.399 207.399)"
      >
        <stop offset="0.25" stopColor="#FADEB4" />
        <stop offset="0.64" stopColor="#D2B895" />
        <stop offset="1" stopColor="#A99177" />
      </radialGradient>
      <linearGradient
        id="paint12_linear_180_19"
        x1="260.148"
        y1="141.618"
        x2="260.148"
        y2="405.119"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.2" stopColor="#FDFFC2" />
        <stop offset="0.6" stopColor="#FEFFE0" stopOpacity="0.6" />
        <stop offset="1" stopColor="white" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_180_19"
        x1="260.148"
        y1="141.618"
        x2="260.148"
        y2="405.119"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.21" stopColor="white" />
        <stop offset="0.6" stopColor="white" stopOpacity="0.6" />
        <stop offset="1" stopColor="white" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient
        id="paint14_linear_180_19"
        x1="259.286"
        y1="436.33"
        x2="259.286"
        y2="379.964"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.23" stopColor="#7A5943" />
        <stop offset="0.68" stopColor="#7A5943" stopOpacity="0.5" />
        <stop offset="1" stopColor="#7A5943" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint15_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(326.304 306.584) rotate(180) scale(16.9896 21.6889)"
      >
        <stop stopColor="white" />
        <stop offset="0.61" stopColor="white" stopOpacity="0.5" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint16_linear_180_19"
        x1="327.26"
        y1="268.723"
        x2="327.26"
        y2="285.422"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.32" stopColor="white" stopOpacity="0.5" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint17_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(194.189 306.175) scale(16.9896 21.6889)"
      >
        <stop stopColor="white" />
        <stop offset="0.61" stopColor="white" stopOpacity="0.5" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint18_linear_180_19"
        x1="193.233"
        y1="268.313"
        x2="193.233"
        y2="285.013"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.32" stopColor="white" stopOpacity="0.5" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint19_linear_180_19"
        x1="260.149"
        y1="400.568"
        x2="260.149"
        y2="439.323"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.26" stopColor="#FADEB4" />
        <stop offset="0.55" stopColor="#D5B993" />
        <stop offset="0.81" stopColor="#B19473" />
      </linearGradient>
      <linearGradient
        id="paint20_linear_180_19"
        x1="260.148"
        y1="367.823"
        x2="260.148"
        y2="446.71"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.32" stopColor="#FFE4BD" />
        <stop offset="0.55" stopColor="#D6BB9A" />
        <stop offset="0.86" stopColor="#AD9277" />
      </linearGradient>
      <radialGradient
        id="paint21_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(260.148 392.813) scale(30.2657)"
      >
        <stop offset="0.13" stopColor="#333333" />
        <stop offset="0.61" stopColor="#1A1A1A" />
        <stop offset="1" />
      </radialGradient>
      <radialGradient
        id="paint22_radial_180_19"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(259.286 385.057) scale(23.464 23.464)"
      >
        <stop stopColor="white" />
        <stop offset="0.41" stopColor="white" stopOpacity="0.5" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <clipPath id="clip0_180_19">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Eth = ({width, height}) => (
  <svg
    width="12"
    height="18"
    viewBox="0 0 12 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <path
      d="M5.62451 0V6.65389L11.2484 9.16691L5.62451 0Z"
      fill="white"
      fillOpacity="0.602"
    />
    <path d="M5.62467 0L0 9.16691L5.62467 6.65389V0Z" fill="white" />
    <path
      d="M5.62451 13.4788V18L11.2522 10.2141L5.62451 13.4788Z"
      fill="white"
      fillOpacity="0.602"
    />
    <path d="M5.62467 18V13.478L0 10.2141L5.62467 18Z" fill="white" />
    <path
      d="M5.62451 12.4324L11.2484 9.16692L5.62451 6.6554V12.4324Z"
      fill="white"
      fillOpacity="0.2"
    />
    <path
      d="M0 9.16692L5.62467 12.4324V6.6554L0 9.16692Z"
      fill="white"
      fillOpacity="0.602"
    />
  </svg>
)

export const Arrows = ({width, height}) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM10.8895 7.70108C11.2767 7.30725 11.2713 6.67411 10.8775 6.28692C10.4836 5.89972 9.85049 5.9051 9.46329 6.29892L6.28692 9.52969C5.90436 9.9188 5.90436 10.5427 6.28692 10.9318L9.46329 14.1626C9.85049 14.5564 10.4836 14.5618 10.8775 14.1746C11.2713 13.7874 11.2767 13.1543 10.8895 12.7605L9.38552 11.2308L16 11.2308C16.5523 11.2308 17 10.7831 17 10.2308C17 9.67848 16.5523 9.23077 16 9.23077H9.38552L10.8895 7.70108ZM18.5367 13.8374C18.1495 13.4436 17.5164 13.4382 17.1225 13.8254C16.7287 14.2126 16.7233 14.8457 17.1105 15.2395L18.6145 16.7692L12 16.7692C11.4477 16.7692 11 17.2169 11 17.7692C11 18.3215 11.4477 18.7692 12 18.7692L18.6145 18.7692L17.1105 20.2989C16.7233 20.6927 16.7287 21.3259 17.1225 21.7131C17.5164 22.1003 18.1495 22.0949 18.5367 21.7011L21.7131 18.4703C22.0956 18.0812 22.0956 17.4573 21.7131 17.0682L18.5367 13.8374Z"
      fill="#171717"
    />
  </svg>
)

export const Wallet = ({width, height}) => (
  <svg
    width="24"
    height="19"
    viewBox="0 0 24 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
  >
    <mask
      id="mask0_190_22"
      style={{maskType: 'alpha'}}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="19"
    >
      <rect width="24" height="19" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_190_22)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.53201 1.05472e-05C6.94918 -9.9781e-05 7.25401 -0.000180427 7.55193 0.0462007C8.16992 0.142411 8.7555 0.386599 9.25875 0.757955C9.50136 0.93698 9.71582 1.15361 10.0093 1.45008C10.0238 1.46472 10.0385 1.47955 10.0534 1.49459C10.4091 1.85364 10.5215 1.96364 10.638 2.04957C10.9077 2.24864 11.2216 2.37954 11.5529 2.43111C11.6959 2.45337 11.8532 2.45587 12.3586 2.45587L13.1258 2.45587C14.4184 2.45584 17.4755 2.45582 18.3133 2.56398C19.188 2.67693 19.9515 2.92103 20.5744 3.50488C20.6355 3.56214 20.6947 3.62136 20.752 3.68246C21.3358 4.30538 21.5799 5.06884 21.6929 5.94359C21.801 6.78134 21.801 8.83841 21.801 11.1311V12.2311C21.801 13.581 21.801 14.6847 21.6839 15.5562C21.5613 16.4675 21.2961 17.2584 20.6646 17.8899C20.0331 18.5214 19.2422 18.7866 18.331 18.9091C17.4594 19.0263 14.3557 19.0263 13.0058 19.0263H6.7952C5.44529 19.0263 4.34155 19.0263 3.47001 18.9091C2.55878 18.7866 1.76784 18.5214 1.13636 17.8899C0.504893 17.2584 0.239635 16.4675 0.117122 15.5562C-5.22509e-05 14.6847 -2.82881e-05 13.581 9.18223e-07 12.2311L1.39506e-06 6.00407C-1.41618e-05 5.02766 -2.69189e-05 4.22884 0.0636648 3.58452C0.129769 2.9158 0.271373 2.31735 0.617663 1.7795C0.917551 1.31373 1.31371 0.917571 1.77948 0.617683C2.31733 0.271393 2.91578 0.129789 3.5845 0.0636845C4.22882 -7.27177e-06 5.02764 5.48077e-06 6.00405 2.10376e-05L6.46936 2.15144e-05C6.49053 2.15144e-05 6.51141 1.59712e-05 6.53201 1.05472e-05Z"
        fill="white"
      />
      <rect
        x="13"
        y="7"
        width="10"
        height="7"
        rx="2"
        fill="white"
        stroke="#269ED0"
        strokeWidth="2"
      />
      <circle cx="16.5" cy="10.5" r="1.5" fill="#269ED0" />
    </g>
  </svg>
)
