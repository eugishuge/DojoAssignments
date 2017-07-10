const users = require('./../controllers/users.js');
module.exports = function (app) {

	app.post('/users', (req,res)=>{
		console.log('made it to Routes')
		users.create(req,res);
	});

	app.post('/question', (req, res)=>{
		console.log("routes- new question")
		users.create_q(req, res)
	})

	app.all("*", (req, res) => {
		res.redirect("/");
	})

};
