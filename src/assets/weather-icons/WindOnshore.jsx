import React from 'react'

function WindOnshore(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <defs>
      <linearGradient
        id="WindOnshore-a"
        x1={54.5}
        x2={89.2}
        y1={2.2}
        y2={62.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#WindOnshore-a"
        id="WindOnshore-b"
        x1={31.4}
        x2={68.3}
        y1={37.6}
        y2={101.4}
      />
      <linearGradient
        id="WindOnshore-c"
        x1={218.1}
        x2={288.9}
        y1={607.8}
        y2={730.3}
        gradientTransform="rotate(6 4491.863 1531.096)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#875b34" />
        <stop offset={0.5} stopColor="#875b34" />
        <stop offset={1} stopColor="#624226" />
      </linearGradient>
      <linearGradient
        id="WindOnshore-d"
        x1={226.8}
        x2={288.2}
        y1={569}
        y2={675.2}
        gradientTransform="rotate(6 4491.863 1531.096)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#51cf66" />
        <stop offset={0.5} stopColor="#51cf66" />
        <stop offset={1} stopColor="#37b24d" />
      </linearGradient>
      <linearGradient
        id="WindOnshore-e"
        x1={135.1}
        x2={210}
        y1={283.2}
        y2={412.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3392d6" />
        <stop offset={0.5} stopColor="#3392d6" />
        <stop offset={1} stopColor="#2477b2" />
      </linearGradient>
      <linearGradient
        id="WindOnshore-f"
        x1={266.8}
        x2={339.6}
        y1={293.6}
        y2={419.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.5} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <symbol id="WindOnshore-g" viewBox="0 0 138 96">
        <path
          fill="none"
          stroke="url(#WindOnshore-a)"
          strokeDasharray={58}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={12}
          d="M105.2 10.8A15.6 15.6 0 1 1 116.4 37H6"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="6s"
            repeatCount="indefinite"
            values="0; 1274"
          />
        </path>
        <path
          fill="none"
          stroke="url(#WindOnshore-b)"
          strokeDasharray={43}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={12}
          d="M60.7 85.2A15.6 15.6 0 1 0 71.9 59H6.6"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="6s"
            repeatCount="indefinite"
            values="0; 857"
          />
        </path>
      </symbol>
    </defs>
    <path
      fill="url(#WindOnshore-c)"
      stroke="#744e2d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M378.3 162.7c.6-7-.2-12.6-2-12.7l-1.4-.2c-1.7-.2-3.7 5.2-4.5 12L355 297c-.8 7.2 0 13.3 1.8 13.5l3.6.4c1.8.2 4-5.6 4.6-12.8Z"
    />
    <path
      fill="url(#WindOnshore-d)"
      stroke="#40c057"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M427.8 167.4a44.2 44.2 0 0 0-40.8-47.3 46 46 0 0 0-41.5 17.4l-2.2-.5c-18.7-2-35.4 10.7-37.2 28.4a32.4 32.4 0 0 0 21.3 33 20.2 20.2 0 0 0-2.8 8.4c-1.3 11.7 7.9 22.3 20.3 23.6a23.4 23.4 0 0 0 15.4-3.7 34.7 34.7 0 0 0 25.4 15.2c18.7 2 35.4-10.8 37.2-28.4a30.8 30.8 0 0 0-6.4-22 41 41 0 0 0 11.3-24.1Z"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="rotate"
        values="3 330 200; -3 330 200; 3 330 200; -3 330 200; 3 330 200"
      />
    </path>
    <path
      fill="url(#WindOnshore-f)"
      stroke="#f8af18"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M402.3 369.8v-66.4c0-12.3-8.9-22.4-19.8-22.4h-62.6c-49.2 0-94.2 31.4-116.4 81.1l-13.4 30h192.4c11 0 19.8-10 19.8-22.4Z"
    />
    <use xlinkHref="#WindOnshore-g" width={138} height={96} transform="translate(99 146)" />
  </svg>
  )
}

export default WindOnshore