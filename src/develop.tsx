import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Counter from './components/Counter'


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter count={5} />} />
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
)
