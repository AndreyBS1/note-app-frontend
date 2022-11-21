import { createEffect, createStore } from 'effector'
import { INote } from 'src/shared/api'

import * as api from './note.api'

export const $notes = createStore<INote[]>([])

export const getNotesFx = createEffect(api.getNotes)
export const createNoteFx = createEffect(api.createNote)
export const updateNoteFx = createEffect(api.updateNote)
export const deleteNoteFx = createEffect(api.deleteNote)
export const clearNotesFx = createEffect(api.clearNotes)
