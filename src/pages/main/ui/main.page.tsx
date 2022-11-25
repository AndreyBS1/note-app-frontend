import { ITag } from 'src/shared/api'
import { Container } from 'src/shared/ui/container'
import { Footer } from 'src/widgets/footer/ui'
import { Header } from 'src/widgets/header/ui'
import { Sidebar } from 'src/widgets/sidebar'

import { useLoadTags, useNotes } from '../model'
import { NotesList } from './notes-list'

import { useState } from 'react'
import { useSidebar } from 'src/shared/lib'
import styles from './main.module.scss'

const mockSelectedTags: ITag[] = [
  {
    id: '0',
    name: 'Zero',
    notes: [],
  },
]

export function Main() {
  const { notes, isNotesLoading } = useNotes()
  const { isTagsLoading } = useLoadTags()
  const { showSidebar, toggleSidebar } = useSidebar()

  const [selectedTags, setSelectedTags] = useState(mockSelectedTags)

  const handleTagClick = (selectedTag: ITag) => {
    const isTagSelected = selectedTags.some((tag) => tag.id === selectedTag.id)
    if (isTagSelected) {
      const updatedTags = selectedTags.filter(
        (tag) => tag.id !== selectedTag.id
      )
      setSelectedTags(updatedTags)
    } else {
      setSelectedTags((prev) => [...prev, selectedTag])
    }
  }

  if (isTagsLoading || isNotesLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header onSidebarToggle={toggleSidebar} />

      <main>
        <Container>
          <div className={styles.container}>
            <NotesList notes={notes} />
          </div>
        </Container>

        <Sidebar
          isOpen={showSidebar}
          onClose={toggleSidebar}
          selectedTags={selectedTags}
          onTagClick={handleTagClick}
        />
      </main>

      <Footer />
    </>
  )
}
