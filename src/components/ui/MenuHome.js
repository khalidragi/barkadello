import React from 'react';
import { Grid, Header, Image, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import photo from '../assets/images/strawberry.jpg';

const MenuHome = () => (
  <Grid stackable verticalAlign='middle'>
    <Grid.Column width={5} style={{ textAlign: 'center' }}>
      <Header as='h2'>
        Our concept is to make people much happier through chocolate shots in
        new mixes with sweets, fruits, crepe, waffles and drinks.
      </Header>
      <Button as={Link} to='/menus' color='youtube'>
        <Icon name='clipboard' /> Check Our Menu..
      </Button>
    </Grid.Column>
    <Grid.Column width={11}>
      <Image src={photo} alt='strawberry' />
    </Grid.Column>
  </Grid>
);

export default MenuHome;
