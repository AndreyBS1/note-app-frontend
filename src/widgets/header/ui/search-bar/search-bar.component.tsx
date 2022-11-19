import styles from './search-bar.module.scss'

import searchIcon from 'assets/search.svg'

interface ISearchBar {
  onSearch: () => void
}

export function SearchBar(props: ISearchBar) {
  const { onSearch } = props

  const handleSubmit = (event: any) => {
    event.preventDefault()
    onSearch()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button type="submit" className={styles.submitButton}>
        <img src={searchIcon} alt="search" />
      </button>
      <input type="text" placeholder="Search" className={styles.input} />
    </form>
  )
}
