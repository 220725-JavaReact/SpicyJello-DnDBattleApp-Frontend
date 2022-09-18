import axios from "axios";
import { useState } from "react";
import { useAppDispatch } from "../../Shared/Redux/Hooks";
import { IMonster } from "../MonsterBox/MonsterBox";
import { setMonster } from "./MonsterSlice";

function MonsterRating()
{

   
    const dispatch=useAppDispatch();
    const[monsterId,setMonsterId]=useState(0);
   function updateMonster(e:React.ChangeEvent<HTMLInputElement>)
   {
    setMonsterId(+e.target.value);
    console.log(monsterId);
   }
function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    axios.get<IMonster>(`http://www.dnd5api.co/api/monsters?challenge_rating=0.125`)
    .then(response=>{
        console.log(response);
        dispatch(setMonster(response.data));
    })
}



return<div>
<form className="form-grid" onSubmit={onSubmit}>
    <label>Monster Rating 1/8 </label>
    <input className="btn" type ="submit" value="See all the list of Monster 0.125"/>
</form>
</div>

}

   
export default MonsterRating;
