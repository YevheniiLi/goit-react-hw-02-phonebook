// import { GlobalStyle } from "./GlobalStyle";
// import { Box } from "./Box";

import { Component } from 'react';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

 
handlerFormSubmit = data => {
  console.log(data);
}
 

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handlerFormSubmit} />
      </>
    );
  }
}
