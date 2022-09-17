import axios from "axios";
import React, { useEffect, useState } from "react";
import { IPlayer } from "../../models/Player";
import PlayerBox from "../PlayerBox/PlayerBox";
import "./PlayerList.css"
function PlayerList()
{ 
    const[counter,setCounter]=useState(0);
    const[newPlayer,setNewPlayer]=useState<IPlayer>({
         
        name:"",
        email:"",
        username:"",
        password:"",
        health:0,
        gold:0,
        listofPlayer:[]
        });
    //this will be a list of IPlayer[]

    const [listOfPlayer ,setListofPlayer]=useState<IPlayer[]>([]);
        useEffect(()=>{
            axios.get<IPlayer[]>("http://localhost:8080/api/users")
            .then(response=>{
                console.log(response.data);
                setListofPlayer(response.data);
            })
        },[])//empaty asrray as second paratmer iwll prevent an infinite
    



    function handleButtonClick()
    {
        console.log("detected click from a component");
        setCounter(counter+1);
    }



    function UpdateName(event:React.ChangeEvent<HTMLInputElement>)
    {
        newPlayer.name=event.target.value;//get the value from input box
        //saveing the user intersaction with the input to our state
        setNewPlayer(newPlayer);
        console.log(newPlayer.name);
    }
    function UpdateEmail(event:any)
    {
        newPlayer.email=event.target.value;
        setNewPlayer(newPlayer);
    }

    function UpdateUserName(event:any)
    {
        newPlayer.username=event.target.value;
        setNewPlayer(newPlayer);
    }
    function UpdatePassword(event:any)
    {
        newPlayer.password=event.target.value;
        setNewPlayer(newPlayer);
    }
  
    function onSubmit(event:React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
       /* the way hooks detetc changes if the variable point change doing a push  */
        // listOfPlayer.push(newPlayer);
        setListofPlayer([...listOfPlayer,newPlayer]);
        console.log(listOfPlayer);
        //logic to do a post request and add the player object
        axios.post<IPlayer>("http//:localhost:8080/api/users",newPlayer)
        .then(response=> {
            console.log(response);
        })
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
            <label>Email </label>
            <input type="text"onChange={UpdateEmail}/>
            <label>UserName </label>
            <input type="text"onChange={UpdateUserName}/> 
            <label>Password </label>
            <input type="text"onChange={UpdatePassword}/><div></div>
           
            <input className="btn"type ="Submit" value ="Register "/>
          </form>


          <h3>Player List</h3>
          <div className="list-grid">
                {
                    listOfPlayer.map((player)=>{
                        return <PlayerBox key={player.id}{ ...player} counter={counter}onButtonClick={handleButtonClick}/>
                    })
                }
          </div>
         </div>
        </div>

}
export default PlayerList;