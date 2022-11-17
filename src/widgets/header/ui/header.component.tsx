import { useNavigate } from 'react-router-dom'

import { Container } from 'src/shared/ui/container'

import styles from './header.module.scss'

export function Header() {
  const navigate = useNavigate()

  const handleCreateClick = () => {
    navigate('/note/new')
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.contentContainer}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>notes</h1>
          </div>
          <div className={styles.searchBarContainer}>Search bar</div>
          <button className={styles.button} onClick={handleCreateClick}>
            Create note
          </button>
          <button className={styles.button}>Side menu</button>
        </div>
      </Container>
    </header>
  )
}
