import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./Menu";

class Footer extends React.Component {
  render() {
    const FooterStyle = styled.footer`
      grid-column: 2/4;
      justify-content: flex-start;
    `;

    return (
      <FooterStyle className="footer">
        <Menu parentItem={this} />
      </FooterStyle>
    );
  }
}

export default Footer;