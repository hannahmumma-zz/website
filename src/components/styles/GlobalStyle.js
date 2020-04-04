import React from "react";  	
import { createGlobalStyle } from "styled-components";

	const GlobalStyle = createGlobalStyle`

  	html {
			overflow-x: hidden;
			overflow-y: auto;
			width: 100%;  		
  	}

  	body {
	  	background: ${props => props.theme.colors.darkPurple};
			color: ${props => props.theme.colors.lightPurple};
			font-family: ${props => props.theme.fontFamilies.bodyFont};
			margin: 0;
  	}
  	h1 {
	  	font-family: ${props => props.theme.fontFamilies.headingFont};
			color: ${props => props.theme.colors.lightPurple};
			font-size: ${props => props.theme.fontSizes.h1};
  	}
  	h2 {
	  	font-family: ${props => props.theme.fontFamilies.bodyFont};
			color: ${props => props.theme.colors.lightPurple};
			font-size: ${props => props.theme.fontSizes.h2};	  		
  	}
  	h3 {
			font-family: ${props => props.theme.fontFamilies.headingFont};
			font-size: ${props => props.theme.fontSizes.h3};
  	}

		a {
			color: ${props => props.theme.colors.lightPurple};
			text-decoration: none;
			&:hover {
				color: ${props => props.theme.colors.lavender};
			}
			&.btn {
				@media (min-width: 768px) {
				  background-color: transparent;
				  background-image: radial-gradient(${props => props.theme.colors.lightPurple} 20%, transparent 20%),
				  radial-gradient(${props => props.theme.colors.lightPurple} 20%, transparent 20%);
				  background-position: 0 0, 50px 50px;
				  background-size: 32px 32px;

					border: 2px solid ${props => props.theme.colors.lightPurple};
					border-radius: 10px;
					cursor: pointer;
					font-family: ${props => props.theme.fontFamilies.bodyFont};
					font-size: 1em;
					padding: 8px 15px;

					&:hover {
						border-color: ${props => props.theme.colors.lavender};
						color: ${props => props.theme.colors.lavender};
					}
				}
			}
		}
	`;

	export default GlobalStyle;