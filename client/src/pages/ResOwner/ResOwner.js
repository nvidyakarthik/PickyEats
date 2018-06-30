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
        price: "",
        menuItems: [
            {
                name: "Burrito",
                description: "good stuff",
                price: "5.99"
            },
            {
                name: "Lasagna",
                price: "15.99"
            },
            {
                name: "Chow Mein",
                price: "7.96"
            }
        ]
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
                    <h3 className="title">Restaurant Information</h3>

                    <form>
                        <input
                            name="restName"
                            placeholder="Restaurant Name (required)"
                            value={this.state.restName}
                            onChange={this.handleInputChange}
                        />
                        <input
                            name="address"
                            placeholder="Restaurant Address (required)"
                            value={this.state.address}
                            onChange={this.handleInputChange}
                        />
                        <select>
                            {this.state.categories.map(category => (
                                <option value={category}>{category}</option>
                            ))}
                        </select>
                    </form>

                    <h3 className="title">Menu Items</h3>

                    <form>
                        <input
                            name="dishName"
                            placeholder="Item Name (required)"
                            value={this.state.dishName}
                            onChange={this.handleInputChange}
                        />
                        <textarea
                            rows="5"
                            name="description"
                            placeholder="Description (optional)"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            className="textare"
                        />
                        <div id="price">
                            <span>$ </span>
                            <input
                                id="priceInput"
                                name="price"
                                placeholder="Price (required)"
                                value={this.state.price}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <p></p>
                        <button id="addItem">Add Item</button>
                        <button id="done">I'm Done</button>
                    </form>
                </div>

                <div className="half">
                    <h3 className="title">Added Items</h3>

                    {this.state.menuItems.length ? (
                        <div>
                            {this.state.menuItems.map(item => (
                                <div>
                                    <div className="menuItems">
                                        ${item.price} {item.name}
                                    </div>
                                    <div className="menuButtons">
                                        <button className="edit">Edit</button>
                                        <span className="delete">✗</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                            <h3>Add some menu items!</h3>
                        )}
                </div>
            </Container>
        )
    }
};

export default ResOwner;