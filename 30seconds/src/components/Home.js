import React from 'react'


function Home (){
    const myStyle = {
        paddingLeft: "50px",
        color: "white",
        backgroundColor: "#60A3D9",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    
    return (
        <div style={myStyle}>
            <div> 
                <h1>Welcome to 30Seconds!</h1>
                <h2>
                    30Seconds helps college students streamline the process of 
                    finding Internships and preparing for Behavioral Interviews!
                </h2>    
            </div>
            
        </div>
    )
}

export default Home