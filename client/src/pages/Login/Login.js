import React, { Component } from "react";
import Container from "../../components/Container";
import "./login.css";
import API from "../../utils/API";
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor() {
		super()
		this.state = {
			email: "",
            password: "" ,
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	};
    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit=(event)=>{
        
        event.preventDefault();
        this.props._login(this.state.email, this.state.password)
		this.setState({
			redirectTo: '/'
		});
		
    }

    render() {
        if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
        return (
            <Container>
                
                <div className="half">
                    <h3 className="title">Sign In</h3>

                    <input
                        name="email"
                        placeholder="Email (required)"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <input
                        name="password"
                        placeholder="Password (required)"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <button id="signIn" onClick={this.handleSubmit}>Sign In</button>
                </div>
            </Container>
        )
    }
}
};

export default Login;