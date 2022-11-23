import { useEffect } from 'react'
import { INote } from 'src/shared/api'
import { useForm } from 'src/shared/lib'

const initialFormState: INote = {
  id: '',
  title: '',
  text: '',
  tags: [],
  createdAt: 0,
}

export function useNoteForm(note: INote | null) {
  const { form, setForm, handleChange } = useForm(initialFormState)

  useEffect(() => {
    if (note) {
      setForm(note)
    }
  }, [note])

  return { form, handleChange }
}
