import { useEffect, useState } from 'react'

import { INote } from 'src/shared/api'

import { filterNotesBySearchQuery, highlightTextPart } from '../lib'

let timeout: any = null

export function useFilterBySearch(notes: INote[]) {
  const [filteredNotes, setFilteredNotes] = useState(notes)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (notes.length === 0) {
      return
    }
    if (!searchQuery) {
      setFilteredNotes(notes)
      return
    }
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      const updatedFilteredNotes = filterNotesBySearchQuery(notes, searchQuery)
      const highlightedNotes = updatedFilteredNotes.map((note) => {
        const highlightedTitle = highlightTextPart(note.title, searchQuery)
        const highlightedText = highlightTextPart(note.text, searchQuery)
        return { ...note, title: highlightedTitle, text: highlightedText }
      })
      setFilteredNotes(highlightedNotes)
    }, 500)
  }, [searchQuery, notes])

  return { notesFilteredBySearch: filteredNotes, searchQuery, setSearchQuery }
}
