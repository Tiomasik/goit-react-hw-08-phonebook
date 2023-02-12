import { useAuth } from '../../hooks/useAuth'

import herro from '../../image/herro.png'
import herroUser from '../../image/homeUser.png'
import { Herro, Title, HerroImg, HerroImgUser, Button } from './Home.styled'

const Home = () => {
    const { isLoggedIn } = useAuth();
    
    return (
        <Herro>
            <div>
                {!isLoggedIn && <Title>Welcome to Phonebook</Title>}
                {!isLoggedIn && <Button to={`/register`}>GET STARTED!</Button>}
                {/* <Button to={`/register`}>GET STARTED!</Button>  */}
            </div>
            
            {!isLoggedIn && <HerroImg src={herro} alt="123" />}
            {isLoggedIn && <HerroImgUser src={herroUser} alt="123" />}
            
        </Herro>
    )
};

export default Home;