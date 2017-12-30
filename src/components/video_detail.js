import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) {
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    const videoTitle = video.snippet.title;
    const videoDescription = video.snippet.description;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoUrl}>

                </iframe>
            </div>
            <div className="details">
                <div className="video-title">{videoTitle}</div>
                <div className="video-description">{videoDescription}</div>
            </div>
        </div>
    );
};

export default VideoDetail;