import React,{useState,useEffect} from 'react';
function UseEffect1(){
    let [x,setX] = useState(0);

    function updateCount() {
        setX(x+1);
    }
    useEffect(()=>{
        console.log("logs from : Use effect triggered.");
    },[]);

    console.log("logs from ; function component")

    return(
        <div>
            <h3>Count: {x}</h3>
            <button onClick={updateCount}>Click Me</button>
        </div>
    );
}

export default UseEffect1;