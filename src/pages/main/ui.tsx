import { useEvent, useStore } from 'effector-react'
import { useEffect } from 'react'
import { NoteModel } from 'src/entities/note'
import { UserModel } from 'src/entities/user'
import { Footer } from 'src/widgets/footer/ui'
import { Header } from 'src/widgets/header/ui'

import * as model from './model'

export function Main() {
  const handlePageLoad = useEvent(model.pageLoadEv)
  useEffect(() => {
    handlePageLoad('userId')
  }, [])

  const user = useStore(UserModel.$selectedUser)

  const handleUserNotesLoad = useEvent(model.userNotesLoadEv)
  useEffect(() => {
    if (user) {
      handleUserNotesLoad(user.id)
    }
  }, [user])

  const isUserNotesLoading = useStore(model.$isUserNotesLoading)
  if (isUserNotesLoading) {
    return <div>Loading...</div>
  }

  const notes = useStore(NoteModel.$notes)

  return (
    <>
      <Header />

      <main>
        {notes.length ? (
          <div>Notes list</div>
        ) : (
          <div>You don't have notes yet</div>
        )}
      </main>

      <Footer />
    </>
  )
}
