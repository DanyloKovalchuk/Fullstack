import React, {useState, useEffect, useMemo} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function UseMemo() {
 let [x,setX] = useState(0)
 let [y,setY] = useState(0)
 function updateCount(event) {
  if (event.target.value == "x")
    setX(x+1);
  else
    setY(y+1);
 }
 const noRender = useMemo(
 ()=>{
  console.log("Use memo invoke.");
  return(
    <from action="">
      <input type="text" placeholder='EmployeeID' />
      <button className='btn btn-primary'>Search</button>
      <label>Search: {x}</label>
    </from>
  );
 },
 [x]);
//  useEffect(
//   ()=>{
//     console.log('use Effect executed.')
//   }, [x]
//  );
return (
  <div>
    {noRender}
    {/*when u don't wanna render it every single time*/}
    {/*<from action="">
    <input type='text' placeholder='EmployeeID'/>
    <button className = "btn btn-primary"></button>
    <label>Search: {x}</label>
    </from>*/}
    <h3>Count X: {x}</h3>
    <button value="x" onClick={updateCount}>Update X</button>
    <h3>Count Y: {y}</h3>
    <button value="y" onClick={updateCount}>Update Y</button>
  </div>
);
}

export default UseMemo;
