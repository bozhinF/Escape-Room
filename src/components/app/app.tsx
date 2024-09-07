import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import BookingPage from '../../pages/booking-page';
import ContactsPage from '../../pages/contacts-page';
import LoginPage from '../../pages/login-page';
import MyQuestsPage from '../../pages/my-quests-page';
import QuestsPage from '../../pages/quest-page';
import { PrivateRoute, PublicRoute } from '../access-route/access-route';
import Layout from '../layout/layout';

const authorizationStatus = AuthorizationStatus.Auth;

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Layout authorizationStatus={authorizationStatus} />}
        >
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Booking} element={<BookingPage />} />
          <Route path={AppRoute.Contacts} element={<ContactsPage />} />
          <Route
            path={AppRoute.Login}
            element={
              <PublicRoute authorizationStatus={authorizationStatus}>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path={AppRoute.MyQuests}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyQuestsPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Quests} element={<QuestsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
