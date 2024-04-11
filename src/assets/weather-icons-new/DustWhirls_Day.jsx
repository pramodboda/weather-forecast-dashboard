import React from 'react'


// code: 731
// name : Dust
// description: sand/dust whirls	

function DustWhirls_Day(props) {
  return (
    <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="DustWhirls_Day-a"
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
        xlinkHref="#DustWhirls_Day-a"
        id="DustWhirls_Day-c"
        x1={77.7}
        x2={169}
        y1={96.2}
        y2={254.4}
      />
      <linearGradient
        id="DustWhirls_Day-b"
        x1={90}
        x2={102}
        y1={185.6}
        y2={206.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fde68a" />
        <stop offset={0.5} stopColor="#fde68a" />
        <stop offset={1} stopColor="#fde171" />
      </linearGradient>
      <linearGradient
        xlinkHref="#DustWhirls_Day-b"
        id="DustWhirls_Day-h"
        x1={174}
        x2={186}
        y1={185.6}
        y2={206.4}
      />
      <linearGradient
        xlinkHref="#DustWhirls_Day-b"
        id="DustWhirls_Day-m"
        x1={258}
        x2={270}
        y1={185.6}
        y2={206.4}
      />
      <linearGradient
        xlinkHref="#DustWhirls_Day-b"
        id="DustWhirls_Day-d"
        x1={216}
        x2={228}
        y1={245.6}
        y2={266.4}
      />
      <linearGradient
        xlinkHref="#DustWhirls_Day-b"
        id="DustWhirls_Day-i"
        x1={300}
        x2={312}
        y1={245.6}
        y2={266.4}
      />
      <linearGradient
        xlinkHref="#DustWhirls_Day-b"
        id="DustWhirls_Day-n"
        x1={384}
        x2={396}
        y1={245.6}
        y2={266.4}
      />
      <linearGradient
        xlinkHref="#DustWhirls_Day-b"
        id="DustWhirls_Day-e"
        x1={166}
        x2={178}
        y1={305.6}
        y2={326.4}
      />
      <linearGradient
        xlinkHref="#DustWhirls_Day-b"
        id="DustWhirls_Day-j"
        x1={250}
        x2={262}
        y1={305.6}
        y2={326.4}
      />
      <linearGradient
        xlinkHref="#DustWhirls_Day-b"
        id="DustWhirls_Day-o"
        x1={334}
        x2={346}
        y1={305.6}
        y2={326.4}
      />
      <symbol id="DustWhirls_Day-r" viewBox="0 0 348 240">
        <path
          fill="none"
          stroke="url(#DustWhirls_Day-a)"
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
          stroke="url(#DustWhirls_Day-c)"
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
    <g opacity={0}>
      <circle cx={96} cy={196} r={12} fill="url(#DustWhirls_Day-b)" />
      <circle cx={222} cy={256} r={12} fill="url(#DustWhirls_Day-d)" />
      <circle cx={172} cy={316} r={12} fill="url(#DustWhirls_Day-e)" />
      <animateTransform
        id="DustWhirls_Day-f"
        additive="sum"
        attributeName="transform"
        begin="1s; f.end+1.17s"
        dur=".83s"
        repeatCount="indefinite"
        type="translate"
        values="-24 0; 24 0"
      />
      <animate
        id="DustWhirls_Day-g"
        attributeName="opacity"
        repeatCount="indefinite"
        begin="1s; g.end+1.17s"
        dur=".83s"
        keyTimes="0; .17; .83; 1"
        values="0; 1; 1; 0"
      />
    </g>
    <g opacity={0}>
      <circle cx={180} cy={196} r={12} fill="url(#DustWhirls_Day-h)" />
      <circle cx={306} cy={256} r={12} fill="url(#DustWhirls_Day-i)" />
      <circle cx={256} cy={316} r={12} fill="url(#DustWhirls_Day-j)" />
      <animateTransform
        id="DustWhirls_Day-k"
        additive="sum"
        attributeName="transform"
        repeatCount="indefinite"
        begin=".5s; k.end+1.17s"
        dur=".83s"
        type="translate"
        values="-24 0; 24 0"
      />
      <animate
        id="DustWhirls_Day-l"
        attributeName="opacity"
        repeatCount="indefinite"
        begin=".5s; l.end+1.17s"
        dur=".83s"
        keyTimes="0; .17; .83; 1"
        values="0; 1; 1; 0"
      />
    </g>
    <g opacity={0}>
      <circle cx={264} cy={196} r={12} fill="url(#DustWhirls_Day-m)" />
      <circle cx={390} cy={256} r={12} fill="url(#DustWhirls_Day-n)" />
      <circle cx={340} cy={316} r={12} fill="url(#DustWhirls_Day-o)" />
      <animateTransform
        id="DustWhirls_Day-p"
        additive="sum"
        attributeName="transform"
        repeatCount="indefinite"
        begin="0s; p.end+1.17s"
        dur=".83s"
        type="translate"
        values="-24 0; 24 0"
      />
      <animate
        id="DustWhirls_Day-q"
        attributeName="opacity"
        repeatCount="indefinite"
        begin="0s; q.end+1.17s"
        dur=".83s"
        keyTimes="0; .17; .83; 1"
        values="0; 1; 1; 0"
      />
    </g>
    <use
      xlinkHref="#DustWhirls_Day-r"
      width={348}
      height={240}
      transform="translate(83 136)"
    />
  </svg>
  )
}

export default DustWhirls_Day