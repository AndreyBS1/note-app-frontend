import { createEvent, sample } from 'effector'
import { useEvent } from 'effector-react'

import { TagModel } from 'src/entities/tag'

const deleteTagEv = createEvent<string>()

sample({
  clock: deleteTagEv,
  target: TagModel.deleteTagFx,
})

TagModel.$tags.on(deleteTagEv, (tags, deletedTagId) =>
  tags.filter((tag) => tag.id !== deletedTagId)
)

export function useDeleteTag() {
  const handleDeleteTag = useEvent(deleteTagEv)

  return { handleDeleteTag }
}
