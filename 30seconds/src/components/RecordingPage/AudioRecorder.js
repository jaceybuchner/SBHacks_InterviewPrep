import React, {useState} from 'react';
import { ReactMediaRecorder } from "react-media-recorder";
import AssemblyAI from '../../AsssemblyAI'

function AudioRecorder(props) {

  const [vidID,setID] = useState('')

  const getData = () => {
    const axios = require("axios");
    const assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: "ff30e5b7b0d44b9e998665fbbe7bb60e",
            "content-type": "application/json",
            "transfer-encoding": "chunked",
        },
    });
    assembly
      .get(`/transcript/${vidID}`)
      .then((res) => {
          return res.data
      })
      .catch((err) => console.error(err));
  }

  return(
    <div>
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, pauseRecording, resumeRecording, mediaBlobUrl }) => (
          <div>
              <div className="d-flex justify-content-center">
              <h3 className="p-2 col-example text-left" style={{fontSize: "20px"}}>Status: {status}</h3>
              </div>

              <div className="d-flex justify-content-center">
                  <video className="p-2 col-example text-left" style={{width: 700}}src={mediaBlobUrl} controls autoPlay loop />
              </div>
              
              <div className="d-flex justify-content-center" style={{marginBottom:"30px"}}> 
                <button style={{width: 100}}type="button" className="btn btn-primary col-2 m-2" onClick={startRecording}>Start</button>
                <button style={{width: 100}} type="button" className="btn btn-primary col-2 m-2" onClick={pauseRecording}>Pause</button>
                <button style={{width: 100}}type="button" className="btn btn-primary col-2 m-2" onClick={resumeRecording}>Resume</button>
                <button style={{width: 100}}type="button" className="btn btn-danger col-2 m-2" onClick={stopRecording}>Stop</button>
              </div>
              <AssemblyAI url={mediaBlobUrl} setID={setID} vidID={vidID}/>
              {(status !='recording')?props.updateTimer(false):props.updateTimer(true)}

          </div>

        )}
      />
    </div>
  )
}

export default AudioRecorder