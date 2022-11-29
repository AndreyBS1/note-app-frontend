import { MouseEvent } from 'react'
import { Link } from 'react-router-dom'

import { INote } from 'src/shared/api'
import { Icon } from 'src/shared/ui/icon'

import styles from './note-card.module.scss'

import deleteIcon from 'assets/delete.svg'
import tagIcon from 'assets/tag.svg'

interface INoteCard {
  note: INote
  onDelete: (noteId: string) => void
}

export function NoteCard(props: INoteCard) {
  const { note, onDelete } = props

  const textCharLimit = 375
  const text =
    note.text.length > textCharLimit
      ? `${note.text.split('').splice(0, textCharLimit).join('')}...`
      : note.text

  const handleDelete = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    onDelete(note.id)
  }

  return (
    <Link to={`/note/${note.id}`} className={styles.card}>
      <h2
        className={`${styles.title} ${note.title ? '' : styles.placeholder}`}
        dangerouslySetInnerHTML={{
          __html: note.title || 'Title',
        }}
      ></h2>

      <p
        className={`${styles.text} ${text ? '' : styles.placeholder}`}
        dangerouslySetInnerHTML={{
          __html: text || 'Text',
        }}
      ></p>

      <div className={styles.hover}>
        <button className={styles.deleteButton} onClick={handleDelete}>
          <Icon src={deleteIcon} alt="delete note" />
        </button>

        {note.tags.length ? (
          <div className={styles.tagsBackground}>
            <div className={styles.tagsContainer}>
              {note.tags.map((tag) => (
                <button className={styles.tag}>
                  <Icon src={tagIcon} className={styles.tagIcon} />
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Link>
  )
}
