import React from 'react';
import { Link } from 'react-router-dom'
import "./nav.css";

const Nav = props => {
	if (props.loggedIn) {
		return (
			
				<ul className="nav">
					<li>
						<Link to="/" id="logo" className="active">
							Picky Eats
						</Link>
						
					</li>
					<li>
						<a href="#">{props.user.firstName}</a>
					</li>
					<li>
						<Link to="/logout" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
				</ul>
			
		);
	} else {
		return (
			
				<ul className="nav">
					<li>
						<Link to="/" className="active" id="logo">
							Picky Eats
						</Link> 
					</li>
					<li>
						<Link to="/login">
							login
						</Link>
					</li>
					<li>
						<Link to="/signup">
							sign up
						</Link>
					</li>
				</ul>
			
		);
	}
}
export default Nav;