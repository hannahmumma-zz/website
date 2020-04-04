import React from "react";
import Config from "../../config/index";
import ListItems from "./ListItem";
import styled, { ThemeProvider } from "styled-components";


class Menu extends React.Component {

	render() {

	const UnorderedList = styled.ul`
    align-items: center;
    display: none;
    grid-column: 3;
    list-style: none;
    margin: 0;
    padding: 0;
  	@media (min-width: 768px) {
  		display:flex;
  	}    
    li:not(:last-of-type) {
			margin-right: 20px;
		}
		&.open {
			display: grid;
		}
		`;
		
		let menuItems = this.props.parentItem._reactInternalFiber.elementType.name === "Nav" ? Config.navLinks : Config.footerLinks;

		return (

		  <UnorderedList className={`menu${this.props.toggleClass ? ` ${this.props.toggleClass}` : ""}`}>
	  		<ListItems items={menuItems} />
		  </UnorderedList>

		);
	}
}

export default Menu;

