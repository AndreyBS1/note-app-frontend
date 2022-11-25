import { createEffect, createStore } from 'effector'
import { ITag } from 'src/shared/api'

import * as api from './tag.api'

export const $tags = createStore<ITag[]>([])

export const getTagsFx = createEffect(api.getTags)
export const createTagFx = createEffect(api.createTag)
export const updateTagFx = createEffect(api.updateTag)
export const deleteTagFx = createEffect(api.deleteTag)
export const clearTagsFx = createEffect(api.clearTags)
