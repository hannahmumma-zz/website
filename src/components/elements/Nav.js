import React from "react";
import Button from "./Button";
import Menu from "./Menu";
import styled, { ThemeProvider } from "styled-components";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

    this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(state => ({
      showMenu: !state.showMenu,
      isMobile: window.innerWidth < 768
    }));
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobile: window.innerWidth < 768
        });
      },
      false
    );
  }

  render() {
    const Nav = styled.nav`
      display: grid;
      grid-template-columns: 20px 1fr 1fr 20px;
      justify-items: end;
    `;

    return (
      <Nav className="top-navbar">
        <Button
          name={"navButton"}
          navButtonClick={() => this.toggleMenu()}
          expanded={this.state.showMenu ? "true" : "false"}
        />
        <Menu
          parentItem={this}
          toggleClass={this.state.showMenu && this.state.isMobile ? "open" : ""}
        />
      </Nav>
    );
  }
}

export default Nav;