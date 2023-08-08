import React,{useState} from "react"
function FunctionComponent(){
  let [x,setX] = useState(0);
  function updateCount(){
    setX(x+1);
  }
  return (
    <div>
      <h3>Count: {x}</h3>
      <button onClick = {updateCount}>Click Me</button>
    </div>
  );
}
export default FunctionComponent;