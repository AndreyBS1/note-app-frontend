import { useStore } from 'effector-react'
import { MouseEvent, useState } from 'react'
import { TagModel } from 'src/entities/tag'
import { useCreateTag } from 'src/features/tag/create-tag'

import { ITag } from 'src/shared/api'
import { Button } from 'src/shared/ui/button'
import { Icon } from 'src/shared/ui/icon'

import { useTagClassName } from '../lib'
import { TagForm } from './tag-form'

import styles from './sidebar.module.scss'

import deleteIcon from 'assets/delete.svg'
import editIcon from 'assets/edit.svg'
import { useDeleteTag } from 'src/features/tag/delete-tag'

interface ISidebar {
  isOpen: boolean
  onClose: () => void
  selectedTags: ITag[]
  onTagClick: (tag: ITag) => void
}

export function Sidebar(props: ISidebar) {
  const { isOpen, onClose, selectedTags, onTagClick } = props

  const tags = useStore(TagModel.$tags)
  const { handleCreateTag } = useCreateTag()
  const { handleDeleteTag } = useDeleteTag()
  const { getTagClassName } = useTagClassName(selectedTags)
  const [showTagForm, setShowTagForm] = useState(false)

  const toggleTagForm = () => {
    setShowTagForm((prev) => !prev)
  }

  const stopEventPropagation = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleEditClick = (event: MouseEvent) => {
    stopEventPropagation(event)
    toggleTagForm()
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.background} onClick={onClose}>
      <div className={styles.sidebar} onClick={stopEventPropagation}>
        <div className={styles.container}>
          {tags.length ? (
            <ul className={styles.list}>
              {tags.map((tag) => (
                <li
                  key={tag.id}
                  className={getTagClassName('item', tag)}
                  onClick={() => onTagClick(tag)}
                >
                  <div className={getTagClassName('itemContent', tag)}>
                    {showTagForm ? (
                      <TagForm tag={tag} onSubmit={toggleTagForm} />
                    ) : (
                      <>{tag.name}</>
                    )}
                  </div>
                  <div className={styles.itemHover}>
                    <button
                      className={styles.editButton}
                      onClick={handleEditClick}
                    >
                      <Icon src={editIcon} alt="edit tag" />
                    </button>
                    <button
                      className={styles.editButton}
                      onClick={() => handleDeleteTag(tag)}
                    >
                      <Icon src={deleteIcon} alt="delete tag" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.empty}>
              <div className={styles.emptyContainer}>
                <h2 className={styles.emptyText}>You don't have tags yet</h2>
                <Button
                  className={styles.emptyButton}
                  onClick={handleCreateTag}
                >
                  Create new tag
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
