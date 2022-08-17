import { GlobalStyle } from '../GlobalStyle';
import { Component } from 'react';
import { InputForm } from '../InputForm/Form';
import { ContactList } from '../ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
// import { Box } from '../Box';
import { Phonebook } from './App.styled';



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
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Phonebook >
        <h1>Phonebook</h1>
        <InputForm addNewContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} 
          onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onRemoveClick={this.deleteContact}
        />
        <GlobalStyle />
      </Phonebook>
    );
  }
}
