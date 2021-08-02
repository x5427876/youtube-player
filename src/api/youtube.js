import axios from "axios"

const KEY = 'AIzaSyDmsM-1V3k9aBH5ZwYXuk1dXG_EI0vadLM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY,
        type: 'video'
    }
})