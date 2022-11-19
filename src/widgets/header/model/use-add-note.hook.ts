import { createEvent, sample } from 'effector'
import { useEvent, useStore } from 'effector-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { NoteModel } from 'src/entities/note'
import { INote } from 'src/shared/api'
import { createUid } from 'src/shared/lib'

const addNoteEv = createEvent<INote>()

sample({
  clock: addNoteEv,
  target: NoteModel.addNoteFx,
})

const $isNoteCreating = NoteModel.addNoteFx.pending

NoteModel.$notes.on(NoteModel.addNoteFx.doneData, (_, notes) => notes)

let id: any = null

export function useAddNote() {
  const navigate = useNavigate()
  const addNote = useEvent(addNoteEv)
  const isNoteCreating = useStore($isNoteCreating)

  const handleAddNote = () => {
    id = createUid()
    const newNote: INote = {
      id,
      title: '',
      text: '',
      tagIds: [],
      createdAt: new Date().getTime(),
    }
    addNote(newNote)
  }

  const notes = useStore(NoteModel.$notes)

  useEffect(() => {
    if (id) {
      navigate(`/note/${id}`)
      id = null
    }
  }, [notes])

  return { handleAddNote, isNoteCreating }
}
