import { ButtonProps } from '@/types'
import React from 'react'
import cls from './Button.module.css'

const Button = ({className='',children,...rest}:ButtonProps) => {
  return (
    <button className={`${cls['default-button']} ${className}`} {...rest}>{children}</button>
  )
}

export default Button