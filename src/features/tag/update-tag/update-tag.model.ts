import { createEvent, sample } from 'effector'
import { useEvent, useStore } from 'effector-react'

import { TagModel } from 'src/entities/tag'
import { ITag } from 'src/shared/api'

const updateTagEv = createEvent<ITag>()

sample({
  clock: updateTagEv,
  target: TagModel.updateTagFx,
})

const $isTagUpdating = TagModel.updateTagFx.pending

export function useUpdateTag() {
  const handleUpdateTag = useEvent(updateTagEv)
  const isTagUpdating = useStore($isTagUpdating)

  return { handleUpdateTag, isTagUpdating }
}
