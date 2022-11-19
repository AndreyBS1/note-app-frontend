import { HTMLAttributes } from 'react'

import styles from './button.module.scss'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button(props: IButton) {
  const { children, className, variant = 'primary', ...otherProps } = props

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
