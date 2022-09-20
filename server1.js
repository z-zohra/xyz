// routing function 
// accepts 2 parameters

// trying to reach any url we use get
// post  sends data through body
// get is less secure but faster than post
// trying to send anything to server
const exp = require("express");
const app = exp();


//middleware function - always runs 
function test(req,res,next) {
    console.log("Hello user");
}

//http:localhost:3000/
app.get("/", function (req,res){
    res.send("Home Page");
}); 

//http:localhost:3000/about_us
app.get("/about_us", function (req, res){
      res.send("Aboutus");
});

//http:localhost:3000/products
app.get("/products", function (){

});
//http:localhost:3000/login
app.post("/login",function (req,res){

});


var port = process.env.PORT || 3001;
app.listen(port); // this function