import React, { useState } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

import './videoSideBar.css';

function VideoSideBar({ likes, comments, shares }) {
  const [isLike, setLike] = useState(false);

  return (
    <section className="videoSideBar">
      <div className="videoSideBar__options" onClick={() => setLike(!isLike)}>
        {isLike ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{isLike ? likes + 1 : likes}</p>
      </div>
      <div className="videoSideBar__options">
        <CommentIcon fontSize="large" />
        <p>{comments}</p>
      </div>
      <div className="videoSideBar__options">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </section>
  );
}

export default VideoSideBar;
