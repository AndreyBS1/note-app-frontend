import { TagLabel } from 'src/entities/tag'
import { ITag } from 'src/shared/api'

interface ITagLabelsList {
  tags: ITag[]
}

export function TagLabelsList(props: ITagLabelsList) {
  const { tags } = props

  if (tags.length === 0) {
    return null
  }

  return (
    <>
      {tags.map((tag) => (
        <TagLabel
          key={tag.id}
          tag={tag}
          onClick={() => null}
          onDelete={() => null}
        />
      ))}
    </>
  )
}
