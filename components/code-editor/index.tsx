import React from 'react'
import cls from './Code-Editor.module.css'

const CodeEditor = (props:{style?:React.CSSProperties}) => {
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