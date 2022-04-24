var express = require('express');
var router = express.Router();
var sqlite = require("better-sqlite3");


/**
 * @openapi
 * /:
 *   get:
 *     description: No inputs required
 *     responses:
 *       200:
 *         description: Returns an object of games.
 */
router.get('/games', function(req, res, next) {
  var db = new sqlite('database.db');
  var games = db.prepare("SELECT * FROM games").all();
  res.json({ games:games })
});

/**
 * @openapi
 * /:
 *   post:
 *     description: 'Game required in the body of the request i.e. {"name": "Metal Gear", "release": 1987, "platform": "Nintendo", "rating": 3, "Notes": "Classic" }'
 *     responses:
 *       201:
 *         description: Returns a blank object.
 */
router.post('/games', function(req, res, next) {
  var db = new sqlite('database.db');
  db.prepare('INSERT INTO games (title, release, platform, rating, notes, img) VALUES (?,?,?,?,?,?)').run(req.body.name, req.body.release, req.body.platform, req.body.rating, req.body.notes, req.body.img);
  res.status(201).json({})
});


/**
 * @openapi
 * /:
 *   delete:
 *     description: 'Game ID required in the body of the request i.e. {"game_id": 1}'
 *     responses:
 *       204:
 *         description: Returns a blank object.
 */
router.delete('/games', function(req, res, next) {
  var db = new sqlite('database.db');
  console.log(req.body);
  db.prepare('DELETE FROM games where id = (?)').run(req.body.game_id);
  res.status(204).json({})
});

/**
 * @openapi
 * /:
 *   put:
 *     description: 'Game ID required in the body of the request i.e. {"name": "Metal Gear", "release": 1987, "platform": "Nintendo", "rating": 5, "Notes": "Classic"}'
 *     responses:
 *       204:
 *         description: Returns a blank object.
 */
router.patch('/games', function(req, res, next) {
  var db = new sqlite('database.db');
  console.log(req.body)
  if (req.body.notes) {
    db.prepare('UPDATE games SET notes = ? where id = (?)').run(req.body.notes, req.body.game_id);
  } else if (req.body.rating) {
    db.prepare('UPDATE games SET rating = ? where id = (?)').run(req.body.rating, req.body.game_id);
  }
  res.status(204).json({})
});


router.post('/users', function(req, res, next) {
  var db = new sqlite('database.db');
  db.prepare('INSERT INTO users (username, pass) VALUES (?,?)').run(req.body.username, req.body.password);
  res.status(201).json({})
});

router.get('/users', function(req, res, next) {
  var db = new sqlite('database.db');
  var users = db.prepare("SELECT * FROM users").all();
  res.json({ users:users })
});

router.post('/users/login', function(req, res, next) {
  console.log(req.body)
  var db = new sqlite('database.db');
  var log = db.prepare("SELECT * FROM users WHERE username = '" + req.body.username + "' AND pass = '" + req.body.pass + "'").all();
  if (log.length > 0) {
    res.send("success");
  }
  else {
    res.send({message: "Invalid login details. Please try again"});
  }
});

// router.post("/users/login", (req,res)=>{
// 	const username = req.body.username;
// 	const pass = req.body.pass;
//   var db = new sqlite('database.db');
//  	db.all("SELECT * FROM users WHERE username = ? AND pass = ?", username, pass,
//  	(err,result)=>{
//     	if(err) {
//     		console.log(err)
//     	} 
//     	res.send(result)
//     });   
// });

module.exports = router;