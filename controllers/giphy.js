//REQUIREMENTS
var express = require("express");
router = express.Router();
var giphy = require('giphy-api')();

//GIPHY
router.get("/", function(req, res){
  // console.log(req)
  // console.log(res)
  giphy.random("puppy", function(err, data) {                 //having giphy get a random cute animal gif. bc that's what life is all about.
    res.send(data)
  });
});

//EXPORTS
module.exports = router