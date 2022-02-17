import { useEffect, useState } from "react"
import DrumPad from "../DrumPad"

import './css/index.scss';

function PadBank(props) {
    const [padBank, setPadBank] = useState([]);

    useEffect(() => {
        setPadBank(createPadbank());
    }, []);

    function createPadbank() {
        let seila = []

        for(let i = 0; i < props.currentPadBank.length; i++) {
            let sfx =
            <DrumPad
                key={i}
                keyCode={props.currentPadBank[i].keyCode}
                keyTrigger={props.currentPadBank[i].keyTrigger}
                audioURL={props.currentPadBank[i].url}
            />

            seila.push(sfx)
        }

        return seila;
    }


    return (
        <div className='padsContainer'>
            {padBank}
        </div>
    )
}

export default PadBank;