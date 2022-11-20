import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactTextareaAutosize from 'react-textarea-autosize'

import { useForm } from 'src/shared/lib'
import { Container } from 'src/shared/ui/container'
import { Footer } from 'src/widgets/footer/ui'
import { Header } from 'src/widgets/header/ui'

import * as model from '../model'

import styles from './note.module.scss'

export function Note() {
  const { id } = useParams()
  const { note, isNoteLoading } = model.useNote(id)
  const { form, handleChange } = useForm(note)
  const { handleUpdateNote } = model.useUpdateNote()

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
      <Header />

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
          </div>
        </Container>
      </main>

      <Footer />
    </>
  )
}
