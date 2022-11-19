import { createEvent, sample } from 'effector'
import { useEvent } from 'effector-react'

import { NoteModel } from 'src/entities/note'

const deleteNoteEv = createEvent<string>()

sample({
  clock: deleteNoteEv,
  target: NoteModel.deleteNoteFx,
})

NoteModel.$notes.on(NoteModel.deleteNoteFx.doneData, (_, notes) => notes)

export function useDeleteNote() {
  const handleDeleteNote = useEvent(deleteNoteEv)

  return { handleDeleteNote }
}
