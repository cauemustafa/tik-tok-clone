import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import './videoFooter.css';

function VideoFooter({ username, description, music }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{username}</h3>
        <p className="videoFooter__description">{description}</p>
        <div className="videoFooter__music">
          <MusicNoteIcon />
          <div className="videoFooterMusic__text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/vinil.png?alt=media&token=72a6362d-ca03-4b8b-975e-a4832fdeccff"
        alt="vinil girando"
      />
    </div>
  );
}

export default VideoFooter;
