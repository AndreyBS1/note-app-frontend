import { useEffect, useState } from 'react'
import { INote, ITag } from 'src/shared/api'

export function useFilteredNotes(notes: INote[]) {
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
      let isNoteMatchSelectedTags = true
      const updatedFilteredNotes = notes.filter((note) => {
        selectedTags.forEach((selectedTag) => {
          if (!isNoteMatchSelectedTags) {
            return
          }
          isNoteMatchSelectedTags = note.tags.some(
            (tag) => tag.id === selectedTag.id
          )
        })
        if (isNoteMatchSelectedTags) {
          return note
        }
      })
      setFilteredNotes(updatedFilteredNotes)
    }
  }, [selectedTags])

  return { filteredNotes, selectedTags, handleTagSelect }
}
