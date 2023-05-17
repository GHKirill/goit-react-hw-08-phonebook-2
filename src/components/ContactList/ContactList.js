import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
//import { useGetContactsQuery } from 'redux/services';
import { useGetContactsQuery } from 'redux/contacts/services';
import { Loader } from 'components/ContactForm/Loader/Loader';

export default function ContactList() {
  const filter = useSelector(state => state.filter);
  const { data, error, isLoading } = useGetContactsQuery();

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <div> Error. Unfortunatly we can't get information from server</div>
      )}
      {data?.length && (
        <ul className={css.contactList}>
          {data
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <li key={id} className={css.contactItem}>
                <ContactItem
                  className={css.contactItem}
                  name={name}
                  phone={number}
                  id={id}
                />
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
