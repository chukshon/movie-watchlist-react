import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import './lib/font-awesome/css/all.min.css'
import Add from './pages/Add'
import WatchList from './pages/WatchList'
import Watched from './pages/Watched'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<WatchList />} />
        <Route path='/add' element={<Add />} />
        <Route path='/watched' element={<Watched />} />
      </Routes>
    </Router>
  )
}

export default App
