import React, { Component } from "react";
import Container from "../../components/Container";
import Longcard from "../../components/LongCard";
import "./resowner.css";
import API from "../../utils/API";
import { withRouter } from "react-router-dom";
import LongCard from "../../components/LongCard/LongCard";

class ResOwner extends Component {
    state = {
        restName: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        categoryId: "",
        categories: [],
        restaurants: [],
        selectedFile: ""
    };

    handleInputChange = e => {
        console.log(e.target.name);

        this.setState({ [e.target.name]: e.target.value });

    };

    componentDidMount() {
        this.loadCategories();
        this.loadRestByOwner();
    }

    loadCategories = () => {
        API.getCategories().then(response => {
            console.log(response.data)
            this.setState({
                categories: response.data
            });
        }).catch(err => console.log(err));

    }

    loadRestByOwner = () => {
        const userId = this.props.match.params.id;
        API.getRestaurantByOwner(userId).then(response => {
            console.log(response.data)
            this.setState({
                restaurants: response.data
            });
        }).catch(err => console.log(err));
    }

    editMenu = (event) => {
        event.preventDefault();
        const restId = event.target.value;
        console.log(restId);
        this.props.history.push("/resowner/" + restId);

    }

    viewMenu = (event) => {
        event.preventDefault();
        const restId = event.target.value;
        console.log(restId);
        this.props.history.push("/restaurant/" + restId);

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("imgname" + this.state.selectedFile);
        const userId = this.props.match.params.id;
        console.log("userID:" + userId);
        let formData = {
            'restaurantName': this.state.restName,
            'personId': userId,
            'street': this.state.street,
            'city': this.state.city,
            'state': this.state.state,
            'zip': this.state.zip,
            'phone': this.state.phone,
            'imgpath': this.state.selectedFile,
            'category': this.state.categoryId
        }
        API.saveRestaurant(formData).then(response => {
            console.log("id of data" + response.data._id);
            this.props.history.push("/resowner/" + response.data._id);

        }).catch(err => console.log(err));

    }

    change = (event) => {
        const selectedValue = event.target.value;
        console.log("categoryId" + selectedValue);
        this.setState({
            categoryId: selectedValue
        });
    }

    render() {
        return (
            <Container>
                <div className="middle">
                    {this.state.restaurants.length ?
                        <div>
                            <h3 className="title">Your Restaurants</h3>
                            {this.state.restaurants.map(restaurant => (
                                <div>
                                    <Longcard
                                        key={restaurant._id}
                                        id={restaurant._id}
                                        name={restaurant.restaurantName}
                                        img={restaurant.imgpath === "" ? "http://placehold.it/100x100" : restaurant.imgpath}
                                        description={restaurant.street + ", " + restaurant.city + ", " + restaurant.zip}
                                        
                                    />

                                    <button className="resEdit" value={restaurant._id} onClick={this.editMenu.bind(this)}>Edit</button>
                                    <button className="resView" value={restaurant._id} onClick={this.viewMenu.bind(this)}>View</button>
                                </div>
                            ))}
                        </div>
                        :
                        <div></div>
                    }

                    <h3 className="title">Add a New Restaurant</h3>

                    <div className="form">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input
                                name="restName"
                                placeholder="Restaurant Name (required)"
                                value={this.state.restName}
                                onChange={this.handleInputChange}
                            />

                            <input
                                id="street"
                                name="street"
                                placeholder="Street Address (required)"
                                value={this.state.street}
                                onChange={this.handleInputChange}
                            />

                            <input
                                id="city"
                                name="city"
                                placeholder="City (required)"
                                value={this.state.city}
                                onChange={this.handleInputChange}
                            />

                            <input
                                id="state"
                                name="state"
                                placeholder="State (required)"
                                value={this.state.state}
                                onChange={this.handleInputChange}
                            />

                            <input
                                id="zip"
                                name="zip"
                                placeholder="Zip (required)"
                                value={this.state.zip}
                                onChange={this.handleInputChange}
                            />

                            <select id="addRestCategory" value={this.state.category} onChange={e => this.change(e)}>
                                <option value="0">Category (required)</option>
                                {this.state.categories.map(category => (
                                    <option key={category.id} value={category._id}>{category.categoryName}</option>
                                ))}
                            </select>

                            <input
                                id="phone"
                                name="phone"
                                placeholder="Phone Number (required)"
                                value={this.state.phone}
                                onChange={this.handleInputChange}
                            />

                            <input
                                id="restImg"
                                name="selectedFile"
                                placeholder="Image Link"
                                value={this.state.selectedFile}
                                onChange={this.handleInputChange}
                            />

                            <button className="infoButton" type="submit" onClick={() => this.handleSubmit}>Add Restaurant</button>
                        </form>


                    </div>
                </div>
            </Container>
        )
    }
};
export default withRouter(ResOwner);
//export default ResOwner;