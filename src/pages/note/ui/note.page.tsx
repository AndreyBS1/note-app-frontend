import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Container } from 'src/shared/ui/container'
import { Footer } from 'src/widgets/footer/ui'
import { Header } from 'src/widgets/header/ui'

import { useDeleteNote, useNote, useNoteForm, useUpdateNote } from '../model'
import styles from './note.module.scss'

export function Note() {
  const { noteId } = useParams()
  const { note, isNoteLoading } = useNote(noteId)
  const { form, handleChange } = useNoteForm()
  const { handleUpdateNote } = useUpdateNote()
  const { handleDeleteNote, isNoteDeleting } = useDeleteNote()

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
                className={styles.input}
                onChange={handleChange}
              />
              <button onClick={handleDeleteClick}>Delete</button>
            </div>
            <div className={styles.textContainer}>
              <input
                name="text"
                type="text"
                placeholder="Text"
                className={styles.input}
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
