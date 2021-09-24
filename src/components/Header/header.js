import React from 'react';
import { css } from '@emotion/react';
import Nav from '../Nav/nav';


const Header = () => {
    return ( 
        <header>
            <div css={`display: flex; justify-content: space-evenly; width: 100%; padding: 3rem 0;     background-color: lightslategrey;`}>
                <h1 css={`color: darkmagenta; ont-size: 3em;`}>GITHUB GRAPHQL</h1>
                <Nav />
            </div>
        </header>
     );
}
 
export default Header;