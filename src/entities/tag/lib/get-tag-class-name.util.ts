import styles from '../ui/tag-label.module.scss'

export function getTagClassName(
  target: 'container' | 'tagLabel',
  isTagSelected: boolean
) {
  switch (target) {
    case 'container':
      return `${styles.container} ${
        isTagSelected ? styles.activeContainer : ''
      }`
    case 'tagLabel':
      return `${styles.tagLabel} ${isTagSelected ? styles.activeTagLabel : ''}`
    default:
      return ''
  }
}
