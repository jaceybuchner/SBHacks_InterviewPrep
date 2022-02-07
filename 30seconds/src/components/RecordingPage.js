import React,{useState} from 'react'
import AudioRecorder from './RecordingPage/AudioRecorder'
import {questions} from './QuestionsPage'
import CountDownTimer from './RecordingPage/CountDownTimer'



function RecordingPage (){
    const [qNumber,setQ] = useState(getRandomInt(0,questions.length - 1))
    const interviewTime = {hours:0, minutes: 2, seconds: 30}
    const [TimerStatus,updateTimer] = useState(false);
    const helpme = {
        marginTop: "30px", 
        textAlign: "center",
        fontWeight: 600,
        fontSize: "35px",
    };

    return (
        <div>

            <h1 style={helpme}>{questions[qNumber]}</h1>

            <div className='d-flex justify-content-evenly'> 
                <p> Interview Timer:</p>
                <CountDownTimer TimerStatus={TimerStatus} hoursMinSecs={interviewTime}/>
                 
            </div>
            <AudioRecorder style={{marginLeft: "30%"}} updateTimer={updateTimer}/>

        </div>
    )
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

export default RecordingPage