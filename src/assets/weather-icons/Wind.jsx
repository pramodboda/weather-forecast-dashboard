import React from 'react'

function Wind(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={138.5}
        x2={224.2}
        y1={5.1}
        y2={153.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="b"
        x1={77.7}
        x2={169}
        y1={96.2}
        y2={254.4}
      />
      <symbol id="c" viewBox="0 0 348 240">
        <path
          fill="none"
          stroke="url(#a)"
          strokeDasharray={148}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M267.2 24.3A40 40 0 11296 92H12"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="6s"
            repeatCount="indefinite"
            values="0; 2960"
          />
        </path>
        <path
          fill="none"
          stroke="url(#b)"
          strokeDasharray={110}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M151.2 215.7A40 40 0 10180 148H12"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="6s"
            repeatCount="indefinite"
            values="0; 1540"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#c"
      width={348}
      height={240}
      transform="translate(82 136)"
    />
  </svg>
  )
}

export default Wind