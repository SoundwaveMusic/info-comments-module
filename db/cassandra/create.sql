-- CREATE KEYSPACE soundcloud
--   WITH REPLICATION = { 
--    'class' : 'SimpleStrategy', 
--    'replication_factor' : 3 
--   };

-- use soundcloud;

--   CREATE TABLE comments(
--     comment_id uuid,
--     song_id INT,
--     users_name text static,
--     streams INT static,
--     likes INT static,
--     reposts INT static,
--     userpicture text static,
--     liked BOOLEAN static,
--     reposted BOOLEAN static,
--     genre text static,
--     company text static,
--     releaseDate text static,
--     label text static,
--     explicitContent BOOLEAN static,
--     artistPicture text static,
--     artistName text static,
--     followers INT static,
--     tracks INT static,
--     timeInSongSeconds int,
--     timeCommentPosted text,
--     commentText text,
--     username text,
--     picture text,
--     PRIMARY KEY
--     (song_id,comment_id),
--   );


-- COPY comments(comment_id, song_id, users_name, streams, likes, reposts, userpicture, liked, reposted, genre, company, releaseDate, label, explicitContent, artistPicture, artistName, followers, tracks, timeInSongSeconds, timeCommentPosted, commentText, username, picture) FROM '/Users/selamgessese/galvanize/SDC/soundclout-info-comments-module/db/cassandra/inserttest.csv';
