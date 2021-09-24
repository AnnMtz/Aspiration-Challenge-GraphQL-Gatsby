import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header/header';

const Layout = (props) => {
    return ( 
        <>
            <Helmet>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>
                <title>ASPIRATION CHALLENGE</title>
            </Helmet>
            <Header />
            {props.children}
        </>
     );
}
 
export default Layout;