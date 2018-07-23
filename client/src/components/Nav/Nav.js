import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

const Nav = props => {
	
	if (props.loggedIn) {
		const isResOwner=props.user.restaurantOwner;
		const userId=props.user._id;
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
					{isResOwner ?
						<li className="user">
							<Link to={"/dashboard/"+userId} className="nav-link">
								Dashboard
							</Link>
						</li> 
					 : ''}
					 <li className="user">
						<a href="#" onclick="return false;">Welcome {props.user.firstName}</a>
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