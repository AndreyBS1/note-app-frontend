import { useStore } from 'effector-react'
import { NoteModel } from 'src/entities/note'

import { useForm } from 'src/shared/lib'

export function useNoteForm() {
  const note = useStore(NoteModel.$selectedNote)
  const { form, handleChange } = useForm(note)

  return { form, handleChange }
}
