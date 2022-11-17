import { createEvent, sample } from 'effector'

import { UserModel } from 'src/entities/user'

export const pageLoadEv = createEvent<void>()
sample({
  clock: pageLoadEv,
  target: UserModel.getAllUsersFx,
})
sample({
  clock: UserModel.getAllUsersFx.doneData,
  target: UserModel.$users,
})
export const $isUsersLoading = UserModel.getAllUsersFx.pending

export const createUserEv = createEvent<string>()
sample({
  clock: createUserEv,
  target: UserModel.addUserFx,
})
sample({
  clock: UserModel.addUserFx.doneData,
  target: UserModel.$users,
})
export const $isUserCreating = UserModel.addUserFx.pending
