import React, { useState, useRef } from "react";

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={src}
        onClick={togglePlay}
        loop
        muted={!isPlaying}
      />
      <button onClick={togglePlay}>{isPlaying ? "⏸ Pause" : "▶ Play"}</button>
    </div>
  );
};

export default VideoPlayer;
