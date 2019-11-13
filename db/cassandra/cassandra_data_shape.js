var faker = require('faker');

var artistsArray = ['Drake', 'Post Malone', 'Ed Sheeran', 'Taylor Swift', 'Cardi B', 'XXXTENTACION', 'Imagine Dragons', 'BTS', 'Bruno Mars', 'Camila Cabello', 'Migos', 'Travis Scott', 'Eminem', 'Ariana Grande', 'Kendrick Lamar', 'Maroon 5', 'Juice WRLD', 'Khalid', 'Dua Lipa', 'Halsey', 'P!nk', 'J. Cole', 'The Weeknd', 'Justin Timberlake', 'Sam Smith', 'Nicki Minaj', 'Demi Lovato', '6ix9ine', 'Chris Stapleton', 'Shawn Mendes', 'Florida Georgia Linelaby', 'Ella Mai', 'Bebe Rexha', 'G-Eazy', 'Luke Bryan', 'YoungBoy Never Broke Again', 'Kenny Chesney', 'Bazzi', 'Thomas Rhett', 'NF', 'Beyonce', 'Lil Wayne', 'Lil Pump', 'Kane Brown', 'Jason Aldean', 'Kanye West', 'Luke Combs', 'Logic', '21 Savage'];

var artistRandom, totalStreams, totalLikes, totalReposts, genre, liked, reposted, explicit, date, tracks, followers, pic, name, mainuser, avatar, company, label;

var genreArray = ['Hip-Hop', 'Rap', 'R&B', 'Soul'];
var years = ['2016', '2017', '2018', '2019'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var comments = ["Overly thought out! Flat design is going to die.", "This is good work dude", "This design blew my mind.", "Such magical.", "Baby blue. Ahhhhhhh...", "How do you make this? God?", "Just incredible!!", "Fire", "Lit", "Wow man", "So mind blown", "I stan", "heart eyes", "Mission accomplished. It's magnificent!!", "inspired", "neat texture", "slick", "This is bold and admirable!", "teach meeeee", "It's beastly not just strong!"]

function commentsGenerator() {
  var timeInSongSeconds = `${faker.random.number(240)}`;
  var timePosted = `${faker.date.recent(400)}`;
  var commentText = `${comments[faker.random.number(19)]}`;
  var username = `${faker.name.findName()}`;
  var picture = `${faker.image.avatar()}`;

  var result = [timeInSongSeconds, timePosted, commentText, username, picture];

  return result;
}

function createObject() {
  artistRandom = Math.floor(Math.random() * Math.floor(49));
  totalStreams = Math.floor(Math.random() * Math.floor(3000000));
  totalLikes = Math.floor(Math.random() * Math.floor(totalStreams));
  totalReposts = Math.floor(Math.random() * Math.floor(totalLikes));
  genre = genreArray[Math.floor(Math.random() * Math.floor(4))];
  liked = (faker.random.boolean() ? true : false);
  reposted = (faker.random.boolean() ? true : false);
  explicit = (faker.random.boolean() ? true : false);
  date = (new Date(`${months[(faker.random.number(11))]} ${(Math.floor(Math.random() * Math.floor(29))) + 1}, ${years[(faker.random.number(3))]}`) + '').slice(0, 15);
  tracks = (Math.floor(Math.random() * Math.floor(200)));
  followers = (Math.floor(Math.random() * Math.floor(1000000)));
  pic = `./artist${artistRandom}`;
  name = artistsArray[artistRandom];
  mainuser = `${faker.internet.userName()}`;
  avatar = `${faker.internet.avatar()}`;
  company = `${faker.company.companyName().replace(",", "")}`;
  label = `℗ ${years[(faker.random.number(3))]} ${faker.company.companyName().replace(",", "")}`;

  var singleObjectArray = [0, mainuser, totalStreams, totalLikes, totalReposts, avatar, liked, reposted, genre, company, date, label, explicit, pic, name, followers, tracks]

  return singleObjectArray;
}

function arrayOfSongComments() {
  var total = ((Math.floor(Math.random() * Math.floor(2))) + 2);
  var song = createObject(); // one song
  var result = [];
  while (total > 0) {
    result.push(song.concat(commentsGenerator()));
    total -= 1;
  }
  return result;
}

module.exports.createObject = arrayOfSongComments;
