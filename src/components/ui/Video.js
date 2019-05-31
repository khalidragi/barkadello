import React from 'react';
import '../assets/videos/video.css';
import FileVideo from '../assets/videos/Video.mp4';

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay muted loop id='video'>
        <source src={FileVideo} type='video/mp4' />
      </video>
      <div className='content'>
        <h1>How do you create your daily joy ?</h1>
        <p>Simply, it's our responsibility!</p>
      </div>
    </div>
  );
};

export default Video;