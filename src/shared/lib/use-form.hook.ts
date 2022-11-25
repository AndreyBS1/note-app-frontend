import { ChangeEvent, useState } from 'react'

type IChangeEvent =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>

export function useForm<T>(initialFormState: T) {
  const [form, setForm] = useState(initialFormState)

  const handleChange = (event: IChangeEvent) => {
    const { name, value } = event.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return { form, setForm, handleChange }
}
