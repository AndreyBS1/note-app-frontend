import { createEffect, createStore } from 'effector'
import { IUser } from 'src/shared/api'

import * as api from './user.api'

export const $user = createStore<IUser | null>(null)

export const createUserFx = createEffect(api.createUser)
export const getUserFx = createEffect(api.getUser)
export const updateUserFx = createEffect(api.updateUser)
export const deleteUserFx = createEffect(api.deleteUser)
