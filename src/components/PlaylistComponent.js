import React from 'react';

const PlaylistComponent = ({ playlist, onPlay }) => {
  return (
    <div>
      <ul>
        {playlist.map((file, index) => (
          <li key={index} onClick={() => onPlay(index)}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistComponent;