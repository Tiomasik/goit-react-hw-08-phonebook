import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { ImExit } from "react-icons/im";

import { User, IconSmile } from './UserMenu.styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <User>
      <p><IconSmile/><span>Welcome, {user.name}!</span></p>
      <button type="button" onClick={() => dispatch(logOut())}><ImExit/>
        Logout
      </button>
    </User>
  );
};