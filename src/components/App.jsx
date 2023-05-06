import React, { Component } from 'react'
import { ContactForm } from './ContactForm/ContactForm'
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList'
import { Titleh1, Titleh2, Phonebook } from './App.styled'


export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  addContact = (contact) => {
    this.setState (({ contacts }) => ({
      contacts: [...contacts, contact],
    }))
  }

  changeFilter = (el) => {
    this.setState(
      {filter: el.target.value}
    )
  }

  handleFilterContact = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase()
    .includes(this.state.filter.toLowerCase().trim()));
  }

  deleteContact = (contactId) => {
      this.setState(prevState => {
        return {
          contacts: prevState.contacts.filter((contact) => contact.id !== contactId)
        }
      })
  }

  render() {
    const state = this.state;
    return (
      <Phonebook>
        <Titleh1>Phonebook</Titleh1>
        <ContactForm addContact={this.addContact} contacts={state.contacts} />
        <Titleh2>Contacts</Titleh2>
        <Filter value={state.filter} onChange={this.changeFilter}/>
        <ContactList visibleListContacts={this.handleFilterContact()} deleteContact={this.deleteContact} />
      </Phonebook>
    )
  }
}
