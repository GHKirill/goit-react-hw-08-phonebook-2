import {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from 'redux/contacts/services';

const ContactsPage = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  console.log('data:', data);

  // const [addContact, { isLoading, error }] = useAddContactMutation();
  // const fetchRequest = async () => {
  //   const result = await addContact({ name: 'john', number: '123-12-1234' });
  //   console.log(result);
  // };
  //fetchRequest();

  return <h1>Contacts</h1>;
};

export default ContactsPage;
