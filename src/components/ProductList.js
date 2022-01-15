import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Loading from '../routes/Loading'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'
const url = 'https://fakestoreapi.com/products'

const StyledProductList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 270px));
  gap: 2rem 1.5rem;
`

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    return () => {}
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <StyledProductList>
      {products.map((product) => {
        const { image, id, title, price } = product

        return (
          <Link to={`/products/${id}`} key={id}>
            <ProductItem image={image} title={title} price={price} />
          </Link>
        )
      })}
    </StyledProductList>
  )
}

export default ProductList
