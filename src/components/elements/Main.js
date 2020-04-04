import React from 'react';

import styled, { ThemeProvider } from "styled-components";
import Intro from '../sections/Intro';
import About from '../sections/About';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';

class Main extends React.Component {

	render() {

		const MainStyle = styled.main`
			grid-column: 2/4;
		`;
		return (
			<MainStyle className="main">
				<Intro />
				<About />
				<Portfolio />
				<Contact />
			</MainStyle>
		);
	}
}

export default Main;