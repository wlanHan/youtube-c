import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Best youtube channel to learn web development</h3>
            <div className="play-video-info">
                <p>1795 Views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="like" />884</span>
                    <span><img src={dislike} alt="like" />254</span>
                    <span><img src={share} alt="like" />Share</span>
                    <span><img src={save} alt="like" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="profile" />
                <div>
                    <p>./wlanHan</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default PlayVideo
