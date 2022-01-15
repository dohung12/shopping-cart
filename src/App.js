import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './routes/Header'
import Home from './routes/Home'
import Products from './routes/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
