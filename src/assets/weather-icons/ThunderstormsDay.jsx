import React from 'react'

function ThunderstormsDay(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <defs>
      <symbol id="ThunderstormsDay-c" viewBox="0 0 196 196">
        <circle
          cx={98}
          cy={98}
          r={40}
          fill="url(#ThunderstormsDay-a)"
          stroke="#f8af18"
          strokeMiterlimit={10}
          strokeWidth={4}
        />
        <path
          fill="none"
          stroke="#fbbf24"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={12}
          d="M98 31.4V6m0 184v-25.4M145.1 51l18-17.9M33 163l18-17.9M51 51 33 33m130.1 130.1-18-18M6 98h25.4M190 98h-25.4"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="0 98 98; 45 98 98"
          />
        </path>
      </symbol>
      <symbol id="ThunderstormsDay-d" viewBox="0 0 350 222">
        <path
          fill="url(#ThunderstormsDay-b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
        />
      </symbol>
      <symbol id="ThunderstormsDay-g" viewBox="0 0 363 258">
        <use xlinkHref="#ThunderstormsDay-c" width={196} height={196} />
        <use
          xlinkHref="#ThunderstormsDay-d"
          width={350}
          height={222}
          transform="translate(13 36)"
        />
      </symbol>
      <symbol id="ThunderstormsDay-h" viewBox="0 0 102.7 186.8">
        <path
          fill="url(#ThunderstormsDay-e)"
          stroke="#f6a823"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="m34.8 2-32 96h32l-16 80 80-112h-48l32-64h-48z"
        >


<animate xmlns="http://www.w3.org/2000/svg" id="ThunderstormsDay-f"  repeatCount="indefinite" attributeName="opacity" begin="0s; f.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"/>
        </path>
      </symbol>
      <linearGradient
        id="ThunderstormsDay-b"
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
        id="ThunderstormsDay-e"
        x1={8.7}
        x2={80.9}
        y1={17.1}
        y2={142.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f7b23b" />
        <stop offset={0.5} stopColor="#f7b23b" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient
        id="ThunderstormsDay-a"
        x1={78}
        x2={118}
        y1={63.4}
        y2={132.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.5} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <use
      xlinkHref="#ThunderstormsDay-g"
      width={363}
      height={258}
      transform="translate(68 109)"
    />
    <use
      xlinkHref="#ThunderstormsDay-h"
      width={102.7}
      height={186.7}
      transform="translate(205.23 291)"
    />
  </svg>
  )
}

export default ThunderstormsDay