import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';
import { StyleForm } from './FormRegister.styled';

const initialValues = {
  name: '', email: '', password: ''
}

const schema = yup.object().shape({
    name: yup.string().matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/).required(),
    email: yup.string().email(),
    password: yup.string().min(7).max(12),
});

const FormErrorName = ({ name }) => {
  return (
    <ErrorMessage name={name} component='div'
      render={() => <div>Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan</div>} />
  )
}

const FormErrorMail = ({ name }) => {
  return (
    <ErrorMessage name={name} component='div'
      render={() => <div>Mail must be valid</div>} />
  )
}

const FormErrorPassword = ({ name }) => {
  return (
    <ErrorMessage name={name} component='div'
      render={() => <div>Length password must be 7-12 symbols</div>} />
  )
}

const FormRegister = () => {
  const dispatch = useDispatch();

  const handlSubmit = (value, { resetForm }) => {
    const { name, email, password } = value
    const arrayContact = { name, email, password }
    
    dispatch(
      register(arrayContact)
    );
    resetForm()  
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handlSubmit} validationSchema={schema}>
      <StyleForm>
        <Field  
          name="name"
          placeholder="User name"
        />
        <FormErrorName name="name"/>
        <Field
          name="email"
          placeholder="Mail"
        />
        <FormErrorMail name="email" />
        <Field
          name="password"
          type="password"
          placeholder="Password"
        />
        <FormErrorPassword name="password" />
        <button type='submit'>Register</button>
      </StyleForm>
    </Formik>
  )
};

export default FormRegister;