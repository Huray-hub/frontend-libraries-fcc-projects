import React, { useEffect, useState } from "react";
import { useFreeCodeCampTests } from "../util";
import "./DrumMachine.scss";

const sounds = [
    {audioKey: "Q", audioName: "Heater-1", audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
    {audioKey: "W", audioName: "Heater-2", audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
    {audioKey: "E", audioName: "Heater-3", audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
    {audioKey: "A", audioName: "Heater-4", audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
    {audioKey: "S", audioName: "Clap", audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
    {audioKey: "D", audioName: "Open-HH", audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
    {audioKey: "Z", audioName: "Kick-n'-Hat", audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
    {audioKey: "X", audioName: "Kick", audioLink: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
    {audioKey: "C", audioName: "Closed-HH", audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"} 
  ]
  
  const Display = props => {
    return (
      <div id="display">{props.soundName}</div>  
    )
  }
  
  const DrumPadContainer = ({setDisplayContent}) => {
    const drumPads = sounds.map(s => {
      return <DrumPad audioKey={s.audioKey} audioName={s.audioName} audioLink={s.audioLink} setDisplayContent={setDisplayContent}/>
    });
    
    
    return (  
      <div id="drum-pad-container">     
        {drumPads}   
      </div>
    )
  }
  
  
  const DrumPad = props => {
    const {audioName, audioKey, audioLink, setDisplayContent} = props;
  
    useEffect(() => {  
       document.addEventListener("keydown", handleKeyDown);
    });
    
    
    const handleOnClick = e => {
      var audioId = e.target.innerText;
      playAudio(audioId);
    }
    
    const handleKeyDown = e => {
      if (String.fromCharCode(e.keyCode) == props.audioKey)
        playAudio(props.audioKey);   
    }
    
    
    const playAudio = audioId => {     
       setDisplayContent(audioName);
       document.getElementById(audioId).play();      
    }
  
    return (
      <div tab-index="0" className="drum-pad" id={audioName} onClick={handleOnClick}>
        {audioKey}
        <audio className="clip" id={audioKey} src={audioLink}/>
      </div>
    );
    
  }
  
  
  const DrumMachine = () => {
    const [displayContent, setDisplayContent] = useState("");
    
    useFreeCodeCampTests();

    return (
      <div id="drum-machine">
        <DrumPadContainer setDisplayContent={setDisplayContent}/>
        <Display soundName={displayContent}/>     
      </div>
    );
  }
  
  
export default DrumMachine;