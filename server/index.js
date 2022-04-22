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
	const username = req.body.username;
	const password = req.body.password;
	db.query(
		"INSERT INTO user (FName, LName, Email, Phone, Username, Password) values (?,?,?,?,?,?)",
		[username, password],
		(err, result) => {
			console.log(err);
		}
	);
});

app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM user", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

app.get("/api/getFromId/:id", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM user WHERE User_ID = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

app.post("/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	db.query(
		"SELECT * from user where Username = ? and Password = ?",
		[username, password],
		(err, result) => {
			if (err) {
				res.send({err: err})
				console.log("error");
			}
			if (result && result.length > 0) {
				res.send(result);
				console.log(result);
			}
			else {
				res.send({message: "Wrong details"});
				console.log("Wrong details");
			}
		}
	);
});

app.listen(3001, () => {
	console.log("running server");
})