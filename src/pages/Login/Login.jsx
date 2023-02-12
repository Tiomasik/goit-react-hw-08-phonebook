import FormLogin from '../../components/FormLogin/FormLogin';
import { Main, FormLoginImg } from './Login.styled';
import login from '../../image/login.png';

const Login = () => {

        return (
            <Main>
                <FormLogin />
                <FormLoginImg src={login} alt="" />
            </Main>
        )
    };

export default Login;