/* eslint-disable no-console */
var create = require('./new_seed_data.js');
var fs = require('fs');
// var songs = fs.createWriteStream('./songDataOutput.csv');
var comments = fs.createWriteStream('./commentDataOutput.txt');

console.time()

function seedDb() {
  var i = 0;
  write();
  function write() {
    // var ok = true;
    var ok2 = true;
    do {
      var song = create.createObject();
      song[0] = i;
      var commentArray = song.splice(song.length - 1, 1);
      if (i === 9999998) {
        // songs.write(song.join('|')); ``
        comments.write('"' + commentArray[0].join(`"|${i}\n"`) + `"|${i}`);
        songs.end(() => {
          console.log('finished!'),
            console.timeEnd()
        })
      } else {
        if (i % 10000 === 0) {
          console.log(i)
        }
        // ok = songs.write(song.join('|') + "\n");
        ok2 = comments.write('"' + commentArray[0].join(`"|${i}\n"`) + `"|${i}\n`);
      }
      i += 1;
      // } while (i < 9999999 && ok && ok2); for both
    } while (i < 9999999 && ok2);
    if (i < 9999999) {
      // songs.setMaxListeners(songs.getMaxListeners() + 1);
      // songs.once('drain', () => {
      //   songs.setMaxListeners(Math.max(songs.getMaxListeners() - 1, 0))
      //   write()
      // });
      comments.setMaxListeners(comments.getMaxListeners() + 1);
      comments.once('drain', () => {
        comments.setMaxListeners(Math.max(comments.getMaxListeners() - 1, 0))
        write()
      });
    }
  }
}

seedDb();
