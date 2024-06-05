import React, { useEffect, useState } from 'react'
import './Recomended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY } from '../../data'


const Recomended = ({ categoryId }) => {

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url)
            .then(res => res.json())
            .then(data => setApiData(data.items))
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='recomended' >
            <div className="side-video-list">
                <img src={thumbnail1} alt="thumbnail" />
                <div className="vid-info">
                    <h4>Lorem ipsum dolor sit amet  consectetur consectetur.</h4>
                    <p>wlanHan</p>
                    <p>132K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail2} alt="thumbnail" />
                <div className="vid-info">
                    <h4>Lorem ipsum dolor sit amet  consectetur consectetur.</h4>
                    <p>wlanHan</p>
                    <p>132K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail3} alt="thumbnail" />
                <div className="vid-info">
                    <h4>Lorem ipsum dolor sit amet  consectetur consectetur.</h4>
                    <p>wlanHan</p>
                    <p>132K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail4} alt="thumbnail" />
                <div className="vid-info">
                    <h4>Lorem ipsum dolor sit amet  consectetur consectetur.</h4>
                    <p>wlanHan</p>
                    <p>132K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail5} alt="thumbnail" />
                <div className="vid-info">
                    <h4>Lorem ipsum dolor sit amet  consectetur consectetur.</h4>
                    <p>wlanHan</p>
                    <p>132K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail6} alt="thumbnail" />
                <div className="vid-info">
                    <h4>Lorem ipsum dolor sit amet  consectetur consectetur.</h4>
                    <p>wlanHan</p>
                    <p>132K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail7} alt="thumbnail" />
                <div className="vid-info">
                    <h4>Lorem ipsum dolor sit amet  consectetur consectetur.</h4>
                    <p>wlanHan</p>
                    <p>132K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail8} alt="thumbnail" />
                <div className="vid-info">
                    <h4>Lorem ipsum dolor sit amet  consectetur consectetur.</h4>
                    <p>wlanHan</p>
                    <p>132K Views</p>
                </div>
            </div>
        </div>
    )
}

export default Recomended
