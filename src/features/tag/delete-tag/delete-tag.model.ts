import { createEvent, sample } from 'effector'
import { useEvent } from 'effector-react'

import { TagModel } from 'src/entities/tag'
import { ITag } from 'src/shared/api'

const deleteTagEv = createEvent<ITag>()

sample({
  clock: deleteTagEv,
  target: TagModel.deleteTagFx,
})

TagModel.$tags.on(deleteTagEv, (tags, deletedTag) =>
  tags.filter((tag) => tag.id !== deletedTag.id)
)

export function useDeleteTag() {
  const handleDeleteTag = useEvent(deleteTagEv)

  return { handleDeleteTag }
}
