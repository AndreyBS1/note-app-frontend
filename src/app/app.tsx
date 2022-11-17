import { Route, Routes } from 'react-router-dom'

import { AuthPage } from 'src/pages/auth'
import { MainPage } from 'src/pages/main'
import { NotePage } from 'src/pages/note'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/note/:id" element={<NotePage />} />
    </Routes>
  )
}
