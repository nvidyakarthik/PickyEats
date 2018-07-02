import axios from "axios";
const APIKEY = "";

export default {
  // Gets all restaurant info from api
  /* getRestaurants: function(topic,startdate,enddate) {
    return axios.get("/api/restaurants" , { params:
   { 
      q: topic,
      begin_date:startdate+"0101",
      end_date:enddate+"0101",
      'api-key':APIKEY } 
    });
  },
  //get all categories name
  getCategories: function() {
    return axios.get("/api/categories");
  },
  //search restaurant by name/lists all menus here
  getRestaurantById: function(id) {
    return axios.get("/api/restaurants/"+id);
  },
   //search restaurant by category name
   getRestaurantByCategory: function(category) {
    return axios.get("/api/restaurants/"+category);
  },
   //search restaurant by category name
   getRestaurantByRating: function() {
    return axios.get("/api/restaurants/rating");
  }, */
    // Login page Saves the user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
  /* ,
  //user login info
  getUser:function(){
    return axios.get("/api/user")
  },
  getAllComments:function(restaurantId){
    return axios.get("/api/comments"+restaurantId);
  },
  saveComment:function(commentData){
    return axios.post("/api/comment", commentData);
  }  */
};
