import { createEvent, sample } from 'effector'
import { useEvent, useStore } from 'effector-react'

import { NoteModel } from 'src/entities/note'
import { TagModel } from 'src/entities/tag'
import { UserModel } from 'src/entities/user'

const deleteUserEv = createEvent<void>()

sample({
  clock: deleteUserEv,
  target: [
    UserModel.deleteUserFx,
    NoteModel.clearNotesFx,
    TagModel.clearTagsFx,
  ],
})

const $isUserDeleting =
  UserModel.deleteUserFx.pending ||
  NoteModel.clearNotesFx.pending ||
  TagModel.clearTagsFx.pending

export function useDeleteUser() {
  const handleDeleteUser = useEvent(deleteUserEv)
  const isUserDeleting = useStore($isUserDeleting)

  return { handleDeleteUser, isUserDeleting }
}
