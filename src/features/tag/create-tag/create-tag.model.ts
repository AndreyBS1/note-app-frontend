import { createEvent, sample } from 'effector'
import { useEvent } from 'effector-react'

import { TagModel } from 'src/entities/tag'
import { ITag } from 'src/shared/api'
import { createUid } from 'src/shared/lib'

const createTagEv = createEvent<ITag>()

sample({
  clock: createTagEv,
  target: TagModel.createTagFx,
})

TagModel.$tags.on(createTagEv, (tags, newTag) => [...tags, newTag])

export function useCreateTag() {
  const createTag = useEvent(createTagEv)

  /**
   * Create new tag
   * @returns new tag id
   */
  const handleCreateTag = () => {
    const id = createUid()
    const newTag: ITag = {
      id,
      name: 'New tag',
      notes: [],
    }
    createTag(newTag)
    return id
  }

  return { handleCreateTag }
}
