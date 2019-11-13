const cassandra = require('cassandra-driver');
var authProvider = new cassandra.auth.PlainTextAuthProvider('cassandra', 'EDITPASSWORD');
const client = new cassandra.Client({
  contactPoints: ['PUBLICIP'],
  keyspace: 'soundcloud',
  localDataCenter: "us-east-2",
  authProvider: authProvider,
});

const queryCREATE = `INSERT INTO soundcloud.comments(comment_id, song_id, timeInSongSeconds, timeCommentPosted, commentText, username, picture) VALUES (?, ?, ?, ?, ?, ?, ?)`;
const queryREAD = 'SELECT * FROM comments WHERE song_id = ?';
const queryUPDATE = 'UPDATE comments SET commentText = ? WHERE song_id = ? AND comment_id = ?';
const queryDELETE = 'DELETE FROM comments WHERE song_id = ? AND comment_id = ?';


function cassandraCreate(info) {
  return client.execute(queryCREATE, info, { prepare: true });
}

function cassandraRead(song_id) {
  return client.execute(queryREAD, [song_id], { prepare: true });
}

function cassandraUpdate(commentText, song_id, comment_id) {
  return client.execute(queryUPDATE, [commentText, song_id, comment_id], { prepare: true });
}

function cassandraDelete(song_id, comment_id) {
  return client.execute(queryDELETE, [song_id, comment_id], { prepare: true });
}

module.exports.Create = cassandraCreate;
module.exports.Read = cassandraRead;
module.exports.Update = cassandraUpdate;
module.exports.Delete = cassandraDelete;