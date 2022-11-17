import { createEffect, createStore } from 'effector'
import { INote } from 'src/shared/api'

import * as api from './api'

export const $notes = createStore<INote[]>([])

export const getNotesFx = createEffect(api.getNotes)
export const saveNotesFx = createEffect(api.saveNotes)
export const clearNotesFx = createEffect(api.clearNotes)
