import * as React from "react"

function FcAbout(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 48 48"
      enableBackground="new 0 0 48 48"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"
      />
      <g fill="black">
        <rect x={22} y={20} width={4} height={11} />
        <circle cx={24} cy={15} r={2} />
      </g>
    </svg>
  )
}

export default FcAbout
