import { useNavigate } from 'react-router-dom'
import { UserCard } from 'src/entities/user'

import { useCreateUser, useUser, useUserForm } from '../model'
import styles from './auth.module.scss'

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
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Simple
            <br />
            <span className={styles.highlightedText}>web app</span>
            <br />
            for <span className={styles.highlightedText}>notes</span>.
          </h1>
        </div>
        <div className={styles.userContainer}>
          {user ? (
            <UserCard user={user} onLogIn={() => null} onDelete={() => null} />
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
      </div>
    </main>
  )
}
