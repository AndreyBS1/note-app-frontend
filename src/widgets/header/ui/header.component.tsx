import { Link } from 'react-router-dom'
import { Button } from 'src/shared/ui/button'
import { Container } from 'src/shared/ui/container'

import { useCreateNote } from '../model'
import styles from './header.module.scss'

import addIcon from 'assets/add.svg'
import menuIcon from 'assets/menu.svg'
import { SearchBar } from './search-bar'

export function Header() {
  const { handleCreateNote, isNoteCreating } = useCreateNote()

  if (isNoteCreating) {
    return <div>Loading...</div>
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.contentContainer}>
          <Button className={styles.button}>
            <img src={menuIcon} alt="open/close side menu" />
          </Button>

          <Link to="/main" className={styles.logo}>
            <h1 className={styles.logoText}>notes</h1>
          </Link>

          <div className={styles.searchBarContainer}>
            <SearchBar onSearch={() => null} />
          </div>

          <Button className={styles.button} onClick={handleCreateNote}>
            <img src={addIcon} alt="add new note" />
          </Button>

          <p>User</p>
        </div>
      </Container>
    </header>
  )
}
