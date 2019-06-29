import React from 'react';
import './footer.css';
import { Icon } from 'semantic-ui-react';

const Footer = () => (
  <footer className='footer'>
    <Icon className='footer-icons' link name='snapchat' size='big' />
    <Icon className='footer-icons' link name='whatsapp ' size='big' />
    <Icon className='footer-icons' link name='instagram ' size='big' />
    <Icon className='footer-icons' link name='facebook square ' size='big' />
    <p> Made with ❤ by Khalid Ragi, © 2019 </p>
  </footer>
);

export default Footer;
