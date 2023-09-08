import React, {useState} from "react";

function Counter(props){
    const initialValue = props.initialValue;
    const [counter,setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(counter+1);
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;