import { Link, NavLink, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import SignUser from '../sign-user/sign-user';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
};

function Header({ authorizationStatus }: HeaderProps): JSX.Element {
  const { pathname } = useLocation();
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const isMainPage = pathname === AppRoute.Main;

  return (
    <header className="header">
      <div className="container container--size-l">
        {isMainPage ? (
          <span className="logo header__logo">
            <svg width="134" height="52" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </span>
        ) : (
          <Link
            className="logo header__logo"
            to={AppRoute.Main}
            aria-label="Перейти на Главную"
          >
            <svg width="134" height="52" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </Link>
        )}
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <NavLink className="link not-disabled" to={AppRoute.Main}>
                Квесты
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink className="link" to={AppRoute.Contacts}>
                Контакты
              </NavLink>
            </li>
            {isAuthorized && (
              <li className="main-nav__item">
                <NavLink className="link" to={AppRoute.MyQuests}>
                  Мои бронирования
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <div className="header__side-nav">
          <SignUser />
          <a
            className="link header__side-item header__phone-link"
            href="tel:88003335599"
          >
            8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
