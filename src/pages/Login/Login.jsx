import { ToastContainer } from 'react-toastify';

import FormLogin from '../../components/FormLogin/FormLogin';
import { Main, FormLoginImg } from './Login.styled';
import login from '../../image/login.png';

const Login = () => {

        return (
            <Main>
                <FormLogin />
                <FormLoginImg src={login} alt="" />
                <ToastContainer autoClose={3000} />
            </Main>
        )
    };

export default Login;