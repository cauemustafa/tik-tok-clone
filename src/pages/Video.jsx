import React, { useState, useRef } from 'react';

import './video.css';
import VideoFooter from '../components/footer/VideoFooter';
import VideoSideBar from '../components/sidebar/VideoSideBar';

function Video(props) {
  const [play, setPlay] = useState(false);

  const videoRef = useRef(null);

  const handlePLay = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handlePLay}
        loop
        src={props.url}
      />
      <VideoSideBar {...props} />
      <VideoFooter {...props} />
    </div>
  );
}

export default Video;
