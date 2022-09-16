import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PlayerBox from './components/PlayerBox/PlayerBox';
import PlayerList from './components/PlayerList/PlayerList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Store } from '@mui/icons-material';
import NavBar from './Shared/NavBar/NavBar';
import { Provider } from 'react-redux';
import { store } from './Shared/Redux/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
 {/* <App />*/}
 
{/*<PlayerList/>*/}
<Provider store={store}>
  
<BrowserRouter>
<NavBar/>


<Routes>
  <Route path="/" element ={<App/>}/>
  {/**<app/> */}
  <Route path="/playerlist" element ={<PlayerList/>}/>
  <Route path="/login" element ={<Login/>}/>
  
</Routes>
</BrowserRouter>
</Provider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
