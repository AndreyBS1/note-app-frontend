import { IUser } from 'src/shared/api'

import styles from './user-card.module.scss'

interface IUserCard {
  user: IUser
  onLogIn: () => void
  onDelete: () => void
}

export function UserCard(props: IUserCard) {
  const { user, onLogIn, onDelete } = props

  return (
    <div className={styles.userCard}>
      <div className={styles.infoContainer}>
        <h2 className={styles.name}>{user.name}</h2>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${styles.login}`}
          onClick={onLogIn}
        >
          Log in
        </button>
        <button
          className={`${styles.button} ${styles.delete}`}
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
