import { IUser } from 'src/shared/api'
import { createUid, useForm } from 'src/shared/lib'

const initialFormState: IUser = {
  id: createUid(),
  name: '',
}

export function useUserForm() {
  const { form, handleChange } = useForm(initialFormState)

  return { form, handleChange }
}
