import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Nav from "./Nav";

class Header extends React.Component {
  render() {
    const Header = styled.header`
      display: grid;
      grid-column: 1/5;
      padding: 20px 0;
      a {
        grid-column: 2;
      }
    `;

    return (
      <Header className="header">
        <Nav />
      </Header>
    );
  }
}

export default Header;