import axios from "axios";
import { useEffect, useState } from "react";
import { IMonster } from "../MonsterBox/MonsterBox";

function MonsterList()
{

    const [Counter,setCounter]=useState(0);
    const [newMonster,setNewMonster]=useState<IMonster>({
        id: 0,
        Gameid: 0,
        Source:"",
        Modifier:"",
        listofMonsters:[]


    });
const[listofMonsters,setListofMonster]=useState<IMonster[]>([]);
useEffect(()=>{
    axios.get<IMonster[]>("")
    .then(response=>{
        console.log(response.data);
        setListofMonster(response.data);
        })
},[])

function handleButtonClick()
{
    console.log("detected click form compornent ");
    setCounter(Counter+1);

}
function UpdatSource(event:React.ChangeEvent<HTMLInputElement>)
{
 newMonster.Source =event.target.value;
 setNewMonster(newMonster);
 console.log(newMonster.Source);
}
function UpdateModifier(event:React.ChangeEvent<HTMLInputElement>)
{
 newMonster.Modifier =event.target.value;
 setNewMonster(newMonster);
 console.log(newMonster.Modifier);
}

function onSubmit(event:React.FormEvent<HTMLFormElement>)
{
    event.preventDefault();
    setListofMonster([...listofMonsters,newMonster]);
    console.log(listofMonsters);
    axios.post<IMonster>("http//:localhost:8080/api/monsters",newMonster)
    .then(response=>{
        console.log(response);
    })
}
return <div>
<h3 className="addmonster">Add Monster </h3>

<form className="form-grid" onSubmit={onSubmit}>
            <label>Source </label>
            <input type="text" onChange={UpdatSource}/>
            <label>Modifier </label>
            <input type="text"onChange={UpdateModifier}/>
            <div></div>
            <input className="btn"type ="Submit" value ="Register "/>
          </form>
</div>

}
export default MonsterList;