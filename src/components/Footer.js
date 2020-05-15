import React from 'react';

import github from '../Media/github.png';
import linkedIn from '../Media/linkedIn.png';
import home from '../Media/home.png';

function Footer() {
  return (
    <div className='footer'>
      <a href='https://pappukp.netlify.com/'>
        <img
          className='home'
          src={home}
          alt='home'
          style={{
            width: 100,
            height: 100,
            padding: 20,
          }}
        />
      </a>
      <a href='https://github.com/PappuKP/Udacity-Project-MyReads-A-Book-Tracking-App'>
        <img
          className='github'
          src={github}
          alt='github'
          style={{
            width: 100,
            height: 100,
            padding: 20,
          }}
        />
      </a>

      <a href='https://www.linkedin.com/in/pappu-kumar-pashi-75977a172/'>
        <img
          className='linkedIn'
          src={linkedIn}
          alt='linkedIn'
          style={{
            width: 100,
            height: 100,
            padding: 20,
          }}
        />
      </a>
    </div>
  );
}

export default Footer;
