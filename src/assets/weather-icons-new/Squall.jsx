import React from 'react'

// id: 771
// Main: Squall
// Desc: squalls

function Squall(props) {
  return (
    <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="Squall_b"
        x1={52.7}
        x2={133.4}
        y1={9.6}
        y2={149.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#9ca3af" />
        <stop offset={0.5} stopColor="#9ca3af" />
        <stop offset={1} stopColor="#6b7280" />
      </linearGradient>
      <linearGradient
        id="Squall_c"
        x1={99.5}
        x2={232.6}
        y1={30.7}
        y2={261.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#6b7280" />
        <stop offset={0.5} stopColor="#6b7280" />
        <stop offset={1} stopColor="#4b5563" />
      </linearGradient>
      <linearGradient
        id="Squall_a"
        x1={96}
        x2={168}
        y1={-2.4}
        y2={122.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient xlinkHref="#Squall_a" id="Squall_f" x2={168} y1={-50.4} y2={74.3} />
      <symbol id="Squall_d" viewBox="0 0 200.3 126.1">
        <path
          fill="url(#Squall_b)"
          stroke="#848b98"
          strokeMiterlimit={10}
          d="M.5 93.2a32.4 32.4 0 0032.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 006.5-68.9 32.4 32.4 0 00-48.5-33 48.6 48.6 0 00-88.6 37.1h-1.5A32.4 32.4 0 00.5 93.1Z"
        />
      </symbol>
      <symbol id="Squall_e" viewBox="0 0 350 222">
        <path
          fill="url(#Squall_c)"
          stroke="#5b6472"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
        />
      </symbol>
      <symbol id="Squall_g" overflow="visible" viewBox="0 0 398 222">
        <use
          xlinkHref="#Squall_d"
          width={200.3}
          height={126.1}
          transform="translate(198 27)"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-9 0; 9 0; -9 0"
          />
        </use>
        <use xlinkHref="#Squall_e" width={350} height={222}>
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-18 0; 18 0; -18 0"
          />
        </use>
      </symbol>
      <symbol id="Squall_h" overflow="visible" viewBox="0 0 264 72">
        <path
          fill="none"
          stroke="url(#Squall_a)"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M12 60h240"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-24 0; 24 0; -24 0"
          />
        </path>
        <path
          fill="none"
          stroke="url(#Squall_f)"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M12 12h240"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="24 0; -24 0; 24 0"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#Squall_g"
      width={398}
      height={222}
      transform="translate(68.84 145)"
    />
    <use
      xlinkHref="#Squall_h"
      width={264}
      height={72}
      transform="translate(124 402)"
    />
  </svg>

  )
}

export default Squall