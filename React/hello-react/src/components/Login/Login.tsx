import { LineAxisOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useAppDispatch } from "../../Shared/Redux/Hooks";
import { setPlayer } from "../../Shared/Redux/PlayerSlice";

function Login()
{//setting up redux for this component
    const dispatch=useAppDispatch();
    //================================
    const [playerId,setPlayerId]=useState(0);
    function updateTrainer(e:React.ChangeEvent<HTMLInputElement>)
    {
        setPlayerId(+e.target.value);
        console.log(playerId);

    }
    function onSubmit(e:React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        //axios.get<IPlayerl>(http : api link here id=${palyerId}),then(resposn>{console.log(response);})
        //logic 
        dispatch(setPlayer(response.data))
    }

    <div>
        <form className="form-grid" onSubmit={onSubmit}>
            <label>ID </label>
            <input className="btn" type ="button" value="submit" />

        </form>
    </div>
}
export default Login;