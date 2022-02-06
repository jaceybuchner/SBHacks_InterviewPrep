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
    
    const fillerFeedback = () => {
        if(transcript.toLowerCase().includes("um") || transcript.toLowerCase().includes("uh") || transcript.toLowerCase().includes("hmm") || transcript.toLowerCase().includes("uh huh") || transcript.toLowerCase().includes("mhm")) {
            return "You have some filler words in your speech. Try to eliminate them"
        }
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
                    console.log(res.data)
                    assembly
                        .post("/transcript", {
                            audio_url: res.data['upload_url'],
                            disfluencies: true
                        })
                        .then((res) => {
                            console.log(res.data)
                            recurGet(res.data['id'])
                        }).catch((err) => console.error(err));
                }).catch((err) => console.error(err));
        }
        blobConvert()

        async function recurGet(e){
            await assembly
                .get(`/transcript/${e}`)
                .then((res) => {
                    console.log(res.data)
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

            <div className="d-flex justify-content-center"> 
                {(!loading)?
                    <button type="button" class="btn btn-success mb-3" onClick={onChange}>Submit</button>
                :".Loading..."} 
            </div>

            <div className="d-flex justify-content-center">
                <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignContent: 'center'}}>
                    <h6 class=" row-2">Your Interview Scoring: </h6>
                    <div>
                        {(transcript !== 'empty')? "Transcript: \"" + transcript + "\"" : ''}
                    </div>
                    <div>
                        {(transcript !== 'empty')? "Confidence: " + Math.floor(confidence*10000)/100 + "%" : ''}
                    </div>
                    <div>{feedback()}</div>
                    <div>{fillerFeedback()}</div>
                </div>
            </div>
        </div>
    )
}

export default AssemblyAI;
