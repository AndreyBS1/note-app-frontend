import { createEvent, sample } from 'effector'
import { useEvent } from 'effector-react'

import { NoteModel } from 'src/entities/note'
import { INote } from 'src/shared/api'

const updateNoteEv = createEvent<INote>()

sample({
  clock: updateNoteEv,
  target: NoteModel.updateNoteFx,
})

NoteModel.$selectedNote.on(NoteModel.updateNoteFx.doneData, (_, note) => note)

let timeout: any = null

export function useUpdateNote() {
  const updateNote = useEvent(updateNoteEv)

  const handleUpdateNote = (updatedNote: INote) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      updateNote(updatedNote)
    }, 2000)
  }

  return { handleUpdateNote }
}
