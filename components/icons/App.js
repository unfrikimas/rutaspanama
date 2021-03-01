import * as React from "react"

export default function IconApp(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-devices"
      viewBox="0 0 24 24"
      strokeWidth={1}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <rect x={13} y={8} width={8} height={12} rx={1} />
      <path d="M18 8V5a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1h9M16 9h2" />
    </svg>
  )
}