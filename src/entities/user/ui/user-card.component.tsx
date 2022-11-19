import { IUser } from 'src/shared/api'
import { Button } from 'src/shared/ui/button'

import styles from './user-card.module.scss'

interface IUserCard {
  user: IUser
  stats: { notesAmount: number; tagsAmount: number }
  onLogIn: () => void
  onDelete: () => void
}

export function UserCard(props: IUserCard) {
  const { user, stats, onLogIn, onDelete } = props

  return (
    <div className={styles.userCard}>
      <div className={styles.infoContainer}>
        <h3 className={styles.welcomeText}>Welcome back!</h3>
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.stats}>Notes: {stats.notesAmount}</p>
        <p className={styles.stats}>Tags: {stats.tagsAmount}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={onLogIn} className={styles.button}>
          Log in
        </Button>
        <Button
          variant="secondary"
          onClick={onDelete}
          className={styles.button}
        >
          Delete
        </Button>
      </div>
    </div>
  )
}
