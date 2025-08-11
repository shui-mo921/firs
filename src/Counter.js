import React,{useState} from "react";

function Counter(){
    const[count,setCount]=useState(1);
    return(
        <div>
            <p>COUNT={count}</p>
            <button onClick={() => setCount(count+1)}>6666</button>
        </div>
    );
}
export default Counter;