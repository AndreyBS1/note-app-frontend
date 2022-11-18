import { IUser } from 'src/shared/api'
import { createUid, useForm } from 'src/shared/lib'

export function useUserForm() {
  const initialFormState: IUser = {
    id: createUid(),
    name: '',
  }

  const { form, handleChange } = useForm(initialFormState)

  return { form, handleChange }
}
