/*
import React,{useState} from 'react';

function AssemblyAI(){
    const [respo,setRespo] = useState('EMPTY')

    const axios = require("axios");
    const assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: "ff30e5b7b0d44b9e998665fbbe7bb60e",
            "content-type": "application/json",
        },
    });

    const onChange = () => {
        assembly
            .post("/transcript", {
                audio_url: "https://bit.ly/3yxKEIY"
            })
            .then((res) => {setRespo(res.data);console.log(res.data)})
            .catch((err) => console.error(err));
    }
    return (
        <div>
            {respo}
            <button onClick={onChange}>Send request</button>
        </div>
    )
}

export default AssemblyAI
*/