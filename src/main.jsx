import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Router';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </StrictMode>
);
