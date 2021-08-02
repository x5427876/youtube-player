import react from 'react'
import { VideoItem } from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    const renderList = videos.map((video) => {  //映射每一部影片成為一個VideoItem Component
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />  //多個子組件需有唯一Key值
    })
    return (
        <div className='ui relaxed divided list'>{renderList}</div>  //顯示所有子組件
    )
}

export { VideoList }