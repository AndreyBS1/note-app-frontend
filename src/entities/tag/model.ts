import { createEffect, createStore } from 'effector'
import { ITag } from 'src/shared/api'

import * as api from './api'

export const $tags = createStore<ITag[]>([])

export const getTagsFx = createEffect(api.getTags)
export const saveTagsFx = createEffect(api.saveTags)
export const clearTagsFx = createEffect(api.clearTags)
