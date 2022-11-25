import { createEvent, sample } from 'effector'
import { useEvent, useStore } from 'effector-react'
import { useEffect } from 'react'

import { TagModel } from 'src/entities/tag'

const pageLoadEv = createEvent<void>()

sample({
  clock: pageLoadEv,
  target: TagModel.getTagsFx,
})

const $isTagsLoading = TagModel.getTagsFx.pending

TagModel.$tags.on(TagModel.getTagsFx.doneData, (_, tags) => tags)

export function useLoadTags() {
  const handlePageLoad = useEvent(pageLoadEv)

  useEffect(() => {
    handlePageLoad()
  }, [])

  const isTagsLoading = useStore($isTagsLoading)

  return { isTagsLoading }
}
