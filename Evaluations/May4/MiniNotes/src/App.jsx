import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}
