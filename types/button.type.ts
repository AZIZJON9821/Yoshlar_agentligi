import React, { ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  id?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}
