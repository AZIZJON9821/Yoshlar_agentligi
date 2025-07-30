import { ActionProps } from '@/types'
import React from 'react'
import cls from './Actions.module.css'

const Action = ({ mode, children, ...rest }: ActionProps) => {
    return (
        <button className={`${cls[mode]} ${rest?.className || ''}`} {...rest}>
            {children}
        </button>
    )
}

export default Action