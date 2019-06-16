import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FranchiseForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
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
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field><Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>email</label>
      <input placeholder='name@example.com' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default FranchiseForm