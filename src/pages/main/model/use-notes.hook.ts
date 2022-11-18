import { createEvent, sample } from 'effector'
import { useEvent, useStore } from 'effector-react'
import { useEffect } from 'react'

import { NoteModel } from 'src/entities/note'

const pageLoadEv = createEvent<void>()

sample({
  clock: pageLoadEv,
  target: NoteModel.getAllNotesFx,
})

const $isNotesLoading = NoteModel.getAllNotesFx.pending

NoteModel.$notes.on(NoteModel.getAllNotesFx.doneData, (_, notes) => notes)

export function useNotes() {
  const handlePageLoad = useEvent(pageLoadEv)

  useEffect(() => {
    handlePageLoad()
  }, [])

  const notes = useStore(NoteModel.$notes)
  const isNotesLoading = useStore($isNotesLoading)

  return { notes, isNotesLoading }
}
