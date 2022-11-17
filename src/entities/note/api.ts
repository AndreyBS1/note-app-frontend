import { apiService, ICreateNote, INote } from 'src/shared/api'
import { NOTES_KEY } from 'src/shared/config'
import { createUid } from 'src/shared/lib'

export async function getAllNotes(userId: string) {
  const notes = await apiService.get<INote>(NOTES_KEY)
  const userNotes = notes.filter((note) => note.authorId === userId)
  return userNotes
}

export async function getNote(id: string) {
  const notes = await apiService.get<INote>(NOTES_KEY)
  const foundedNote = notes.find((note) => note.id === id)

  if (foundedNote) {
    return foundedNote
  }
  return null
}

export async function addNote(newNoteData: ICreateNote) {
  const id = createUid()
  const createdAt = new Date().getTime()

  const note: INote = { id, createdAt, ...newNoteData }

  const existingNotes = await apiService.get<INote>(NOTES_KEY)
  const notes = [...existingNotes, note]

  await apiService.save(NOTES_KEY, notes)

  return notes
}

export async function updateNote(updatedNote: INote) {
  const notes = await apiService.get<INote>(NOTES_KEY)
  const updatedNotes = notes.map((note) => {
    if (note.id === updatedNote.id) {
      return updatedNote
    }
    return note
  })

  await apiService.save(NOTES_KEY, updatedNotes)

  return updatedNotes
}

export async function deleteNote(deletedNote: INote) {
  const notes = await apiService.get<INote>(NOTES_KEY)
  const updatedNotes = notes.filter((note) => note.id !== deletedNote.id)

  await apiService.save(NOTES_KEY, updatedNotes)

  return updatedNotes
}
