import React from 'react'

function SunsetSVGIcon(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    // width="1em"
    // height="1em"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <rect y={7.5} width={64} height={32} fill="none" />
      </clipPath>
      <linearGradient
        id="b"
        x1={26.75}
        y1={29.91}
        x2={37.25}
        y2={48.09}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.45} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <g clipPath="url(#a)">
      <circle
        cx={32}
        cy={39}
        r={10.5}
        stroke="#f8af18"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        fill="url(#b)"
      />
      <path
        d="M32,22.71V16.5m0,45V55.29M43.52,27.48l4.39-4.39M16.09,54.91l4.39-4.39m0-23-4.39-4.39M47.91,54.91l-4.39-4.39M15.71,39H9.5m45,0H48.29"
        fill="none"
        stroke="#fbbf24"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
    </g>
    <polyline
      points="16 42.5 27 42.5 32 47 37 42.5 48 42.5"
      fill="none"
      stroke="#374151"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
  )
}

export default SunsetSVGIcon