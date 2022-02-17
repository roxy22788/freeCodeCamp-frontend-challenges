import { useEffect, useState } from "react";

import PandBank from './components/PadBank';
import DrumPad from "./components/DrumPad";

import './App.scss';

import { bankOne, bankTwo } from './data/data.js'

function App() {
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const clips = [].slice.call(document.getElementsByClassName('clip'));
    clips.forEach(sound => {
      sound.volume = volume;
    })
  }, [volume]);


  function handleChangeVolume(event) {
    setVolume(event.target.value);
  }

  return (
    <div className='container'>
      <PandBank 
        currentPadBank={bankOne}
        vol={volume}/>
        
      <div>
        <div className="sliderVolumeContainer">
          {`volume: ${Math.floor(volume * 100)}`}
          <input 
            type='range'
            value={volume}
            min={0}
            max={1}
            step={0.01}
            onChange={handleChangeVolume}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
