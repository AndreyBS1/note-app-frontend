import { apiService, ITag } from 'src/shared/api'
import { TAGS_KEY } from 'src/shared/config'

export function getTags() {
  return apiService.get<ITag>(TAGS_KEY)
}

export function saveTags(tags: ITag[]) {
  return apiService.save<ITag>(TAGS_KEY, tags)
}

export function clearTags() {
  return apiService.clear(TAGS_KEY)
}
