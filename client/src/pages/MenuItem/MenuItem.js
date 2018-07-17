import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Container from "../../components/Container";
import LongCard from "../../components/LongCard";
import "./menuItem.css";
import API from "../../utils/API";
import MDSpinner from "react-md-spinner";

class MenuItem extends Component {
    state = {
        restName: "Restaurant Name",
        restaurantId: "",
        itemName: "Item Name",
        rating:"",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        pic: "http://placehold.it/550x250",
        reviews: []
        /*  reviews: [
            {
                id: 1,
                img: "http://placehold.it/100x100",
                name: "Lindsey H.",
                description: "This dish is my absolute favorite! I always get it when I'm here; it's my go to dish. I would recommend it to anyone!",
                rating: "5/5"
            },
            {
                _id: 2,
                img: "http://placehold.it/100x100",
                name: "Mike P.",
                description: "I don't really get the hype of this dish, but it's not bad.",
                rating: "3/5"
            },
            {
                id: 3,
                img: "http://placehold.it/100x100",
                name: "Chad C.",
                description: "Maybe I got a bad serving of it but I don't understand how this has such good reviews. Terrible. Would not get again!",
                rating: "1/5"
            }
        ]  */
    };

    componentDidMount() {
        let menuId = this.props.match.params.menuId;
        let restId = this.props.match.params.id;
        this.setState({ restaurantId: restId });
        API.getAllComments(menuId)
            .then(response => {
                console.log("data received " + response.data);
                this.setState({
                    reviews: response.data.comments,
                    itemName: response.data.dishName,
                    description: response.data.description,
                    rating:response.data.rating
                });

            }).catch(err => console.log(err));
    }

    goToRestPage = (event) => {
        event.preventDefault();
        const restId = this.state.restaurantId;
        console.log("restaurantId" + restId);
        this.props.history.push("/restaurant/" + restId);

    }

    render() {
        if(!this.state.reviews.length){
			return <MDSpinner className="spinner" size={75}/>
		}
        return (
            <div id="menuItemPage">
                <div className="menuJumbo">
                    <h1 id="restName">{this.state.restName}</h1>
                    <h1 className="itemName">{this.state.itemName}</h1>
                </div>

                <Container>
                    <div className="half">
                        <p className="title">Details</p>
                        <img src={this.state.pic} alt="top item" />
                        <p id="topdesc">{this.state.description}</p>
                        <p id="avgRating">Average Rating : {this.state.rating}</p>
                    </div>

                    <div className="half">
                        {this.state.reviews.length ? (
                            <div id="reviewbox">
                                <div className="title">Reviews</div>
                                {this.state.reviews.map(review => (
                                    <LongCard
                                        name={review.user}
                                        img="http://placehold.it/100x100"
                                        description={review.description}
                                        rating={review.rating}
                                        key={review._id}
                                    />
                                ))}
                            </div>
                        ) : (<div className="title">No Reviews Yet</div>
                            )}
                    </div>

                    <div id="restDirect">
                        <div className="modalButtons">
                            <Link to="/restaurant/:id">
                                <button className="resButton" onClick={this.goToRestPage.bind(this)}>Go to Restaurant Page</button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        );
    };
};

export default MenuItem;