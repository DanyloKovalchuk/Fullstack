import React from "react";
import { useLocation } from "react-router-dom";

function ChildComponent() {
    const location = useLocation();
    console.log(location);
    console.log(location.state);
    const stateData = location.state.data;
    console.log(stateData.name);
    
    return (
        <div>
            <h2>Child Component</h2>
            <p>Name: {stateData.name}</p>
            <p>Age: {stateData.age}</p>
            <p>Location: {stateData.location}</p>
        </div>
    );
}

export default ChildComponent;