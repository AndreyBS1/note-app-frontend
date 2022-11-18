import { useStore } from 'effector-react'
import { NoteModel } from 'src/entities/note'
import { INote } from 'src/shared/api'

import { createUid, useForm } from 'src/shared/lib'

export function useNoteForm() {
  const note = useStore(NoteModel.$selectedNote)

  const initialFormState: INote = note
    ? { ...note }
    : {
        id: createUid(),
        title: '',
        text: '',
        tagIds: [],
        createdAt: new Date().getTime(),
      }

  const { form, handleChange } = useForm(initialFormState)

  return { form, handleChange }
}
