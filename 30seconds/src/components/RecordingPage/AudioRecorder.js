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
            
              <div className="d-flex justify-content-center">
              <h3 className="p-2 col-example text-left" style={{fontSize: "20px"}}>The status of the video is {status}</h3>
              </div>

              <div className="d-flex justify-content-center">
                  <video className="p-2 col-example text-left" style={{width: 700}}src={mediaBlobUrl} controls autoPlay loop />
              </div>

              <div className="d-flex justify-content-center">
              <p className="p-2 col-example text-left"> Blob URL: {mediaBlobUrl}</p>
              </div>
              

              <div className="d-flex justify-content-center" style={{marginBottom:"30px"}}> 
              <button type="button" class="btn btn-primary col-2 m-2" onClick={startRecording}>Start Recording</button>
              <button type="button" class="btn btn-warning col-2 m-2" onClick={pauseRecording}>Pause Recording</button>
              <button type="button" class="btn btn-primary col-2 m-2" onClick={resumeRecording}>Resume Recording</button>
              <button type="button" class="btn btn-danger col-2 m-2" onClick={stopRecording}>Stop Recording</button>
              </div>
              {(status !='recording')?props.updateTimer(false):props.updateTimer(true)}

          </div>

        )}
      />
    </div>
  )
}

export default AudioRecorder