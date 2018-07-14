import React, { Component } from "react";
import Container from "../../components/Container";
import SmallCard from "../../components/SmallCard";
import "./resSearch.css";
import API from "../../utils/API";

class ResSearch extends Component {
	state = {
		restaurantType: "",
		restaurants: []
		/* restaurants: [
			{
				img: "http://placehold.it/100x100",
				name: "Restaurant 1",
				info: "Restaurant 1 info",
			},
			{
				img: "http://placehold.it/100x100",
				name: "Restaurant 2",
				info: "Restaurant 2 info",
			},
			{
				img: "http://placehold.it/100x100",
				name: "Restaurant 3",
				info: "Restaurant 3 info",
			},
			{
				img: "http://placehold.it/100x100",
				name: "Restaurant 4",
				info: "Restaurant 4 info",
			},
			{
				img: "http://placehold.it/100x100",
				name: "Restaurant 5",
				info: "Restaurant 5 info",
			},
			{
				img: "http://placehold.it/100x100",
				name: "Restaurant 6",
				info: "Restaurant 6 info",
			},
		] */
	}
	 componentDidMount() {
		const categoryId = this.props.match.params.id;
		API.getRestaurantByCategory(categoryId).then(response => {
			console.log(response.data);
			if (response.data.length !== 0) {
				this.setState({
					restaurantType: response.data[0].category.categoryName,
					restaurants: response.data
				});
			}
			else {
				this.setState({
					restaurantType: "",
					restaurants: []
				})
			}
		}).catch(err => console.log(err));

	} 
	viewMenu = (restaurantId) => {
		this.props.history.push("/restaurant/" + restaurantId);
	}

	render() {
		return (
			<div>
				{this.state.restaurants.length ? (
					<Container>
						<h1 className="title">{this.state.restaurantType}</h1>
						{this.state.restaurants.map(restaurant => (

							<SmallCard
								key={restaurant._id}
								id={restaurant._id}
								name={restaurant.restaurantName}
								img="http://placehold.it/100x100"
								info={restaurant.street + " " + restaurant.city}
								onClick={this.viewMenu}
								linkTitle="Menu"

							/>
						))}
					</Container>

				) : (
						<Container>
							<h1 className="title">No restaurants available to display</h1>
						</Container>
					)}
			</div>
		)
	}
};

export default ResSearch;