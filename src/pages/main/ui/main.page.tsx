import { Container } from 'src/shared/ui/container'
import { Footer } from 'src/widgets/footer/ui'
import { Header } from 'src/widgets/header/ui'
import { Sidebar } from 'src/widgets/sidebar'

import { useNotes } from '../model'
import { NotesList } from './notes-list'

import { useState } from 'react'
import styles from './main.module.scss'

export function Main() {
  const { notes, isNotesLoading } = useNotes()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  if (isNotesLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header onSidebarToggle={handleSidebarToggle} />

      <main>
        <Container>
          <div className={styles.container}>
            <NotesList notes={notes} />
          </div>
        </Container>

        <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
      </main>

      <Footer />
    </>
  )
}
