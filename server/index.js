const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const mysql = require("mysql");
const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",	
	database: "games_depository"
});

app.post("/register", (req, res) => {
	const fname = req.body.fname;
	const lname = req.body.lname;
	const email = req.body.email;
	const phone = req.body.phone;
	const username = req.body.username;
	const password = req.body.password;
	db.query(
		"INSERT INTO user (fname, lname, email, phone, username, password) values (?,?,?,?,?,?)",
		[fname, lname, email, phone, username, password],
		(err, result) => {
			if (err) {
				res.send({err: err})
			}
			res.send(result);
		}
	);
});

app.get("/api/get", (req,res)=>{
	db.query("SELECT * FROM user", (err,result)=>{
    	if(err) {
    		console.log(err)
    	} 
		res.send(result)
	});   
});

app.get("/api/getFromId/:id", (req,res)=>{
	const id = req.params.id;
 	db.query("SELECT * FROM user WHERE User_ID = ?", id, 
 	(err,result)=>{
    	if(err) {
    		console.log(err)
    	} 
    	res.send(result)
    });   
});

app.post("/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	db.query(
		"SELECT * from user where Username = ? and Password = ?",
		[username, password],
		(err, result) => {
			if (err) {
				res.send({err: err})
			}
			if (result.length > 0) {
				res.send(result);
			}
			else {
				res.send({message: "Invalid login details. Please try again"});
			}
		}
	);
});

app.listen(3001, () => {
	console.log("running server");
})