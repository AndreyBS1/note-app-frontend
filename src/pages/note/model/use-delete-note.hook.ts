import { createEvent, sample } from 'effector'
import { useEvent, useStore } from 'effector-react'

import { NoteModel } from 'src/entities/note'

const deleteNoteEv = createEvent<string>()

sample({
  clock: deleteNoteEv,
  target: NoteModel.deleteNoteFx,
})

NoteModel.$notes.on(NoteModel.deleteNoteFx.doneData, (_, notes) => notes)

const $isNoteDeleting = NoteModel.deleteNoteFx.pending

export function useDeleteNote() {
  const handleDeleteNote = useEvent(deleteNoteEv)
  const isNoteDeleting = useStore($isNoteDeleting)

  return { handleDeleteNote, isNoteDeleting }
}
