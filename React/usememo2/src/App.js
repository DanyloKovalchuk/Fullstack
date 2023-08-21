// Memo implementation
/* Memo - code optimization tecnique, wich allows to render child components when props or state of that component will update
 other wise it will memorize the older componet props*/
 import React, { useState } from "react";
 import Cities from './Cities';
 function Memo() {
  let [x,setX] = useState(0);

  function updateCount(event) {
    setX(x + 1);
  }

  return (
    <div>
    <h2>Learn React Memo</h2>
    <Cities />
    <h3>Count X: {x}</h3>
    <button value="x" onClick={updateCount}>Update X</button>
    </div>
  );
 }

 export default Memo;