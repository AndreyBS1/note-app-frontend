import { createEffect, createStore } from 'effector'
import { IUser } from 'src/shared/api'

import * as api from './api'

export const $users = createStore<IUser[]>([])
export const $selectedUser = createStore<IUser | null>(null)

export const getAllUsersFx = createEffect(api.getAllUsers)
export const getUserFx = createEffect(api.getUser)
export const addUserFx = createEffect(api.addUser)
export const updateUserFx = createEffect(api.updateUser)
export const deleteUserFx = createEffect(api.deleteUser)
