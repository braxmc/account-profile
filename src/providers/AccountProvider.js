import React, { Component } from 'react';

// set up the initial context
export const AccountContext = React.createContext();

// exportable consumer for us to use i other components
export const AccountConsumer = AccountContext.Consumer;

// Create provider where the global stuff lives 
class AccountProvider extends Component {
  state = { 
    username: 'Blue player Imposter', 
    dateJoined: '12/12/12', 
    membership: 'Silver'
  }

  updateAccount = (account) => {
    this.setState({ ...account })
  }

  render() {
    return(
      <AccountContext.Provider value={{
        ...this.state,
        updateAccount: this.updateAccount
      }}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;