import React from 'react'

// clear sky - night
// Code: 800 
function ClearSky_Night(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <defs>
      <linearGradient
        id="ClearNightSVGIcon-a"
        x1={54.3}
        x2={187.2}
        y1={29}
        y2={259.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
      <symbol id="ClearNightSVGIcon-b" overflow="visible" viewBox="0 0 270 270">
        <path
          fill="url(#ClearNightSVGIcon-a)"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          d="M252.3 168.6A133.4 133.4 0 01118 36.2 130.5 130.5 0 01122.5 3 133 133 0 003 134.6C3 207.7 63 267 137.2 267c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 01-14.8.8Z"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="-15 135 135; 9 135 135; -15 135 135"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#ClearNightSVGIcon-b"
      width={270}
      height={270}
      transform="translate(121 121)"
    />
  </svg>
  )
}

export default ClearSky_Night