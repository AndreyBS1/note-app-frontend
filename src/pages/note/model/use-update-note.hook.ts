import { createEvent, sample } from 'effector'
import { useEvent } from 'effector-react'

import { NoteModel } from 'src/entities/note'
import { INote } from 'src/shared/api'

const updateNoteEv = createEvent<INote>()

sample({
  clock: updateNoteEv,
  target: NoteModel.updateNoteFx,
})

let timeout: any = null

export function useUpdateNote() {
  const updateNote = useEvent(updateNoteEv)

  const handleUpdateNote = (updatedNote: INote) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      updateNote(updatedNote)
    }, 1500)
  }

  return { handleUpdateNote }
}
