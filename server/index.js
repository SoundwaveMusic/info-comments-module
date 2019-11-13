// Importing express framework, body-parser for post requests
require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cassandra = require('./routers/comments.js');
const cors = require('cors');
const PORT = 4000;
const app = express();
const uuid = require('uuid');


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/song/:id', ((req, res) => {
  const song_id = req.params.id;
  const { timeInSongSeconds, timeCommentPosted, commentText, username, picture } = req.body;
  const info = [uuid.v1(), song_id, timeInSongSeconds, timeCommentPosted, commentText, username, picture];
  cassandra.Create(info)
    .then(result => res.send(result))
    .catch(err => res.send(err))
}))

app.get('/song/:id', ((req, res) => {
  const song_id = req.params.id;
  cassandra.Read(song_id)
    .then(results => res.send(results.rows))
    // change to 500
    .catch((err) => res.sendStatus(err))
}))

app.get('/stress', ((req, res) => {
  const song_id = Math.floor(Math.random() * Math.floor(9999999));
  cassandra.Read(song_id)
    .then(results => res.send(results.rows))
    // change to 500
    .catch((err) => res.sendStatus(err))
}))

// client sends: { "commentText":"sample comment" }
app.put('/song/:id/:comment', ((req, res) => {
  const song_id = req.params.id;
  const comment_id = req.params.comment;
  const commentText = req.body.commentText;
  cassandra.Update(commentText, song_id, comment_id)
    .then(result => res.send(result))
    .catch(err => res.send(err))
}))

app.delete('/song/:id/:comment', ((req, res) => {
  const song_id = req.params.id;
  const comment_id = req.params.comment;
  cassandra.Delete(song_id, comment_id)
    // change to 200
    .then(result => res.send(result))
    // change to 500
    .catch(err => res.send(err))
}))

// listen on port
app.listen(PORT, console.log('Listening on port', PORT));