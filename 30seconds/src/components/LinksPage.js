import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function LinksPage() {
    const divStyling = {
        width: "33%",
    };
    const boxes = {
        backgroundColor: "#60A3D9",
        padding: "20px",
        borderRadius: "2px",
        marginTop: "10px",
        margin: "30px",
        padding: "10px",
        marginBottom: "40px",
        width: "80%",
        color: "white",
    };
    return ( 

        <div>
            <h1 style={{fontWeight: 600,  paddingTop: 30, paddingBottom: 5, paddingLeft: "30%", paddingRight:"20%"}}>
                    Job Search Websites
            </h1>

            <div className='d-flex justify-content-evenly'> 
                
                    
                    <div style={boxes}className="p-2 flex-fill"> 
                        <h3 >LinkedIn</h3>
                        <Link color="inherit" href="https://www.linkedin.com/feed/">
                            https://www.linkedin.com/feed/ 
                        </Link>
                        <p>
                            LinkedIn is an American business- and employment-oriented online service 
                            that operates via websites and mobile apps. Launched on May 5, 2003, the 
                            platform is primarily used for professional networking and career development, 
                            and allows job seekers to post their CVs and employers to post jobs. 
                        </p>
                    </div>
                    
                    <div style={boxes}className="p-2 flex-fill">
                        <h3>AngelList</h3>
                        <Link color="inherit" href="https://angel.co/jobs">
                            https://angel.co/jobs 
                        </Link>
                        <p>
                            AngelList is a U.S. website for startups, angel investors, and job-seekers looking 
                            to work at startups. Founded in 2010, it started as an online introduction board 
                            for tech startups that needed seed funding. Since 2015, the site allows startups 
                            to raise money from angel investors free of charge. 
                        </p>
                    </div>

                    <div style={boxes} className="p-2 flex-fill">
                        <h3>Handshake</h3>
                        <Link color="inherit" href="https://joinhandshake.com/">
                            https://joinhandshake.com/ 
                        </Link>
                        <p>
                            Handshake is the #1 way college students find jobs. Join today to explore career 
                            options, find jobs and internships for students, and connect with employers. 
                        </p>
                    </div>
 
            </div>
        </div>
    );
}

export default LinksPage;