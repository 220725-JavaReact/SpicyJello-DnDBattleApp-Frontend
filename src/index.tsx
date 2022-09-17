import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import LoginBox from './components/LoginBox/LoginBox';
import { Provider } from 'react-redux';
import { store } from './shared/Redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexBox from './components/IndexBox/IndexBox';
import RegistrationBox from './components/RegistrationBox/RegistrationBox';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexBox />} />
          <Route path="/login" element={<LoginBox />} />
          <Route path="/register" element={<RegistrationBox />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
