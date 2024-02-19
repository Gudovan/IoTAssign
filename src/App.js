


import React, { useState, useEffect } from 'react';
import FileUploadComponent from './components/FileUploadComponent';
import PlaylistComponent from './components/PlaylistComponent';
import NowPlayingComponent from './components/NowPlayingComponent';
import AudioPlayerComponent from './components/AudioPlayerComponent';





const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [nowPlayingIndex, setNowPlayingIndex] = useState(0);

  useEffect(() => {
    const savedPlaylist = JSON.parse(localStorage.getItem('playlist')) || [];
    const savedIndex = localStorage.getItem('nowPlayingIndex') || 0;

    setPlaylist(savedPlaylist);
    setNowPlayingIndex(parseInt(savedIndex, 10));
  }, []);

  const saveToLocalStorage = () => {
    localStorage.setItem('playlist', JSON.stringify(playlist));
    localStorage.setItem('nowPlayingIndex', nowPlayingIndex);
  };

  const handleFileUpload = (file) => {
    setPlaylist([...playlist, file]);
    saveToLocalStorage();
  };

  const handlePlay = (index) => {
    setNowPlayingIndex(index);
  };

  const handleEnded = () => {
    setNowPlayingIndex((prevIndex) => (prevIndex + 1 < playlist.length ? prevIndex + 1 : 0));
  };

  return (
    <div>
      <FileUploadComponent onFileUpload={handleFileUpload} />
      <PlaylistComponent playlist={playlist} onPlay={handlePlay} />
      <NowPlayingComponent nowPlaying={playlist[nowPlayingIndex]} />
      <AudioPlayerComponent
        playlist={playlist}
        nowPlayingIndex={nowPlayingIndex}
        onEnded={handleEnded}
      />
    </div>
  );
};

export default App;