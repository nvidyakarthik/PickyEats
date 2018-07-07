import React from "react";
import "./nav.css";

const Nav = () => (
	<div>
		<div className="navbar">
			<ul>
				<li><a href="#home">Login</a></li>
				<li><a className="active" id="logo" href="/">Picky Eats</a></li>
			</ul>
		</div>
	</div>
);

export default Nav;