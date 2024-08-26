import classnames from 'classnames'

export const Home = ({ opacity = 1, width, height }) => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    }}
  >
    <g clipPath="url(#clip0_10_29)" style={{ opacity }}>
      <path
        d="M30 15V12H27V9H24V6H21V3H18V0H15V3H12V6H9V9H6V12H3V15H0V18V21H3V18H6V15H9V12H12V9H15V6H18V9H21V12H24V15H27V18H30V21H33V18V15H30Z"
        fill="white"
      />
      <path
        d="M21 18V15H18V12H15V15H12V18H9V21H12H15H18H21H24V18H21Z"
        fill="white"
      />
      <path d="M6 24H3V27V30H6V33H9H12V30V27V24H9V21H6V24Z" fill="white"/>
      <path
        d="M27 21H24V24H21V27V30V33H24H27V30H30V27V24H27V21Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_10_29">
        <rect width="33" height="33" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export const Leaderboard = ({ opacity = 1, width, height }) => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    }}
  >
    <g clipPath="url(#clip0_10_34)" style={{ opacity }}>
      <path
        d="M24 3H21H18V0H15V3H12H9V6H12V9V12H15V9H18V12H21V9V6H24V3Z"
        fill="white"
      />
      <path
        d="M15 15H12V18V21V24V27V30V33H15H18H21V30V27V24V21V18V15H18H15Z"
        fill="white"
      />
      <path d="M3 21H0V24V27V30V33H3H6H9V30V27V24V21H6H3Z" fill="white"/>
      <path d="M30 24H27H24V27V30V33H27H30H33V30V27V24H30Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_10_34">
        <rect width="33" height="33" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export const Tasks = ({ opacity = 1, width, height }) => (
  <svg
    width="30"
    height="24"
    viewBox="0 0 30 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    }}
  >
    <g clipPath="url(#clip0_10_39)" style={{ opacity }}>
      <path d="M0 0V3V6H3H6V3V0H3H0Z" fill="white"/>
      <path
        d="M27 0H24H21H18H15H12H9V3V6H12H15H18H21H24H27H30V3V0H27Z"
        fill="white"
      />
      <path d="M0 9V12V15H3H6V12V9H3H0Z" fill="white"/>
      <path
        d="M24 9H21H18H15H12H9V12V15H12H15H18H21H24H27H30V12V9H27H24Z"
        fill="white"
      />
      <path d="M0 18V21V24H3H6V21V18H3H0Z" fill="white"/>
      <path
        d="M24 18H21H18H15H12H9V21V24H12H15H18H21H24H27H30V21V18H27H24Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_10_39">
        <rect width="30" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export const Friends = ({ opacity = 1, width, height }) => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    }}
  >
    <g clipPath="url(#clip0_10_46)" style={{ opacity }}>
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
        <rect width="33" height="33" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export const Polygon = ({ addShadow, width, height, className, grey }) => (
  <span
    style={{
      position: 'relative',
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
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
        ...(width ? { width: `${width}px` } : {}),
        ...(height ? { height: `${height}px` } : {}),
        ...(grey ? { filter: `grayscale(1)` } : {}),
        position: 'relative',
        zIndex: 10,
      }}
      className={classnames(className)}
    >
      <mask
        id="mask0_14_8"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="26"
        height="27"
      >
        <rect width="26" height="27" fill="#D9D9D9"/>
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
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="17"
      height="17"
    >
      <rect width="17" height="17" fill="#D9D9D9"/>
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
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="16"
      height="16"
    >
      <rect width="16" height="16" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_29_42)">
      <circle cx="8" cy="8" r="7.5" stroke="#5E5E5E"/>
      <path
        d="M4.13281 9.12305C3.57031 9.12305 3.13086 8.68359 3.13086 8.12109C3.13086 7.55859 3.57031 7.11914 4.13281 7.11914C4.69531 7.11914 5.13477 7.55859 5.13477 8.12109C5.13477 8.68359 4.69531 9.12305 4.13281 9.12305ZM8 9.12305C7.4375 9.12305 6.99805 8.68359 6.99805 8.12109C6.99805 7.55859 7.4375 7.11914 8 7.11914C8.5625 7.11914 9.00195 7.55859 9.00195 8.12109C9.00195 8.68359 8.5625 9.12305 8 9.12305ZM11.8672 9.12305C11.3047 9.12305 10.8652 8.68359 10.8652 8.12109C10.8652 7.55859 11.3047 7.11914 11.8672 7.11914C12.4297 7.11914 12.8691 7.55859 12.8691 8.12109C12.8691 8.68359 12.4297 9.12305 11.8672 9.12305Z"
        fill="#5E5E5E"
      />
    </g>
  </svg>
)

export const Plus = ({ className }) => (
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

export const Copy2 = ({ width, height, fill = 'white' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
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

export const Arrow = ({ width, height, className }) => (
  <svg
    width="12"
    height="22"
    viewBox="0 0 12 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
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

export const ArrowV2 = ({ width, height }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
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

export const Spinner = ({ width, height, className, stroke = '#5D5D5D' }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
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

export const SpinnerV2 = ({ width, height, className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
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

export const Ok1 = ({ width, height, className, stroke = '#BCFF2F' }) => (
  <svg
    width="19"
    height="14"
    viewBox="0 0 19 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
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

export const Ok2 = ({ width, height, className, stroke = '#000' }) => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
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

export const Ok3 = ({ width, height }) => (
  <svg
    width="49"
    height="26"
    viewBox="0 0 49 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
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

export const HighlightArrow = ({ width, height, flipHorizontally }) => (
  <svg
    width="38"
    height="55"
    viewBox="0 0 38 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
      ...(flipHorizontally ? { transform: 'rotateZ(180deg)' } : {}),
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

export const Gift = ({ width, height, className, grey }) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
      ...(grey ? { filter: `grayscale(1)` } : {}),
    }}
    className={classnames(className)}
  >
    <g clipPath="url(#clip0_77_410)">
      <mask
        id="mask0_77_410"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white"/>
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
        <stop stopColor="#B8700D"/>
        <stop offset="0.32" stopColor="#C0830F"/>
        <stop offset="1" stopColor="#C89510"/>
      </linearGradient>
      <linearGradient
        id="paint1_linear_77_410"
        x1="322.905"
        y1="280.809"
        x2="331.94"
        y2="432.714"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6C2304"/>
        <stop offset="0.38" stopColor="#6C2304" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#6C2304" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint2_linear_77_410"
        x1="70.9051"
        y1="361.809"
        x2="227.328"
        y2="267.503"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DB9818"/>
        <stop offset="0.38" stopColor="#DFA019"/>
        <stop offset="1" stopColor="#E4A91A"/>
      </linearGradient>
      <linearGradient
        id="paint3_linear_77_410"
        x1="163.905"
        y1="272.809"
        x2="163.905"
        y2="428.112"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6C2304"/>
        <stop offset="0.38" stopColor="#6C2304" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#6C2304" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint4_linear_77_410"
        x1="230.905"
        y1="300.809"
        x2="457.916"
        y2="147.209"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B8700D"/>
        <stop offset="0.32" stopColor="#C0830F"/>
        <stop offset="1" stopColor="#C89510"/>
      </linearGradient>
      <linearGradient
        id="paint5_linear_77_410"
        x1="41.9049"
        y1="197.809"
        x2="223.74"
        y2="229.433"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DB9818"/>
        <stop offset="0.38" stopColor="#DFA019"/>
        <stop offset="1" stopColor="#E4A91A"/>
      </linearGradient>
      <linearGradient
        id="paint6_linear_77_410"
        x1="41.9049"
        y1="197.809"
        x2="223.743"
        y2="229.433"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DB9818"/>
        <stop offset="0.38" stopColor="#DFA019"/>
        <stop offset="1" stopColor="#E4A91A"/>
      </linearGradient>
      <radialGradient
        id="paint7_radial_77_410"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(133.905 189.809) scale(109.828 109.828)"
      >
        <stop stopColor="#FEFF20"/>
        <stop offset="0.63" stopColor="#FEFF20" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#FEFF20" stopOpacity="0"/>
      </radialGradient>
      <linearGradient
        id="paint8_linear_77_410"
        x1="221.905"
        y1="53.809"
        x2="287.411"
        y2="202.891"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C89510"/>
        <stop offset="0.61" stopColor="#D29314"/>
        <stop offset="1" stopColor="#DB9118"/>
      </linearGradient>
      <radialGradient
        id="paint9_radial_77_410"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(227.905 202.803) scale(27.077 27.077)"
      >
        <stop stopColor="#F7F85A"/>
        <stop offset="0.71" stopColor="#F7F85A" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#F7F85A" stopOpacity="0"/>
      </radialGradient>
      <radialGradient
        id="paint10_radial_77_410"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(237.905 191.463) scale(37.033 37.033)"
      >
        <stop stopColor="#F7310B"/>
        <stop offset="0.67" stopColor="#F7310B" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#F7310B" stopOpacity="0"/>
      </radialGradient>
      <radialGradient
        id="paint11_radial_77_410"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(292.905 148.809) scale(115.748 115.748)"
      >
        <stop stopColor="#652F06"/>
        <stop offset="0.74" stopColor="#652F06" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#652F06" stopOpacity="0"/>
      </radialGradient>
      <linearGradient
        id="paint12_linear_77_410"
        x1="301.905"
        y1="256.809"
        x2="282.705"
        y2="203.726"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A21512"/>
        <stop offset="0.64" stopColor="#BA1717"/>
        <stop offset="1" stopColor="#D31A1D"/>
      </linearGradient>
      <linearGradient
        id="paint13_linear_77_410"
        x1="273.905"
        y1="150.809"
        x2="282.376"
        y2="165.209"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#491212"/>
        <stop offset="0.56" stopColor="#491212" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#491212" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint14_linear_77_410"
        x1="263.905"
        y1="104.809"
        x2="100.423"
        y2="396.197"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D62625"/>
        <stop offset="0.25" stopColor="#E53D3D"/>
        <stop offset="0.4" stopColor="#F55455"/>
        <stop offset="0.52" stopColor="#E53D3D"/>
        <stop offset="1" stopColor="#D62625"/>
      </linearGradient>
      <linearGradient
        id="paint15_linear_77_410"
        x1="232.905"
        y1="138.809"
        x2="164.011"
        y2="194.714"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#491212"/>
        <stop offset="0.56" stopColor="#491212" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#491212" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint16_linear_77_410"
        x1="296.659"
        y1="111.344"
        x2="399.949"
        y2="147.804"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#491212"/>
        <stop offset="0.78" stopColor="#491212" stopOpacity="0.6"/>
        <stop offset="1" stopColor="#491212" stopOpacity="0.2"/>
      </linearGradient>
      <linearGradient
        id="paint17_linear_77_410"
        x1="299.905"
        y1="145.809"
        x2="292.867"
        y2="164.198"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#390A07"/>
        <stop offset="0.58" stopColor="#781E19"/>
        <stop offset="1" stopColor="#B7322B"/>
      </linearGradient>
      <linearGradient
        id="paint18_linear_77_410"
        x1="363.905"
        y1="109.809"
        x2="280.893"
        y2="77.6211"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.23" stopColor="#D62625"/>
        <stop offset="0.38" stopColor="#E53D3D"/>
        <stop offset="1" stopColor="#F55455"/>
      </linearGradient>
      <linearGradient
        id="paint19_linear_77_410"
        x1="264.905"
        y1="122.809"
        x2="338.332"
        y2="124.898"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D62625"/>
        <stop offset="0.39" stopColor="#D62625" stopOpacity="0.5"/>
        <stop offset="0.8" stopColor="#D62625" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint20_linear_77_410"
        x1="334.905"
        y1="42.809"
        x2="301.023"
        y2="147.844"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F97F73"/>
        <stop offset="0.56" stopColor="#F97F73" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#F97F73" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint21_linear_77_410"
        x1="217.905"
        y1="107.808"
        x2="130.658"
        y2="95.95"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D62625"/>
        <stop offset="0.59" stopColor="#E53D3D"/>
        <stop offset="0.8" stopColor="#F55455"/>
      </linearGradient>
      <linearGradient
        id="paint22_linear_77_410"
        x1="127.905"
        y1="64.8091"
        x2="180.611"
        y2="135.962"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F97F73"/>
        <stop offset="0.56" stopColor="#F97F73" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#F97F73" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint23_linear_77_410"
        x1="212.905"
        y1="137.809"
        x2="133.787"
        y2="157.976"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#390A07"/>
        <stop offset="0.43" stopColor="#390A07" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#390A07" stopOpacity="0.6"/>
      </linearGradient>
      <linearGradient
        id="paint24_linear_77_410"
        x1="212.905"
        y1="104.808"
        x2="183.541"
        y2="83.35"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F97F73"/>
        <stop offset="0.26" stopColor="#F97F73" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#F97F73" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint25_linear_77_410"
        x1="265.905"
        y1="118.809"
        x2="219.036"
        y2="105.821"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D62625"/>
        <stop offset="0.29" stopColor="#E53D3D"/>
        <stop offset="1" stopColor="#F55455"/>
      </linearGradient>
      <linearGradient
        id="paint26_linear_77_410"
        x1="240.905"
        y1="125.809"
        x2="240.34"
        y2="143.879"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#99130F" stopOpacity="0"/>
        <stop offset="0.56" stopColor="#99130F" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#99130F"/>
      </linearGradient>
      <linearGradient
        id="paint27_linear_77_410"
        x1="221.905"
        y1="82.8091"
        x2="240.54"
        y2="135.327"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F97F73"/>
        <stop offset="0.63" stopColor="#F97F73" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#F97F73" stopOpacity="0"/>
      </linearGradient>
      <clipPath id="clip0_77_410">
        <rect width="512" height="512" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export const GiftV2 = ({ width, height, grey }) => (
  <svg
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
      ...(grey ? { filter: `grayscale(1)` } : {}),
    }}
    width="313"
    height="284"
    viewBox="0 0 313 284"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_144_540"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="313"
      height="284"
    >
      <rect width="313" height="284" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_144_540)">
      <mask
        id="mask1_144_540"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="-101"
        y="-216"
        width="512"
        height="512"
      >
        <path d="M411 -216H-101V296H411V-216Z" fill="white"/>
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
        <stop stopColor="#00B61F"/>
        <stop offset="0.5" stopColor="#2EB610"/>
        <stop offset="1" stopColor="#5CB600"/>
      </linearGradient>
      <linearGradient
        id="paint1_linear_144_540"
        x1="12.7079"
        y1="96.747"
        x2="289.673"
        y2="83.845"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00B61F"/>
        <stop offset="0.5" stopColor="#2EB610"/>
        <stop offset="1" stopColor="#5CB600"/>
      </linearGradient>
      <linearGradient
        id="paint2_linear_144_540"
        x1="86.7791"
        y1="113.553"
        x2="85.3491"
        y2="231.714"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEC33"/>
        <stop offset="0.5" stopColor="#FDD11A"/>
        <stop offset="1" stopColor="#FBB500"/>
      </linearGradient>
      <linearGradient
        id="paint3_linear_144_540"
        x1="201.281"
        y1="62.189"
        x2="205.201"
        y2="177.362"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEC33"/>
        <stop offset="0.5" stopColor="#FCC11A"/>
        <stop offset="1" stopColor="#FA9600"/>
      </linearGradient>
      <linearGradient
        id="paint4_linear_144_540"
        x1="214.447"
        y1="108.446"
        x2="194.56"
        y2="76.447"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFCE00"/>
        <stop offset="0.5" stopColor="#FFDD1A"/>
        <stop offset="1" stopColor="#FFEC33"/>
      </linearGradient>
      <linearGradient
        id="paint5_linear_144_540"
        x1="118.446"
        y1="103.447"
        x2="144.299"
        y2="72.171"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFCE00"/>
        <stop offset="0.4" stopColor="#FFDD1A"/>
        <stop offset="0.8" stopColor="#FFEC33"/>
      </linearGradient>
      <linearGradient
        id="paint6_linear_144_540"
        x1="210.447"
        y1="42.446"
        x2="212.616"
        y2="64.261"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F38B00"/>
        <stop offset="0.5" stopColor="#F9A911"/>
        <stop offset="1" stopColor="#FFC621"/>
      </linearGradient>
      <linearGradient
        id="paint7_linear_144_540"
        x1="115.447"
        y1="52.446"
        x2="119.425"
        y2="77.033"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F38B00"/>
        <stop offset="0.5" stopColor="#F9A911"/>
        <stop offset="1" stopColor="#FFC621"/>
      </linearGradient>
    </defs>
  </svg>
)

export const Key = ({ width, height, className, grey }) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px`, minWidth: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
      ...(grey ? { filter: `grayscale(1)` } : {}),
    }}
    className={classnames(className)}
  >
    <g clipPath="url(#clip0_78_546)">
      <mask
        id="mask0_78_546"
        style={{ masktype: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white"/>
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
        <stop stopColor="#FFF100"/>
        <stop offset="0.28" stopColor="#F3D50F"/>
        <stop offset="0.55" stopColor="#E6B91E"/>
        <stop offset="0.77" stopColor="#D1A120"/>
        <stop offset="1" stopColor="#BC8A23"/>
      </linearGradient>
      <linearGradient
        id="paint1_linear_78_546"
        x1="125.74"
        y1="340.898"
        x2="139.157"
        y2="354.317"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C88401"/>
        <stop offset="0.2" stopColor="#A26905"/>
        <stop offset="0.4" stopColor="#7C4D09"/>
        <stop offset="0.7" stopColor="#BB9321"/>
        <stop offset="1" stopColor="#FADA39"/>
      </linearGradient>
      <linearGradient
        id="paint2_linear_78_546"
        x1="101.535"
        y1="328.678"
        x2="130.368"
        y2="347.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5D2D04"/>
        <stop offset="0.36" stopColor="#5D2D04" stopOpacity="0.5"/>
        <stop offset="0.72" stopColor="#5D2D04" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint3_linear_78_546"
        x1="212.337"
        y1="267.578"
        x2="222.215"
        y2="257.457"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.27" stopColor="#5D2D04" stopOpacity="0"/>
        <stop offset="0.63" stopColor="#5D2D04" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#5D2D04"/>
      </linearGradient>
      <linearGradient
        id="paint4_linear_78_546"
        x1="249.115"
        y1="305.061"
        x2="259.405"
        y2="295.241"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5D2D04" stopOpacity="0"/>
        <stop offset="0.5" stopColor="#5D2D04" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#5D2D04"/>
      </linearGradient>
      <linearGradient
        id="paint5_linear_78_546"
        x1="196.005"
        y1="347.596"
        x2="211.664"
        y2="363.373"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C88401"/>
        <stop offset="0.28" stopColor="#A26905"/>
        <stop offset="0.4" stopColor="#7C4D09"/>
        <stop offset="0.52" stopColor="#BD8E19"/>
        <stop offset="1" stopColor="#FFCF29"/>
      </linearGradient>
      <linearGradient
        id="paint6_linear_78_546"
        x1="178.967"
        y1="337.491"
        x2="220.827"
        y2="348.752"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5D2D04"/>
        <stop offset="0.36" stopColor="#5D2D04" stopOpacity="0.5"/>
        <stop offset="0.72" stopColor="#5D2D04" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint7_linear_78_546"
        x1="143.012"
        y1="397.651"
        x2="159.377"
        y2="414.251"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C88401"/>
        <stop offset="0.28" stopColor="#A26905"/>
        <stop offset="0.4" stopColor="#7C4D09"/>
        <stop offset="0.52" stopColor="#BD8E19"/>
        <stop offset="1" stopColor="#FFCF29"/>
      </linearGradient>
      <linearGradient
        id="paint8_linear_78_546"
        x1="122.92"
        y1="403.643"
        x2="162.547"
        y2="398.454"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5D2D04"/>
        <stop offset="0.36" stopColor="#5D2D04" stopOpacity="0.5"/>
        <stop offset="0.72" stopColor="#5D2D04" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint9_linear_78_546"
        x1="98.4796"
        y1="443.358"
        x2="113.199"
        y2="458.078"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C88401"/>
        <stop offset="0.28" stopColor="#A26905"/>
        <stop offset="0.4" stopColor="#7C4D09"/>
        <stop offset="0.52" stopColor="#BD8E19"/>
        <stop offset="1" stopColor="#FFCF29"/>
      </linearGradient>
      <linearGradient
        id="paint10_linear_78_546"
        x1="81.6771"
        y1="444.298"
        x2="117.897"
        y2="443.339"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5D2D04"/>
        <stop offset="0.36" stopColor="#5D2D04" stopOpacity="0.5"/>
        <stop offset="0.72" stopColor="#5D2D04" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint11_linear_78_546"
        x1="54.2996"
        y1="459.338"
        x2="221.442"
        y2="285.616"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9F3E01"/>
        <stop offset="0.5" stopColor="#8E4601" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#7C4F00" stopOpacity="0"/>
      </linearGradient>
      <linearGradient
        id="paint12_linear_78_546"
        x1="170.923"
        y1="117.585"
        x2="294.292"
        y2="375.773"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF100"/>
        <stop offset="0.28" stopColor="#F3D50F"/>
        <stop offset="0.55" stopColor="#E6B91E"/>
        <stop offset="0.77" stopColor="#D1A120"/>
        <stop offset="1" stopColor="#BC8A23"/>
      </linearGradient>
      <linearGradient
        id="paint13_linear_78_546"
        x1="417.639"
        y1="177.462"
        x2="344.574"
        y2="100.702"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEFF5C"/>
        <stop offset="0.2" stopColor="#F9E83C" stopOpacity="0.7"/>
        <stop offset="0.4" stopColor="#F5D11C" stopOpacity="0.4"/>
        <stop offset="0.7" stopColor="#EEC219" stopOpacity="0.7"/>
        <stop offset="1" stopColor="#E7B216"/>
      </linearGradient>
      <linearGradient
        id="paint14_linear_78_546"
        x1="310.009"
        y1="87.2223"
        x2="371.109"
        y2="292.612"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E6AE13"/>
        <stop offset="0.28" stopColor="#D89D17"/>
        <stop offset="0.55" stopColor="#CA8B1B"/>
        <stop offset="0.77" stopColor="#9C6813"/>
        <stop offset="1" stopColor="#6E440B"/>
      </linearGradient>
      <linearGradient
        id="paint15_linear_78_546"
        x1="284.159"
        y1="88.6322"
        x2="400.838"
        y2="271.932"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEFF5C"/>
        <stop offset="0.2" stopColor="#F9E83C" stopOpacity="0.7"/>
        <stop offset="0.4" stopColor="#F5D11C" stopOpacity="0.4"/>
        <stop offset="0.7" stopColor="#EEC219" stopOpacity="0.7"/>
        <stop offset="1" stopColor="#E7B216"/>
      </linearGradient>
      <linearGradient
        id="paint16_linear_78_546"
        x1="266.299"
        y1="93.8023"
        x2="344.319"
        y2="184.042"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFF68"/>
        <stop offset="0.5" stopColor="#FEF344" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#FEE620" stopOpacity="0"/>
      </linearGradient>
      <clipPath id="clip0_78_546">
        <rect width="512" height="512" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export const X = ({ width, height, className }) => (
  <svg
    width="34"
    height="31"
    viewBox="0 0 34 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    }}
    className={classnames(className)}
  >
    <path
      d="M26.777 0H31.9905L20.6005 13.1313L34 31H23.5083L15.2908 20.1627L5.88812 31H0.671364L12.8542 16.9546L0 0H10.758L18.1859 9.90571L26.777 0ZM24.9472 27.8523H27.8361L9.18836 2.98234H6.08824L24.9472 27.8523Z"
      fill="white"
    />
  </svg>
)

export const Telegram = ({ width, height, className, withoutBackground }) => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    }}
    className={classnames(className)}
  >
    <path
      style={{ ...(withoutBackground ? { visibility: `hidden` } : {}) }}
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
        <stop stopColor="#37AEE2"/>
        <stop offset="1" stopColor="#1E96C8"/>
      </linearGradient>
      <linearGradient
        id="paint1_linear_84_578"
        x1="20.4235"
        y1="19.5945"
        x2="24.3818"
        y2="25.9279"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EFF7FC"/>
        <stop offset="1" stopColor="white"/>
      </linearGradient>
    </defs>
  </svg>
)

export const Hands = ({ width, height, className }) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    }}
    className={classnames(className)}
  >
    <g clipPath="url(#clip0_88_11)">
      <mask
        id="mask0_88_11"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d="M512 0H0V512H512V0Z" fill="white"/>
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
        <rect width="512" height="512" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export const Youtube = ({ width, height, className }) => (
  <svg
    width="38"
    height="27"
    viewBox="0 0 38 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
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

export const ShareStoryTask = ({ width, height, className }) => (
  <svg
    width="38"
    height="27"
    viewBox="0 0 23.97 22.8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? {width: `${width}px`} : {}),
      ...(height ? {height: `${height}px`} : {}),
    }}
    className={classnames(className)}
  >
    <path
      d="M13.58,0h3.22c1.06,0,1.91,0,2.59.06.71.06,1.32.18,1.88.46.94.47,1.71,1.24,2.18,2.18.28.56.4,1.18.46,1.88.06.69.06,1.54.06,2.59v10.78c0,2.68-2.18,4.85-4.86,4.86h-8.39c-2.38,0-4.31-1.93-4.31-4.31V7.17c0-1.06,0-1.91.06-2.59.06-.71.18-1.32.46-1.88.47-.94,1.24-1.71,2.18-2.18.56-.28,1.18-.4,1.88-.46C11.67,0,12.52,0,13.58,0Z"
      fill="white"
    />
    <path
      d="M11.13,1.85c-.6.05-.95.14-1.22.27-.59.3-1.08.78-1.37,1.37-.14.27-.23.63-.27,1.22-.05.61-.05,1.38-.05,2.49v9.16l.53-.51c.06-.06.11-.1.15-.15,1.09-.98,2.75-.98,3.84,0,.05.04.09.09.15.15h.01c.08.09.1.1.11.12.41.37,1.03.37,1.44,0,.01-.01.03-.03.11-.1l1.03-1.01c.36-.35.67-.65.94-.88.29-.24.59-.44.96-.57.58-.19,1.21-.19,1.79,0,.37.12.68.33.96.57.27.23.58.53.94.88l.97.94V7.2c0-1.11,0-1.88-.05-2.49-.05-.6-.14-.95-.27-1.22-.3-.59-.78-1.08-1.37-1.37-.27-.14-.62-.23-1.22-.27-.61-.05-1.38-.05-2.49-.05h-3.14c-1.11,0-1.88,0-2.49.05Z"
      fill="white"
    />
    <path
      d="M11.13,1.85c-.6.05-.95.14-1.22.27-.59.3-1.08.78-1.37,1.37-.14.27-.23.63-.27,1.22-.05.61-.05,1.38-.05,2.49v9.16l.53-.51c.06-.06.11-.1.15-.15,1.09-.98,2.75-.98,3.84,0,.05.04.09.09.15.15h.01c.08.09.1.1.11.12.41.37,1.03.37,1.44,0,.01-.01.03-.03.11-.1l1.03-1.01c.36-.35.67-.65.94-.88.29-.24.59-.44.96-.57.58-.19,1.21-.19,1.79,0,.37.12.68.33.96.57.27.23.58.53.94.88l.97.94V7.2c0-1.11,0-1.88-.05-2.49-.05-.6-.14-.95-.27-1.22-.3-.59-.78-1.08-1.37-1.37-.27-.14-.62-.23-1.22-.27-.61-.05-1.38-.05-2.49-.05h-3.14c-1.11,0-1.88,0-2.49.05Z"
      fill="#212121"
    />
    <path
      d="M19.57,6.15c0,.97-.78,1.75-1.75,1.75s-1.75-.78-1.75-1.75.78-1.75,1.75-1.75,1.75.78,1.75,1.75Z"
      fill="white"
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
        <path d="M512 0H0V512H512V0Z" fill="white"/>
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
        <stop stopColor="#FDCF18"/>
        <stop offset="0.47" stopColor="#F5AB0C"/>
        <stop offset="0.93" stopColor="#ED8700"/>
      </linearGradient>
      <radialGradient
        id="paint1_radial_110_22"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(249.961 93.4479) scale(342.856 342.856)"
      >
        <stop offset="0.07" stopColor="#FEFEE2"/>
        <stop offset="0.28" stopColor="#FDEE8C"/>
        <stop offset="0.49" stopColor="#FCDE36"/>
        <stop offset="0.82" stopColor="#F5B820"/>
        <stop offset="1" stopColor="#EE910A"/>
      </radialGradient>
      <clipPath id="clip0_110_22">
        <rect width="512" height="512" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export const Person = ({ width, height }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
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

export const Ton = ({ width, height}) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    }}
  >
    <circle cx="16" cy="16" r="11" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd"
      d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM12.8895 9.70108C13.2767 9.30725 13.2713 8.67411 12.8775 8.28692C12.4836 7.89972 11.8505 7.9051 11.4633 8.29892L8.28692 11.5297C7.90436 11.9188 7.90436 12.5427 8.28692 12.9318L11.4633 16.1626C11.8505 16.5564 12.4836 16.5618 12.8775 16.1746C13.2713 15.7874 13.2767 15.1543 12.8895 14.7605L11.3855 13.2308L18 13.2308C18.5523 13.2308 19 12.7831 19 12.2308C19 11.6785 18.5523 11.2308 18 11.2308H11.3855L12.8895 9.70108ZM20.5367 15.8374C20.1495 15.4436 19.5164 15.4382 19.1225 15.8254C18.7287 16.2126 18.7233 16.8457 19.1105 17.2395L20.6145 18.7692L14 18.7692C13.4477 18.7692 13 19.2169 13 19.7692C13 20.3215 13.4477 20.7692 14 20.7692L20.6145 20.7692L19.1105 22.2989C18.7233 22.6927 18.7287 23.3259 19.1225 23.7131C19.5164 24.1003 20.1495 24.0949 20.5367 23.7011L23.7131 20.4703C24.0956 20.0812 24.0956 19.4573 23.7131 19.0682L20.5367 15.8374Z"
      fill="#717171"/>
    <path fillRule="evenodd" clipRule="evenodd"
      d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16Z"
      fill="#282828"/>
    <path
      d="M15.9527 23L21.8998 12.6802C22.4719 11.6873 21.7553 10.4473 20.6094 10.4473H15.9527M15.9527 23V10.4473M15.9527 23L10.0057 12.6802C9.43357 11.6873 10.1502 10.4473 11.2961 10.4473H15.9527"
      stroke="#A2A2A2" strokeWidth="1.70207" strokeLinejoin="round"/>
  </svg>
)

export const Arrows = ({ width, height }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    }}
  >
    <circle cx="16" cy="16" r="11" fill="#A2A2A2"/>
    <path fillRule="evenodd" clipRule="evenodd"
      d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM12.8895 9.70108C13.2767 9.30725 13.2713 8.67411 12.8775 8.28692C12.4836 7.89972 11.8505 7.9051 11.4633 8.29892L8.28692 11.5297C7.90436 11.9188 7.90436 12.5427 8.28692 12.9318L11.4633 16.1626C11.8505 16.5564 12.4836 16.5618 12.8775 16.1746C13.2713 15.7874 13.2767 15.1543 12.8895 14.7605L11.3855 13.2308L18 13.2308C18.5523 13.2308 19 12.7831 19 12.2308C19 11.6785 18.5523 11.2308 18 11.2308H11.3855L12.8895 9.70108ZM20.5367 15.8374C20.1495 15.4436 19.5164 15.4382 19.1225 15.8254C18.7287 16.2126 18.7233 16.8457 19.1105 17.2395L20.6145 18.7692L14 18.7692C13.4477 18.7692 13 19.2169 13 19.7692C13 20.3215 13.4477 20.7692 14 20.7692L20.6145 20.7692L19.1105 22.2989C18.7233 22.6927 18.7287 23.3259 19.1225 23.7131C19.5164 24.1003 20.1495 24.0949 20.5367 23.7011L23.7131 20.4703C24.0956 20.0812 24.0956 19.4573 23.7131 19.0682L20.5367 15.8374Z"
      fill="#282828"
    />
  </svg>
)

export const Wallet = ({ width, height, color = '#fff' }) => (
  <svg
    width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    }}
  >
    <path
      d="M14.3 11.6999H10.6C9.59995 11.6999 8.69995 10.8999 8.69995 9.7999V7.8999C8.69995 6.8999 9.49995 5.9999 10.6 5.9999H14.3C14.5 5.9999 14.6 5.9999 14.7 6.0999V5.9999C14.6 5.4999 14.5 4.9999 14.1 4.5999L14 4.4999C13.6 4.0999 13.1 3.9999 12.6 3.8999C12.1 3.7999 10.2 3.7999 9.39995 3.7999H8.89995C8.59995 3.7999 8.49995 3.7999 8.39995 3.7999C8.19995 3.7999 7.99995 3.6999 7.79995 3.5999C7.79995 3.4999 7.69995 3.4999 7.49995 3.2999C7.29995 2.9999 7.09995 2.8999 6.99995 2.7999C6.69995 2.5999 6.29995 2.3999 5.89995 2.3999C5.69995 2.3999 5.49995 2.3999 5.29995 2.3999H4.89995C4.29995 2.3999 3.79995 2.3999 3.39995 2.3999C2.99995 2.3999 2.59995 2.4999 2.29995 2.6999C1.99995 2.8999 1.79995 3.0999 1.59995 3.3999C1.39995 3.7999 1.29995 4.0999 1.19995 4.5999C1.19995 4.9999 1.19995 5.4999 1.19995 6.0999V9.9999C1.19995 10.7999 1.19995 11.4999 1.29995 12.0999C1.39995 12.6999 1.49995 13.1999 1.89995 13.5999C2.29995 13.9999 2.79995 14.1999 3.39995 14.1999C3.89995 14.2999 4.59995 14.2999 5.49995 14.2999H9.39995C10.2 14.2999 12.2 14.2999 12.7 14.1999C13.3 14.0999 13.8 13.9999 14.2 13.5999C14.6 13.1999 14.8 12.6999 14.8 12.0999C14.8 11.9999 14.8 11.7999 14.8 11.6999C14.6 11.6999 14.5 11.6999 14.3 11.6999Z"
      fill={color}/>
    <path
      d="M14.3 7.30005H10.6C10.3 7.30005 10 7.60005 10 7.90005V9.80005C10 10.1 10.3 10.4 10.6 10.4H14.3C14.6 10.4 14.9 10.1 14.9 9.80005V7.90005C14.9 7.60005 14.7 7.30005 14.3 7.30005ZM11.5 9.80005C11 9.80005 10.6 9.40005 10.6 8.90005C10.6 8.40005 11 8.00005 11.5 8.00005C12 8.00005 12.4 8.40005 12.4 8.90005C12.4 9.40005 12 9.80005 11.5 9.80005Z"
      fill={color}/>
  </svg>
)

export const Chevron = ({ width, height, color = '#fff' }) => (
  <svg
    width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    }}
  >
    <path d="M7 3.00024L4.5 5.50024L2 3.00024" stroke={color} strokeWidth={9/width*2} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const Close = ({ width, height }) => (
  <svg
    width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    }}
  >
    <g clipPath="url(#clip0_655_18207)">
      <path
        d="M14 28.5C21.6589 28.5 28 22.1451 28 14.5C28 6.84117 21.6451 0.5 13.9863 0.5C6.34117 0.5 0 6.84117 0 14.5C0 22.1451 6.35489 28.5 14 28.5Z"
        fill="#282828"/>
      <path opacity="0.5"
        d="M9.17282 20.5C8.51489 20.5 8 19.9702 8 19.3115C8 18.9964 8.11441 18.6957 8.34326 18.4808L12.3051 14.5L8.34326 10.5334C8.11441 10.3043 8 10.0179 8 9.70286C8 9.02982 8.51489 8.52864 9.17282 8.52864C9.50178 8.52864 9.75923 8.64319 9.98807 8.85799L13.9785 12.8389L17.9976 8.84367C18.2407 8.60024 18.4982 8.5 18.8128 8.5C19.4707 8.5 20 9.01551 20 9.67422C20 10.0036 19.8998 10.2613 19.6423 10.5191L15.6663 14.5L19.6281 18.4666C19.8713 18.6814 19.9856 18.982 19.9856 19.3115C19.9856 19.9702 19.4565 20.5 18.7842 20.5C18.4553 20.5 18.1549 20.3855 17.9403 20.1563L13.9785 16.1754L10.031 20.1563C9.80214 20.3855 9.50178 20.5 9.17282 20.5Z"
        fill="#999999"/>
    </g>
    <defs>
      <clipPath id="clip0_655_18207">
        <rect width="28" height="28" fill="white" transform="translate(0 0.5)"/>
      </clipPath>
    </defs>
  </svg>
)
