import * as React from "react";
import { IconType } from "../types";
const PlusIcon = (props:IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path fill="#1D1B20" d="M6 8H0V6h6V0h2v6h6v2H8v6H6V8Z" />
  </svg>
);
export default PlusIcon;
