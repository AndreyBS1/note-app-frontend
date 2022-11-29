import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactTextareaAutosize from 'react-textarea-autosize'

import { useUpdateNote } from 'src/features/note/update-note'
import { ITag } from 'src/shared/api'
import { useSidebar } from 'src/shared/lib'
import { Container } from 'src/shared/ui/container'
import { Footer } from 'src/widgets/footer'
import { Header } from 'src/widgets/header'
import { Loading } from 'src/widgets/loading'
import { Sidebar } from 'src/widgets/sidebar'

import { useNoteTags } from '../lib'
import * as model from '../model'
import { TagsList } from './tags-list'

import styles from './note.module.scss'

let timeout: any = null

export function Note() {
  const { id } = useParams()
  const { note, isNoteLoading } = model.useNote(id)
  const { form, setForm, handleChange } = model.useNoteForm(note)
  const { tags } = useNoteTags(form.tagsIds)
  const { handleUpdateNote } = useUpdateNote()
  const { showSidebar, toggleSidebar } = useSidebar()
  const [searchQuery, setSearchQuery] = useState('')

  const handleTagClick = (selectedTag: ITag) => {
    const isTagSelected = form.tagsIds.some((tagId) => tagId === selectedTag.id)
    let updatedTagsIds: string[] = []
    if (isTagSelected) {
      updatedTagsIds = form.tagsIds.filter((tagId) => tagId !== selectedTag.id)
    } else {
      updatedTagsIds = [...form.tagsIds, selectedTag.id]
    }
    setForm((prev) => ({ ...prev, tagsIds: updatedTagsIds }))
  }

  useEffect(() => {
    if (form) {
      handleUpdateNote(form)
    }
  }, [form])

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleQueryChange = (query: string) => {
    setSearchQuery(query)
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      if (textareaRef.current && query) {
        model.findTextBySearch(textareaRef.current, query)
      }
    }, 500)
  }

  if (isNoteLoading) {
    return <Loading />
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
        query={searchQuery}
        onQueryChange={handleQueryChange}
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
                ref={textareaRef}
                name="text"
                placeholder="Text"
                className={`${styles.input} ${styles.text}`}
                value={form.text}
                onChange={handleChange}
              />
            </div>
            <div className={styles.tagsContainer}>
              <TagsList tags={tags} />
            </div>
          </div>
        </Container>

        <Sidebar
          isOpen={showSidebar}
          onClose={toggleSidebar}
          selectedTags={tags}
          onTagClick={handleTagClick}
        />
      </main>

      <Footer />
    </>
  )
}
