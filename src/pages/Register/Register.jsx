import FormRegister from '../../components/FormRegister/FormRegister';
import register from '../../image/register.png';
import { Main, FormRegisterImg } from './Register.styled';

const Register = () => {

    return (
        <Main>
            <FormRegister />
            <FormRegisterImg src={register} alt="" />
        </Main>
    )
};

export default Register;