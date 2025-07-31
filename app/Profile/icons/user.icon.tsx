import * as React from "react"
import { IconType } from "../types"
const UserIcon = (props:IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <path
            stroke="#F5F5F5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16.667 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5m10-11.667a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0Z"
        />
    </svg>
)
export default UserIcon
