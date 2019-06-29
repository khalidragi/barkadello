import React from 'react';
import '../assets/videos/video.css';
import FileVideo from '../assets/videos/Video.webm';
import Waffle from '../assets/videos/waffle.jpg';

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay muted loop id='video' poster={Waffle}>
        <source src={FileVideo} type='video/webm' />
      </video>
      <div className='content'>
        <h1>How do you create your daily joy ?</h1>
        <p>Simply, it's our responsibility !</p>
      </div>
    </div>
  );
};

export default Video;
