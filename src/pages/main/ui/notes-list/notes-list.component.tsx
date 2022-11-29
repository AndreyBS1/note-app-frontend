import { useDeleteNote } from 'src/features/note/delete-note'
import { INote } from 'src/shared/api'
import { NoteCard } from 'src/widgets/note-card'

import styles from './notes-list.module.scss'

interface INotesList {
  notes: INote[]
}

export function NotesList(props: INotesList) {
  const { notes } = props

  const { handleDeleteNote } = useDeleteNote()

  return (
    <>
      {notes.length ? (
        <div className={styles.list}>
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={handleDeleteNote} />
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
