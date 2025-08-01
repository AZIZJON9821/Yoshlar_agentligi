import * as React from "react";

interface LikeProps {
  width?: number;
  heigth?: number;
  color?: string;
}

const LikeIcon = (props: LikeProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 15}
    height={props.heigth || 15}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color || "#1E1E1E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m4.375 6.875 2.5-5.625A1.875 1.875 0 0 1 8.75 3.125v2.5h3.537a1.25 1.25 0 0 1 1.25 1.438l-.862 5.625a1.25 1.25 0 0 1-1.25 1.062h-7.05m0-6.875v6.875m0-6.875H2.5a1.25 1.25 0 0 0-1.25 1.25V12.5a1.25 1.25 0 0 0 1.25 1.25h1.875"
    />
  </svg>
);
export default LikeIcon;
