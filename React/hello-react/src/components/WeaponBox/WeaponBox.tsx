import { IWeapon } from "../../models/weapons";

interface Iprops extends IWeapon
{
    counter? :number,
    onButtonClick?():void 
}
function WeaponBox(props:Iprops)
{
return <div className="Container">
<p>Name : {props.Gameid}</p>
       <p>Email : {props.Modifier}</p>
       <p>Username : {props.Source}</p>
       <p>Password : {props.counter}</p>
       <p>Health: {props.id}</p>
<button onClick={props.onButtonClick}>+</button>
       

</div>

}
export default WeaponBox;