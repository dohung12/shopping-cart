import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  img {
    height: 500px;
  }
`

const Home = () => {
  return (
    <section className='section'>
      <StyledDiv>
        <div>
          <h1>Welcome to our stores</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex
            eius similique reiciendis eligendi! Fugit cumque qui quaerat soluta
            distinctio, totam mollitia ad? Ratione iste eligendi quae cumque
            voluptas ipsa quia, inventore, perspiciatis cum illum mollitia
            magnam suscipit, eius maxime quis eum. Adipisci aliquid optio sunt
            aut alias quos similique.
          </p>
          <Link to='/products' className='btn'>
            Shop now
          </Link>
        </div>
        <img
          src='https://images.pexels.com/photos/9721883/pexels-photo-9721883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='a woman in white suit'
          className='img'
        />
      </StyledDiv>
    </section>
  )
}

export default Home
