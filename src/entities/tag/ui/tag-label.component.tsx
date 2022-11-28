import { MouseEvent, useState } from 'react'

import { ITag } from 'src/shared/api'
import { Icon } from 'src/shared/ui/icon'

import { TagForm } from './tag-form'

import styles from './tag-label.module.scss'

import deleteIcon from 'assets/delete.svg'
import editIcon from 'assets/edit.svg'
import { getTagClassName } from '../lib'

interface ITagLabel {
  tag: ITag
  isSelected: boolean
  onSelect: (tag: ITag) => void
  onDelete: (tag: ITag) => void
}

export function TagLabel(props: ITagLabel) {
  const { tag, isSelected, onSelect, onDelete } = props

  const [showTagForm, setShowTagForm] = useState(false)

  const toggleTagForm = () => {
    setShowTagForm((prev) => !prev)
  }

  const handleEditClick = (event: MouseEvent) => {
    event.stopPropagation()
    toggleTagForm()
  }

  return (
    <div
      className={getTagClassName('container', isSelected)}
      onClick={() => onSelect(tag)}
    >
      <div className={getTagClassName('tagLabel', isSelected)}>
        {showTagForm ? (
          <TagForm tag={tag} onSubmit={toggleTagForm} />
        ) : (
          <>{tag.name}</>
        )}
      </div>
      <div className={styles.tagLabelHover}>
        <button className={styles.iconButton} onClick={handleEditClick}>
          <Icon src={editIcon} alt="edit tag" />
        </button>
        <button className={styles.iconButton} onClick={() => onDelete(tag)}>
          <Icon src={deleteIcon} alt="delete tag" />
        </button>
      </div>
    </div>
  )
}
