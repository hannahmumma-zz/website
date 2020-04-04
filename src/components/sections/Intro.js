import React from 'react';
import { Link } from "react-router-dom";
import styled, { keyframes, ThemeProvider } from "styled-components";
import Config from "../../config/index";

class Intro extends React.Component {

	render() {
		const Intro = styled.section`
			position: relative;
			// &:before{
			// 	background: #D9D5DF;
			// 	border-radius: 50%;				
			// 	content: "";
			//   display: inline-block;
			//   height: 400px;
			//   position: absolute;
			//   right: 0;
			//   width: 400px;
			//   &:hover{
			//   	background: lavender;
			//   }
			// }
		`,

		animateHeart = keyframes`
			0% {
				margin-top: 1000px;
				opacity: .5;		
				transform: scale(0.5);
			}
			100% {
				margin-top: -100%;
				opacity: 1;
				transform: scale(0.5);
				pointer:cursor;
			}
		`,

		sideToSide = keyframes`
			0% {
				margin-left: 0px;
			}
			100% {
				margin-left: 50px;
			}
		`,

		animateSmallHeart = keyframes`
			0% {
				transform: scale(0.2);
			}
			50% {
				transform: scale(0.25);
			}
			100% {
				transform: scale(0.2);
			}
		`,
		
		Heart = styled.div`
			animation: ${animateHeart} 18s linear,
			${sideToSide} 2s ease-in-out 8 alternate;
			height: 90px;
			left: 150px;
			position: absolute;
			top: -42px;
			transform: scale(0.2);
			transition: 1s;
			width: 100px;
			z-index: 9999;
			&:before,
			&:after {
				background: #dc143c;
				border-radius: 50px 50px 0 0;
				content: "";
				height: 80px;
				left: 50px;	
				position: absolute;
				top: 0;
				transform: rotate(-45deg);
				transform-origin: 0 100%;
				width: 50px;
			}
			&:after {
				left: 0;
				transform: rotate(45deg);
				transform-origin: 100% 100%;
			}		
		`,

		SmallHeart = styled.div`
			&:hover {
				animation: ${animateSmallHeart} 2s linear infinite;				
			}
		`,

		H1 = styled.h1`
			display: inline-block;
			margin: 0;			
		`;

		return (
			<Intro id="intro">
		  	<Heart className="heart"></Heart>
		  	<SmallHeart className="small-heart"></SmallHeart>		  	
				<H1 className="site-title">
					<Link to="/">{Config.name.substring(0, 8)}</Link>
				</H1>
				<h2>{Config.title}</h2>
			</Intro>
		);
	}
}

export default Intro;