import axios from "axios";
const CLIENT_ID = "O4WVQMWM1DLCR0UR3ON3JGHVEF0INOC35VUQQOAMV22SS1LU";
const CLIENT_SECRET="PKLEHEUJA3BSZENQWRSY4X5TWPMQLXQ4JT3W1TPFMCWJ1EIR";

export default {
  // Gets all restaurant info from public api foursquare
  getRestaurants: function(location) {
    location=85297;
    return axios.get("/api/restaurant/venuesearch", { params:
   { 
      client_id: CLIENT_ID,
      client_secret:CLIENT_SECRET,
      v:20180705,
      near:location,
      radius:6000,
      categoryId:'4bf58dd8d48988d142941735',
      limit:10
      } 
    });
  },
  //get all categories name
  getCategories: function() {
    return axios.get("/api/restaurant/categories");
  },

  //search restaurant by name/lists all menus here
  getRestaurantById: function(id) {
    return axios.get("/api/restaurant/"+id);
  },
   //search restaurant by category name
   getRestaurantByCategory: function(categoryId) {
    return axios.get("/api/restaurant/listbycategory/"+categoryId);
  },
  //search restaurant by name and city
  getRestByNameCity: function(formData) {
    console.log("in api");
    return axios.post("/api/restaurant/listbyname/city",formData);
  },
  //get restaurant by rating order
   getRestaurantByRating: function() {
    return axios.get("/api/restaurant/rating");
  },
  //lists all restaurant by owner name
  getRestaurantByOwner: function(id) {
    return axios.get("/api/restaurant/listbyowner/"+id);
  },
  // signup page Saves the user to the database
  signUpUser: function(userData) {
    return axios.post("/auth/signup", userData);
  },
  //login page checks email and password
  signInUser:function(userData){
    return axios.post("/auth/login",userData);
  },
  //sign out for the app
  signOut:function(){
    return axios.get("/auth/logout");
  },
  getUserInfo:function(){
    return axios.get("/auth/user");
  },
  //create new restaurant without menus
  saveRestaurant: function(restaurantData) {
    return axios.post("/api/restaurant/saverest", restaurantData);
  },
  //update restaurant with menus
  upadateRestaurant: function(restId,menuData) {
    return axios.put("/api/restaurant/updaterest/"+restId, menuData);
  },
  //update restaurant with new menu ids after delete
  upadateRestMenuIds: function(restId,menuData) {
    return axios.put("/api/restaurant/updaterestmenus/"+restId, menuData);
  },
 /*  //user login info
  getUser:function(){
    return axios.get("/api/user")
  },*/
  //get comments for a particular menu Item
  getAllComments:function(menuId){
    return axios.get("/api/menu/comment/"+menuId);
  }, 
  saveComment:function(commentData,restId){
    return axios.post("/api/menu/comment/"+restId, commentData);
  },
  //search restaurant by category name
  updateAvgRating: function(menuId) {
    return axios.get("/api/menu/avgrating/"+menuId);
  },
  //saves each menu item
  saveMenuItem:function(menuData,restId){
    return axios.post("/api/menu/save/"+restId,menuData);
  },
  editMenuItem:function(menuData,menuId){
    return axios.put("/api/menu/edit/"+menuId,menuData);
  },
  //get comments for a particular menu Item
  getAllMenus:function(restId){
    return axios.get("/api/menu/read/"+restId);
  },
  //delete menu item
  removeMenuItem:function(menuId){
    return axios.delete("/api/menu/delete/"+menuId);

  }

};
