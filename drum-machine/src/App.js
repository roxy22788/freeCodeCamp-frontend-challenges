import { useEffect, useState } from "react";

import PandBank from './components/PadBank';
import { bankOne, bankTwo } from './data/data.js'

import './App.css';

function App() {
  const [currentBank, setCurrentBank] = useState(bankOne);
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

  function changeBank() {
    if (currentBank == bankOne) {
      setCurrentBank(bankTwo);
    } else {
      setCurrentBank(bankOne);
    }
  }

  return (
    <div className='container'>
      <PandBank 
        currentPadBank={currentBank}
        vol={volume}/>
        
      <div className="controlsContainer">
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
        <div className="changeBankContainer">
          <p>
            {
              currentBank == bankOne? 'Bank1'
              : 'Bank2'
            }
          </p>
          <input
            className="inputChangeBank"
            type='checkbox'
            onClick={changeBank} />
        </div>
      </div>
    </div>
  );
}

export default App;
