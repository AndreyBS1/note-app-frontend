import { createEvent, sample } from 'effector'
import { NoteModel } from 'src/entities/note'

import { UserModel } from 'src/entities/user'

export const pageLoadEv = createEvent<string>()
sample({
  clock: pageLoadEv,
  target: UserModel.getUserFx,
})
UserModel.$selectedUser.on(
  UserModel.getUserFx.doneData,
  (_, selectedUser) => selectedUser
)
export const $isUserLoading = UserModel.getUserFx.pending

export const userNotesLoadEv = createEvent<string>()
sample({
  clock: userNotesLoadEv,
  target: NoteModel.getAllNotesFx,
})
export const $isUserNotesLoading = NoteModel.getAllNotesFx.pending
