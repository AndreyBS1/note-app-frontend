import { apiService, ITag } from 'src/shared/api'
import { TAGS_KEY } from 'src/shared/config'
import { createUid } from 'src/shared/lib'

export function getAllTags(): Promise<ITag[] | null> {
  return apiService.get<ITag[]>(TAGS_KEY)
}

export async function getTag(tagId: string): Promise<ITag> {
  const tags = await apiService.get<ITag[]>(TAGS_KEY)
  if (tags == null) {
    throw new Error('Seems tags does not exist')
  }

  const foundedTag = tags.find((tag) => tag.id === tagId)
  if (foundedTag == null) {
    throw new Error('Seems like such tag does not exist')
  }

  return foundedTag
}

export async function addTag(
  name: string,
  noteIds: string[] = []
): Promise<ITag[]> {
  const id = createUid()
  const newTag: ITag = { id, name, noteIds }

  const tags = await apiService.get<ITag[]>(TAGS_KEY)

  const newTags: ITag[] = []
  if (tags !== null) {
    newTags.push(...tags)
  }
  newTags.push(newTag)

  await apiService.save<ITag[]>(TAGS_KEY, newTags)
  return newTags
}

export async function updateTag(updatedTag: ITag): Promise<ITag[]> {
  const tags = await apiService.get<ITag[]>(TAGS_KEY)
  if (tags == null) {
    throw new Error('Seems tags does not exist')
  }

  const updatedTags = tags.map((tag) => {
    if (tag.id === updatedTag.id) {
      return updatedTag
    }
    return tag
  })

  await apiService.save<ITag[]>(TAGS_KEY, updatedTags)
  return updatedTags
}

export async function deleteTag(tagId: string): Promise<ITag[]> {
  const tags = await apiService.get<ITag[]>(TAGS_KEY)
  if (tags == null) {
    throw new Error('Seems tags does not exist')
  }

  const updatedTags = tags.filter((tag) => tag.id !== tagId)

  await apiService.save<ITag[]>(TAGS_KEY, updatedTags)
  return updatedTags
}

export function clearTags(): Promise<void> {
  return apiService.clear(TAGS_KEY)
}
