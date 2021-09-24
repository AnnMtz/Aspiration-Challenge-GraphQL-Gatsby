import React from 'react';
import { css } from '@emotion/react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;

  @media(min-width: 768px) {
    min-width: 768px
  }
`;

const Nav = () => {
    return ( 
        <NavStyled>
            <Link 
                to={'/'}
                css={`
                color: #FFFFFF;
                font-size: 1.6rem;
                font-weight: 700;
                line-height: 1rem;
                font-family: 'Roboto', serif;
                text-decoration: none;
                text-transform: uppercase;
                padding: 1rem;
                margin-right: 1rem;
                `}
            >
              Home
            </Link>
            <Link 
                to={'/main'}
                css={`
                color: #FFFFFF;
                font-size: 1.6rem;
                font-weight: 700;
                line-height: 1rem;
                font-family: 'Roboto', serif;
                text-decoration: none;
                text-transform: uppercase;
                padding: 1rem;
                margin-right: 1rem;
                `}
            >
              Topics
            </Link>
        </NavStyled>
     );
}
 
export default Nav;