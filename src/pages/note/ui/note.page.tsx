import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactTextareaAutosize from 'react-textarea-autosize'

import { useUpdateNote } from 'src/features/note/update-note'
import { ITag } from 'src/shared/api'
import { useSidebar } from 'src/shared/lib'
import { Container } from 'src/shared/ui/container'
import { Footer } from 'src/widgets/footer'
import { Header } from 'src/widgets/header'
import { Sidebar } from 'src/widgets/sidebar'

import * as model from '../model'
import { TagsList } from './tags-list'

import styles from './note.module.scss'

export function Note() {
  const { id } = useParams()
  const { note, isNoteLoading } = model.useNote(id)
  const { form, setForm, handleChange } = model.useNoteForm(note)
  const { handleUpdateNote } = useUpdateNote()
  const { showSidebar, toggleSidebar } = useSidebar()

  const handleTagClick = (selectedTag: ITag) => {
    const isTagSelected = form.tags.some((tag) => tag.id === selectedTag.id)
    let updatedTags: ITag[] = []
    if (isTagSelected) {
      updatedTags = form.tags.filter((tag) => tag.id !== selectedTag.id)
    } else {
      updatedTags = [...form.tags, selectedTag]
    }
    setForm((prev) => ({ ...prev, tags: updatedTags }))
  }

  useEffect(() => {
    if (form) {
      handleUpdateNote(form)
    }
  }, [form])

  if (isNoteLoading) {
    return <div>Loading...</div>
  }

  const isNoteNotExist = !isNoteLoading && note == null
  if (isNoteNotExist) {
    return <div>Such note does not exist</div>
  }

  const isError = form == null || note == null
  if (isError) {
    return <div>There is some unexpected error</div>
  }

  return (
    <>
      <Header
        onSidebarToggle={toggleSidebar}
        query={''}
        onQueryChange={() => null}
      />

      <main>
        <Container>
          <div className={styles.contentContainer}>
            <div className={styles.titleContainer}>
              <input
                name="title"
                type="text"
                placeholder="Title"
                className={`${styles.input} ${styles.title}`}
                value={form.title}
                onChange={handleChange}
              />
            </div>
            <div className={styles.textContainer}>
              <ReactTextareaAutosize
                name="text"
                placeholder="Text"
                className={`${styles.input} ${styles.text}`}
                value={form.text}
                onChange={handleChange}
              />
            </div>
            <div className={styles.tagsContainer}>
              <TagsList tags={form.tags} />
            </div>
          </div>
        </Container>

        <Sidebar
          isOpen={showSidebar}
          onClose={toggleSidebar}
          selectedTags={form.tags}
          onTagClick={handleTagClick}
        />
      </main>

      <Footer />
    </>
  )
}
