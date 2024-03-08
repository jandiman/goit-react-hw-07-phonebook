import { ContactListItem } from 'components/ContactList/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectContact } from '../../redux/contacts/contactsSelector';
import { selectFilter } from '../../redux/filter/filterSelector';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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
