import React, { Component } from "react";
import Container from "../../components/Container";
import SmallCard from "../../components/SmallCard";
import "./resSearch.css";

class ResSearch extends Component {
	state = {
		search: "Kind of restaurant",
		restaurants: [
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
		]
	}

	render() {
		return (
			<Container>
				<h1 className="title">{this.state.search}</h1>
				{this.state.restaurants.map(restaurant => (
					<SmallCard
						name={restaurant.name}
						img={restaurant.img}
						info={restaurant.info}
					/>
				))}
			</Container>
		)
	}
};

export default ResSearch;