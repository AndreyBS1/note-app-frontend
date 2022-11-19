import { Link } from 'react-router-dom'
import { INote } from 'src/shared/api'

import styles from './note-card.module.scss'

interface INoteCard {
  note: INote
}

export function NoteCard(props: INoteCard) {
  const { note } = props

  const textCharLimit = 375
  const text =
    note.text.length > textCharLimit
      ? `${note.text.split('').splice(0, textCharLimit).join('')}...`
      : note.text

  return (
    <Link to={`/note/${note.id}`} className={styles.card}>
      <h2 className={styles.title}>
        {note.title || <span className={styles.placeholder}>Title</span>}
      </h2>
      <p className={styles.text}>
        {text || <span className={styles.placeholder}>Text</span>}
      </p>
    </Link>
  )
}
