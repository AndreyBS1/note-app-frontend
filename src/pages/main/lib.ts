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
  const filteredNotes = notes.filter((note) => {
    const noteTagsIdsCode = note.tagsIds.join('-')
    const isNoteMatchSelectedTags = tags.every((tag) =>
      noteTagsIdsCode.includes(tag.id)
    )
    if (isNoteMatchSelectedTags) {
      return note
    }
  })
  return filteredNotes
}

export function highlightTextPart(text: string, textPart: string) {
  return text.replace(textPart, `<mark>${textPart}</mark>`)
}
