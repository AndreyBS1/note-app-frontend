import { apiService, INote } from 'src/shared/api'
import { NOTES_KEY } from 'src/shared/config'

export async function getAllNotes(): Promise<INote[]> {
  const notes = await apiService.get<INote[]>(NOTES_KEY)
  if (notes == null) {
    return []
  }
  return notes
}

export async function getNote(noteId: string): Promise<INote> {
  const notes = await apiService.get<INote[]>(NOTES_KEY)
  if (notes == null) {
    throw new Error('Seems notes does not exist')
  }

  const foundedNote = notes.find((note) => note.id === noteId)
  if (foundedNote == null) {
    throw new Error('Seems like such note does not exist')
  }

  return foundedNote
}

export async function addNote(newNote: INote): Promise<INote[]> {
  const notes = await apiService.get<INote[]>(NOTES_KEY)

  const newNotes: INote[] = []
  if (notes != null) {
    newNotes.push(...newNotes)
  }
  newNotes.push(newNote)

  await apiService.save<INote[]>(NOTES_KEY, newNotes)
  return newNotes
}

export async function updateNote(updatedNote: INote): Promise<INote[]> {
  const notes = await apiService.get<INote[]>(NOTES_KEY)
  if (notes == null) {
    throw new Error('Seems notes does not exist')
  }

  const updatedNotes = notes.map((note) => {
    if (note.id === updatedNote.id) {
      return updatedNote
    }
    return note
  })

  await apiService.save(NOTES_KEY, updatedNotes)
  return updatedNotes
}

export async function deleteNote(noteId: string): Promise<INote[]> {
  const notes = await apiService.get<INote[]>(NOTES_KEY)
  if (notes == null) {
    throw new Error('Seems notes does not exist')
  }

  const updatedNotes = notes.filter((note) => note.id !== noteId)

  await apiService.save(NOTES_KEY, updatedNotes)
  return updatedNotes
}

export function clearNotes() {
  return apiService.clear(NOTES_KEY)
}
