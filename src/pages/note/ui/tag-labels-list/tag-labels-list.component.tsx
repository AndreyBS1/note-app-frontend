import { ITag } from 'src/shared/api'
import { Button } from 'src/shared/ui/button'

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
        <Button key={tag.id}>{tag.name}</Button>
      ))}
    </>
  )
}
