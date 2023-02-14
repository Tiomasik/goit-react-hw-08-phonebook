import { ToastContainer } from 'react-toastify';

import FormRegister from '../../components/FormRegister/FormRegister';
import register from '../../image/register.png';
import { Main, FormRegisterImg } from './Register.styled';

const Register = () => {
    return (
        <Main>
            <FormRegister />
            <FormRegisterImg src={register} alt="" />
            <ToastContainer autoClose={3000} />
        </Main>
    )
};

export default Register;