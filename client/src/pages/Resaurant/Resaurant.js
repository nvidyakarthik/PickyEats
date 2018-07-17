import React, { Component } from "react";
import Popup from "reactjs-popup";
import Container from "../../components/Container";
import LongCard from "../../components/LongCard";
import "./restaurant.css";
import API from "../../utils/API";
import MDSpinner from "react-md-spinner";

class Restaurant extends Component {

    state = {
        restaurantName: "",
        review: "",
        rating: "",
        userId: "",
        reviewerName:"",
        menus:[],
        /* menus: [
            {
                id: 1,
                img: "http://placehold.it/100x100",
                dishName: "Burrito",
                description: "Sooo yummy. I got the beef burrito, and I'm usually very picky about burritos and this one satisfied me completely!",
                price: "5.99",
                rating: "5/5"
            },
            {
                id: 2,
                img: "http://placehold.it/100x100",
                dishName: "Lasagna",
                description: "I could have used more sauce, but it's not bad.",
                price: "15.99",
                rating: "3/5"
            },
            {
                id: 3,
                img: "http://placehold.it/100x100",
                dishName: "Chow Mein",
                description: "Ugh, not good at all. It was dry, flavorless, and made me sick after. Do not get.",
                price: "7.96",
                rating: "1/5"
            }
        ] */
    };

    componentDidMount() {
        const restaurantId = this.props.match.params.id;
        API.getRestaurantById(restaurantId).then(response => {
            console.log(response.data)
            this.setState({
                restaurantName: response.data.restaurantName,
                menus: response.data.menus
            });
        }).catch(err => console.log(err));

    };

    linkToMenuItem = (menuId) => {
        const restaurantId = this.props.match.params.id;
        console.log("menuId" + menuId);
        this.props.history.push("/menuitem/" + restaurantId + "/" + menuId);
    }
    
    change = (event) => {
        const selectedValue = event.target.value;
        this.setState({
            rating: selectedValue
        });
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleRateIt = (event) => {
        event.preventDefault();
        let menuId = event.target.value;
        let restaurantId = this.props.match.params.id;
        console.log("menuId" + event.target.value);
        console.log("review" + this.state.review);
        console.log("rating" + this.state.rating);
        console.log("name"+this.state.reviewerName);
        let commentData = {
            description: this.state.review,
            rating: this.state.rating,
            user:this.state.reviewerName
            
        }
        API.saveComment(commentData, menuId).then(response => {
            console.log(response.data);
            API.updateAvgRating(menuId).then(res => {
                console.log("averaRating rating created"+res.data);
            }).catch(err=>console.log(err));
            this.props.history.push("/menuitem/" + restaurantId + "/" + menuId);
        }).catch(err => console.log(err));
    }

    render() {
        if(!this.state.menus.length){
			return <MDSpinner className="spinner" size={100}/>
		}
        return (
            <div id="restaurantPage">
                <div className="restJumbotron">
                    <h1 id="restName">{this.state.restaurantName}</h1>
                </div>

                <div id="menu" className="title">Menu</div>
                {this.state.menus.map(item => (
                    <Container>
                        <LongCard
                            img="http://placehold.it/100x100"
                            key={item._id}
                            id={item._id}
                            name={item.dishName}
                            description={item.description}
                            price={"$" + item.price}
                            rating={item.rating}
                        />

                        <Popup
                            trigger={<button className="rateIt" id={item._id}>Rate it!</button>}
                            modal
                            closeOnDocumentClick>
                            {close => (
                                <div>
                                    <div className="modalTitle">{item.dishName}</div>
                                    <div className="modalContent">
                                        <input
                                            name="reviewerName"
                                            placeholder="Name (required)"
                                            className="modalSection"
                                            value={this.state.reviewerName}
                                            onChange={this.handleInputChange.bind(this)}
                                        />
                                        <textarea id={"review" + item._id}
                                            name="review"
                                            value={this.state.review}
                                            className="modalSection modalReview"
                                            placeholder="Your review..."
                                            onChange={this.handleInputChange.bind(this)}
                                        />
                                        <div className="modalSection modalDiv">Your rating:</div>
                                        <select id={"rating" + item._id} value={this.state.rating} onChange={e => this.change(e)} className="modalSection ratingSelect">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <div className="modalButtons">
                                        <button className="modalButton" onClick={() => { close() }}>Cancel</button>
                                        <button className="modalButton" value={item._id} onClick={this.handleRateIt.bind(this)}>Submit</button>
                                    </div>
                                </div>
                            )}
                        </Popup>

                        <button className="linkToMenuItem" onClick={() => this.linkToMenuItem(item._id)}>More Reviews</button>

                    </Container>
                ))}

                <div id="popupContainer"></div>


            </div>
        );
    };
};

export default Restaurant;