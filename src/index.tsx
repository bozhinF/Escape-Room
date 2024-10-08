import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';
import { checkLogin } from './store/user-slice/thunk';
import { Provider } from 'react-redux';
import { fetchAllQuests } from './store/quests-slice/thunk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkLogin());
store.dispatch(fetchAllQuests());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
