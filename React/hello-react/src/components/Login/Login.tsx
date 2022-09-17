import axios from "axios";
import { useState } from "react";
import { IPlayer } from "../../models/Player";
import { useAppDispatch } from "../../Shared/Redux/Hooks";
import { setPlayer } from "./PlayerSlice";

function LogIn()
{

    const dispatch = useAppDispatch();
    //==============

    const [playerId, setPlayerId] = useState(0);

    function updatePlayer(e:React.ChangeEvent<HTMLInputElement>) {

        setPlayerId(+e.target.value);

        console.log(playerId);
        
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        axios.get<IPlayer>(`http://localhost:8080/api/users?id=${playerId}`)
            .then(response => {
                console.log(response);

                //Logic to save information to our Redux Store specifically our trainer state
                dispatch(setPlayer(response.data));
                
            })
    }
 


    return <div>
        <form className="form-grid" onSubmit={onSubmit}>
            <label>UserName</label>
            <input type="text" onChange={updatePlayer}/>
            <label>Password</label>
            <input type="text" onChange={updatePlayer}/>
           
            <div></div>
            <input className="btn" type="submit" value="Login"/>
        </form>
    </div>;
}

export default LogIn;
