import { useMemo } from 'react'

const textCharLimit = 375

export function useShortText(text: string) {
  const shortText = useMemo(() => {
    if (text.length < textCharLimit) {
      return text
    }
    return `${text.split('').splice(0, textCharLimit).join('')}...`
  }, [text])

  return { text: shortText }
}
