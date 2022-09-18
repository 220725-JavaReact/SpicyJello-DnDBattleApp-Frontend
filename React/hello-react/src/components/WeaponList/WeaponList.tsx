import axios from "axios";
import React, { useEffect, useState } from "react";
import { updateSourceFile } from "typescript";
import { IWeapon } from "../../models/weapons";
import Counter from "../Counter/Counter";

function WeaponList()
{

    const [Counter,setCounter]=useState(0);
    const [newWeapon,setNewWeapon]=useState<IWeapon>({
        id: 0,
        Gameid: 0,
        Source:"",
        Modifier:"",
        listofWeapons:[]


    });

const[listofWeapons,setListofWeapon]=useState<IWeapon[]>([]);
useEffect(()=>{
    axios.get<IWeapon[]>("http://www.dnd5eapi.co/apimonsters?challenge_rating=0.125")
    .then(response=>{
        console.log(response.data);
        setListofWeapon(response.data);
    })
},[])
function handleButtonClick()
{
    console.log("detected click form compornent ");
    setCounter(Counter+1);

}
function UpdatSource(event:React.ChangeEvent<HTMLInputElement>)
{
 newWeapon.Source =event.target.value;
 setNewWeapon(newWeapon);
 console.log(newWeapon.Source);
}
function UpdateModifier(event:React.ChangeEvent<HTMLInputElement>)
{
 newWeapon.Modifier =event.target.value;
 setNewWeapon(newWeapon);
 console.log(newWeapon.Modifier);
}

function onSubmit(event:React.FormEvent<HTMLFormElement>)
{
    event.preventDefault();
    setListofWeapon([...listofWeapons,newWeapon]);
    console.log(listofWeapons);
    axios.post<IWeapon>("http//:localhost:8080/api/weapons",newWeapon)
    .then(response=>{
        console.log(response);
    })
}
return <div>
<h3 className="addweapon">Add Weapon </h3>

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
export default WeaponList;