import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProgressProvider } from './context/ProgressContext'
import LandingPage from './pages/LandingPage'
import DashboardLayout from './components/DashboardLayout'
import ArticlePage from './pages/ArticlePage'

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<ArticlePage articleId="intro" />} />
            <Route path="article/:articleId" element={<ArticlePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  )
}

export default App
