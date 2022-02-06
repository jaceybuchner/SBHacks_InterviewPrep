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
            <h3>The status of the video is {status}</h3>
            <button type="button" class="btn btn-primary" onClick={startRecording}>Start Recording</button>
            <button type="button" class="btn btn-warning" onClick={pauseRecording}>Pause Recording</button>
            <button type="button" class="btn btn-primary" onClick={resumeRecording}>Resume Recording</button>
            <button type="button" class="btn btn-danger" onClick={stopRecording}>Stop Recording</button>
            <div>
              <video src={mediaBlobUrl} controls autoPlay loop />
            </div>
            {(status !='recording')?props.updateTimer(false):props.updateTimer(true)}
          </div>
        )}
      />
      {useURL}
    </div>
  )
}

export default AudioRecorder