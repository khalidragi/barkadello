import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import Logo from '../assets/images/logo.jpg';
import './navbar.css';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'Home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing stackable inverted color='green'>
        <Menu.Item>
          <Image src={Logo} alt='logo' size='small' />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            as={Link}
            to='/'
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/about'
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/contact'
            name='Contact us'
            active={activeItem === 'Contact us'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/menus'
            name='Our Menu'
            active={activeItem === 'Our Menu'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
