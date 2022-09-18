import { useState } from "react";

function Counter()
{

   // let count :number =0;
   //parameter will define use date will determine the default value 
    const [count,setCount ]=useState(0);
    const [show,setShow]=useState(false);
    function AddCounter()
    {
        //makei sure used that method that was giving to me to actually re-render the page
        setCount(count+1);
        //count=count +1 will not work and intercat with the varible directly will not re-render page
        console.log(count);
    }

    function showComponent()
    {
        setShow(!show);
    }
//conditional renderign ih which we can dymatically show a different view of the component base on some condition
//youjust have multiple return satement

    if(!show)
    {
        return<div>
            <button onClick={showComponent}>Click here to show player counter</button>
        </div>
    }
    else
    {
        return <div>
        <p>current counter:{count}</p>
        <button onClick={AddCounter}>+</button>

          </div>
    }
    return <div>
        <button onClick={showComponent}>click me tho show coutner </button>
        {
            show &&  <div>
            <p>current counter:{count}</p>
            <button onClick={AddCounter}>+</button>

            </div>
        }
   
      </div>

   }
export default  Counter