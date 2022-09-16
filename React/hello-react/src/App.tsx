import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerBox from './components/PlayerBox/PlayerBox';
import { IPlayer } from './models/Player';
import Counter from './components/Counter/Counter';

function App() {
  const playerObj1:IPlayer={

    damage :123,
    health:548,
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
    level: 10,
    name: "Mortes"
  }
const listOfPlayer:IPlayer[]=[
{
 
  damage:80,
  health:100,
  img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
  level: 20,
  name:"Abra"
},
{
  damage:100,
  health:20,
  img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
  level:15,
  name:"Ekans"
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
      <PlayerBox damage={150} health= {100} img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" level={10} name="Pikachu" /> 
     

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
