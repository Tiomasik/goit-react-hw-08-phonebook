import { Header, Link } from './AppBar.styled'
import { useAuth } from '../../hooks/useAuth'
import { UserMenu } from '../UserMenu/UserMenu'

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
  return (
      <Header>
        <nav>
            <Link to="/">Home</Link>
            {!isLoggedIn && <Link to="/register">Register</Link>}
            {!isLoggedIn && <Link to="/login">Login</Link>}
            {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </nav>
            {isLoggedIn && <UserMenu/>}  
      </Header>
  );
};