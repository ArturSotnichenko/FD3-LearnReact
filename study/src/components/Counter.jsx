import React, {useState} from "react";

const Counter = function () {
    const [count, setCount] = useState(0)

    function inc(){
        setCount(count+1)
      }
      function des(){
        setCount(count-1)
      }
    
    return(
    <div>
    <h1>{count}</h1>
    <button onClick={inc}>  inc</button>
    <button onClick={des}>  des</button>
    
    </div>
    )
}




export default Counter