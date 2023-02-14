import { Header, Link } from './AppBar.styled'
import { useAuth } from '../../hooks/useAuth'
import { UserMenu } from '../UserMenu/UserMenu'
import { ImHome3, ImPhone, ImEnter, ImUsers } from "react-icons/im";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
  return (
      <Header>
      <nav>
        <div>
          <Link to="/"><ImHome3/>Home</Link>
          {isLoggedIn && <Link to="/contacts"><ImPhone/>Contacts</Link>}
        </div>
          <div>
            {!isLoggedIn && <Link to="/register"><ImUsers/>Register</Link>}
            {!isLoggedIn && <Link to="/login"><ImEnter/>Login</Link>}
            {isLoggedIn && <UserMenu/>}
        </div> 
        </nav> 
      </Header>
  );
};