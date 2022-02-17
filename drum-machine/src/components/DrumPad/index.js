import { useEffect, useState } from "react";

import './css/index.css'

function DrumPad(props) {
    const [color, setColor] = useState('');

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        let color = randomColor(70, 215);
        setColor(color);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [])

    function handleKeyPress(event) {
        if (event.keyCode === props.keyCode) {
            playSound();
        }
    }

 
    function randomColor(inicio, fim) {
        function randomNumber() {
            return Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
        }

        return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
    }

    function playSound() {
        const sound = document.getElementById(props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
    }

 
    return (
        <div 
            className="drumPad" 
            onClick={playSound}
            style={
                {   
                    borderLeft: `4px solid ${color}`,
                    boxShadow: `1px 1px 4px ${color}`
                }
            }
        >
            <audio 
                className="clip"
                id={props.keyTrigger}
                src={props.audioURL}
            />
            {String.fromCharCode(props.keyCode)}
        </div>
    );
}

export default DrumPad;