import * as React from "react";

interface UserIconProps extends React.SVGProps<SVGSVGElement> {
  height?: number;
  width?: number;
}

const UserIcon = ({ width = 20, height = 20, ...rest }: UserIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <g clipPath="url(#a)">
      <path
        fill="#2C2C2C"
        d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Z"
      />
      <path
        stroke="#F5F5F5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.667 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H6.668a3.333 3.333 0 0 0-3.333 3.333V17.5m10-11.667a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"
      />
    </g>
    <path
      stroke="#2C2C2C"
      strokeLinecap="round"
      d="M10 .5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19Z"
    />
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default UserIcon;
