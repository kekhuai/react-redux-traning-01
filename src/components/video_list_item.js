import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div
        className="video-list media"
        onClick={() => onVideoSelect(video)}
        onKeyPress={() => onVideoSelect(video)}
        role="button"
        tabIndex={0}
      >
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt={video.snippet.title} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.object.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoListItem;
