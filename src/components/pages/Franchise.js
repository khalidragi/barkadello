import React from 'react'
import { Button, Form, Header, Divider, Container, Segment } from 'semantic-ui-react'

const FranchiseForm = () => (
  <Container text>
  <Header as='h1'>Franchise</Header>
    <Divider />
    <Segment raised>
    <Header as='h3'>Apply for Franchise</Header>
    <p>To apply for membership please complete all details</p>
    <Divider />
  <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Adress</label>
      <input placeholder='Adress line 1' />
    </Form.Field>
    <Form.Field>
      <label> </label>
      <input placeholder='Adress line 2' />
    </Form.Field>
     <Form.Group>
      <Form.Input placeholder='City' width={4} />
      <Form.Input placeholder='State / Province' width={4} />
    </Form.Group>
    <Form.Group>
      <Form.Input placeholder='Postal / Zip Code' width={4} />
      <Form.Input placeholder='Country' width={4} />
    </Form.Group>
    <Form.Field>
      <label>Email</label>
      <input placeholder='name@example.com' />
    </Form.Field>
    <Form.Field>
      <label>Contact Number</label>
      <input placeholder='+123 456789000' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  </Segment>
  </Container>
)

export default FranchiseForm