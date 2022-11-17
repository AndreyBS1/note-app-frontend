import { HTMLAttributes } from 'react'

import styles from './container.module.scss'

export function Container(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...otherProps } = props

  return (
    <div className={`${styles.container} ${className}`} {...otherProps}>
      {children}
    </div>
  )
}
