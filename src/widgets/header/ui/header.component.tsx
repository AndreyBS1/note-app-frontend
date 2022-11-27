import { Link, useNavigate } from 'react-router-dom'

import { useCreateNote } from 'src/features/note/create-note'
import { Button } from 'src/shared/ui/button'
import { Icon } from 'src/shared/ui/icon'

import { ISearchBar, SearchBar } from './search-bar'

import styles from './header.module.scss'

import addIcon from 'assets/add.svg'
import logOutIcon from 'assets/log-out.svg'
import menuIcon from 'assets/menu.svg'

interface IHeader extends ISearchBar {
  onSidebarToggle: () => void
}

export function Header(props: IHeader) {
  const { onSidebarToggle, query, onQueryChange } = props

  const navigate = useNavigate()
  const { handleCreateNote } = useCreateNote()

  const handleCreateClick = () => {
    const newNoteId = handleCreateNote()
    navigate(`/note/${newNoteId}`)
  }

  const handleLogOutClick = () => {
    navigate('/')
  }

  return (
    <>
      <header className={styles.header}>
        <Button className={styles.button} onClick={onSidebarToggle}>
          <Icon src={menuIcon} alt="open/close side menu" />
        </Button>

        <Link to="/main" className={styles.logo}>
          <h1 className={styles.logoText}>notes</h1>
        </Link>

        <div className={styles.searchBarContainer}>
          <SearchBar query={query} onQueryChange={onQueryChange} />
        </div>

        <Button className={styles.button} onClick={handleCreateClick}>
          <Icon src={addIcon} alt="add new note" />
        </Button>

        <Button className={styles.button} onClick={handleLogOutClick}>
          <Icon src={logOutIcon} alt="log out" />
        </Button>
      </header>

      <div className={styles.spacer} />
    </>
  )
}
