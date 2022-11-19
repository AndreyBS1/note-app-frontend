import { useNavigate } from 'react-router-dom'

import { UserCard } from 'src/entities/user'
import { Button } from 'src/shared/ui/button'

import * as model from '../model'
import styles from './auth.module.scss'

export function Auth() {
  const navigate = useNavigate()
  const { user, isUsersLoading } = model.useUser()
  const { userStats, isUserStatsLoading } = model.useUserStats()
  const { form, handleChange } = model.useUserForm()
  const { handleCreateUser, isUserCreating } = model.useCreateUser()
  const { handleDeleteUser, isUserDeleting } = model.useDeleteUser()

  const handleLogIn = () => {
    navigate('/main')
  }

  const handleSubmit = () => {
    handleCreateUser(form.name)
    navigate('/main')
  }

  const isLoading = isUsersLoading || isUserDeleting || isUserStatsLoading
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <div className={styles.container}>
        <div className={`${styles.contentContainer} ${styles.titleContainer}`}>
          <h1 className={styles.title}>
            Simple
            <br />
            web app
            <br />
            for notes.
          </h1>
        </div>
        <div className={`${styles.contentContainer} ${styles.userContainer}`}>
          {user ? (
            <UserCard
              user={user}
              stats={userStats}
              onLogIn={handleLogIn}
              onDelete={handleDeleteUser}
            />
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="name" className={styles.label}>
                To continue, please, enter your name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Username"
                className={styles.input}
                value={form.name}
                onChange={handleChange}
              />
              <Button
                type="submit"
                disabled={isUserCreating}
                className={styles.submitButton}
              >
                Continue
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
