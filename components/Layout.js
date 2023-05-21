import React from "react";
import Header from'./Header'
import Head from 'next/head'
import Script from 'next/script';
import { Container } from "semantic-ui-react";
     
const Layout = (props) => {
    return (
        <div>
            <Container>
                <Head>
            <link
    async
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
  />
  <Script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></Script>

  
  <Script src="like_button.js"></Script>
  </Head>
            <Header/>
        {props.children}
        </Container>
        </div>
    );
     

};
export default Layout;

