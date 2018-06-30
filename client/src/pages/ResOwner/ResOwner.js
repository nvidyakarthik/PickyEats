import React, { Component } from "react";
import Container from "../../components/Container";
import "./resowner.css";

class ResOwner extends Component {
    state = {
        restName: "",
        address: "",
        categories: ["Mexican", "Italian", "Asian"],
        dishName: "",
        description: "",
        price: ""
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
                    <h3>Restaurant Information</h3>
                    
                    <form>
                        <input
                            name="restName"
                            placeholder="Restaurant Name (required)"
                            value={this.state.restName}
                            onChange={this.handleInputChange}
                            className="input"
                        />
                        <input
                            name="address"
                            placeholder="Restaurant Address (required)"
                            value={this.state.address}
                            onChange={this.handleInputChange}
                            className="input"
                        />
                        <select>
                            {this.state.categories.map(category => (
                                <option value={category}>{category}</option>
                            ))}
                        </select>
                    </form>

                    <h3>Menu Items</h3>

                    <form>
                        <input
                            name="dishName"
                            placeholder="Item Name (required)"
                            value={this.state.dishName}
                            onChange={this.handleInputChange}
                            className="input"
                        />
                        <textarea
                            rows="5"
                            name="description"
                            placeholder="Description (optional)"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            className="textare"
                        />
                        <input
                            name="price"
                            placeholder="Price (required)"
                            value={this.state.price}
                            onChange={this.handleInputChange}
                            className="input"
                        />
                        <p></p>
                        <button id="addItem">Add Item</button>
                        <button id="done">I'm Done</button>
                    </form>
                </div>

                <div className="half">
                    <h3>Added Items</h3>

                    <div id="menu">Item 1</div>
                </div>
            </Container>
        )
    }
};

export default ResOwner;