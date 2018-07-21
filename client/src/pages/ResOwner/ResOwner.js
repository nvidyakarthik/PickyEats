import React, { Component } from "react";
import Container from "../../components/Container";
import "./resowner.css";
import API from "../../utils/API";
import { withRouter } from "react-router-dom";

class ResOwner extends Component {
    state = {
        restName: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        phone: "Phone Number (required)",
        categoryId:"",
        //categories: ["Chinese", "Mexican", "Korean", "American", "Steakhouse", "Italian", "Seafood", "Breakfast", "Pizza", "Burger", "Thai", "Japanese", "Vietnamese", "Sandwiches", "Sushi Bar"],
        categories:[],
        selectedFile:""
    };

    handleInputChange = e => {
        console.log(e.target.name);
        
        switch (e.target.name) {
            case 'selectedFile':
              this.setState({ selectedFile: e.target.files[0] });
              break;
            default:
              this.setState({ [e.target.name]: e.target.value });
          }
    };
    
    componentDidMount() {
		API.getCategories().then(response => {
			console.log(response.data)
			this.setState({
				categories:response.data
			  });
		}).catch(err => console.log(err));
		
    }
    
    handleSubmit=(event)=>{       
      event.preventDefault();
      console.log("imgname"+this.state.selectedFile);
      let formData = new FormData();
      formData.append('restaurantName', this.state.restName);
      formData.append('street', this.state.street);
      formData.append('city', this.state.city);
      formData.append('state', this.state.state);
      formData.append('zip', this.state.zip);
      formData.append('phone', this.state.phone);
      formData.append('imgpath', this.state.selectedFile);
      formData.append('category', this.state.categoryId);
        API.saveRestaurant(formData).then(response => {
            console.log("id of data"+response.data._id);
            this.props.history.push("/resowner/"+response.data._id);
			
		}).catch(err => console.log(err));
		 
    }

    change=(event)=> {        
        const selectedValue= event.target.value;
        console.log("categoryId"+selectedValue);
        this.setState({
            categoryId: selectedValue
        });
    }

    render() {
        return (
            <Container>
                <div className="middle">

                    <h3 className="title">Restaurant Information</h3>

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

                            <select id="addRestCategory" value={this.state.category} onChange={ e => this.change(e) }>
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
                                className="fileUpload"
                                type="file"
                                name="selectedFile"
                                onChange={this.handleInputChange}
                            />    
                            <button className="infoButton" type="submit" >Add Restaurant</button>
                        </form>
 
                        
                    </div>
                </div>
            </Container>
        )
    }
};
export default withRouter(ResOwner);
//export default ResOwner;