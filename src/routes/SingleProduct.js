import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const StyledDiv = styled.section`
  h1 {
    font-size: 10rem;
  }
`

const SingleProduct = () => {
  return (
    <StyledDiv>
      <h1>Hello from single product</h1>
    </StyledDiv>
  )
}

export default SingleProduct
