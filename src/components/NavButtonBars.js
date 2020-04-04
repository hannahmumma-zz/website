import React from "react";
import styled, { ThemeProvider } from "styled-components";

class NavButtonBars extends React.Component {

	render() {
		const Span = styled.span`
			&.bar {
			  background: #D9D5DF;
			  border-radius: 2px;
			  display: block;
			  height: 3px;
			  margin: 1px 0;
			  transition: 0.4s;			  
			  width: 20px;
			}
		`,

		bars = [1,2,3],
		eachBar = bars.map((bar, i) =>
			<Span className="bar" key={i}></Span>
		);

		return (
			eachBar
		);
	}
}

export default NavButtonBars;
