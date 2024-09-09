import { Outlet } from 'react-router-dom';
import { AuthorizationStatus } from '../../const/const';
import Header from '../header/header';
import Footer from '../footer/footer';

type LayoutProps = {
  authorizationStatus: AuthorizationStatus;
};

function Layout({ authorizationStatus }: LayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      <Header authorizationStatus={authorizationStatus} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
