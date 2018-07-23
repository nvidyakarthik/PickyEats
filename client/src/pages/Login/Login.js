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
            redirectTo: null,
            error:""
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
        if(this.state.email!=="" && this.state.password!==""){
        API.signInUser({
            email: this.state.email,
            password: this.state.password
          })
            .then(response => {
             if (response.status === 200) {
                // update the state
                console.log("response.data"+response.data);
                this.props._login(true,response.data.user); 
                this.setState({
                    redirectTo: '/'                    
                });               
              }             
            }).catch(err => {
                console.log(err.response.data);
                this.setState({
                    error:err.response.data.message
                });
                
            });
        }
        else{
            this.setState({error:"Please enter all Fields"});
        }
    }

    render() {
        if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
        return (
            <Container>
                <div className="middle">
                    <h3 className="title">Login</h3>
                    {this.state.error!==""?(
                            <p className="error">{this.state.error}</p>
                        ):""}
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
                    <button id="signIn" className="infoButton" onClick={this.handleSubmit}>Sign In</button>
                </div>
            </Container>
        )
    }
}
};

export default Login;