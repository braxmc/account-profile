import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class AccountForm extends Component {
  state = { username: '', membership: '' }
  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({ [name]: value })
  // }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault();
    // update the user;
  }

  render() {
    const { username, membership } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='username' 
          value={username} 
          onChange={this.handleChange}
          label='Username'
        />
        <Form.Select
          name='membership'
          value={membership}
          onChange={this.handleChange}
          options={membershipOpts}
          label='Membership Level'
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

const membershipOpts = [
  { key: 'b', text: 'Bronze', value: 'Bronze' },
  { key: 's', text: 'Silver', value: 'Silver' },
  { key: 'g', text: 'Gold', value: 'Gold' },
  { key: 'p', text: 'Platium', value: 'Platium' },
]

export default AccountForm;