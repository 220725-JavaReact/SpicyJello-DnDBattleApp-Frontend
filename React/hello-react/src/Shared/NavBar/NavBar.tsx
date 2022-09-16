import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
import { selectPlayer, setPlayer } from "../Redux/PlayerSlice";
import "./NavBar.css"
function NavBar()
{
const player=useAppSelector(selectPlayer);
const dspatch=useAppDispatch();
function Logout()
{
dispatch(setPlayer)
}

 return <div className="flex">
    <Link className="li" to ="/">Login</Link> 
    <Link className="li" to ="/playerlist">Register</Link> 
    <Link className="li" to ="/Login">Login</Link> 
    {/* {
      player.name? "Logout": "Login"
    } */}
    {
      player.name? <Link to ="/" onClick={logout}>Logout</Link>:<Link to= "/login">Login </Link>
    }
    <p>welcome back {player.name}somename</p>
    
 </div>
}
export default NavBar;
