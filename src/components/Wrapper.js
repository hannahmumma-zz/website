import React from 'react';

import styled, { ThemeProvider } from "styled-components";
import Header from './elements/Header';
import Main from './elements/Main';
import Footer from './elements/Footer';

class Wrapper extends React.Component {

  render() {

  	const GridContainer = styled.div`
			display: grid;
			grid-template-columns: 20px 1fr 1fr 20px;
  	`;
  	
    return (
      <GridContainer className="container grid">
        <Header />
        <Main />
        <Footer />        
      </GridContainer>
    );
  }
}

export default Wrapper;      