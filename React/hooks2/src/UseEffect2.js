import React,{useState,useEffect} from 'react';
function UseEffect2(){
    let [x,setX] = useState(0);
    let [y,setY] = useState(0);
    function updateCount(event){
        if(event.target.value == "x")
         setX(x+1);
        else
         setY(y+1);
    }
    useEffect(
        ()=>{
            console.log("use Effect executed.")
        },[x]
    );
    return (
        <div>
            <h3>Count X: {x}</h3>
            <button value="x" onClick={updateCount}>update X</button>
            <h3>Count Y: {y}</h3>
            <button value="y" onClick={updateCount}>update Y</button>
        </div>
    )
}

export default UseEffect2;