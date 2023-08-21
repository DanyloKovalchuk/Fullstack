import React, {memo} from 'react';
function Cities(props) {
    console.log('Cities component render');

    return (
        <div>
        <ul>
            <li>London</li>
            <li>Birmingham</li>
            <li>San Francisco</li>
            <li>Los Angeles</li>
        </ul>
        </div>
    );
}

 export default memo(Cities);