// Use Call Back implementation
/* Memo - code optimization tecnique, wich allows to render child components when props or state of that component will update
 other wise it will memorize the older componet props*/
 import React, { useState } from "react";
 import 'bootstrap/dist/css/bootstrap.min.css'
 import Cities from './Cities';
 function UseCallBack() {
  let [x,setX] = useState(0);
  let [country,setCountry] = useState("Ukraine");

  function countryRelatedFunction(){
    console.log("Country code related functionality");
  }

  // useCallback(
  //   () => {
  //     console.log("Country code related functionality")
  //   },[country]
  // );

  function updateCount(event) {
    setX(x + 1);
  }

  return (
    <div>
      <h2>Learn React Memo</h2>
      <Cities country = {country} countryCode={countryRelatedFunction}/>
      <h3>Count X: {x}</h3>
      <button value="x" onClick={updateCount} className="btn btn-primary">Update X</button>
    </div>
  );
 }

 export default UseCallBack;