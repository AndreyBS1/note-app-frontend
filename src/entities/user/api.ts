import { apiService, IUser } from 'src/shared/api'
import { USERS_KEY } from 'src/shared/config'

export function getUsers() {
  return apiService.get<IUser>(USERS_KEY)
}

export function saveUsers(users: IUser[]) {
  return apiService.save<IUser>(USERS_KEY, users)
}

export function clearUsers() {
  return apiService.clear(USERS_KEY)
}
