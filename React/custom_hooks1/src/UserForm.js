import React from "react";
import useCounter from "./useCounter";
function UserForm(){
    const counter = useCounter(18,1);
    return(
        <div>
            <h3>Age: {counter.count} </h3>
            <button onClick={counter.increment}>+</button>
            <button onClick={counter.decrement}>-</button>
        </div>
    );
}
export default UserForm;