import React,{useState} from 'react';

function AssemblyAI(props){

    const [transcript,setData] = useState('empty')
    const [confidence,setconfidence] = useState('empty')
    const [loading,setLoading] = useState(false)

    const feedback = () => {
        if(confidence <= 0.7)
            return "Your confidence is low. Try to speak up more and be more articulate!"
        else if(confidence > 0.7 && confidence <= 0.9)
            return "Your confidence can be better. Raise your speaking voice and enunciate!"
        else if(confidence > 0.9){
            return "Your confidence is great! Try focusing on improving other things."
        }
    }

    const fillerList = ["um", "uh", "hmm", "huh", "mhm", "um,", "uh,", "hmm,", "huh,", "mhm,", "um.", "uh.", "hmm.", "huh.", "mhm."]
    
    const fillerFeedback = () => {
        const wordList = transcript.toLowerCase().split(" ")
        let sum = 0
        wordList.forEach(element => {
            if(fillerList.includes(element)){
                sum = sum + 1
            }
        });
        if(sum == 1) {
            return "You have 1 filler word in your speech. Try to eliminate it!"
        }
        else if(sum > 1) {
            return "You have " + sum + " filler words in your speech. Try to eliminate them!"
        }
        return "No filler word detected. Good Job!"
    }

    const onChange = () => {
        const axios = require("axios");
        const assembly = axios.create({
            baseURL: "https://api.assemblyai.com/v2",
            headers: {
                authorization: "ff30e5b7b0d44b9e998665fbbe7bb60e",
                "content-type": "application/json",
                "transfer-encoding": "chunked",
            },
        });

        async function blobConvert(){
            let blob = await fetch(props.url).then(r=>r.blob())
            await assembly
                .post("/upload", blob)
                .then((res) => {
                    assembly
                        .post("/transcript", {
                            audio_url: res.data['upload_url'],
                            disfluencies: true
                        })
                        .then((res) => {
                            recurGet(res.data['id'])
                        }).catch((err) => console.error(err));
                }).catch((err) => console.error(err));
        }
        blobConvert()

        async function recurGet(e){
            await assembly
                .get(`/transcript/${e}`)
                .then((res) => {
                    if(res.data['status'] !== 'completed'){
                        setLoading(true)
                        recurGet(e)
                    }
                    else{
                        setLoading(false)
                        props.setID(e)
                        setData(res.data['text'])
                        setconfidence(res.data['confidence'])
                    }
                })
                .catch((err) => console.error(err));
        }
    };

    return (

        <div> 
            {(props.url != null)?
            <div className="d-flex justify-content-center" style={{padding:'10px'}}> 
                {(!loading)?
                    <button type="button" className="btn btn-success mb-3" onClick={onChange}>Submit</button>
                :"Loading..."} 
            </div>:''}
            {(transcript !== 'empty')?
            <div className="d-flex justify-content-center">
                <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignContent: 'center', padding:'50px'}}>
                    <h6 className=" row-2">Your Interview Scoring: </h6>
                    <div style={{padding:'5px'}}>
                        {"Transcript: \"" + transcript + "\""}
                    </div>
                    <div style={{padding:'5px'}}>
                        {"Confidence: " + Math.floor(confidence*10000)/100 + "%"}
                    </div>
                    <div style={{padding:'5px'}}>{feedback()}</div>
                    <div style={{padding:'5px'}}>{fillerFeedback()}</div>
                </div>
            </div>:''}
        </div>
    )
}

export default AssemblyAI;
