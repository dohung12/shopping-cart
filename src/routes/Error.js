import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;

  h1 {
    font-size: 5rem;
    text-align: center;
    padding-bottom: 4rem;
  }
`
const Error = () => {
  return (
    <StyledDiv className='section'>
      <h1>The page you're looking for can't be found</h1>
      <Link to='/' className='btn'>
        Back to homepage
      </Link>
    </StyledDiv>
  )
}

export default Error
