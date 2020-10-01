import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import AccountProvider from './providers/AccountProvider';
ReactDOM.render(
  <React.StrictMode>
    <AccountProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AccountProvider>
  </React.StrictMode>,
  document.getElementById('root')
);