import React from "react";
import { Link } from "react-router-dom";

function ParentComponent() {
    const stateData = {
        name: 'John',
        age: 25,
        location: 'New York'
    };

    return(
        <div>
            <h4>Parent Component</h4>
            <Link to= "/parent/child" state={{data: stateData}}>
                Go to ChildComponent
            </Link>
        </div>
    );
}

export default ParentComponent;