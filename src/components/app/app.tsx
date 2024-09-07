import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page';
import { AppRoute } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import BookingPage from '../../pages/booking-page';
import ContactsPage from '../../pages/contacts-page';
import LoginPage from '../../pages/login-page';
import MyQuestsPage from '../../pages/my-quests-page';
import QuestsPage from '../../pages/quest-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Booking} element={<BookingPage />} />
        <Route path={AppRoute.Contacts} element={<ContactsPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.MyQuests} element={<MyQuestsPage />} />
        <Route path={AppRoute.Quests} element={<QuestsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
