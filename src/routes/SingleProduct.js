import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading'
import { FaPlus, FaMinus } from 'react-icons/fa'
import AddToCart from '../components/AddToCart'

const StyledSection = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  img {
    width: 40vw;
  }
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 1rem;

  button {
    border: transparent;
    background: transparent;
    font-size: 1.5rem;
  }
`

const url = 'https://fakestoreapi.com/products/'

const SingleProduct = () => {
  const param = useParams()
  const id = param.id

  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch(url + id)
    const data = await response.json()
    setLoading(false)
    setProduct(data)
  }

  useEffect(() => {
    fetchData()
    return () => {}
  }, [])

  if (loading) {
    return <Loading />
  }

  const { description, image, price, title } = product

  return (
    <>
      <Link to='/products' className='btn'>
        Back to products
      </Link>
      <StyledSection>
        <div className='image-container'>
          <img src={image} alt={title} />
        </div>
        <StyledDiv>
          <h3>{title}</h3>
          <h5>${price}</h5>
          <p>{description}</p>

          <BtnContainer>
            <button
              onClick={() => {
                setQuantity(quantity - 1)
              }}
            >
              <FaMinus />
            </button>
            <h3>{quantity}</h3>
            <button>
              <FaPlus
                onClick={() => {
                  setQuantity(quantity + 1)
                }}
              />
            </button>
          </BtnContainer>

          <AddToCart id={id} quantity={quantity} />
        </StyledDiv>
      </StyledSection>
    </>
  )
}

export default SingleProduct
