import { FocusEvent } from 'react'

import { useUpdateTag } from 'src/features/tag/update-tag'
import { ITag } from 'src/shared/api'
import { useForm } from 'src/shared/lib'

interface ITagForm {
  tag: ITag
  onSubmit: () => void
}

export function TagForm(props: ITagForm) {
  const { tag, onSubmit } = props

  const { form, handleChange } = useForm(tag)
  const { handleUpdateTag } = useUpdateTag()

  const handleFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    event.target.select()
  }

  const handleSubmit = () => {
    handleUpdateTag(form)
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        autoFocus
        value={form.name}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleSubmit}
      />
    </form>
  )
}
