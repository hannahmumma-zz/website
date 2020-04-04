import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {

	colors: {
		darkPurple: "#1D0235",
		lightPurple: "#D9D5DF",
		lavender: "#E6E6FA",
		crimson: "#dC143C",
		gray: "#808080",
	},

	fontFamilies: {
		bodyFont: `"Source Sans Pro", sans-serif`,
		headingFont: `"Alice", serif`,
	},
	
	fontSizes: {
		h1: "2.5em",
		h2: "1.8em",
		h3: "1.5em"
	}
	
}

const Theme = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;