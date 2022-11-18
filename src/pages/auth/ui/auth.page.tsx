import { useNavigate } from 'react-router-dom'
import { useCreateUser, useUser, useUserForm } from '../model'

export function Auth() {
  const navigate = useNavigate()
  const { user, isUsersLoading } = useUser()
  const { form, handleChange } = useUserForm()
  const { handleCreateUser, isUserCreating } = useCreateUser()

  const handleSubmit = () => {
    handleCreateUser(form.name)
    navigate('/main')
  }

  if (isUsersLoading) {
    return <div>Loading...</div>
  }

  return (
    <main>
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
        {user ? (
          <>
            <div>User description</div>
            <button>Log in</button>
            <button>Delete</button>
          </>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Username</label>
              <input
                type="text"
                name="name"
                placeholder="Please, enter your username"
                value={form.name}
                onChange={handleChange}
              />
              <button type="submit" disabled={isUserCreating}>
                Create
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  )
}
