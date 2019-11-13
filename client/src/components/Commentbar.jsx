import React from 'react';
import './styles.css';
// const path = require('path');

class Commentbar extends React.Component {
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
    render() {
        return (
            <div className='flex-container-commentbar-interaction'>
                <div className="flex-container-commentbar">
                    <div><img className='headshot' src='/headshot.jpg'></img></div>
                    <div>
                        <form>
                            <input className="form" type="text" name="inputBox" placeholder="Write a comment" size='60' />
                        </form>
                    </div>
                </div>

                <div className='flex-container-interaction-bar'>
                    <div className='flex-container-interaction'>
                        <button className='likes'></button>
                        <button className='reposts'></button>
                        <button className='share'></button>
                        <button className='next'></button>
                        <button className='more'></button>
                    </div>

                    <div className='flex-container-stats'>
                        <div className='interaction-tiny-flex'>
                            <div className='plays-icon'></div>
                            <div className='plays'>267k</div>
                        </div>
                        <div className='likes-icon'></div>
                        <div className='likes-stats'>7,355</div>
                        <div className='reposts-icon'></div>
                        <div className='reposts-stats'>507</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Commentbar;