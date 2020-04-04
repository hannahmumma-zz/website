import React from "react";
import NavButtonBars from "../NavButtonBars";

import styled, { ThemeProvider } from "styled-components";

class Button extends React.Component {
	render() {
		const OpenMenu = styled.button`
			background: transparent;
			border: none;
			cursor: pointer;
			display: flex;
			flex-direction: column;
			grid-column: 3;
			padding: 5px;
			@media (min-width: 768px) {
				display: none;
			}
			&[aria-expanded="true"] span {
				&:first-of-type {
					transform: rotate(-45deg) translate(-2px, 3px);
				}
				&:nth-of-type(2) {
					opacity: 0;
				}
				&:last-of-type {
					transform: rotate(45deg) translate(-4px, -5px);
				}
			}
		`;

		return (
			<OpenMenu
				className="btn"
				onClick={this.props.navButtonClick}
				aria-expanded={this.props.expanded}
			>
				{this.props.name !== "navButton" ? this.props.name : <NavButtonBars />}
			</OpenMenu>
		);
	}
}

export default Button;
