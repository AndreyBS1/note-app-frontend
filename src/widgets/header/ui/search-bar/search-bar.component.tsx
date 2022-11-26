import styles from './search-bar.module.scss'

import searchIcon from 'assets/search.svg'
import { ChangeEvent } from 'react'

export interface ISearchBar {
  query: string
  onQueryChange: (query: string) => void
}

export function SearchBar(props: ISearchBar) {
  const { query, onQueryChange } = props

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    onQueryChange(value)
  }

  return (
    <form className={styles.form}>
      <button type="submit" className={styles.submitButton}>
        <img src={searchIcon} alt="search" />
      </button>
      <input
        type="text"
        placeholder="Search"
        className={styles.input}
        value={query}
        onChange={handleChange}
      />
    </form>
  )
}
