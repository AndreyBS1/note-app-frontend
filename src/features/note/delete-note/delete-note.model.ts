import { createEvent, sample } from 'effector'
import { useEvent } from 'effector-react'

import { NoteModel } from 'src/entities/note'

const deleteNoteEv = createEvent<string>()

sample({
  clock: deleteNoteEv,
  target: NoteModel.deleteNoteFx,
})

NoteModel.$notes.on(deleteNoteEv, (notes, deletedNoteId) =>
  notes.filter((note) => note.id !== deletedNoteId)
)

export function useDeleteNote() {
  const handleDeleteNote = useEvent(deleteNoteEv)

  return { handleDeleteNote }
}
