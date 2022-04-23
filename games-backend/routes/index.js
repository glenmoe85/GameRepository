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
  db.prepare('INSERT INTO games (title, release, platform, rating, notes, extRef, img) VALUES (?,?,?,?,?,?,?)').run(req.body.name, req.body.release, req.body.platform, req.body.rating, req.body.notes, req.body.extRef, req.body.img);
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
  if (req.body.notes && req.body.rating) {
    db.prepare('UPDATE games SET rating = ?, notes = ? where id = (?)').run(req.body.rating, req.body.notes, req.body.game_id);
  } else if (req.body.notes) {
    db.prepare('UPDATE games SET notes = ? where id = (?)').run(req.body.notes, req.body.game_id);
  } else if (req.body.rating) {
    db.prepare('UPDATE games SET rating = ? where id = (?)').run(req.body.rating, req.body.game_id);
  }
  res.status(204).json({})
});

module.exports = router;