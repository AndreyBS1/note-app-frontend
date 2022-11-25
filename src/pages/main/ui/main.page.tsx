import { useSidebar } from 'src/shared/lib'
import { Container } from 'src/shared/ui/container'
import { Footer } from 'src/widgets/footer'
import { Header } from 'src/widgets/header'
import { Sidebar } from 'src/widgets/sidebar'

import * as model from '../model'
import { NotesList } from './notes-list'

import styles from './main.module.scss'

export function Main() {
  const { notes, isNotesLoading } = model.useNotes()
  const { isTagsLoading } = model.useLoadTags()
  const { showSidebar, toggleSidebar } = useSidebar()
  const { filteredNotes, selectedTags, handleTagSelect } =
    model.useFilteredNotes(notes)

  if (isTagsLoading || isNotesLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header onSidebarToggle={toggleSidebar} />

      <main>
        <Container>
          <div className={styles.container}>
            <NotesList notes={filteredNotes} />
          </div>
        </Container>

        <Sidebar
          isOpen={showSidebar}
          onClose={toggleSidebar}
          selectedTags={selectedTags}
          onTagClick={handleTagSelect}
        />
      </main>

      <Footer />
    </>
  )
}
