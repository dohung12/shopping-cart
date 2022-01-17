import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './routes/Header'
import Home from './routes/Home'
import Products from './routes/Products'
import SingleProduct from './routes/SingleProduct'
import Error from './routes/Error'
import ProductList from './components/ProductList'
import Cart from './routes/Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}>
            <Route path='/products' element={<ProductList />}></Route>
            <Route path=':id' element={<SingleProduct />}></Route>
            <Route path='cart' element={<Cart />}></Route>
          </Route>
          <Route path='*' element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
