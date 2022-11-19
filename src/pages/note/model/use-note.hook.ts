import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'

import { NoteModel } from 'src/entities/note'
import { INote } from 'src/shared/api'

export function useNote(noteId: string | undefined) {
  const notes = useStore(NoteModel.$notes)

  const [note, setNote] = useState<INote | null>(null)
  const [isNoteLoading, setIsNoteLoading] = useState(true)

  useEffect(() => {
    if (noteId) {
      const selectedNote = notes.find((note) => note.id === noteId) || null
      setNote(selectedNote)
      setIsNoteLoading(false)
    }
  }, [noteId])

  return { note, isNoteLoading }
}
