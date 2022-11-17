import { apiService, IUser } from 'src/shared/api'
import { USERS_KEY } from 'src/shared/config'
import { createUid } from 'src/shared/lib'

export function getAllUsers() {
  return apiService.get<IUser>(USERS_KEY)
}

export async function getUser(id: string) {
  const users = await apiService.get<IUser>(USERS_KEY)
  const foundedUser = users.find((user) => user.id === id)

  if (foundedUser) {
    return foundedUser
  }
  return null
}

export async function addUser(name: string) {
  const id = createUid()
  const user: IUser = { id, name }

  const existingUsers = await apiService.get<IUser>(USERS_KEY)
  const users = [...existingUsers, user]

  await apiService.save(USERS_KEY, users)

  return users
}

export async function updateUser(updatedUser: IUser) {
  const users = await apiService.get<IUser>(USERS_KEY)
  const updatedUsers = users.map((user) => {
    if (user.id === updatedUser.id) {
      return updatedUser
    }
    return user
  })

  await apiService.save(USERS_KEY, updatedUsers)

  return updatedUsers
}

export async function deleteUser(deletedUser: IUser) {
  const users = await apiService.get<IUser>(USERS_KEY)
  const updatedUsers = users.filter((user) => user.id !== deletedUser.id)

  await apiService.save(USERS_KEY, updatedUsers)

  return updatedUsers
}
