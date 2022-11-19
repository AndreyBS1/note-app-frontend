import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Container } from 'src/shared/ui/container'
import { Footer } from 'src/widgets/footer/ui'
import { Header } from 'src/widgets/header/ui'

import * as model from '../model'
import styles from './note.module.scss'

export function Note() {
  const { noteId } = useParams()
  const { note, isNoteLoading } = model.useNote(noteId)
  const { form, handleChange } = model.useNoteForm()
  const { handleUpdateNote } = model.useUpdateNote()
  const { handleDeleteNote, isNoteDeleting } = model.useDeleteNote()

  useEffect(() => {
    handleUpdateNote(form)
  }, [form])

  const navigate = useNavigate()

  const handleDeleteClick = () => {
    handleDeleteNote(form.id)
    navigate('/')
  }

  if (isNoteLoading || isNoteDeleting) {
    return <div>Loading...</div>
  }

  if (!isNoteLoading && note == null) {
    return <div>Such note does not exist</div>
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
                onChange={handleChange}
              />
              {/* <button onClick={handleDeleteClick}>Delete</button> */}
            </div>
            <div className={styles.textContainer}>
              <textarea
                name="text"
                placeholder="Text"
                className={`${styles.input} ${styles.text}`}
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
