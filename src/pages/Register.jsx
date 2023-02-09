import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '', mail: '', password: ''
}

const schema = yup.object().shape({
    name: yup.string().matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/).required(),
    mail: yup.string().email(),
    password: yup.string().min(5).max(10),
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
      render={() => <div>Length password must be 5-10 symbols</div>} />
  )
}

const Register = () => {

    const handlSubmit = (value, { resetForm }) => {
    const { name, mail, password } = value
    const arrayContact = { name, mail, password }
    
    console.log(arrayContact)
    resetForm()  
  }

        return (
            <main>
                <h2>I am Register-page</h2>
                <Formik initialValues={initialValues} onSubmit={handlSubmit} validationSchema={schema}>
                    <Form>
                    <Field  
                        name="name"
                        placeholder="User name"
                    />
                    <FormErrorName name="name"/>
                    <Field
                        name="mail"
                        placeholder="Mail"
                    />
                        <FormErrorMail name="mail" />
                    <Field
                        name="password"
                        placeholder="Password"
                    />
                        <FormErrorPassword name="password" />
                        <button type='submit'>Register</button>
                    </Form>
                </Formik>
            </main>
        )
    };

export default Register;