import React from 'react';
import videoList from './video-list'

const VideoDetail = props => {
    if(!props.video) {
        return <div>Loading...</div>
    }
    const videoId = props.video.id.videoId
    const url=`https://www.youtube.com/embed/${videoId}`


    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="details">
                <div><h2>{ props.video.snippet.title }</h2></div>
                <div>{ props.video.snippet.description }</div>
            </div>
        </div>
    )
}

export default VideoDetail;