import { useMemo, useState } from 'react'

import { INote, ITag } from 'src/shared/api'

import { filterNotesByTags } from '../lib'

export function useFilterByTags(notes: INote[]) {
  const [selectedTags, setSelectedTags] = useState<ITag[]>([])

  const handleTagSelect = (selectedTag: ITag) => {
    const isTagSelected = selectedTags.some((tag) => tag.id === selectedTag.id)
    if (isTagSelected) {
      const updatedTags = selectedTags.filter(
        (tag) => tag.id !== selectedTag.id
      )
      setSelectedTags(updatedTags)
    } else {
      setSelectedTags((prev) => [...prev, selectedTag])
    }
  }

  const filteredNotes = useMemo<INote[]>(() => {
    if (notes.length === 0) {
      return []
    }
    if (selectedTags.length === 0) {
      return notes
    } else {
      const updatedFilteredNotes = filterNotesByTags(notes, selectedTags)
      return updatedFilteredNotes
    }
  }, [selectedTags, notes])

  return { notesFilteredByTags: filteredNotes, selectedTags, handleTagSelect }
}
