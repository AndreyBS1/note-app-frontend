import { apiService, IUser } from 'src/shared/api'
import { USERS_KEY } from 'src/shared/config'
import { createUid } from 'src/shared/lib'

export async function createUser(name: string) {
  const id = createUid()
  const user: IUser = { id, name }
  await apiService.save(USERS_KEY, user)
  return user
}

export function getUser() {
  return apiService.get<IUser>(USERS_KEY)
}

export async function updateUser(updatedUserName: string) {
  const user = await apiService.get<IUser>(USERS_KEY)
  if (user == null) {
    throw new Error('Seems like user does not exist')
  }
  const updatedUser: IUser = { ...user, name: updatedUserName }
  await apiService.save(USERS_KEY, updatedUser)
  return updatedUser
}

export async function deleteUser() {
  return apiService.clear(USERS_KEY)
}
