import React, { useRef, useEffect } from 'react';
import cls from './Code-Editor.module.css';
import { CodeEditorType } from '@/types/codeEditor.type';
import { Controller } from 'react-hook-form';

const CodeEditor = ({ control, name, ...rest }: CodeEditorType) => {
    const editorRef = useRef<HTMLDivElement>(null);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                return (
                    <div
                        ref={editorRef}
                        className={cls['code-editor']}
                        contentEditable="true"
                        suppressContentEditableWarning={true}
                        onInput={(e) => field.onChange((e.target as HTMLDivElement).innerText)}
                        onBlur={(e) => field.onBlur()}
                        dangerouslySetInnerHTML={{ __html: field.value || '' }}
                        {...rest}
                    />
                );
            }}
        />
    );
};

export default CodeEditor;
