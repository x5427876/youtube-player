import react from 'react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    return (  //點擊回傳選擇到的影片，使VideoDetail可以顯示
        <div onClick={() => { onVideoSelect(video) }} className='item video-item'>
            <img alt={video.snippet.title} className='ui image' src={video.snippet.thumbnails.medium.url}></img>
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    )
}

export { VideoItem }