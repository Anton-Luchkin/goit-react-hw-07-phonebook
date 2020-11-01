import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-actions';
import axios from 'axios';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('http://localhost:2000/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('http://localhost:2000/contacts', { name, number })
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
