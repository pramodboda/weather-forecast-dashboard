import React from "react";

function PartlyCloudyDaySmoke(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <defs>
      <symbol id="PartlyCloudyDaySmoke-c" viewBox="0 0 196 196">
        <circle
          cx={98}
          cy={98}
          r={40}
          fill="url(#PartlyCloudyDaySmoke-a)"
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
      <symbol id="PartlyCloudyDaySmoke-d" viewBox="0 0 350 222">
        <path
          fill="url(#PartlyCloudyDaySmoke-b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
        />
      </symbol>
      <symbol id="PartlyCloudyDaySmoke-k" viewBox="0 0 363 258">
        <use xlinkHref="#PartlyCloudyDaySmoke-c" width={196} height={196} />
        <use
          xlinkHref="#PartlyCloudyDaySmoke-d"
          width={350}
          height={222}
          transform="translate(13 36)"
        />
      </symbol>
      <symbol id="PartlyCloudyDaySmoke-l" viewBox="0 0 168 212">
        <circle
          cx={86}
          cy={186}
          r={24}
          fill="url(#PartlyCloudyDaySmoke-e)"
          stroke="#afb4bc"
          strokeMiterlimit={10}
          strokeWidth={4}
          opacity={0}
        >
          <animateTransform
            id="PartlyCloudyDaySmoke-f"
            additive="sum"
            attributeName="transform"
            begin="0s; f.end+.75s"
            dur="2.25s"
            type="translate"
            values="0 0; -58 -118"
          />
          <animate
            id="PartlyCloudyDaySmoke-g"
            attributeName="r"
            begin="0s; g.end+.75s"
            dur="2.25s"
            values="24; 36"
          />
          <animate
            id="z1"
            attributeName="opacity"
            begin="0s; g.end+.75s"
            dur="2.25s"
            keyTimes="0; .17; .83; 1"
            values="0; 1; 1; 0"
          />
        </circle>
        <circle
          cx={86}
          cy={186}
          r={24}
          fill="url(#PartlyCloudyDaySmoke-e)"
          stroke="#afb4bc"
          strokeMiterlimit={10}
          strokeWidth={4}
          opacity={0}
        >
          <animateTransform
            id="PartlyCloudyDaySmoke-h"
            additive="sum"
            attributeName="transform"
            begin=".83s; h.end+.75s"
            dur="2.25s"
            type="translate"
            values="0 0; 58 -118"
          />
          <animate
            id="PartlyCloudyDaySmoke-i"
            attributeName="r"
            begin=".83s; i.end+.75s"
            dur="2.25s"
            values="24; 36"
          />
          <animate
            id="PartlyCloudyDaySmoke-j"
            attributeName="opacity"
            begin=".83s; j.end+.75s"
            dur="2.25s"
            keyTimes="0; .17; .83; 1"
            values="0; 1; 1; 0"
          />
        </circle>
        <circle
          cx={86}
          cy={186}
          r={24}
          fill="url(#PartlyCloudyDaySmoke-e)"
          stroke="#afb4bc"
          strokeMiterlimit={10}
          strokeWidth={4}
          opacity={0}
        >
          <animateTransform
            id="x3"
            additive="sum"
            attributeName="transform"
            begin="1.66s; x3.end+.75s"
            dur="2.25s"
            type="translate"
            values="0 0; 0 -118"
          />
          <animate
            id="y3"
            attributeName="r"
            begin="1.66s; y3.end+.75s"
            dur="2.25s"
            values="24; 36"
          />
          <animate
            id="z3"
            attributeName="opacity"
            begin="1.66s; z3.end+.75s"
            dur="2.25s"
            keyTimes="0; .17; .83; 1"
            values="0; 1; 1; 0"
          />
        </circle>
      </symbol>
      <linearGradient
        id="PartlyCloudyDaySmoke-b"
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
        id="PartlyCloudyDaySmoke-e"
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
      <linearGradient
        id="PartlyCloudyDaySmoke-a"
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
      xlinkHref="#PartlyCloudyDaySmoke-k"
      width={363}
      height={258}
      transform="translate(68 109)"
    />
    <use
      xlinkHref="#PartlyCloudyDaySmoke-l"
      width={168}
      height={212}
      transform="translate(172 232)"
    />
  </svg>
  );
}

export default PartlyCloudyDaySmoke;
