// import { GlobalStyle } from "./GlobalStyle";
// import { Box } from "./Box";

import { Component } from 'react';
import { InputForm } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };


// addContact = text => {
//   console.log(text);
// }


 
// handlerFormSubmit = data => {
//   console.log(data);
// }
 

  render() {
    return (
      <>
      <InputForm />
        {/* <h1>Phonebook</h1>
        <Form 
         onSubmit={this.handlerFormSubmit}
         
         /> */}
      </>
    );
  }
}
