import React, { Component } from "react";
import Container from "../../components/Container";
import LongCard from "../../components/LongCard";
import "./menuItem.css";

class MenuItem extends Component {
    state = {
        restName: "Restaurant Name",
        itemName: "Item Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
                    <h1 id="restName">{this.state.restName}</h1>
                    <h1 className="itemName">{this.state.itemName}</h1>
                </div>

                <Container>
                    <div className="half">
                        <p className="title">Details</p>
                        <img src={this.state.pic} alt="top item" />
                        <p id="topdesc">{this.state.description}</p>
                    </div>

                    <div className="half">
                        <div className="title">Reviews</div>
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