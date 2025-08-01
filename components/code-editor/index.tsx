import React, { useRef, useEffect } from "react";
import { Controller, Control } from "react-hook-form";
import cls from "./Code-Editor.module.css";

type Props = {
  control: Control<any>;
  name: string;
  placeholder?: string;
  style?: React.CSSProperties;
};

const CodeEditor: React.FC<Props> = ({ control, name, placeholder, style }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        useEffect(() => {
          if (
            editorRef.current &&
            document.activeElement !== editorRef.current
          ) {
            editorRef.current.textContent = field.value || "";
          }
        }, [field.value]);

        return (
          <div
            ref={editorRef}
            className={cls["code-editor"]}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onInput={(e) => {
              const value = (e.target as HTMLDivElement).innerText;
              field.onChange(value);
            }}
            onBlur={field.onBlur}
            dir="ltr"
            data-placeholder={placeholder || "Kod yozing..."}
            style={style}
          />
        );
      }}
    />
  );
};

export default CodeEditor;
