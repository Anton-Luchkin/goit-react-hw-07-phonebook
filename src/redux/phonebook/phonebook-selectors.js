import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getItems,
  getFilter,
  getVisibleContacts,
};
