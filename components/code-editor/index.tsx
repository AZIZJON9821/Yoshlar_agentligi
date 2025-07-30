import React from 'react'
import cls from './Code-Editor.module.css'

const CodeEditor = () => {
    return (
        <div
            className={cls['code-editor']}
            contentEditable="true"
            suppressContentEditableWarning={true}
        ></div>
    )
}

export default CodeEditor