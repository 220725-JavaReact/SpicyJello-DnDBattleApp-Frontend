import React, { useEffect, useState } from "react";
import { IPlayer } from "../../models/Player";
import PlayerBox from "../PlayerBox/PlayerBox";
import "./PlayerList.css"
function PlayerList()
{ 
    const[counter,setCounter]=useState(0);
    const[newPlayer,setNewPlayer]=useState<IPlayer>({
        damage:0,
        health:0,
        img:"",
        level:0,
        name:""
        });
    //this will be a list of IPlayer[]

    const [listOfPlayer ,setListofPlayer]=useState<IPlayer[]>([ ]);
        useEffect()={
            
        }

    function UpdateName(event:React.ChangeEvent<HTMLInputElement>)
    {
        newPlayer.name=event.target.value;//get the value from input box
        //saveing the user intersaction with the input to our state
        setNewPlayer(newPlayer);
        console.log(newPlayer.name);
    }
    function UpdateLevel(event:any)
    {
        newPlayer.level=event.target.value;
        setNewPlayer(newPlayer);
    }

    function UpdateHealth(event:any)
    {
        newPlayer.health=event.target.value;
        setNewPlayer(newPlayer);
    }
    function UpdateDamage(event:any)
    {
        newPlayer.damage=event.target.value;
        setNewPlayer(newPlayer);
    }
    function UpdateImage(event:any)
    {
        newPlayer.damage=event.target.value;
        setNewPlayer(newPlayer);
    }

    function onSubmit(event:React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
       /* the way hooks detetc changes if the variable point change doing a push  */
        // listOfPlayer.push(newPlayer);
        setListofPlayer([...listOfPlayer,newPlayer]);
        console.log(listOfPlayer);
    }
/**
 * step by stp proces to make react forms work in react 
 * -each input will be attached t oa function
 */
    return <div>
        <div>
         <h3 className="addplayer">Add Player</h3>
        <form className="form-grid" onSubmit={onSubmit}>
            <label>Name </label>
            <input type="text" onChange={UpdateName}/>
            <label>level </label>
            <input type="number"onChange={UpdateLevel}/>
            <label>damage </label>
            <input type="number"onChange={UpdateDamage}/>        
            <label>health </label>
            <input type="text"onChange={UpdateHealth}/>
            <label>Image </label>
            <input type="text"onChange={UpdateImage}/><div></div>
           
            <input className="btn"type ="Submit" value ="Submit "/>
          </form>
          <h3>Player List</h3>
          <div className="list-grid">
                {
                    listOfPlayer.map((player)=>{
                        return <PlayerBox key={player.name}{ ...player}/>
                    })
                }
          </div>
         </div>
        </div>

}
export default PlayerList;