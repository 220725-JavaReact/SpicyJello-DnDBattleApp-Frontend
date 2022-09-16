import { IPlayer } from '../../models/Player';
import './PlayerBox.css';
/**
 * 
 * will displ
 */
function PlayerBox(props:IPlayer)
{

    return <div className="Container">
       <img src ={props.img}/>
       <p>Name : {props.name}</p>
       <p>Level : {props.level}</p>
       <p>Health : {props.health}</p>
       <p>Damage : {props.damage}</p>
       
       </div>
}
export default PlayerBox;