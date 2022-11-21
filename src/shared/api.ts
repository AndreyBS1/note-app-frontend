import { wait } from './lib'

export type IUser = {
  id: string
  name: string
}

export type INote = {
  id: string
  title: string
  text: string
  tags: ITag[]
  createdAt: number
}

export type ITag = {
  id: string
  name: string
  notes: INote[]
}

export const apiService = {
  /**
   * Returns array of items from local storage
   */
  get: async <T>(localStorageKey: string): Promise<T | null> => {
    const source = localStorage.getItem(localStorageKey)
    await wait()
    if (source) {
      return JSON.parse(source)
    }
    return null
  },

  /**
   * Sets array of items in local storage
   */
  save: async <T>(localStorageKey: string, item: T): Promise<void> => {
    localStorage.setItem(localStorageKey, JSON.stringify(item))
    await wait()
  },

  /**
   * Remove array of items from local storage
   */
  clear: async (localStorageKey: string): Promise<void> => {
    localStorage.removeItem(localStorageKey)
    await wait()
  },
}
