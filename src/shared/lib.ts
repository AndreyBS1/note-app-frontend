import { ChangeEvent, useState } from 'react'

/**
 * Creates random timeout between 0 and 1500 milliseconds
 */
export function wait(): Promise<void> {
  const timeout = Math.random() * 1500
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

/**
 * Creates unique id string from current date
 */
export function createUid(): string {
  return new Date().getTime().toString()
}

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
