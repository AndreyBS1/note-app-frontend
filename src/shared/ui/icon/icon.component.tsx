import { ImgHTMLAttributes } from 'react'

import styles from './icon.module.scss'

export function Icon(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { className, ...otherProps } = props

  return <img className={`${styles.icon} ${className}`} {...otherProps} />
}
