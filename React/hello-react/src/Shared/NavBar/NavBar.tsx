import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
import "./NavBar.css"
function NavBar()
{ 
  //const player=useAppSelector(selectPlayer)
 const dispatch=useAppDispatch();

 function logout()
 {
 // dispatch(setDefault())
 }

 return <div className="flex">
    <Link to ="/">Home</Link> 
    <Link to ="/playerlist">Register</Link> 
    <Link  to ="/playerlogin">Login</Link>
    <Link to ="/weapon">Weapon</Link>   
    <Link to ="/monster">Monster</Link>   
  
   </div>
}
export default NavBar;
