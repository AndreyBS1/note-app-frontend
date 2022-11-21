import { ChangeEvent, FormEvent, useState } from 'react'
import { ITag } from 'src/shared/api'
import { createUid } from 'src/shared/lib'

import styles from './add-tag-form.module.scss'

const initialFormState: ITag = {
  id: createUid(),
  name: '',
  notes: [],
}

interface IAddTagForm {
  isAutoFocus: boolean
  onBlur: () => void
  onSubmit: () => void
}

export function AddTagForm(props: IAddTagForm) {
  const { isAutoFocus, onBlur, onSubmit } = props

  const [form, setForm] = useState(initialFormState)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter tag name"
        className={styles.input}
        autoFocus={isAutoFocus}
        onBlur={onBlur}
        onChange={handleChange}
      />
    </form>
  )
}
