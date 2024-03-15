import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filterSelector';

export const selectContacts = state => state.filter.items;
export const selectError = state => state.filter.error;
export const selectIsLoading = state => state.filter.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      // name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
