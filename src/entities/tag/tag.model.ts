import { createEffect, createStore } from 'effector'
import { ITag } from 'src/shared/api'

import * as api from './tag.api'

export const $tags = createStore<ITag[]>([])
export const $selectedTag = createStore<ITag | null>(null)

export const getAllTagsFx = createEffect(api.getAllTags)
export const getTagFx = createEffect(api.getTag)
export const addTagFx = createEffect(api.addTag)
export const updateTagFx = createEffect(api.updateTag)
export const deleteTagFx = createEffect(api.deleteTag)
export const clearTagsFx = createEffect(api.clearTags)
