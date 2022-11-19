import { Container } from 'src/shared/ui/container'
import { Footer } from 'src/widgets/footer/ui'
import { Header } from 'src/widgets/header/ui'

import { useNotes } from '../model'
import { NotesList } from './notes-list'

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
          <div className={styles.container}>
            <NotesList notes={notes} />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  )
}
