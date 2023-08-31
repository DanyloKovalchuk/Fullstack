import React, { useState } from 'react';

function useForm(initState){
    let [userData,setUserData] = useState(initState);

    let updateUserData = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        });
    }

    let resetUserData = (event) => {
        setUserData(initState);
    }

    return {
        userData,
        updateUserData,
        resetUserData
    }
}

export default useForm;