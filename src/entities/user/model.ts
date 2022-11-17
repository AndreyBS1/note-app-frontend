import { createEffect, createStore } from 'effector'
import { IUser } from 'src/shared/api'

import * as api from './api'

export const $users = createStore<IUser[]>([])

export const getUsersFx = createEffect(api.getUsers)
export const saveUsersFx = createEffect(api.saveUsers)
export const clearUsersFx = createEffect(api.clearUsers)
