import { useStore } from 'effector-react'
import { MouseEvent } from 'react'

import { TagLabel, TagModel } from 'src/entities/tag'
import { useCreateTag } from 'src/features/tag/create-tag'
import { useDeleteTag } from 'src/features/tag/delete-tag'
import { ITag } from 'src/shared/api'
import { Button } from 'src/shared/ui/button'

import styles from './sidebar.module.scss'

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

  const checkIsTagSelected = (tag: ITag) => {
    return selectedTags.some((selectedTag) => selectedTag.id === tag.id)
  }

  const stopEventPropagation = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.background} onClick={onClose}>
      <div className={styles.sidebar} onClick={stopEventPropagation}>
        <div className={styles.container}>
          {tags.length ? (
            <>
              <div className={styles.createButtonContainer}>
                <Button
                  className={styles.createButton}
                  onClick={handleCreateTag}
                >
                  Create new tag
                </Button>
              </div>
              <ul className={styles.list}>
                {tags.map((tag) => (
                  <li key={tag.id}>
                    <TagLabel
                      tag={tag}
                      isSelected={checkIsTagSelected(tag)}
                      onSelect={onTagClick}
                      onDelete={handleDeleteTag}
                    />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className={styles.empty}>
              <div className={styles.emptyContainer}>
                <h2 className={styles.emptyText}>You don't have tags yet</h2>
                <Button
                  className={styles.createButton}
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
