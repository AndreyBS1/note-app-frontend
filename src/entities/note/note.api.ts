import { apiService, INote } from 'src/shared/api'
import { NOTES_KEY } from 'src/shared/config'

export async function getNotes(): Promise<INote[]> {
  const notes = await apiService.get<INote[]>(NOTES_KEY)
  if (notes == null) {
    return []
  }
  return notes
}

export async function createNote(newNote: INote): Promise<INote[]> {
  const notes = await apiService.get<INote[]>(NOTES_KEY)

  let newNotes: INote[] = []
  if (notes != null) {
    newNotes = [...notes]
  }
  newNotes.push(newNote)

  await apiService.save<INote[]>(NOTES_KEY, newNotes)

  return newNotes
}

export async function updateNote(updatedNote: INote): Promise<void> {
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
