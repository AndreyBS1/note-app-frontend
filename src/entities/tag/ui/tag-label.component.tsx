import { ITag } from 'src/shared/api'
import { Button } from 'src/shared/ui/button'

import deleteIcon from 'assets/delete.svg'

interface ITagLabel {
  tag: ITag
  onClick: () => void
  onDelete: () => void
}

export function TagLabel(props: ITagLabel) {
  const { tag, onClick, onDelete } = props

  return (
    <Button onClick={onClick}>
      <p>{tag.name}</p>
      <button onClick={onDelete}>
        <img src={deleteIcon} alt="delete tag" />
      </button>
    </Button>
  )
}
