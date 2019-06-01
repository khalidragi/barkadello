import React, { Component } from 'react';
import {
  Icon,
  Image,
  Card,
  Container,
  Header,
  Divider,
  Grid,
  Segment
} from 'semantic-ui-react';
import ContactForm from '../ui/Form';
import Img3 from '../assets/images/contact.jpg';

class Contact extends Component {
  state = {
    stores: [
      {
        location: 'ITALY',
        adress: 'Balsama N 10 Cinisello Milano 20092',
        phone: '+39 3922297734',
        mobile: '+39 3666765387',
        img: 'https://cdn.cobone.com/deals/sau/87487/big-87487-sss.jpg?v=31',
        id: 1
      },
      {
        location: 'EGYPT',
        adress: '501 Springs Compound Sheraton',
        phone: '+2 01032733055',
        mobile: '+2 01098407382',
        img: 'https://cdn.cobone.com/deals/sau/87487/big-87487-s4.jpg?v=31',
        id: 2
      },
      {
        location: 'SAUDI ARABIA',
        adress: 'Prince Mohamed Bin Fahd branch road Dammam',
        phone: '+966 543030022',
        mobile: '+966 545366699',
        img: 'https://cdn.cobone.com/deals/sau/87487/big-87487-s2.jpg?v=31',
        id: 3
      }
    ]
  };
  render() {
    return (
      <Container>
        <Divider hidden />
        <Header size='large'>Our Stores are Near</Header>
        <Divider />
        <Grid stackable columns={3}>
          {this.state.stores.map(store => (
            <Grid.Column>
              <Card>
                <Image src={store.img} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{store.location}</Card.Header>
                  <Card.Description>{store.adress}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <span>
                    <Icon name='phone' />
                    {store.phone}
                  </span>

                  <span>
                    <Icon name='mobile alternate' />
                    {store.mobile}
                  </span>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>

        <Divider hidden />
        <Divider />
        <Grid stackable columns={2}>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>
                <ContactForm />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src={Img3} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Contact;
