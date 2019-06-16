import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Responsive, Dropdown } from 'semantic-ui-react';
import Logo from '../assets/images/logo.jpg';
import './navbar.css';

export default class NavBar extends Component {
  state = { activeItem: 'Home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Responsive minWidth={800}>
          <Menu
            inverted
            pointing
            fixed='top'
            secondary
            size='large'
            style={{ backgroundColor: '#d53032' }}>
            <Menu.Item style={{ padding: 0 }}>
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
                to='/menus'
                name='Our Menu'
                active={activeItem === 'Our Menu'}
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
                to='/franchise'
                name='Franchise'
                active={activeItem === 'Franchise'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </Responsive>
        <Responsive maxWidth={800}>
          <Menu
            inverted
            pointing
            secondary
            fixed='top'
            size='massive'
            style={{ backgroundColor: '#d53032' }}>
            <Menu.Item style={{ padding: 0 }}>
              <Image src={Logo} alt='logo' size='small' />
            </Menu.Item>
            <Menu.Menu position='right'>
              <Dropdown
                icon='ellipsis vertical'
                style={{
                  margin: '1.4rem 0',
                  padding: '0',
                  color: 'white'
                }}>
                <Dropdown.Menu>
                  <Dropdown.Item to='/' as={Link}>
                    Home
                  </Dropdown.Item>
                  <Dropdown.Item to='/menus' as={Link}>
                    Our Menu
                  </Dropdown.Item>
                  <Dropdown.Item to='/about' as={Link}>
                    About
                  </Dropdown.Item>
                  <Dropdown.Item to='/contact' as={Link}>
                    Contact Us
                  </Dropdown.Item>
                  <Dropdown.Item to='/franchise' as={Link}>
                    Franchise
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
        </Responsive>
      </div>
    );
  }
}
