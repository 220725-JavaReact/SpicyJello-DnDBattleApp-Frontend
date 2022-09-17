import { IPlayer } from '../../models/Player';
import './PlayerBox.css';
/**
 * 
 * will displ
 */
interface IProps extends IPlayer
{
    counter?:number,
    onButtonClick?():void
}

function PlayerBox(props:IProps)
{

    return <div className="Container">
       
       <p>Name : {props.name}</p>
       <p>Email : {props.email}</p>
       <p>Username : {props.username}</p>
       <p>Password : {props.password}</p>
       <p>Health: {props.health}</p>
       
       <p>Gold: {props.gold}</p>
       <button onClick={props.onButtonClick}>+</button>
       </div>
}
export default PlayerBox;