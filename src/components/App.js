import React, { Component } from 'react';
import { connect } from 'react-redux';
import phonebookOperations from '../redux/phonebook/phonebook-operations';
import Wrapper from './Wrapper/Wrapper';
import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import styles from './App.module.css';

export class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Wrapper>
        <div>
          <Title />
          <div className={styles.container}>
            <ContactForm />
            <div className={styles.contactsListContainer}>
              <Filter />
              <ContactList />
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
