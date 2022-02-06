import React, {useState} from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

function AudioRecorder(){

  const Mp3Recorder = new MicRecorder({ bitRate: 128 });
    
  const [isRecording, setRecording] = useState(false)
  const [blobURL, setBlobURL] = useState('')
  const [isBlocked, setBlocked] = useState(false)

  const start = () => {
    if (isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          setRecording(true);
        }).catch((e) => console.error(e));
    }
  };

  const stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        setBlobURL(URL.createObjectURL(blob))
        setRecording(false)
      }).catch((e) => console.log(e));
    console.log(blobURL)
  };

  function componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        setBlocked(false)
      },
      () => {
        console.log('Permission Denied');
        setBlocked(true)
      },
    );
  }

  return(
    <div>
      <button onClick={start} disabled={isRecording}>Record</button>
      <button onClick={stop} disabled={!isRecording}>Stop</button>
      <audio src={blobURL} controls="controls" />
    </div>
  )
  
}

export default AudioRecorder