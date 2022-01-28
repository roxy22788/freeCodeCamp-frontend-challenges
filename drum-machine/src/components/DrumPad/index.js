import { useEffect } from "react";

import './css/index.css'


function DrumPad(props) {
    useEffect(() => {
        document.addEventListener('keydown', handlekeydown);

        return () => {
            document.removeEventListener('keydown', handlekeydown);
        }
    });

    function handlekeydown(event) {
        console.log(event.keyCode + " down");
    };

    return (
        <div className="drumPad">
            w
        </div>
    );
}

export default DrumPad;