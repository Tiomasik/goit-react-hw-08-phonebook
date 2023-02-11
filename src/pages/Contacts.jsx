import { useSelector } from "react-redux";

import { gettIsLoading, getError } from "redux/contacts/selectors";
import Form from '../components/Form/Form';
import { ContactList } from '../components/ContactList/ContactList'
import Filter from '../components/Filter/Filter'
import { ContactsWraper } from './Contacts.styled'
import  Loader  from  '../components/Loader/Loader'


  
const Contacts = () => {
  const isLoading = useSelector(gettIsLoading);
  const error = useSelector(getError);

  return (
    <ContactsWraper>
      <Form />
      <Filter />
      <ContactList />
      {isLoading && !error && <Loader/>}
    </ContactsWraper>
  )
};

export default Contacts;