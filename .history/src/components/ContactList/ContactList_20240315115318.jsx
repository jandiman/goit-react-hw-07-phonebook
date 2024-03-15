import { ContactListItem } from 'components/ContactList/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/contactsSelector';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';
import { UseDispatch } from 'react-redux';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul>
      {filteredContacts.map(filteredContact => (
        <ContactListItem
          key={filteredContact.id}
          filteredContact={filteredContact}
        />
      ))}
    </ul>
  );
};
