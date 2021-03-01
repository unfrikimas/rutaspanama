import * as React from "react"

export default function IconFlota(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-bus"
      viewBox="0 0 24 24"
      strokeWidth={1}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <circle cx={6} cy={17} r={2} />
      <circle cx={18} cy={17} r={2} />
      <path d="M4 17H2V6a1 1 0 011-1h14a5 7 0 015 7v5h-2m-4 0H8" />
      <path d="M16 5l1.5 7H22M2 10h15M7 5v5M12 5v5" />
    </svg>
  )
}