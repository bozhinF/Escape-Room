import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserStatus } from '../../store/user-slice/selectors';
import { logout } from '../../store/user-slice/thunk';

function SignIn(): JSX.Element {
  return (
    <Link
      className="btn header__side-item header__login-btn"
      to={AppRoute.Login}
    >
      Вход
    </Link>
  );
}

function SignOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleLogoutClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    dispatch(logout());
  };
  return (
    <Link
      className="btn btn--accent header__side-item"
      to="#"
      onClick={handleLogoutClick}
    >
      Выйти
    </Link>
  );
}

function SignUser(): JSX.Element {
  const userStatus = useAppSelector(getUserStatus);

  return userStatus === AuthorizationStatus.Auth ? <SignOut /> : <SignIn />;
}

export default SignUser;
