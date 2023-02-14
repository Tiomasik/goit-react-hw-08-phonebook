import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { gettIsLoading, getError } from "redux/contacts/selectors";
import Form from '../../components/Form/Form';
import { ContactList } from '../../components/ContactList/ContactList'
import Filter from '../../components/Filter/Filter'
import { ContactsWraper, FormImg } from './Contacts.styled'
import Loader from '../../components/Loader/Loader'
import  contactUser  from  '../../image/contactUser.png'


  
const Contacts = () => {
  const isLoading = useSelector(gettIsLoading);
  const error = useSelector(getError);

  return (
    <ContactsWraper>
      <FormImg src={contactUser} alt="" />
      <Form />
      <Filter />
      <ContactList />
      {isLoading && !error && <Loader />}
      <ToastContainer autoClose={3000} />
    </ContactsWraper>
  )
};

export default Contacts;