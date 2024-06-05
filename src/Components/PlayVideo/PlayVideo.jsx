import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import { useFetcher } from 'react-router-dom'

const PlayVideo = ({ videoId }) => {

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null)

    const fetchVideoData = async () => {
        //Fetching videos data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url)
            .then(res => res.json())
            .then(data => setApiData(data.items[0]))
    }

    const fetchOtherData = async () => {
        //Fetching Channel data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url)
            .then(res => res.json())
            .then(data => setChannelData(data.items[0]))
    }

    useEffect(() => {
        fetchVideoData()
    }, [])

    useEffect(() => {
        fetchOtherData();
    }, [apiData])

    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted></video> */}

            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <h3>{apiData ? apiData.snippet.title : 'Title Here'}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : 'Viewers Here'} &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ''}</p>
                <div>
                    <span><img src={like} alt="like" />{apiData ? value_converter(apiData.statistics.likeCount) : 155}</span>
                    <span><img src={dislike} alt="like" /></span>
                    <span><img src={share} alt="like" />Share</span>
                    <span><img src={save} alt="like" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="profile" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : ''}</p>
                    <span>1M Takipçi</span>
                </div>
                <button>Takip et</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : 'description here'}</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 97} Yorum</h4>
                <div className="comment">
                    <img src={user_profile} alt="user-icon" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem blanditiis ducimus tenetur et officiis
                            exercitationem, consequuntur repudiandae tempore laboriosam nulla
                            nesciunt officia veritatis, temporibus minus qui quas distinctio consectetur!</p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>12</span>
                            <img src={dislike} alt="2" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user-icon" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem blanditiis ducimus tenetur et officiis
                            exercitationem, consequuntur repudiandae tempore laboriosam nulla
                            nesciunt officia veritatis, temporibus minus qui quas distinctio consectetur!</p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>12</span>
                            <img src={dislike} alt="2" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user-icon" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem blanditiis ducimus tenetur et officiis
                            exercitationem, consequuntur repudiandae tempore laboriosam nulla
                            nesciunt officia veritatis, temporibus minus qui quas distinctio consectetur!</p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>12</span>
                            <img src={dislike} alt="2" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user-icon" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem blanditiis ducimus tenetur et officiis
                            exercitationem, consequuntur repudiandae tempore laboriosam nulla
                            nesciunt officia veritatis, temporibus minus qui quas distinctio consectetur!</p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>12</span>
                            <img src={dislike} alt="2" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user-icon" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem blanditiis ducimus tenetur et officiis
                            exercitationem, consequuntur repudiandae tempore laboriosam nulla
                            nesciunt officia veritatis, temporibus minus qui quas distinctio consectetur!</p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>12</span>
                            <img src={dislike} alt="2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo
