import React, {useState} from 'react';
function useCounter(startingPoint = 0,interval = 1){
    const [count, setCount] = useState(startingPoint);

    const increment = () =>{
        setCount(count+interval);
    }

    const decrement = () =>{
        setCount(count-interval);
    }

    return {
        count,
        increment,
        decrement
    }
}

export default useCounter;