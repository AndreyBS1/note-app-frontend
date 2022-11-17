import { createEffect, createEvent, sample } from 'effector'
import { useStore } from 'effector-react'
import { ChangeEvent } from 'react'
import { NoteModel } from 'src/entities/note'

import { createUid } from 'src/shared/lib'

type IFormField = {
  key: string
  value: string
}

const setFieldEv = createEvent<IFormField>()

const $form = NoteModel.$selectedNote.map((state) => {
  if (state) {
    return state
  }
  return {
    id: createUid(),
    title: '',
    text: '',
    tagIds: [],
    authorId: 'userId',
    createdAt: new Date().getTime(),
  }
})
$form.on(setFieldEv, (state, { key, value }: IFormField) => ({
  ...state,
  [key]: value,
}))

type InputChangeEvent = ChangeEvent<HTMLInputElement>

const handleSetField = setFieldEv.prepend<InputChangeEvent>((event) => ({
  key: event.target.name,
  value: event.target.value,
}))

const sendFormFx = createEffect((params: any) => {
  console.log(params)
})

sample({
  clock: setFieldEv,
  source: $form,
  target: sendFormFx,
})

export function useForm() {
  const form = useStore($form)

  let timeout: any = null
  const handleChange = (event: any) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      handleSetField(event)
    }, 2000)
  }

  return { form, handleChange }
}
