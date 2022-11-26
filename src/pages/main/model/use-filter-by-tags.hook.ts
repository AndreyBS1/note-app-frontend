import { useEffect, useState } from 'react'

import { INote, ITag } from 'src/shared/api'

import { filterNotesByTags } from '../lib'

export function useFilterByTags(notes: INote[]) {
  const [filteredNotes, setFilteredNotes] = useState(notes)
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

  useEffect(() => {
    if (notes.length === 0) {
      return
    }
    if (selectedTags.length === 0) {
      setFilteredNotes(notes)
    } else {
      const updatedFilteredNotes = filterNotesByTags(notes, selectedTags)
      setFilteredNotes(updatedFilteredNotes)
    }
  }, [selectedTags, notes])

  return { notesFilteredByTags: filteredNotes, selectedTags, handleTagSelect }
}
