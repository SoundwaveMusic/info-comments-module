var faker = require('faker');

var artistsArray = ['Drake', 'Post Malone', 'Ed Sheeran', 'Taylor Swift', 'Cardi B', 'XXXTENTACION', 'Imagine Dragons', 'BTS', 'Bruno Mars', 'Camila Cabello', 'Migos', 'Travis Scott', 'Eminem', 'Ariana Grande', 'Kendrick Lamar', 'Maroon 5', 'Juice WRLD', 'Khalid', 'Dua Lipa', 'Halsey', 'P!nk', 'J. Cole', 'The Weeknd', 'Justin Timberlake', 'Sam Smith', 'Nicki Minaj', 'Demi Lovato', '6ix9ine', 'Chris Stapleton', 'Shawn Mendes', 'Florida Georgia Linelaby', 'Ella Mai', 'Bebe Rexha', 'G-Eazy', 'Luke Bryan', 'YoungBoy Never Broke Again', 'Kenny Chesney', 'Bazzi', 'Thomas Rhett', 'NF', 'Beyonce', 'Lil Wayne', 'Lil Pump', 'Kane Brown', 'Jason Aldean', 'Kanye West', 'Luke Combs', 'Logic', '21 Savage'];

var artistRandom, totalStreams, totalLikes, totalReposts, genre, liked, reposted, explicit, date, comments, tracks, followers, pic, name, mainuser, avatar, company, label;

var genreArray = ['Hip-Hop', 'Rap', 'R&B', 'Soul'];
var years = ['2016', '2017', '2018', '2019'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function commentsGenerator(total) {
  var result = [];
  for (var i = 0; i < total; i++) {
    result.push(JSON.stringify({
      timeInSongSeconds: `${faker.random.number(240)}`,
      timePosted: `${faker.date.recent(400)}`,
      commentText: `${faker.random.words()}`,
      username: `${faker.name.findName()}`,
      picture: `${faker.image.avatar()}`,
    }).replace(/"/g, '""'));
  }
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
  comments = commentsGenerator(((Math.floor(Math.random() * Math.floor(4))) + 2), date);
  mainuser = `${faker.internet.userName()}`;
  avatar = `${faker.internet.avatar()}`;
  company = `${faker.company.companyName().replace(",", "")}`;
  label = `℗ ${years[(faker.random.number(3))]} ${faker.company.companyName().replace(",", "")}`;


  // var singleObject = {
  //   id: 0,
  //   name: 'Unemployed',
  //   streams: totalStreams,
  //   likes: totalLikes,
  //   reposts: totalReposts,
  //   userInteraction: {
  //     userpicture: './headshot.jpg',
  //     liked: Math.random() ? true : false,
  //     reposted: Math.random() ? true : false,
  //   },
  //   tags: genre,
  //   releasedBy: 'MMG/Atlantic',
  //   releaseDate: new Date('March 19, 2019 00:00:00'),
  //   pLine: '℗ 2019 Interscope Records',
  //   cLine: '© 2019 © 2019 Interscope Records',
  //   explicit: Math.random() ? true : false,
  //   artist: {
  //     picture: `./artist${artistRandom}`,
  //     name: artistsArray[artistRandom],
  //     followers: (Math.floor(Math.random() * Math.floor(1000000))),
  //     tracks: (Math.floor(Math.random() * Math.floor(200))),
  //   },
  //   comments: commentsGenerator(Math.floor(Math.random() * Math.floor(6)))
  // }

  var singleObjectArray = [0, mainuser, totalStreams, totalLikes, totalReposts, avatar, liked, reposted, genre, company, date, label, explicit, pic, name, followers, tracks, comments]

  return singleObjectArray;
}


module.exports.createObject = createObject;
