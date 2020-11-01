import React from 'react';
import { connect } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';

import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Contact from './Contact/Contact';

import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2 className={styles.contactTitle}>Contacts</h2>
      <TransitionGroup component="ul" className={styles.contact_list}>
        {contacts.map(({ id, ...props }) => {
          return (
            <CSSTransition key={id} classNames={styles} timeout={250}>
              <li className={styles.contact}>
                <Contact
                  onDeleteContact={() => onDeleteContact(id)}
                  {...props}
                />
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
