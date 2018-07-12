import React, { Component } from "react";
import Container from "../../components/Container";
import "./menuEdit.css";
import API from "../../utils/API";

class MenuEdit extends Component {
    state = {
        dishName: "",
        description: "",
        price: "",
        menutype:"",
        menuItems:[],
        ids:[],
        /* menuItems: [
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
        ], */
        types: ["Appetizer", "Breakfast", "Lunch", "Dinner", "Drink", "Kids"]
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    addMenuItem=(event)=>{
        event.preventDefault();
        console.log("params id"+this.props.match.params.id);
        const restaurantId=this.props.match.params.id;
         const menuItemData={
            dishName:this.state.dishName,
            description:this.state.description,
            price:this.state.price,
            menutype:this.state.menutype
        }        
        API.saveMenuItem(menuItemData,restaurantId).then(response => {
            this.setState({ids:[...this.state.ids, response.data._id]});
            this.setState({ menuItems: [...this.state.menuItems, response.data]});          
			
		}).catch(err => console.log(err)); 
    }

    handleSubmit=(event)=>{
        
        event.preventDefault();
        const restaurantId=this.props.match.params.id;
        console.log("inside submit");
        this.state.ids.map(data =>console.log(data));
        const menuIds={menus:this.state.ids};
        
        API.upadateRestaurant(restaurantId,menuIds).then(response => {
            console.log("Response from submit"+response.data);
            this.props.history.push("/restaurant/"+restaurantId);           
			
		}).catch(err => console.log(err));
		
    }

    change=(event)=> {             
        const selectedValue= event.target.value;
        this.setState({
            menutype: selectedValue
        });
    }

    render() {
        return (
            <Container>
                <div className="half">
                    <h3 className="title">Restaurant Name</h3>

                    <h3 className="title">Menu Items</h3>

                    <form className="form" onSubmit={this.handleSubmit.bind(this)}>
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

                        <select value={this.state.menutype} onChange={ e => this.change(e) }>
                            <option value="">Type...</option>
                            {this.state.types.map(type => (
                                <option key={type} value={type}>{type}</option>
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
                            <button id="addItem" onClick={this.addMenuItem.bind(this)}>Add Item</button>
                            <button id="done" type="submit">I'm Done</button>
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
                                        ${item.price} {item.dishName} Type:{item.menutype}
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