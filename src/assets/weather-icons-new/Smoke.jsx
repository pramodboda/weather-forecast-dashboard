import React from 'react'


// code: 711
// name: Smoke
// description: smoke

function Smoke(props) {
  return (
    <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="Smoke-a"
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
        id="Smoke-b"
        x1={74}
        x2={98}
        y1={165.2}
        y2={206.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b8bdc6" />
        <stop offset={0.5} stopColor="#b8bdc6" />
        <stop offset={1} stopColor="#a5aab2" />
      </linearGradient>
      <symbol id="Smoke-h" viewBox="0 0 350 222">
        <path
          fill="url(#Smoke-a)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
        />
      </symbol>
      <symbol id="Smoke-i" overflow="visible" viewBox="0 0 168 212">
        <circle
          cx={86}
          cy={186}
          r={24}
          fill="url(#Smoke-b)"
          stroke="#afb4bc"
          strokeMiterlimit={10}
          strokeWidth={4}
          opacity={0}
        >
          <animateTransform
            id="Smoke-c"
            additive="sum"
            attributeName="transform"
            begin="0s; c.end+.75s"
            dur="2.25s"
            type="translate"
            values="0 0; -58 -118"
            repeatCount="indefinite"
          />
          <animate
            id="Smoke-d"
            attributeName="r"
            begin="0s; d.end+.75s"
            dur="2.25s"
            values="24; 36"
            repeatCount="indefinite"
          />
          <animate
            id="Smoke-z1"
            attributeName="opacity"
            begin="0s; d.end+.75s"
            dur="2.25s"
            keyTimes="0; .17; .83; 1"
            values="0; 1; 1; 0"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx={86}
          cy={186}
          r={24}
          fill="url(#Smoke-b)"
          stroke="#afb4bc"
          strokeMiterlimit={10}
          strokeWidth={4}
          opacity={0}
        >
          <animateTransform
            id="Smoke-e"
            additive="sum"
            attributeName="transform"
            begin=".83s; e.end+.75s"
            dur="2.25s"
            type="translate"
            values="0 0; 58 -118"
            repeatCount="indefinite"
          />
          <animate
            id="Smoke-f"
            attributeName="r"
            begin=".83s; f.end+.75s"
            dur="2.25s"
            values="24; 36"
            repeatCount="indefinite"
          />
          <animate
            id="Smoke-g"
            attributeName="opacity"
            begin=".83s; g.end+.75s"
            dur="2.25s"
            keyTimes="0; .17; .83; 1"
            values="0; 1; 1; 0"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx={86}
          cy={186}
          r={24}
          fill="url(#Smoke-b)"
          stroke="#afb4bc"
          strokeMiterlimit={10}
          strokeWidth={4}
          opacity={0}
        >
          <animateTransform
            id="Smoke-x3"
            additive="sum"
            attributeName="transform"
            begin="1.66s; x3.end+.75s"
            dur="2.25s"
            type="translate"
            values="0 0; 0 -118"
            repeatCount="indefinite"
          />
          <animate
            id="Smoke-y3"
            attributeName="r"
            begin="1.66s; y3.end+.75s"
            dur="2.25s"
            values="24; 36"
            repeatCount="indefinite"
          />
          <animate
            id="Smoke-z3"
            attributeName="opacity"
            begin="1.66s; z3.end+.75s"
            dur="2.25s"
            keyTimes="0; .17; .83; 1"
            values="0; 1; 1; 0"
            repeatCount="indefinite"
          />
        </circle>
      </symbol>
    </defs>
    <use
      xlinkHref="#Smoke-h"
      width={350}
      height={222}
      transform="translate(81 145)"
    />
    <use
      xlinkHref="#Smoke-i"
      width={168}
      height={212}
      transform="translate(172 232)"
    />
  </svg>
  )
}

export default Smoke  