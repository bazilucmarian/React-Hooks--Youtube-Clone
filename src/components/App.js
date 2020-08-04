import React,{useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../apis/Youtube'
import VideoDetail from './VideoDetail'



const KEY = 'AIzaSyA8OR8o3K1FJm-lqg0MWqk034CNarJqTGU'


const App=()=>{

    const [videos, setVideos]=useState([]);
    const [selectedVideo, setSelectedVideo]=useState(null)

    useEffect(() => {
        onTermSubmit('javascript')
    }, []);
    
   const onTermSubmit = async term => {

        const response = await youtube.get('/search', {
            params: {
                q: term,
                key: KEY,
                maxResults: '5',
                part: 'snippet',
                type: 'video'
            }
        })
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0])
    }


    const onVideoSelect = (video) => {
        setSelectedVideo(video)

    }

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
            </div>
        </div>
        </div>
        </div>
    )




}



export default App
