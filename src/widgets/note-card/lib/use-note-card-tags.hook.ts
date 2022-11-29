import { useStore } from 'effector-react'
import { useMemo } from 'react'

import { TagModel } from 'src/entities/tag'
import { ITag } from 'src/shared/api'

export function useNoteCardTags(tagsIds: string[]) {
  const allTags = useStore(TagModel.$tags)

  const tags = useMemo<ITag[]>(() => {
    if (!tagsIds || !allTags) {
      return []
    }
    if (tagsIds.length === 0 || allTags.length === 0) {
      return []
    }
    const tagsCode = tagsIds.join('-')
    const noteTags = allTags.filter((tag) => tagsCode.includes(tag.id))
    return noteTags
  }, [allTags, tagsIds])

  return { tags }
}
