import React,{useState} from 'react'
import AudioRecorder from './RecordingPage/AudioRecorder'
import {QuestionsPage, questions} from './QuestionsPage'
import CountDownTimer from './CountDownTimer'



function RecordingPage (){

    const interviewTime = {hours:0, minutes: 2, seconds: 30}
    const [TimerStatus,updateTimer] = useState(false);

    return (
        <div>
            <h1>{questions[getRandomInt(0,questions.length - 1)]}</h1>
            <p>Interview Timer: </p>
            <CountDownTimer TimerStatus={TimerStatus} hoursMinSecs={interviewTime}/>
            <AudioRecorder updateTimer={updateTimer}/>
        </div>
    )
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

export default RecordingPage