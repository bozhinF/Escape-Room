import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import Loader from '../loader/loader';

type AccessRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function createAccessRoute(
  statusToCheck: AuthorizationStatus,
  fallbackPath: AppRoute
) {
  return function AccessRoute({
    authorizationStatus,
    children,
  }: AccessRouteProps) {
    const status = authorizationStatus;
    switch (status) {
      case statusToCheck:
        return children;
      case AuthorizationStatus.Unknown:
        return <Loader />;
      default:
        return <Navigate to={fallbackPath} />;
    }
  };
}

const PrivateRoute = createAccessRoute(
  AuthorizationStatus.Auth,
  AppRoute.Login
);
const PublicRoute = createAccessRoute(
  AuthorizationStatus.NoAuth,
  AppRoute.Main
);

export { PrivateRoute, PublicRoute };
