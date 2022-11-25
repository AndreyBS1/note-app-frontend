import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactTextareaAutosize from 'react-textarea-autosize'

import { useUpdateNote } from 'src/features/note/update-note'
import { Button } from 'src/shared/ui/button'
import { Container } from 'src/shared/ui/container'
import { Footer } from 'src/widgets/footer'
import { Header } from 'src/widgets/header'

import * as model from '../model'
import { TagLabelsList } from './tag-labels-list'

import styles from './note.module.scss'

import addIcon from 'assets/add.svg'
import settingsIcon from 'assets/settings.svg'

export function Note() {
  const { id } = useParams()
  const { note, isNoteLoading } = model.useNote(id)
  const { form, handleChange } = model.useNoteForm(note)
  const { handleUpdateNote } = useUpdateNote()

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

  const isError = form == null
  if (isError) {
    return <div>There is some unexpected error</div>
  }

  return (
    <>
      <Header onSidebarToggle={() => null} />

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
              <TagLabelsList tags={form.tags} />
              <Button className={styles.manageTagsButton}>
                {form.tags.length > 0 ? (
                  <img src={settingsIcon} alt="manage tags" />
                ) : (
                  <>
                    <img
                      src={addIcon}
                      alt="add tags"
                      style={{ marginRight: '0.3rem' }}
                    />
                    <span style={{ marginRight: '0.5rem' }}>Add tags</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  )
}
