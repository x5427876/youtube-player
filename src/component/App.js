import react from 'react'
import youtube from '../api/youtube'
import { SearchBar } from './SearchBar'
import { VideoList } from './VedioList'
import { VideoDetail } from './VideoDetail'

class App extends react.Component {
    state = { videos: [], selectedVideo: null }

    onTermSubmit = async (term) => {  //Youtube API
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({
            videos: response.data.items,  //所有影片
            selectedVideo: response.data.items[0]  //第一部影片
        })
    }

    onVideoSelect = (video) => {
        this.setState(
            { selectedVideo: video }
        )
    }

    componentDidMount() {  //首次執行帶值
        this.onTermSubmit('12345')
    }

    render() {
        return (
            <div className='mx-52'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className=''>
                    <div className='grid grid-cols-4 mt-12'>
                        <div className='col-span-3 px-5'><VideoDetail selectedVideo={this.state.selectedVideo} /></div>
                        <div className='col-span-1 '><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} /></div>
                    </div>
                </div>
            </div >
        )
    }
}

export { App }