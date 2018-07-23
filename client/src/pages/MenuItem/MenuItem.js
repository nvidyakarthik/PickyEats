import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Container from "../../components/Container";
import LongCard from "../../components/LongCard";
import Rating from "react-rating";
import Popup from "reactjs-popup";
import "./menuItem.css";
import API from "../../utils/API";
//import MDSpinner from "react-md-spinner";

class MenuItem extends Component {
    state = {
        restName: "Restaurant Name",
        restaurantId: "",
        itemName: "Item Name",
        rating: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        pic: "http://placehold.it/550x250",
        reviews: [],
        newRating: "",
        newReview: "",
        newReviewerName: "",
        open:false
    };

    componentDidMount() {
        let menuId = this.props.match.params.menuId;
        let restId = this.props.match.params.id;
        this.setState({ restaurantId: restId ,
        restName:localStorage.getItem('restName')});
        API.getAllComments(menuId)
            .then(response => {
                console.log("data received " + response.data);
                this.setState({
                    reviews: response.data.comments,
                    itemName: response.data.dishName,
                    description: response.data.description,
                    rating: response.data.rating,
                    pic:response.data.imgpath
                });

            }).catch(err => console.log(err));
    }

    goToRestPage = (event) => {
        event.preventDefault();
        const restId = this.state.restaurantId;
        console.log("restaurantId" + restId);
        this.props.history.push("/restaurant/" + restId);

    }

    change = (event) => {
        this.setState({
            newRating: event
        });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleRateIt = (event) => {
        event.preventDefault();
        let menuId = this.props.match.params.menuId;
        let commentData = {
            description: this.state.newReview,
            rating: this.state.newRating,
            user: this.state.newReviewerName
        }
        console.log("props"+this.props.modal);
        API.saveComment(commentData, menuId).then(response => {
            console.log(response.data);
            API.updateAvgRating(menuId).then(res => {
                console.log("averaRating rating created" + res.data);
                commentData.rating=res.data.rating;
                this.setState({ reviews: [...this.state.reviews, commentData] });
                
                this.setState({rating:res.data.rating});
            }).catch(err => console.log(err));
            this.closeModal();
        }).catch(err => console.log(err));
    }

    openModal = () => {
        this.setState({ open: true });
      };
      closeModal = () => {
        this.setState({ open: false });
      };

    

    render() {
        /* if(!this.state.reviews.length){
			return <MDSpinner className="spinner" size={75}/>
		} */
        return (
            <div id="menuItemPage">
                <div className="menuJumbo">
                    <h1 id="restName">{this.state.restName}</h1>
                    <h1 className="itemName">{this.state.itemName}</h1>
                </div>

                <Container>
                    <div className="half">
                        <p className="title">Details</p>
                        <img src={this.state.pic===""?"http://placehold.it/100x100":this.state.pic} alt="top item" />
                        <p className="topdesc">{this.state.description}</p>
                        <p className="topdesc">Average Rating:
                            <Rating
                                stop="5"
                                initialRating={this.state.rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            />
                        </p>

                        <div id="desButtons">
                            <Link to="/restaurant/:id">
                                <button className="resButton" onClick={this.goToRestPage.bind(this)}>Go to Restaurant Page</button>
                            </Link>
                            <button className="resButton yourself" id={this.props.match.params.menuId} onClick={this.openModal}>Rate it Yourself</button>
                            <Popup
                                open={this.state.open}
                                closeOnDocumentClick
                                onClose={this.closeModal}
                                 >
                                <div className="modal">
                                    <div>
                                        <div className="modalTitle">{this.state.itemName}</div>
                                        <div className="modalContent">
                                            <input
                                                name="newReviewerName"
                                                placeholder="Name (required)"
                                                className="modalSection"
                                                value={this.state.newReviewerName}
                                                onChange={this.handleInputChange.bind(this)}
                                            />
                                            <textarea id={"review" + this.props.match.params.menuId}
                                                name="newReview"
                                                value={this.state.newReview}
                                                className="modalSection modalReview"
                                                placeholder="Your review..."
                                                onChange={this.handleInputChange.bind(this)}
                                            />
                                            <div className="modalSection modalDiv">Your rating:
                                            <Rating
                                                    id={"rating" + this.props.match.params.menuId}
                                                    stop="5"
                                                    initialRating={this.state.newRating}
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star"
                                                    onChange={(rate) => this.change(rate)}
                                                />
                                            </div>
                                        </div>
                                        <div className="modalButtons">
                                            <button className="modalButton" onClick={this.closeModal}>Cancel</button>
                                            <button className="modalButton"  onClick={this.handleRateIt.bind(this)}>Submit</button>
                                        </div>
                                    </div>
           
                                </div>
                            </Popup>

                        </div>
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

                </Container>
            </div>
        );
    };
};

export default MenuItem;