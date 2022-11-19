import { createEvent, createStore, sample } from 'effector'
import { useEvent, useStore } from 'effector-react'
import { useEffect } from 'react'
import { NoteModel } from 'src/entities/note'
import { TagModel } from 'src/entities/tag'

const pageLoadEv = createEvent<void>()

sample({
  clock: pageLoadEv,
  target: [NoteModel.getNotesFx, TagModel.getAllTagsFx],
})

const $isUserStatsLoading =
  NoteModel.getNotesFx.pending || TagModel.getAllTagsFx.pending

const $userStats = createStore({ notesAmount: 0, tagsAmount: 0 })
$userStats.on(NoteModel.getNotesFx.doneData, (state, notes) => ({
  ...state,
  notesAmount: notes.length,
}))
$userStats.on(TagModel.getAllTagsFx.doneData, (state, tags) => ({
  ...state,
  tagsAmount: tags.length,
}))

export function useUserStats() {
  const handlePageLoad = useEvent(pageLoadEv)

  useEffect(() => {
    handlePageLoad()
  }, [])

  const userStats = useStore($userStats)
  const isUserStatsLoading = useStore($isUserStatsLoading)

  return { userStats, isUserStatsLoading }
}
