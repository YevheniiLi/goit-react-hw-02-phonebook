// import { GlobalStyle } from "./GlobalStyle";
// import { Box } from "./Box";

import { Component } from 'react';
import { InputForm } from './Form/Form';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  addNewContact = ({ name, number }) => {
    let newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already exist in your contacts!`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };



    deleteContact = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contact.filter(contact => contact.id !==contactId),
      }))
    }
 

    

 

  render() {
    return (
      <>
      <h1>Phonebook</h1>
      <InputForm onSubmit={this.addNewContact}/>
       <h1>Contacts</h1>
      </>
    );
  }
}















// addContact = text => {
//   console.log(text);
// }


 
// handlerFormSubmit = data => {
//   console.log(data);
// }
 

// render() {
//   return (
//     <>
//     <InputForm />
//       {/* <h1>Phonebook</h1>
//       <Form 
//        onSubmit={this.handlerFormSubmit}
       
// /> */}
//     </>
//   );
// }
// }