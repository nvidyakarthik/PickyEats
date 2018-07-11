import React, { Component } from "react";
import Container from "../../components/Container";
import LongCard from "../../components/LongCard";
import "./menuItem.css";

class MenuItem extends Component {
    state = {
        name: "Item Name",
        description: "Item Description",
        pic: "http://placehold.it/550x250",
        reviews: [
            {
                id: 1,
                img: "http://placehold.it/100x100",
                name: "Lindsey H.",
                description: "This dish is my absolute favorite! I always get it when I'm here; it's my go to dish. I would recommend it to anyone!",
                rating: "5/5"
            },
            {
                id: 2,
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
        ]
    };


    render() {
        return (
            <div id="menuItemPage">
                <div className="menuJumbo">
                    <div className="restaurantinfo">
                    <h1 id="restName">{this.state.name}</h1>
                    </div>
                </div>

                <Container>
                    <div id="topInfo">
                        <p id="topItem">Item Desc</p>
                        <img src="http://via.placeholder.com/550x250" alt="top item" />

                        <p id="topdisc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    </div>

                    <div className="half">
                        <div id="reviewTitle" className="title">Reviews</div>
                        {this.state.reviews.map(review => (
                            <LongCard
                                name={review.name}
                                img={review.img}
                                description={review.description}
                                rating={review.rating}
                            />
                        ))}
                    </div>

                    <div id="restDirect">
                        <div className="modalButtons">


                            <button className="resButton">Go to Restaurant Page</button>

                        </div>
                    </div>
                </Container>
            </div>
        );
    };
};

export default MenuItem;