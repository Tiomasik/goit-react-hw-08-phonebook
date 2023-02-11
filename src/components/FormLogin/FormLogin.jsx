import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';

const initialValues = {
  email: '', password: ''
}

const schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().min(7).max(12),
});

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

const FormLogin = () => {
  const dispatch = useDispatch();

  const handlSubmit = (value, { resetForm }) => {
    const { email, password } = value
    const arrayContact = { email, password }
    
    console.log(arrayContact)
    dispatch(
      logIn(arrayContact)
    );
    resetForm()  
  }

        return (
            <>
                <h2>I am LogIn-page</h2>
                <Formik initialValues={initialValues} onSubmit={handlSubmit} validationSchema={schema}>
                    <Form>
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
                        <button type='submit'>Log In</button>
                    </Form>
                </Formik>
            </>
        )
    };

export default FormLogin;