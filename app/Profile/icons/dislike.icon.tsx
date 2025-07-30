import * as React from "react"
import { IconType } from "../types"
const DislikeIcon = (props:IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        fill="none"
        {...props}
    >
        <path
            stroke="#1E1E1E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m10.625 8.125-2.5 5.625a1.875 1.875 0 0 1-1.875-1.875v-2.5H2.712a1.25 1.25 0 0 1-1.25-1.438l.863-5.625a1.25 1.25 0 0 1 1.25-1.062h7.05m0 6.875V1.25m0 6.875h1.669a1.444 1.444 0 0 0 1.456-1.25V2.5a1.443 1.443 0 0 0-1.456-1.25h-1.67"
        />
    </svg>
)
export default DislikeIcon
