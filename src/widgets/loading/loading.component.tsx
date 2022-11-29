import styles from './loading.module.scss'

import loadingIcon from 'assets/loading.svg'

export function Loading() {
  return (
    <div className={styles.container}>
      <img src={loadingIcon} alt="loading" className={styles.icon} />
    </div>
  )
}
