import react from 'react'

const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) {  //若沒有選擇到的影片
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

    return (
        <div>
            <div className='ui embed'>
                <iframe title='selectedVideo-player' src={videoSrc}></iframe>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{selectedVideo.snippet.title}</h4>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
}

export { VideoDetail }