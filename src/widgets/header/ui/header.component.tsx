import { Container } from 'src/shared/ui/container'

import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.contentContainer}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>notes</h1>
          </div>
          <div className={styles.searchBarContainer}>Search bar</div>
          <div>Side menu</div>
        </div>
      </Container>
    </header>
  )
}
