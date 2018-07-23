import React, { Component } from "react";
import Container from "../../components/Container";
import SmallCard from "../../components/SmallCard";
import "./resSearch.css";
import API from "../../utils/API";
//import MDSpinner from "react-md-spinner";

class ResSearch extends Component {
	state = {
		restaurantType: "",
		restaurants: []
	};
	
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
		/* if(!this.state.restaurants.length){
			return <MDSpinner className="spinner" size={100}/>
		} */
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
								img={restaurant.imgpath===""?"http://placehold.it/100x100":restaurant.imgpath}
								info={restaurant.street + " " + restaurant.city+" "+restaurant.zip+" Phone: "+restaurant.phone}
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