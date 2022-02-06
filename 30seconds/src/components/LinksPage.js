import React from 'react';
import Link from '@mui/material/Link';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';

function LinksPage() {
    const boxes = {
        backgroundColor: "#60A3D9",
        padding: "20px",
        borderRadius: "5px",
        marginTop: "30px",
        margin: "20px",
        marginBottom: "100px",
        width: "80%",
        color: "white",
    };
    const titles = {
        fontWeight: "bold",
        paddingInline: 10,
    };
    const linksTo = {
        marginBottom: 10,
        paddingInline: 10,
    }
    
    return ( 

        <div>
              <div className="d-flex justify-content-center">
              <h1 style={{fontWeight: 600, paddingTop: 30}}>
                    Job Search Websites
            </h1>
              </div>
           

            <div style={{marginTop: 40}}className='d-flex justify-content'> 
                
                    
                    <div style={boxes}className="p-2 flex-fill"> 
                        <h3 style={titles}>LinkedIn</h3>
                        <Link style={linksTo} color="inherit" href="https://www.linkedin.com/feed/">
                            https://www.linkedin.com/feed/ 
                        </Link>
                        <p></p>
                        <p style={{paddingInline: 10}}>
                            LinkedIn is an American business- and employment-oriented online service 
                            that operates via websites and mobile apps. Launched on May 5, 2003, the 
                            platform is primarily used for professional networking and career development, 
                            and allows job seekers to post their CVs and employers to post jobs. 
                        </p>
                    </div>
                    
                    <div style={boxes}className="p-2 flex-fill">
                        <h3 style={titles} >AngelList</h3>
                        <Link  style={linksTo}color="inherit" href="https://angel.co/jobs">
                            https://angel.co/jobs 
                        </Link>
                        <p></p>
                        <p style={{paddingInline: 10}} >
                            AngelList is a U.S. website for startups, angel investors, and job-seekers looking 
                            to work at startups. Founded in 2010, it started as an online introduction board 
                            for tech startups that needed seed funding. Since 2015, the site allows startups 
                            to raise money from angel investors free of charge. 
                        </p>
                    </div>

                    <div style={boxes} className="p-2 flex-fill">
                        <h3 style={titles}>Handshake</h3>
                        <Link style={linksTo} color="inherit" href="https://joinhandshake.com/">
                            https://joinhandshake.com/ 
                        </Link>
                        <p></p>
                        <p style={{paddingInline: 10}}>
                            Handshake is the #1 way college students find jobs. Join today to explore career 
                            options, find jobs and internships for students, and connect with employers. 
                        </p>
                    </div>
 
            </div>
        </div>
    );
}

export default LinksPage;