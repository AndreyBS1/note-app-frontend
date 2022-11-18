import { createEffect, createStore } from 'effector'
import { INote } from 'src/shared/api'

import * as api from './note.api'

export const $notes = createStore<INote[]>([])
export const $selectedNote = createStore<INote | null>(null)

export const getAllNotesFx = createEffect(api.getAllNotes)
export const getNoteFx = createEffect(api.getNote)
export const addNoteFx = createEffect(api.addNote)
export const updateNoteFx = createEffect(api.updateNote)
export const deleteNoteFx = createEffect(api.deleteNote)
export const clearNotesFx = createEffect(api.clearNotes)
