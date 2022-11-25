import { ITag } from 'src/shared/api'

import styles from '../ui/sidebar.module.scss'

export function useTagClassName(tags: ITag[]) {
  const checkIsTagSelected = (tagToCheck: ITag) => {
    return tags.some((tag) => tag.id === tagToCheck.id)
  }

  const getTagClassName = (target: 'item' | 'itemContent', tag: ITag) => {
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

  return { getTagClassName }
}
