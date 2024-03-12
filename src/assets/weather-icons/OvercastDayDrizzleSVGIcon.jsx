import React from 'react'

function OvercastDayDrizzleSVGIcon(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    // width="1em"
    // height="1em"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={16.5}
        y1={19.67}
        x2={21.5}
        y2={28.33}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.45} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient
        id="ODDCloud"
        x1={22.56}
        y1={21.96}
        x2={39.2}
        y2={50.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.45} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={23.31}
        y1={44.3}
        x2={24.69}
        y2={46.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4286ee" />
        <stop offset={0.45} stopColor="#4286ee" />
        <stop offset={1} stopColor="#0950bc" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={30.31}
        y1={44.3}
        x2={31.69}
        y2={46.7}
        xlinkHref="#c"
      />
      <linearGradient
        id="e"
        x1={37.31}
        y1={44.3}
        x2={38.69}
        y2={46.7}
        xlinkHref="#c"
      />
    </defs>
    <circle
      cx={19}
      cy={24}
      r={5}
      stroke="#f8af18"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      fill="url(#a)"
    />
    <path
      d="M19,15.67V12.5m0,23V32.33m5.89-14.22,2.24-2.24M10.87,32.13l2.24-2.24m0-11.78-2.24-2.24M27.13,32.13l-2.24-2.24M7.5,24h3.17M30.5,24H27.33"
      fill="none"
      stroke="#fbbf24"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 19 24; 360 19 24"
        dur="45s"
        repeatCount="indefinite"
      />
    </path>
    <path
      d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      fill="url(#ODDCloud)"
    />
    <line
      x1={24.08}
      y1={45.01}
      x2={23.92}
      y2={45.99}
      fill="none"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      stroke="url(#c)"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        values="1 -5; -2 10"
        dur="1.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </line>
    <line
      x1={31.08}
      y1={45.01}
      x2={30.92}
      y2={45.99}
      fill="none"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      stroke="url(#d)"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        begin="-0.5s"
        values="1 -5; -2 10"
        dur="1.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        begin="-0.5s"
        values="0;1;1;0"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </line>
    <line
      x1={38.08}
      y1={45.01}
      x2={37.92}
      y2={45.99}
      fill="none"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      stroke="url(#e)"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        begin="-1s"
        values="1 -5; -2 10"
        dur="1.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        values="0;1;1;0"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </line>
  </svg>
  )
}

export default OvercastDayDrizzleSVGIcon