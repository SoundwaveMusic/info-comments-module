import React from 'react';
import Commentbar from './Commentbar.jsx';
import ArtistInfo from './ArtistInfo.jsx';
import TrackInfo from './TrackInfo.jsx';
import Comments from './Comments';
import Axios from 'axios';
import './styles.css';
const params = new URLSearchParams(document.location.search.substring(1));
const id = params.get('id');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            song_id: 0,
            users_name: "",
            streams: 0,
            likes: 0,
            reposts: 0,
            userpicture: "",
            liked: "",
            reposted: "",
            genre: "",
            company: "",
            releaseDate: "",
            label: "",
            explicitContent: "",
            artistPicture: "",
            artistName: "",
            followers: 0,
            tracks: 0,
            comments: []
        }
    }


    componentDidMount() {
        this.getComments();
    }

    getComments() {
        Axios.get(`/song/${id}`)
            .then(results => {
                console.log(results.data)
                // get static from result
                const { song_id, users_name, streams, likes, reposts, userpicture, liked, reposted, genre, company, releasedate, label, explicitcontent, artistpicture, artistname, followers, tracks } = results.data[0];
                // array for comments
                const comments = [];
                for (var i = 0; i < results.data.length; i++) {
                    var singleComment = results.data[i];
                    // destructure values from each row
                    var { timeinsongseconds, timecommentposted, commenttext, username, picture } = singleComment;
                    comments.push({ timeinsongseconds, timecommentposted, commenttext, username, picture })
                }
                // set state with static and comments array
                this.setState({
                    song_id, users_name, streams, likes, reposts, userpicture, liked, reposted, genre, company, releasedate, label, explicitcontent, artistpicture, artistname, followers, tracks, comments
                })
            })
            .catch(err => console.log(err))
    }

    addComment(newComment) {
        Axios.put(`/song/${id}`, newComment)
            .then(() => {
                this.getComments();
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className='comments-component'>
                <Commentbar />
                <div className='flex-lower'>
                    <ArtistInfo
                        pic={this.state.artistPicture}
                        name={this.state.artistName}
                        followers={this.state.followers}
                        tracks={this.state.tracks}
                    />
                    <div className='flex-lower-right'>
                        <TrackInfo />
                        <Comments comments={this.state.comments} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;