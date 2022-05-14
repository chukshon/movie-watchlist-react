import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import Header from './components/Header'
import Watched from './components/Watched'
import WatchList from './components/WatchList'
import './App.css'
import './lib/font-awesome/css/all.min.css'

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
