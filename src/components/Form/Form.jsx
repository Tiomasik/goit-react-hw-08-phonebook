import { Formik, Field, ErrorMessage  } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getContacts } from "redux/contacts/selectors";
import { StyleForm } from './Form.styled'
import { addContact } from "redux/contacts/operations";

const initialValues = {
  name: '', number: ''
}

const schema = yup.object().shape({
  name: yup.string().matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/).required(),
  number: yup.number().required().integer(),
});

const FormErrorName = ({ name }) => {
  return (
    <ErrorMessage name={name} component='div'
      render={() => <div>Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan</div>} />
  )
}

const FormErrorNumber = ({ name }) => {
  return (
    <ErrorMessage name={name} component='div'
      render={() => <div>Phone number must be digits and can contain spaces, dashes, parentheses and can start with +</div>} />
  )
}

const FormSubmit = () => {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch();
  const handlSubmit = (value, { resetForm }) => {
    const { name, number } = value
    const arrayContact = { name, number }

    if (!(contacts.filter(contact => contact.name.toLowerCase() === arrayContact.name.trim().toLowerCase())).length) {
      resetForm()
      return dispatch(addContact(arrayContact))
    } else alert(`${arrayContact.name} is already in contacts`)
    resetForm()  
  }

  return (
    <>      
      <Formik initialValues={initialValues} onSubmit={handlSubmit} validationSchema={schema}>
        <StyleForm>
          <Field  
            name="name"
            placeholder="Name"
          />
          <FormErrorName name="name"/>
          
          <Field
            name="number"
            placeholder="Phone number"
          />
          <FormErrorNumber name="number"/>
          <button type='submit'>Add Contact</button>
        </StyleForm>
      </Formik>
    </>    
  );
}

export default FormSubmit;