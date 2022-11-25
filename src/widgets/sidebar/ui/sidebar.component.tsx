import { MouseEvent } from 'react'

import { ITag } from 'src/shared/api'
import { Container } from 'src/shared/ui/container'

import styles from './sidebar.module.scss'

interface ISidebar {
  isOpen: boolean
  onClose: () => void
  tags?: ITag[]
  contentType?: 'list' | 'select-input'
  onTagClick?: (tag: ITag) => void
}

export function Sidebar(props: ISidebar) {
  const {
    isOpen,
    onClose,
    tags = [],
    contentType = 'list',
    onTagClick = () => null,
  } = props

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
        <Container>
          <div className={styles.container}>
            <div>Search bar</div>
            <div>
              <ul>
                <li>{contentType === 'list' ? 'All' : 'Reset all'}</li>
                {tags.map((tag) => (
                  <li key={tag.id}>
                    <button onClick={() => onTagClick(tag)}>{tag.name}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
