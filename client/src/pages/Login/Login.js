import React, { Component } from "react";
import Container from "../../components/Container";
import "./login.css";

class Login extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPass: "",
        resOwner: false
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <Container>
                <div className="half">
                    <h3 className="title">Sign Up</h3>

                    <form>
                        <input
                            name="firstName"
                            placeholder="First Name (required)"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                        />
                        <input
                            name="lastName"
                            placeholder="Last Name (required)"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                        />
                        <input
                            name="userName"
                            placeholder="Username (required)"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                        <input
                            name="password"
                            placeholder="Password (required)"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <input
                            name="confirmPass"
                            placeholder="Confirm Password (required)"
                            value={this.state.confirmPass}
                            onChange={this.handleInputChange}
                        />
                        <button id="createAcc">Create Account</button>
                    </form>
                </div>

                <div className="half">
                    <h3 className="title">Sign In</h3>

                    <input
                        name="userName"
                        placeholder="Username (required)"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <input
                        name="password"
                        placeholder="Password (required)"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <button id="signIn">Sign In</button>
                </div>
            </Container>
        )
    }
};

export default Login;