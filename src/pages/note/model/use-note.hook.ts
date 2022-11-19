import { createEvent, sample } from 'effector'
import { useEvent, useStore } from 'effector-react'
import { useEffect } from 'react'

import { NoteModel } from 'src/entities/note'

const pageLoadEv = createEvent<string>()

sample({
  clock: pageLoadEv,
  target: NoteModel.getNoteFx,
})

NoteModel.$selectedNote.on(NoteModel.getNoteFx.doneData, (_, note) => note)

const $isNoteLoading = NoteModel.getNoteFx.pending

export function useNote(noteId: string | undefined) {
  const handlePageLoad = useEvent(pageLoadEv)

  useEffect(() => {
    if (noteId) {
      handlePageLoad(noteId)
    }
  }, [noteId])

  const note = useStore(NoteModel.$selectedNote)
  const isNoteLoading = useStore($isNoteLoading)

  return { note, isNoteLoading }
}
