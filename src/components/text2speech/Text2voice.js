import React from 'react';
import Speech from 'react-speech';

function Text2voice() {
    var msg = new SpeechSynthesisUtterance();
    var voices = speechSynthesis.getVoices();
    msg.voice = voices[10];
    msg.voiceURI = 'native';
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.text = 'hi';
    msg.lang = 'en-US';
    console.log(msg.text)
    return(
        <div>{console.log(speechSynthesis.speak(msg))}</div>
    )
};

export default Text2voice;
