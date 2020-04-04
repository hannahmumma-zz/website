import React from "react";
import Config from "../../config/index";


class Contact extends React.Component {
	
	render() {
		return (
			<section id="contact">
				<h3>Contact</h3>
				<p>{Config.contact_section}</p>
			</section>
		);
	}

}

export default Contact;