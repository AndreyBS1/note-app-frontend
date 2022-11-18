import { Container } from 'src/shared/ui/container'

import { useCreateNote } from '../model'
import styles from './header.module.scss'

export function Header() {
  const { handleCreateNote, isNoteCreating } = useCreateNote()

  if (isNoteCreating) {
    return <div>Loading...</div>
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.contentContainer}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>notes</h1>
          </div>
          <div className={styles.searchBarContainer}>Search bar</div>
          <button className={styles.button} onClick={handleCreateNote}>
            Create note
          </button>
          <button className={styles.button}>Side menu</button>
        </div>
      </Container>
    </header>
  )
}
