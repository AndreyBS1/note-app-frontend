import { apiService, INote } from 'src/shared/api'
import { NOTES_KEY } from 'src/shared/config'

export function getNotes() {
  return apiService.get<INote>(NOTES_KEY)
}

export function saveNotes(notes: INote[]) {
  return apiService.save<INote>(NOTES_KEY, notes)
}

export function clearNotes() {
  return apiService.clear(NOTES_KEY)
}
