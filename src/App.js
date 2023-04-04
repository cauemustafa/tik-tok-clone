import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

import './App.css';
import Video from './pages/Video';
import db from './config/firebase';

function App() {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const videosCollection = collection(db, 'videos');
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <section className="app__videos">
        {videos.map((video) => (
          <Video
            likes={video.likes}
            comments={video.comments}
            shares={video.shares}
            username={video.username}
            description={video.description}
            music={video.music}
            url={video.url}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
