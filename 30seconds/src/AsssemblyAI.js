import React,{useState} from 'react';

function AssemblyAI(props){

    const [vidData,setData] = useState('empty') 
    const [loading,setLoading] = useState(false)

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
                    if(res.data['status'] != 'completed'){
                        setLoading(true)
                        recurGet(e)
                    }
                    else{
                        setLoading(false)
                        props.setID(e)
                        setData(res.data['text'])
                    }
                })
                .catch((err) => console.error(err));
        }
    };

    return (

        <div className="d-flex justify-content-center"> 
            {(!loading)?
            <button type="button" class="btn btn-success col-2 mb-5" onClick={onChange}>Submit</button>
            :"...Loading..."}
            {(vidData != null)? "Transcript: \"" + vidData + "\"" : ''}
        </div>
    )
}

export default AssemblyAI
