import React from "react";

export interface CodeEditorType {
  style: React.CSSProperties;
  onChange?: () => void;
  onInput?: () => void;
}
