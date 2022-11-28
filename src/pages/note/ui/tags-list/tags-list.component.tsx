import { ITag } from 'src/shared/api'
import { Button } from 'src/shared/ui/button'
import { Icon } from 'src/shared/ui/icon'

import styles from './tags-list.module.scss'

import tagIcon from 'assets/tag.svg'

interface ITagLabelsList {
  tags: ITag[]
}

export function TagsList(props: ITagLabelsList) {
  const { tags } = props

  if (tags.length === 0) {
    return null
  }

  return (
    <>
      {tags.map((tag) => (
        <Button key={tag.id} className={styles.tag}>
          <Icon src={tagIcon} className={styles.icon} />
          {tag.name}
        </Button>
      ))}
    </>
  )
}
