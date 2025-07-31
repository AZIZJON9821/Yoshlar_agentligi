import React from 'react'
import cls from './Code-Editor.module.css'
import { CodeEditorType } from '@/types/codeEditor.type'

const CodeEditor = (props: CodeEditorType) => {
    return (
        <div
            className={cls['code-editor']}
            contentEditable="true"
            suppressContentEditableWarning={true}
            style={props.style}
        ></div>
    )
}

export default CodeEditor