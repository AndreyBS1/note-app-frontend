import { NoteCard } from 'src/entities/note'
import { INote } from 'src/shared/api'

import styles from './notes-list.module.scss'

interface INotesList {
  notes: INote[]
}

export function NotesList(props: INotesList) {
  const { notes } = props

  return (
    <>
      {notes.length ? (
        <div className={styles.list}>
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <h1 className={styles.emptyText}>You don't have notes yet</h1>
        </div>
      )}
    </>
  )
}
