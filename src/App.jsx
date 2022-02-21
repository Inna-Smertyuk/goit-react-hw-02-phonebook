import React, { Component } from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleForm = ({ name, number }) => {
    const { contacts } = this.state;
    const findContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findContact) {
      return alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [{ name, number, id: nanoid() }, ...contacts],
      }));
    }
  };

  changeFilter = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  render() {
    const { filter } = this.state;
    const filterByContacts = this.filterContacts();

    return (
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleForm} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filterByContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
