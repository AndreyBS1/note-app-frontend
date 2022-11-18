import { Container } from 'src/shared/ui/container'
import { Footer } from 'src/widgets/footer/ui'
import { Header } from 'src/widgets/header/ui'

import { useNotes } from '../model'
import styles from './main.module.scss'

export function Main() {
  const { notes, isNotesLoading } = useNotes()

  if (isNotesLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />

      <main>
        <Container>
          {notes.length ? (
            <div className={styles.contentContainer}>
              <div>Notes list</div>
            </div>
          ) : (
            <div className={styles.empty}>
              <h1 className={styles.emptyText}>You don't have notes yet</h1>
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </>
  )
}
