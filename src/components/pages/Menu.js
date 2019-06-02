import React, { Component } from 'react';
import { Header, Divider, Menu } from 'semantic-ui-react';
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
  render() {
    return (
      <div>
        <Divider hidden />
            <Menu vertical size='mini' fixed='left' style={{top:'80px'}}>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Fresh, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                FRESH JUICES & COCKTAILS
              </Menu.Item>

              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Soft, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                SOFT BEVERAGES
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.IceCream, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                BARKADELO ICE CREAM
              </Menu.Item>

              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.IcedCoffe, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                ICED COFFEE
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Smoothies, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                SMOOTHIES & MILK SHAKE
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Coffe, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                BARKADELO’S SPEACIALTY COFFEE
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.SomeHot, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                SOME LIKE IT HOT
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Pancake, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                BARKADELO PANCAKE
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Dessert, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                BARKADELO DESSERT
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Waffle, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                BARKADELO WAFFLE
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Sticks, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                BARKADELO STICKS
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  scrollToComponent(this.Crepe, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                BARKADELO CREPE
              </Menu.Item>
            </Menu>

          {/* items  */}
          <div style={{marginLeft:'180px'}}>
            <section
              className='violet'
              ref={section => {
                this.Fresh = section;
              }}>
              <Header as='h3'>FRESH JUICES & COCKTAILS</Header>
              <Divider />
              <Fresh />
            </section>
            <Divider hidden />
            <section
              className='indigo'
              ref={section => {
                this.Soft = section;
              }}>
              <Header as='h3'>SOFT BEVERAGES</Header>
              <Divider />
              <Soft />
            </section>
            <Divider hidden />
            <section
              className='blue'
              ref={section => {
                this.IceCream = section;
              }}>
              <Header as='h3'>BARKADELO ICE CREAM</Header>
              <Divider />
              <IceCream />
            </section>
            <Divider hidden />
            <section
              className='green'
              ref={section => {
                this.IcedCoffe = section;
              }}>
              <Header as='h3'>ICED COFFE</Header>
              <Divider />
              <IcedCoffe />
            </section>
            <Divider hidden />
            <section
              className='yellow'
              ref={section => {
                this.Smoothies = section;
              }}>
              <Header as='h3'>SMOOTHIES & MILK SHAKE</Header>
              <Divider />
              <Smoothies />
            </section>
            <Divider hidden />
            <section
              className='orange'
              ref={section => {
                this.Coffe = section;
              }}>
              <Header as='h3'>BARKADELO’S SPEACIALTY COFFEE</Header>
              <Divider />
              <Coffe />
            </section>
            <Divider hidden />
            <section
              className='red'
              ref={section => {
                this.SomeHot = section;
              }}>
              <Header as='h3'>SOME LIKE IT HOT</Header>
              <Divider />
              <SomeHot />
            </section>
            <Divider hidden />
            <section
              className='red'
              ref={section => {
                this.Pancake = section;
              }}>
              <Header as='h3'>BARKADELO PANCAKE</Header>
              <Divider />
              <Pancake />
            </section>
            <Divider hidden />
            <section
              className='red'
              ref={section => {
                this.Dessert = section;
              }}>
              <Header as='h3'>BARKADELO DESSERT</Header>
              <Divider />
              <Dessert />
            </section>
            <Divider hidden />
            <section
              className='red'
              ref={section => {
                this.Waffle = section;
              }}>
              <Header as='h3'>BARKADELO WAFFLE</Header>
              <Divider />
              <Waffle />
            </section>
            <Divider hidden />
            <section
              className='red'
              ref={section => {
                this.Sticks = section;
              }}>
              <Header as='h3'>BARKADELO STICKS</Header>
              <Divider />
              <Sticks />
            </section>
            <Divider hidden />
            <section
              className='red'
              ref={section => {
                this.Crepe = section;
              }}>
              <Header as='h3'>BARKADELO CREPE</Header>
              <Divider />
              <Crepe />
            </section>
            </div>
      </div>
    );
  }
}

export default Menus;
