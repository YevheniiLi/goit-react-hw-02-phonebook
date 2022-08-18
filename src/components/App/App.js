import { GlobalStyle } from '../GlobalStyle';
import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
import { Phonebook } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addNewContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    if (
      this.state.contacts
        .map(contact => {
          return contact.name;
        })
        .includes(newContact.name)
    ) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newContact] };
      });
      actions.resetForm();
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm value={this.state} onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onRemoveClick={this.deleteContact}
        />
        <GlobalStyle />
      </Phonebook>
    );
  }
}
