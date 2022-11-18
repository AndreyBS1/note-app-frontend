import { createEvent, sample } from 'effector'
import { useEvent, useStore } from 'effector-react'
import { useEffect } from 'react'

import { UserModel } from 'src/entities/user'

const pageLoadEv = createEvent<void>()

sample({
  clock: pageLoadEv,
  target: UserModel.getUserFx,
})

const $isUserLoading = UserModel.getUserFx.pending

UserModel.$user.on(UserModel.getUserFx.doneData, (_, user) => user)

export function useUser() {
  const handlePageLoad = useEvent(pageLoadEv)

  useEffect(() => {
    handlePageLoad()
  }, [])

  const user = useStore(UserModel.$user)
  const isUsersLoading = useStore($isUserLoading)

  return { user, isUsersLoading }
}
