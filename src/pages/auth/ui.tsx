import { useEvent, useStore } from 'effector-react'
import { useEffect } from 'react'
import { UserModel } from 'src/entities/user'

import * as model from './model'

export function Auth() {
  const handlePageLoad = useEvent(model.pageLoadEv)
  useEffect(() => {
    handlePageLoad()
  }, [])

  const isUsersLoading = useStore(model.$isUsersLoading)
  if (isUsersLoading) {
    return <div>Loading...</div>
  }

  const users = useStore(UserModel.$users)

  const handleCreateUser = useEvent(model.createUserEv)
  const handleFormSubmit = () => {
    handleCreateUser('test')
  }
  const isUserCreating = useStore(model.$isUserCreating)

  return (
    <main>
      {users.length ? (
        <>
          <div>Users list</div>
        </>
      ) : (
        <>
          <div>
            <h1>
              Simple
              <br />
              web app
              <br />
              for notes.
            </h1>
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="name">Please, enter your username</label>
              <input type="text" id="name" />
              <button type="submit" disabled={isUserCreating}>
                Confirm
              </button>
            </form>
          </div>
        </>
      )}
    </main>
  )
}
