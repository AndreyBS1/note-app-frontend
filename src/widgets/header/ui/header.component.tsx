import { Link } from 'react-router-dom'
import { Button } from 'src/shared/ui/button'

import { useAddNote } from '../model'
import { SearchBar } from './search-bar'

import styles from './header.module.scss'

import addIcon from 'assets/add.svg'
import menuIcon from 'assets/menu.svg'

export function Header() {
  const { handleAddNote, isNoteCreating } = useAddNote()

  if (isNoteCreating) {
    return <div>Loading...</div>
  }

  return (
    <>
      <header className={styles.header}>
        <Button className={styles.button}>
          <img src={menuIcon} alt="open/close side menu" />
        </Button>

        <Link to="/main" className={styles.logo}>
          <h1 className={styles.logoText}>notes</h1>
        </Link>

        <div className={styles.searchBarContainer}>
          <SearchBar onSearch={() => null} />
        </div>

        <Button className={styles.button} onClick={handleAddNote}>
          <img src={addIcon} alt="add new note" />
        </Button>

        <p>User</p>
      </header>

      <div className={styles.spacer} />
    </>
  )
}
