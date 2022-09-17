import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PlayerList from './components/PlayerList/PlayerList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, MoneySharp, Store } from '@mui/icons-material';
import NavBar from './Shared/NavBar/NavBar';
import { Provider } from 'react-redux';
import { store } from './Shared/Redux/store';
import LogIn from './components/LogIn/LogIn';
import WeaponList from './components/WeaponList/WeaponList';
import MonsterList from './components/MonsterList/MonsterList';
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
  <Route path ="/playerlogin" element={<LogIn/>}/>
  <Route path="/playerlist" element ={<PlayerList/>}/>
  <Route path="/weapon" element ={<WeaponList/>}/>
  <Route path="/monster" element ={<MonsterList/>}/>

</Routes>

</BrowserRouter>
</Provider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
