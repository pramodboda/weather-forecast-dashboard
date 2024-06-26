import React from 'react'

// for both same icon
// code: 600 and 601
// main: Snow
// Description:	Snow, light snow

function Snow(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <defs>
      <linearGradient
        id="Snow_b"
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
        id="Snow_a"
        x1={11.4}
        x2={32.8}
        y1={5.9}
        y2={43.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
      <linearGradient
        xlinkHref="#Snow_a"
        id="Snow_e"
        x1={67.4}
        x2={88.8}
        y1={5.9}
        y2={43.1}
      />
      <linearGradient
        xlinkHref="#Snow_a"
        id="Snow_h"
        x1={123.4}
        x2={144.8}
        y1={5.9}
        y2={43.1}
      />
      <symbol id="Snow_k" viewBox="0 0 350 222">
        <path
          fill="url(#Snow_b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
        />
      </symbol>
      <symbol id="Snow_l" overflow="visible" viewBox="0 0 156.2 49">
        <g>
          <path
            fill="url(#Snow_a)"
            stroke="#86c3db"
            strokeMiterlimit={10}
            d="m41.7 31-5.8-3.3a13.7 13.7 0 000-6.5l5.8-3.2a4 4 0 001.5-5.5 4 4 0 00-5.6-1.5l-5.8 3.3a13.6 13.6 0 00-2.6-2 13.8 13.8 0 00-3-1.3V4.5a4 4 0 00-8.1 0v6.6a14.3 14.3 0 00-5.7 3.2L6.6 11A4 4 0 001 12.5 4 4 0 002.5 18l5.8 3.3a13.7 13.7 0 000 6.5L2.5 31A4 4 0 001 36.5a4 4 0 003.5 2 4 4 0 002-.5l5.8-3.3a13.6 13.6 0 002.6 2 13.8 13.8 0 003 1.2v6.6a4 4 0 008.2 0v-6.6a14.2 14.2 0 005.6-3.2l6 3.3a4 4 0 002 .5 4 4 0 003.4-2 4 4 0 00-1.4-5.5ZM19 29.7a6 6 0 01-2.3-8.2 6.1 6.1 0 015.3-3 6.2 6.2 0 013 .8 6 6 0 012.2 8.2 6.1 6.1 0 01-8.2 2.2Z"
            opacity={0}
          >
            <animateTransform
              additive="sum"
              attributeName="transform"
              dur="6s"
              repeatCount="indefinite"
              type="rotate"
              values="0 24 24; 360 24 24"
            />
            <animate
              id="Snow_c"
              attributeName="opacity"
              begin="0s; Snow_c.end+1s"
              dur="2s"
              keyTimes="0; .17; .83; 1"
              values="0; 1; 1; 0"
            />
          </path>
          <animateTransform
            id="Snow_d"
            additive="sum"
            attributeName="transform"
            begin="0s; Snow_d.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
        <g>
          <path
            fill="url(#Snow_e)"
            stroke="#86c3db"
            strokeMiterlimit={10}
            d="m97.7 31-5.8-3.3a13.7 13.7 0 000-6.5l5.8-3.2a4 4 0 001.5-5.5 4 4 0 00-5.6-1.5l-5.8 3.3a13.6 13.6 0 00-2.6-2 13.8 13.8 0 00-3-1.3V4.5a4 4 0 00-8.1 0v6.6a14.3 14.3 0 00-5.7 3.2L62.6 11a4 4 0 00-5.6 1.5 4 4 0 001.5 5.5l5.8 3.3a13.7 13.7 0 000 6.5L58.5 31a4 4 0 00-1.5 5.5 4 4 0 003.5 2 4 4 0 002-.5l5.8-3.3a13.6 13.6 0 002.7 2 13.8 13.8 0 003 1.2v6.6a4 4 0 008 0v-6.6a14.2 14.2 0 005.7-3.2l6 3.3a4 4 0 002 .5 4 4 0 003.4-2 4 4 0 00-1.4-5.5ZM75 29.7a6 6 0 01-2.3-8.2 6.1 6.1 0 015.3-3 6.2 6.2 0 013 .8 6 6 0 012.2 8.2 6.1 6.1 0 01-8.2 2.2Z"
            opacity={0}
          >
            <animateTransform
              additive="sum"
              attributeName="transform"
              dur="6s"
              repeatCount="indefinite"
              type="rotate"
              values="0 80 24; 360 80 24"
            />
            <animate
              id="Snow_f"
              attributeName="opacity"
              begin="-.83s; Snow_f.end+1s"
              dur="2s"
              keyTimes="0; .17; .83; 1"
              values="0; 1; 1; 0"
            />
          </path>
          <animateTransform
            id="Snow_g"
            additive="sum"
            attributeName="transform"
            begin="-.83s; Snow_g.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
        <g>
          <path
            fill="url(#Snow_h)"
            stroke="#86c3db"
            strokeMiterlimit={10}
            d="m153.7 31-5.8-3.3a13.7 13.7 0 000-6.5l5.8-3.2a4 4 0 001.5-5.5 4 4 0 00-5.6-1.5l-5.8 3.3a13.6 13.6 0 00-2.6-2 13.8 13.8 0 00-3-1.3V4.5a4 4 0 00-8.1 0v6.6a14.3 14.3 0 00-5.7 3.2l-5.8-3.3a4 4 0 00-5.6 1.5 4 4 0 001.5 5.5l5.8 3.3a13.7 13.7 0 000 6.5l-5.8 3.2a4 4 0 00-1.5 5.5 4 4 0 003.5 2 4 4 0 002-.5l5.8-3.3a13.6 13.6 0 002.7 2 13.8 13.8 0 003 1.2v6.6a4 4 0 008 0v-6.6a14.2 14.2 0 005.7-3.2l5.8 3.3a4 4 0 002 .5 4 4 0 003.5-2 4 4 0 00-1.3-5.5ZM131 29.7a6 6 0 01-2.3-8.2 6.1 6.1 0 015.3-3 6.2 6.2 0 013 .8 6 6 0 012.2 8.2 6.1 6.1 0 01-8.2 2.2Z"
            opacity={0}
          >
            <animateTransform
              additive="sum"
              attributeName="transform"
              dur="6s"
              repeatCount="indefinite"
              type="rotate"
              values="0 136 24; 360 136 24"
            />
            <animate
              id="Snow_i"
              attributeName="opacity"
              begin=".83s; Snow_i.end+1s"
              dur="2s"
              keyTimes="0; .17; .83; 1"
              values="0; 1; 1; 0"
            />
          </path>
          <animateTransform
            id="Snow_j"
            additive="sum"
            attributeName="transform"
            begin=".83s; Snow_j.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
      </symbol>
    </defs>
    <use
      xlinkHref="#Snow_k"
      width={350}
      height={222}
      transform="translate(81 145)"
    />
    <use
      xlinkHref="#Snow_l"
      width={156.2}
      height={49}
      transform="translate(177.9 337.5)"
    />
  </svg>

  )
}

export default Snow