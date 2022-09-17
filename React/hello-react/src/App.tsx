import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerBox from './components/PlayerBox/PlayerBox';
import { IPlayer } from './models/Player';
import Counter from './components/Counter/Counter';
import { Login } from '@mui/icons-material';

function App() {
  const playerObj1:IPlayer={
    id:1,
    name:"wint",
    health:100,
    username: "wint",
    email :"wint@gamil.com",
    password:"wintkayt",
    gold:100
      }
const listOfPlayer:IPlayer[]=[
{
  id:2,
  name:"wint",
  health:100,
  username: "wint",
  email :"wint@gamil.com",
  password:"wintkayt",
  gold:100
  },
{
  id:3,
  name:"kay",
  health:100,
  username: "wint",
  email :"wint@gamil.com",
  password:"wintkayt",
  gold:100
  
}
]

const helloworldElement =<div> This is a element inside a variable ??</div>
const somestring  ="This is a varibale ts being displayed"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{somestring}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {helloworldElement}
      {somestring}
      <PlayerBox health={100} gold={100} username="kay" password="kay" name="Pikachu" email='win@gmail.com' id={4}/> 
      

    { /** list = [1,2,3,4] 
     * list .map((element) => {
     * element *2})
     * consloe.log(list)
     * something problematic with react when it comes to displaying lists using a mp
     * you must supply key attribute for each item
     * generally just using some uiquely identifiable property in the list will be perfect (ex:id)
    */}
      
      <PlayerBox {...playerObj1}/>
      {
        listOfPlayer.map((player) => {
          return <PlayerBox key ={player.name}{...player}/>
        })
      }
      <Counter/>
    </div>
  );
}

export default App;
