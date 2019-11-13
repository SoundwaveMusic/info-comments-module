/* eslint-disable no-console */
var create = require('./cassandra_data_shape');
var fs = require('fs');
const uuidv1 = require('uuid/v1');
var comments = fs.createWriteStream('./inserttest.csv');
console.time()

function seedDb() {
  var i = 0;
  write();
  function write() {
    var ok = true;
    do {
      var commentArray = create.createObject();
      commentArray.forEach(comment => comment[0] = `${uuidv1()},${i}`);
      var commentString = commentArray.join('\n');
      if (i === 10000000) {
        if (i % 500000 === 0) {
          console.log(i);
        }
        ok = comments.write(commentString + "\n");
        console.log(`${i}: ${commentString.slice(0, 36)}`)
        comments.end(() => {
          console.log('finished!'),
            console.timeEnd()
        })
      } else {
        ok = comments.write(commentString + "\n");
      }
      i += 1;
    } while (i < 10000000 && ok);
    if (i < 10000000) {
      comments.setMaxListeners(comments.getMaxListeners() + 1);
      comments.once('drain', () => {
        comments.setMaxListeners(Math.max(comments.getMaxListeners() - 1, 0))
        write()
      });
    }
  }
}

seedDb();
