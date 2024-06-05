import React, { useEffect, useState } from 'react'
import './Recomended.css'
import { API_KEY, value_converter } from '../../data'


const Recomended = ({ categoryId }) => {

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url)
            .then(res => res.json())
            .then(data => setApiData(data.items))
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='recomended' >
            {apiData.map((item, i) => {
                return (
                    <div key={i} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_converter(item.statistics.viewCount)} Görüntülenme</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Recomended
