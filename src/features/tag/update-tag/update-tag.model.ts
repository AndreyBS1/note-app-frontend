import { createEvent, sample } from 'effector'
import { useEvent } from 'effector-react'

import { TagModel } from 'src/entities/tag'
import { ITag } from 'src/shared/api'

const updateTagEv = createEvent<ITag>()

sample({
  clock: updateTagEv,
  target: TagModel.updateTagFx,
})

TagModel.$tags.on(updateTagEv, (tags, updatedTag) =>
  tags.map((tag) => {
    if (tag.id === updatedTag.id) {
      return updatedTag
    }
    return tag
  })
)

export function useUpdateTag() {
  const handleUpdateTag = useEvent(updateTagEv)

  return { handleUpdateTag }
}
