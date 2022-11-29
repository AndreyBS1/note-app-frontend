// type Substring = { startPosition: number; endPosition: number }

export function findTextBySearch(
  target: HTMLInputElement | HTMLTextAreaElement,
  searchQuery: string
) {
  // const { value } = target

  // const textToSelect: Substring[] = []

  // let searchPosition = 0
  // while (true) {
  //   let startPosition = value.indexOf(searchQuery, searchPosition)
  //   if (startPosition === -1) {
  //     break
  //   }
  //   const endPosition = startPosition + searchQuery.length
  //   textToSelect.push({ startPosition, endPosition })
  //   searchPosition = endPosition + 1
  // }

  // if (textToSelect.length === 0) {
  //   return
  // }

  // target.focus()

  // textToSelect.forEach((text) =>
  //   target.setSelectionRange(text.startPosition, text.endPosition)
  // )

  let startPosition = target.value.indexOf(searchQuery, 0)
  if (startPosition === -1) {
    return
  }
  const endPosition = startPosition + searchQuery.length

  target.focus()
  target.setSelectionRange(startPosition, endPosition)
}
