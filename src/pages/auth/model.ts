import { createEvent, sample } from 'effector'

import { UserModel } from 'src/entities/user'

export const pageLoadEv = createEvent<void>()
sample({
  clock: pageLoadEv,
  target: UserModel.getAllUsersFx,
})
UserModel.$users.on(UserModel.getAllUsersFx.doneData, (_, users) => users)
export const $isUsersLoading = UserModel.getAllUsersFx.pending

export const createUserEv = createEvent<string>()
sample({
  clock: createUserEv,
  target: UserModel.addUserFx,
})
UserModel.$users.on(UserModel.addUserFx.doneData, (_, users) => users)
export const $isUserCreating = UserModel.addUserFx.pending
