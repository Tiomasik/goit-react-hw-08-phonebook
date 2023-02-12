import { Header, Link } from './AppBar.styled'
import { useAuth } from '../../hooks/useAuth'
import { UserMenu } from '../UserMenu/UserMenu'

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
  return (
      <Header>
      <nav>
        <div>
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </div>
          <div>
            {!isLoggedIn && <Link to="/register">Register</Link>}
            {!isLoggedIn && <Link to="/login">Login</Link>}
            {isLoggedIn && <UserMenu/>}
        </div> 
        </nav> 
      </Header>
  );
};