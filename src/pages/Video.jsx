import React, { useState, useRef } from 'react';

import './video.css';
import VideoFooter from "../components/footer/VideoFooter";
import VideoSideBar from '../components/sidebar/VideoSideBar';

function Video() {
  const [play, setPlay] = useState(false);

  const videoRef = useRef(null);

  const handleStart = () => {
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
        onClick={handleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/brecker2.mp4?alt=media&token=5493f40a-3b0d-4c19-b5dd-a9016cc5a6d1"
      />
      <VideoSideBar />
      <VideoFooter />
    </div>
  );
}

export default Video;
