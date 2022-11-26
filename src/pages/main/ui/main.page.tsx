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
  const { notesFilteredByTags, selectedTags, handleTagSelect } =
    model.useFilterByTags(notes)
  const { notesFilteredBySearch, searchQuery, setSearchQuery } =
    model.useFilterBySearch(notesFilteredByTags)

  if (isTagsLoading || isNotesLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header
        onSidebarToggle={toggleSidebar}
        query={searchQuery}
        onQueryChange={setSearchQuery}
      />

      <main>
        <Container>
          <div className={styles.container}>
            <NotesList notes={notesFilteredBySearch} />
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
