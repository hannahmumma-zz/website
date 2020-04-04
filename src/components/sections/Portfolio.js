import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Config from "../../config/index";
import GitHubIcon from "../icons/github";
import ExternalIcon from "../icons/external";


class Portfolio extends React.Component {

	render() {

		const Projects = styled.div`
			@media (min-width: 768px) {
				display: flex;
			}
		`,

		Project = styled.div`
			background: #D9D5DF;
			border-radius: 8px;
			color: #1D0235;
			display: flex;
			flex-direction: column;
			margin-bottom: 20px;
			padding: 20px;
			p {
				flex-grow: 1;
			}
			@media (min-width: 768px) {
				transition: .5s;
				width: 50%;				
				&:hover {
	  			opacity: 1;					
	  			transform: scale(1.05);
				}				
				&:not(:last-of-type) {
					margin-right: 10px;
				}
			}	
		`,

		ProjectLinks = styled.div`
			display: flex;
			justify-content: flex-end;
			a {
				display: flex;
				justify-content: flex-end;
				svg {
					fill: #1D0235;					
					height: auto;
					width: 20px;
					@media (min-width: 768px) {
						fill: #808080;					
						&:hover {
							fill: #1D0235;
						}						
					}
				}
			}
			.github:not(:last-of-type) {
				margin-right: 5px;
			}
		`,

		portfolio = Config.portfolio_section.projects,

		projectData = portfolio.map((project, i) =>

			<Project className="project" key={i} data-project={project.name}>
				<h4>{project.name}</h4>
				{project.stack ? <p>{project.stack}</p> : null}
				{project.features ? <p>{project.features}</p> : null}

				<ProjectLinks className="project-links">
					{project.repo !== "" ? <a className="github" href={project.repo} target="_blank" aria-label="Link to GitHub Repo"><GitHubIcon /></a> : ""}
					{project.url !== "" ? <a className="external" href={project.url} target="_blank" aria-label="Link to site URL"><ExternalIcon /></a> : ""}
				</ProjectLinks>

			</Project>

		);

		return (

			<section id="portfolio">
				<h3>Projects</h3>			
				<Projects className="projects">
					{projectData}
				</Projects>
			</section>

		);

	}
}

export default Portfolio;