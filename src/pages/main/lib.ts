import { INote, ITag } from 'src/shared/api'

export function filterNotesBySearchQuery(notes: INote[], query: string) {
  const filteredNotes = notes.filter((note) => {
    const noteContent = `${note.title} ${note.text}`
    const isNoteMatchSearch = noteContent.includes(query)
    if (isNoteMatchSearch) {
      return note
    }
  })
  return filteredNotes
}

export function filterNotesByTags(notes: INote[], tags: ITag[]) {
  let isNoteMatchSelectedTags = true
  const filteredNotes = notes.filter((note) => {
    tags.forEach((tag) => {
      if (!isNoteMatchSelectedTags) {
        return
      }
      isNoteMatchSelectedTags = note.tags.some(
        (noteTag) => noteTag.id === tag.id
      )
    })
    if (isNoteMatchSelectedTags) {
      return note
    }
  })
  return filteredNotes
}

export function highlightTextPart(text: string, textPart: string) {
  return text.replace(textPart, `<mark>${textPart}</mark>`)
}
