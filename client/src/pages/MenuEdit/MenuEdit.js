import React, { Component } from "react";
import Container from "../../components/Container";
import "./menuEdit.css";

class MenuEdit extends Component {
    state = {
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
        ],
        types: ["Appetizer", "Breakfast", "Lunch", "Dinner", "Drink", "Kids"]
    };

    render() {
        return (
            <Container>
                <div className="half">
                    <h3 className="title">Restaurant Name</h3>

                    <h3 className="title">Menu Items</h3>

                    <form className="form">
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

                        <select>
                            <option value="">Type...</option>
                            {this.state.types.map(type => (
                                <option value={type}>{type}</option>
                            ))}
                        </select>

                        <div id="price">
                            <span>$</span>
                            <input
                                id="priceInput"
                                name="price"
                                placeholder="Price (required)"
                                value={this.state.price}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div id="addDone">
                            <button id="addItem">Add Item</button>
                            <button id="done">I'm Done</button>
                        </div>
                    </form>
                </div>

                <div className="half">
                    <h3 className="title">Added Items</h3>

                    {this.state.menuItems.length ? (
                        <div id="addedMenu">
                            {this.state.menuItems.map(item => (
                                <div>
                                    <div className="menuButtons">
                                        <span className="delete">✗</span>
                                        <button className="edit">Edit</button>
                                    </div>
                                    <div className="menuItems">
                                        ${item.price} {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                            <h3>Add some menu items!</h3>
                        )}
                </div>
            </Container >
        )
    }
};

export default MenuEdit;