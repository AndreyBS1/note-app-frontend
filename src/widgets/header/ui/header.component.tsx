import { Link, useNavigate } from 'react-router-dom'

import { useCreateNote } from 'src/features/note/create-note'
import { Button } from 'src/shared/ui/button'

import { SearchBar } from './search-bar'

import styles from './header.module.scss'

import addIcon from 'assets/add.svg'
import menuIcon from 'assets/menu.svg'

interface IHeader {
  onSidebarToggle: () => void
}

export function Header(props: IHeader) {
  const { onSidebarToggle } = props

  const navigate = useNavigate()
  const { handleCreateNote } = useCreateNote()

  const handleCreateClick = () => {
    const newNoteId = handleCreateNote()
    navigate(`/note/${newNoteId}`)
  }

  return (
    <>
      <header className={styles.header}>
        <Button className={styles.button} onClick={onSidebarToggle}>
          <img src={menuIcon} alt="open/close side menu" />
        </Button>

        <Link to="/main" className={styles.logo}>
          <h1 className={styles.logoText}>notes</h1>
        </Link>

        <div className={styles.searchBarContainer}>
          <SearchBar onSearch={() => null} />
        </div>

        <Button className={styles.button} onClick={handleCreateClick}>
          <img src={addIcon} alt="add new note" />
        </Button>

        <p>User</p>
      </header>

      <div className={styles.spacer} />
    </>
  )
}
