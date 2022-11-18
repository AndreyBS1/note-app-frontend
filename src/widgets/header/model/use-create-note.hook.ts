import { createEvent, sample } from 'effector'
import { useEvent, useStore } from 'effector-react'
import { useNavigate } from 'react-router-dom'

import { NoteModel } from 'src/entities/note'
import { INote } from 'src/shared/api'
import { createUid } from 'src/shared/lib'

const createNoteEv = createEvent<INote>()

sample({
  clock: createNoteEv,
  target: NoteModel.addNoteFx,
})

NoteModel.$notes.on(NoteModel.addNoteFx.doneData, (_, notes) => notes)

const $isNoteCreating = NoteModel.addNoteFx.pending

export function useCreateNote() {
  const navigate = useNavigate()
  const createNote = useEvent(createNoteEv)

  const handleCreateNote = () => {
    const id = createUid()
    const newNote: INote = {
      id,
      title: '',
      text: '',
      tagIds: [],
      createdAt: new Date().getTime(),
    }
    createNote(newNote)
    navigate(`/note/${id}`)
  }

  const isNoteCreating = useStore($isNoteCreating)

  return { handleCreateNote, isNoteCreating }
}
