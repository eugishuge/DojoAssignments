const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	create: function (req, res){
		console.log("inside controller - adding to db")
		console.log(req.body)
		var user = new User(req.body)
		user.save((err, user) =>{
			console.log("user now into db")
			if (err){res.json(err)}
			else{
				res.json(user)
			}
		})
	}
}
