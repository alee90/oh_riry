//REQUIREMENTS
var express = require("express");
var app = express();
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser")
var methodOverride = require("method-override");
var cookieParser = require("cookie-parser");
// var db = process.env.MONGODB_URI || "mongodb://localhost/lily_dev";
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/lily_dev';

var port = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride(function(req, res){
  	if (req.body && typeof req.body === "object" && "_method" in req.body) {
	    var method = req.body._method;
	    delete req.body._method;
	    return method;
	  }
}));

//DATABASE
// mongoose.connect(db);
mongoose.connect(mongoUri);


//CONTROLLERS

var users = require("./controllers/users.js");
app.use("/users", users);

var auth = require("./controllers/auth.js");
app.use("/auth", auth);
x	
var lily = require("./controllers/lily.js");
app.use("/lily", lily);

var giphy = require("./controllers/giphy.js");
app.use("/giphy", giphy);


//PORT
app.listen(port);
console.log("------------------------------");
console.log("PORT IS ON: " + port);
console.log("------------------------------");

