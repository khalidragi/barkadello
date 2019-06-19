import React from 'react';
import { Container, Header, Icon, Divider, Grid } from 'semantic-ui-react';
const About = () => (
  <React.Fragment>
    <Container text>
    <Header as='h1' textAlign='center'>
    About Us
    </Header>
    <Divider />

      <Header as='h2' textAlign='center'>
        <Icon name='globe' />
        <Header.Content>Who Are We?</Header.Content>
      </Header>
      <p>
        Barkadello® is the happiness-maker for all chocolate, sweets andcoffee's lovers.
      </p>
        <p>Barkadello® is specialized in chocolate desserts, chocolate-dipped
              fruits, crepe, waffles and sweets all come through our exceptional
              dough, in addition to, the vast varieties of both hot and cold
              chocolate-based drinks and our distinguished beverages. All served
              to our customers in a very innovative way.</p>
      <Header as='h2' textAlign='center'>
        <Icon name='eye' />
        <Header.Content>Our Vision</Header.Content>
      </Header>
      <p>
        To be the first choice brand in all chocolate and sweet lovers' mind through the
        delicious taste and exceptional products and mistures, which will lead us to be the fastest
        growing international chocolate-based cafe franchise globally and deliver this awesome taste coupled
        with a very big smile, over the world.
      </p>
      <Header as='h2' textAlign='center'>
        <Icon name='trophy' />
        <Header.Content>Our Mission</Header.Content>
      </Header>
      <p>To make Barkadello® one of the most favored and growing chocolate-based brand in the Middle East, with an ambitious
      plan for expansion in the region.
      </p>
    </Container>
    <Divider hidden />
    <Divider hidden />
  </React.Fragment>
);

export default About;
