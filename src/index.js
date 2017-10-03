//import react core
import React, { Component } from 'react';

//allows you to build websites
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyBMK1Dsq_kUMVPNFEy8LZgZR_ClQaj3JVQ';

class App extends Component {
    constructor(props) {
        //calling constructor function in component calass
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('Justin Timberlake')

    }

    videoSearch(term) {
        setTimeout(() => {
            YTSearch({key: API_KEY, term: term}, (response) => {
                this.setState({
                    videos: response,
                    selectedVideo: response[0]
                });
            })
        }, 300)
        
    }
    

    render() {
        return (
            <div>
                <h1>YOUT00B</h1>
                <SearchBar onSearchTermChange={ (term) => this.videoSearch(term) }/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={ (video) => this.setState({selectedVideo: video})}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));