import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = props => {

    // var videoItems = [];

    // for (var i = 0; i < props.videos.length; i++) {
    //     videoItems.push(
    //         <VideoListItem 
    //         video={props.videos[i]}
    //         key={props.videos[i].etag}
    //         />
    //     )
    // }

    //mapping a function
    var videoItems = props.videos.map((video) => {
        return <VideoListItem video={video} key={video.etag} onVideoSelect={props.onVideoSelect}/>
    }) 

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;