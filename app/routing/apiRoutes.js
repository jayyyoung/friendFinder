var opponentData = require("../data/opponents.js");
var path = require("path");

module.exports = function(app){
	app.get("/api/opponents", function(req, res){
		res.json(opponentData);
	});

	app.post("/api/opponents", function(res, req){
		opponentData.push(req.body);
	});
};