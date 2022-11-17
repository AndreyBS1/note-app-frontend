import { useEvent, useStore } from 'effector-react'
import { useEffect } from 'react'
import { NoteModel } from 'src/entities/note'

import * as model from './model'

export function Note() {
  const handlePageLoad = useEvent(model.pageLoadEv)
  useEffect(() => {
    handlePageLoad('userId')
  }, [])

  const isNoteLoading = useStore(model.$isNoteLoading)
  if (isNoteLoading) {
    return <div>Loading...</div>
  }

  const note = useStore(NoteModel.$selectedNote)

  return (
    <>
      <header>Header</header>
      <main>
        <div>
          <input type="text" placeholder="Title" />
          <button>Delete</button>
        </div>
        <div>
          <input type="text" placeholder="Text" />
        </div>
      </main>
      <footer>Footer</footer>
    </>
  )
}
