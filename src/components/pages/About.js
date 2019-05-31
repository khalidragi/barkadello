import React from 'react';
import { Container, Header, Icon, Divider, Grid } from 'semantic-ui-react';
const About = () => (
  <React.Fragment>
    <Container>
      <Divider horizontal>
        <Header size='medium'>What is Barkadello® ?</Header>
      </Divider>

      <Grid columns={3} divided textAlign='center'>
        <Grid.Row>
          <Grid.Column>
            <p>
              Barkadello® is the happiness-maker for all chocolate, sweets and
              coffee's lovers.
            </p>
          </Grid.Column>
          <Grid.Column>
            <p>
              Barkadello® is an Italian chocolate-based café chain has two
              existing branches in Saudi Arabia.
            </p>
          </Grid.Column>
          <Grid.Column>
            <p>
              Barkadello® is specialized in chocolate desserts, chocolate-dipped
              fruits, crepe, waffles and sweets all come through our exceptional
              dough, in addition to, the vast varieties of both hot and cold
              chocolate-based drinks and our distinguished beverages. All served
              to our customers in a very innovative way.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Divider hidden />
    <Divider hidden />
    <Container text>
      <Header as='h2' textAlign='center'>
        <Icon name='globe' />
        <Header.Content>Who Are We?</Header.Content>
      </Header>
      <p>
        International Italian brand. Already has 2 existing branches with an
        expansion plan to launch 3 more branches by Q2 2019.
      </p>
      <p>Highly professional staff and mouthwatering taste.</p>
      <Header as='h2' textAlign='center'>
        <Icon name='gem' />
        <Header.Content>Our Values?</Header.Content>
      </Header>
      <p>
        Creating a culture of happiness, warmth and friendship, where everyone
        is welcome.
      </p>
      <p>
        Using the best quality for every single component in our menu, with a
        strong audit of quality control.
      </p>
      <p>Being present, connecting with transparency, dignity and respect.</p>
      <p>
        Delivering our very best in all we do, holding ourselves accountable for
        results.
      </p>
      <p>
        Building high level of engagement with our customers, and believe in
        “make them happy is our responsibility".
      </p>

      <Header as='h2' textAlign='center'>
        <Icon name='industry' />
        <Header.Content>Our Quality?</Header.Content>
      </Header>
      <p>
        We are using premium and fresh components and materials -imported
        mostly- to prepare our products.
      </p>
      <p>
        Most of our products are prepared by our professional foreigner stuff
        with interesting show and art.
      </p>
      <p>
        Barkadello® has its own secret fresh dough coupled with the premium
        Belgian chocolate which distinguishes the taste far away from any rivals
        in the category.
      </p>
      <Header as='h2' textAlign='center'>
        <Icon name='clipboard' />
        <Header.Content>Our Service</Header.Content>
      </Header>
      <p>
        Our concept is to make people much happier through chocolate shots in
        new mixes with sweets, fruits, crepe, waffles and drinks.
      </p>
      <p>
        We prepares the entire menu at the front of the customer directly, which
        makes an interesting show specially the decoration of crepe and waffles
        or dipping the fruits in a 3 different big chocolate fountains.
      </p>
    </Container>
    <Divider hidden />
    <Divider hidden />
  </React.Fragment>
);

export default About;
