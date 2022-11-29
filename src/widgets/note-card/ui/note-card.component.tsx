import { MouseEvent } from 'react'
import { Link } from 'react-router-dom'

import { INote } from 'src/shared/api'
import { Icon } from 'src/shared/ui/icon'

import { useNoteCardTags, useShortText } from '../lib'

import styles from './note-card.module.scss'

import deleteIcon from 'assets/delete.svg'
import tagIcon from 'assets/tag.svg'

interface INoteCard {
  note: INote
  onDelete: (noteId: string) => void
}

export function NoteCard(props: INoteCard) {
  const { note, onDelete } = props

  const { text } = useShortText(note.text)
  const { tags } = useNoteCardTags(note.tagsIds)

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

        {tags.length ? (
          <div className={styles.tagsBackground}>
            <div className={styles.tagsContainer}>
              {tags.map((tag) => (
                <button key={tag.id} className={styles.tag}>
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
