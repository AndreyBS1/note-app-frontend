import { useState } from 'react'

export function useSidebar() {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev)
  }

  return { showSidebar, toggleSidebar }
}
