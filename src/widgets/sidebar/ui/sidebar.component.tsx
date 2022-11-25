import { MouseEvent } from 'react'

import { ITag } from 'src/shared/api'

import styles from './sidebar.module.scss'

const tags: ITag[] = [
  {
    id: '0',
    name: 'Zero',
    notes: [],
  },
  {
    id: '1',
    name: 'One',
    notes: [],
  },
  {
    id: '2',
    name: 'Two',
    notes: [],
  },
]

interface ISidebar {
  isOpen: boolean
  onClose: () => void
  selectedTags: ITag[]
  onTagClick: (tag: ITag) => void
}

export function Sidebar(props: ISidebar) {
  const { isOpen, onClose, selectedTags, onTagClick } = props

  const checkIsTagSelected = (tagToCheck: ITag) => {
    return selectedTags.some((tag) => tag.id === tagToCheck.id)
  }

  const getItemClassName = (target: 'item' | 'itemContent', tag: ITag) => {
    const isTagSelected = checkIsTagSelected(tag)
    switch (target) {
      case 'item':
        return `${styles.item} ${isTagSelected ? styles.activeItem : ''}`
      case 'itemContent':
        return `${styles.itemContent} ${
          isTagSelected ? styles.activeItemContent : ''
        }`
      default:
        return ''
    }
  }

  const preventClose = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.background} onClick={onClose}>
      <div className={styles.sidebar} onClick={preventClose}>
        <div className={styles.container}>
          <ul className={styles.list}>
            {tags.map((tag) => (
              <li
                key={tag.id}
                className={getItemClassName('item', tag)}
                onClick={() => onTagClick(tag)}
              >
                <div className={getItemClassName('itemContent', tag)}>
                  {tag.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
