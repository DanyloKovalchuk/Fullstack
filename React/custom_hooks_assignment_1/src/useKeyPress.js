import {useState, useEffect} from "react";

const useKeyPress = (targetKey) => {
    const [isKeyPressed,setlsKeyPressed] = useState(false);

    const handleKeyDown = (event) => {
        if(event.key === targetKey) {
            setlsKeyPressed(true);
        }
    };

    const handleKeyUp = (event) => {
        if(event.key === targetKey) {
            setlsKeyPressed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [targetKey]);

    return isKeyPressed;
};

export default useKeyPress;