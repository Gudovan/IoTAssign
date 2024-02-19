import React, { useRef, useEffect } from 'react';

const AudioPlayerComponent = ({ playlist, nowPlayingIndex, onEnded }) => {
  const audioRef = useRef();

  useEffect(() => {
    if (playlist[nowPlayingIndex]) {
      audioRef.current.src = URL.createObjectURL(playlist[nowPlayingIndex]);
      audioRef.current.play();
    }
  }, [playlist, nowPlayingIndex]);

  return (
    <audio ref={audioRef} controls onEnded={onEnded}>
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayerComponent;