import './app.scss'

import { Route, Routes } from 'react-router-dom'

import { AuthPage } from 'src/pages/auth'
import { MainPage } from 'src/pages/main'
import { NotePage } from 'src/pages/note'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/note/:id" element={<NotePage />} />
    </Routes>
  )
}
