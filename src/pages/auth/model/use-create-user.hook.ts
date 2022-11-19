import { createEvent, sample } from 'effector'
import { useEvent, useStore } from 'effector-react'

import { UserModel } from 'src/entities/user'

const createUserEv = createEvent<string>()

sample({
  clock: createUserEv,
  target: UserModel.createUserFx,
})

UserModel.$user.on(UserModel.createUserFx.doneData, (_, user) => user)

const $isUserCreating = UserModel.createUserFx.pending

export function useCreateUser() {
  const handleCreateUser = useEvent(createUserEv)
  const isUserCreating = useStore($isUserCreating)

  return { handleCreateUser, isUserCreating }
}
