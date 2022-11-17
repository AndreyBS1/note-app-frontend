import { useParams } from 'react-router-dom'

import { Container } from 'src/shared/ui/container'
import { Footer } from 'src/widgets/footer/ui'
import { Header } from 'src/widgets/header/ui'

import { useForm, useNote } from '../model'
import styles from './note.module.scss'

export function Note() {
  const { noteId } = useParams()
  const { note, isNoteLoading } = useNote(noteId)
  const { form, handleChange } = useForm()

  if (isNoteLoading) {
    return <div>Loading...</div>
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
              <button>Delete</button>
            </div>
            <div className={styles.textContainer}>
              <textarea
                name="text"
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
