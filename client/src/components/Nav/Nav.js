import React from 'react';
import { Link } from 'react-router-dom'
import "./nav.css";

const Nav = props => {
	if (props.loggedIn) {
		return (
			
				<ul id="nav">
					<li>
						<Link to="/" id="logo" className="active">
							Picky Eats
						</Link>
					</li>
					<li className="user">
						<Link to="/logout" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
					<li className="user">
						<a href="#">{props.user.firstName}</a>
					</li>
				</ul>
			
		);
	} else {
		return (
			
				<ul id="nav">
					<li>
						<Link to="/" className="active" id="logo">
							Picky Eats
						</Link> 
					</li>
					<li className="user">
						<Link to="/signup">
							Sign up
						</Link>
					</li>
					<li className="user">
						<Link to="/login">
							Login
						</Link>
					</li>
				</ul>
			
		);
	}
}
export default Nav;