import React from 'react';

const NowPlayingComponent = ({ nowPlaying }) => {
  return (
    <div>
      <p>Now Playing: {nowPlaying ? nowPlaying.name : 'None'}</p>
    </div>
  );
};

export default NowPlayingComponent;