import { createEvent, sample } from 'effector'

import { NoteModel } from 'src/entities/note'
import { ICreateNote, INote } from 'src/shared/api'

export const pageLoadEv = createEvent<string>()
sample({
  clock: pageLoadEv,
  target: NoteModel.getNoteFx,
})
NoteModel.$selectedNote.on(
  NoteModel.getNoteFx.doneData,
  (_, selectedNote) => selectedNote
)
export const $isNoteLoading = NoteModel.getNoteFx.pending

export const createNoteEv = createEvent<ICreateNote>()
sample({
  clock: createNoteEv,
  target: NoteModel.addNoteFx,
})
export const $isNoteCreating = NoteModel.addNoteFx.pending

export const updateNoteEv = createEvent<INote>()
sample({
  clock: updateNoteEv,
  target: NoteModel.updateNoteFx,
})
export const $isNoteUpdating = NoteModel.updateNoteFx.pending

export const deleteNoteEv = createEvent<INote>()
sample({
  clock: deleteNoteEv,
  target: NoteModel.deleteNoteFx,
})
export const $isNoteDeleting = NoteModel.deleteNoteFx.pending
