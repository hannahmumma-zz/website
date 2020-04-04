import React from "react";
import Config from "../../config/index";
// import ProfilePic from "./unnamed.jpg";

class About extends React.Component {

	render() {
		return (
			<section id="about">
				<div className="profile-pic">
					<img src="" alt="Profile Picture" title="Me." />
				</div>
				<div className="bio">
					<p>{Config.about_section}<span role="img" aria-label="cookie emoji">🍪</span></p>
				</div>
			</section>
		);
	}
}

export default About;

