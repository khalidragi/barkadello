import React, { Component } from 'react';
import { Grid, Header, Divider, Menu } from 'semantic-ui-react';
import scrollToComponent from 'react-scroll-to-component';
import Fresh from '../menus/Fresh';
import Soft from '../menus/Soft';
import IceCream from '../menus/IceCream';
import IcedCoffe from '../menus/IcedCoffe';
import Smoothies from '../menus/Smoothies';
import Coffe from '../menus/Coffe';
import SomeHot from '../menus/SomeHot';
import Pancake from '../menus/Pancake';
import Dessert from '../menus/Dessert';
import Waffle from '../menus/Waffle';
import Sticks from '../menus/Sticks';
import Crepe from '../menus/Crepe';

class Menus extends Component {
    componentDidMount() {
    scrollToComponent(this.Special, { offset: -80, align: 'top', duration: 500});
  }
  render() {
    return (
      <div>
        <Divider hidden />
            <Menu vertical size='mini' fixed='left' style={{top:'80px'}}>
            <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Special, {
                    offset: -80,
                    align: 'top',
                    duration: 500
                  })
                }>
                Barkadello Specials
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Crepe, {
                    offset: -80,
                    align: 'top',
                    duration: 500
                  })
                }>
                Barkadello Crepe
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Waffle, {
                    offset: -80,
                    align: 'top',
                    duration: 500
                  })
                }>
                Barkadello Waffle
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Pancake, {
                    offset: -80,
                    align: 'top',
                    duration: 500
                  })
                }>
                Barkadello Pancake
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Sticks, {
                    offset: -80,
                    align: 'top',
                    duration: 500
                  })
                }>
                Barkadello Sticks
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Dessert, {
                    offset: -80,
                    align: 'top',
                    duration: 500
                  })
                }>
                Barkadello Dessert
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Coffe, {
                    offset: -80,
                    align: 'top',
                    duration: 500
                  })
                }>
                Barkadello's Speciallity Coffe
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.IcedCoffe, {
                    offset: -80,
                    align: 'top',
                    duration: 500
                  })
                }>
                Iced Coffe
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Smoothies, {
                    offset: -80,
                    align: 'top',
                    duration: 500
                  })
                }>
                Smoothies & Milk Shake
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Fresh, {
                    offset: -80,
                    align: 'top',
                    duration: 500
                  })
                }>
                Fresh Juices & Coctails
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.IceCream, {
                    offset: -80,
                    align: 'top',
                    duration: 500
                  })
                }>
                Barkadello Ice Cream
              </Menu.Item>

              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Soft, {
                    offset: -80,
                    align: 'top',
                    duration: 500
                  })
                }>
                Soft Beverages
              </Menu.Item>
            </Menu>

          {/* items  */}
          <Divider hidden />
          <div style={{marginLeft:'180px'}}>
          <section
              className='red'
              ref={section => {
                this.Special = section;
              }}>
              <Header as='h3'>Barkadello Specials</Header>
              <Divider />
              Specials
            </section>
            <Divider hidden />
            <section
              className='red'
              ref={section => {
                this.Crepe = section;
              }}>
              <Header as='h3'>Barkadello Crepe</Header>
              <Divider />
              <Crepe />
            </section>
            <Divider hidden />
            <section
              className='red'
              ref={section => {
                this.Waffle = section;
              }}>
              <Header as='h3'>Barkadello Waffle</Header>
              <Divider />
              <Waffle />
            </section>
            <Divider hidden />
            <section
              className='red'
              ref={section => {
                this.Pancake = section;
              }}>
              <Header as='h3'>Barkadello Pancake</Header>
              <Divider />
              <Pancake />
            </section>
            <Divider hidden />
            <section
              className='red'
              ref={section => {
                this.Sticks = section;
              }}>
              <Header as='h3'>Barkadello Sticks</Header>
              <Divider />
              <Sticks />
            </section>
            <Divider hidden />
            <section
              className='red'
              ref={section => {
                this.Dessert = section;
              }}>
              <Header as='h3'>Barkadello Dessert</Header>
              <Divider />
              <Dessert />
            </section>
             <Divider hidden />
            <section
              className='orange'
              ref={section => {
                this.Coffe = section;
              }}>
              <Header as='h3'>Barkadello's Speciallity Coffe</Header>
              <Divider />
              <Coffe />
              <SomeHot />
            </section>
            <Divider hidden />
            <section
              className='green'
              ref={section => {
                this.IcedCoffe = section;
              }}>
              <Header as='h3'>Iced Coffe</Header>
              <Divider />
              <IcedCoffe />
            </section>
            <Divider hidden />
            <section
              className='yellow'
              ref={section => {
                this.Smoothies = section;
              }}>
              <Header as='h3'>Smoothies & Milk Shake</Header>
              <Divider />
              <Smoothies />
            </section>
            <Divider hidden />
            <section
              className='violet'
              ref={section => {
                this.Fresh = section;
              }}>
              <Header as='h3'>Fresh Juices & Cocktails</Header>
              <Divider />
              <Fresh />
            </section>
            <Divider hidden />
             <section
              className='blue'
              ref={section => {
                this.IceCream = section;
              }}>
              <Header as='h3'>Barkadello Ice Cream</Header>
              <Divider />
              <IceCream />
            </section>
            <Divider hidden />
            <section
              className='indigo'
              ref={section => {
                this.Soft = section;
              }}>
              <Header as='h3'>Soft Bevarages</Header>
              <Divider />
              <Soft />
            </section>
            </div>
      </div>
    );
  }
}

export default Menus;
