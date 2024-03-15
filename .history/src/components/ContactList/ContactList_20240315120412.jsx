import { ContactListItem } from './ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/contactsSelector';
import { fetchContacts } from '../../redux/contacts/contactsOperation';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error && <Loader />}
      {!isLoading && !error && filteredContacts.length === 0 && (
        <p>The Phonebook is empty. Please add a contact</p>
      )}
      {!isLoading &&
        !error &&
        filteredContacts > 0 &&
        filteredContacts.map(filteredContact => (
          <ContactListItem
            key={filteredContact.id}
            filteredContact={filteredContact}
          />
        ))}
    </ul>
  );
};
