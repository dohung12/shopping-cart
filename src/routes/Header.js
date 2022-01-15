import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import styled from 'styled-components'

const StyleNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.5rem;
`

const StyledNavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  li {
    list-style: none;
  }

  li:hover {
    border-bottom: 2px solid var(--primary-500);
  }

  a {
    text-decoration: none;
    letter-spacing: var(--letterSpacing);
  }
`

const Header = () => {
  return (
    <React.Fragment>
      <StyleNav>
        <Link to='/'>
          <h1>Logo</h1>
        </Link>
        <StyledNavLinks>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </StyledNavLinks>
      </StyleNav>

      <Outlet />
    </React.Fragment>
  )
}

export default Header
