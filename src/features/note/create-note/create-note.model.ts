import { createEvent, sample } from 'effector'
import { useEvent } from 'effector-react'

import { NoteModel } from 'src/entities/note'
import { INote } from 'src/shared/api'
import { createUid } from 'src/shared/lib'

const createNoteEv = createEvent<INote>()

sample({
  clock: createNoteEv,
  target: NoteModel.createNoteFx,
})

NoteModel.$notes.on(createNoteEv, (notes, newNote) => [...notes, newNote])

export function useCreateNote() {
  const createNote = useEvent(createNoteEv)

  /**
   * Create new note
   * @returns new note id
   */
  const handleCreateNote = () => {
    const id = createUid()
    const newNote: INote = {
      id,
      title: '',
      text: '',
      tags: [],
      createdAt: new Date().getTime(),
    }
    createNote(newNote)
    return id
  }

  return { handleCreateNote }
}
