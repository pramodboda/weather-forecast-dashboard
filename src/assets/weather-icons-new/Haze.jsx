import React from 'react'


// code: 721
// name: Haze
// description: haze

function Haze(props) {
  return (
    <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="Haze-b"
        x1={99.5}
        x2={232.6}
        y1={30.7}
        y2={261.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.5} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="Haze-a"
        x1={17.3}
        x2={89.3}
        y1={43.1}
        y2={167.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#Haze-a"
        id="Haze-c"
        x1={107.3}
        x2={179.3}
        y1={-8.8}
        y2={115.9}
      />
      <linearGradient
        xlinkHref="#Haze-a"
        id="Haze-d"
        x1={174.8}
        x2={246.8}
        y1={-47.8}
        y2={76.9}
      />
      <linearGradient xlinkHref="#Haze-a" id="Haze-e" x2={89.3} y1={-4.9} y2={119.8} />
      <linearGradient
        xlinkHref="#Haze-a"
        id="Haze-f"
        x1={107.3}
        x2={179.3}
        y1={-56.9}
        y2={67.9}
      />
      <linearGradient
        xlinkHref="#Haze-a"
        id="Haze-g"
        x1={174.8}
        x2={246.8}
        y1={-95.8}
        y2={28.9}
      />
      <symbol id="Haze-h" viewBox="0 0 350 222">
        <path
          fill="url(#Haze-b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
        />
      </symbol>
      <symbol id="Haze-i" overflow="visible" viewBox="0 0 264 72">
        <g>
          <path
            fill="none"
            stroke="url(#Haze-a)"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M12 60h30"
          />
          <path
            fill="none"
            stroke="url(#Haze-c)"
            strokeDasharray="60 60"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M102 60h90"
          />
          <path
            fill="none"
            stroke="url(#Haze-d)"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M222 60h30"
          />
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-24 0; 24 0; -24 0"
          />
        </g>
        <g>
          <path
            fill="none"
            stroke="url(#Haze-e)"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M12 12h30"
          />
          <path
            fill="none"
            stroke="url(#Haze-f)"
            strokeDasharray="60 60"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M102 12h90"
          />
          <path
            fill="none"
            stroke="url(#Haze-g)"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M222 12h30"
          />
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="24 0; -24 0; 24 0"
          />
        </g>
      </symbol>
    </defs>
    <use
      xlinkHref="#Haze-h"
      width={350}
      height={222}
      transform="translate(81 145)"
    />
    <use
      xlinkHref="#Haze-i"
      width={264}
      height={72}
      transform="translate(124 402)"
    />
  </svg>
  )
}

export default Haze