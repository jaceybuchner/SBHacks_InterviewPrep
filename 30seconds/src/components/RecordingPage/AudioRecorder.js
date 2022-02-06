import React, {useState} from 'react';
import { ReactMediaRecorder } from "react-media-recorder";

function AudioRecorder(props) {
  const [useURL,setURL] = useState('empty')
  return(
    <div>

      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, pauseRecording, resumeRecording, mediaBlobUrl }) => (
          <div>
            <p>The status of the video is {status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={pauseRecording}>Pause Recording</button>
            <button onClick={resumeRecording}>Resume Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} controls autoPlay loop />
            {(status !='recording')?props.updateTimer(false):props.updateTimer(true)}
          </div>
        )}
      />
      {useURL}
    </div>
  )
}

export default AudioRecorder