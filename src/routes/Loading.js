import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  h1,
  h5 {
    text-align: center;
  }
  h1 {
    font-size: 10rem;
  }
`

const Loading = () => {
  return (
    <StyledSection className='section'>
      <h1>Loading data</h1>
      <h5>Product's data is being load</h5>
    </StyledSection>
  )
}

export default Loading
