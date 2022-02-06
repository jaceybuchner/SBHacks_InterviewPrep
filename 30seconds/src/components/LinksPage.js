import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function LinksPage() {
    return ( 
        <Typography>
            <h3>LinkedIn</h3>
            <Link color="inherit" href="https://www.linkedin.com/feed/">
                https://www.linkedin.com/feed/ 
            </Link>
            <p>
                LinkedIn is an American business- and employment-oriented online service 
                that operates via websites and mobile apps. Launched on May 5, 2003, the 
                platform is primarily used for professional networking and career development, 
                and allows job seekers to post their CVs and employers to post jobs. 
            </p>
            <hr></hr>
            <h3>StartupSearch</h3>
            <Link color="inherit" href="https://startupsearch.com/">
                https://startupsearch.com/ 
            </Link>
            <p>
                Startup Search helps the world’s top talent discover, land, and excel in roles 
                at exciting technology companies. 
            </p>
            <hr></hr>
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
            <hr></hr>
            <h3>Handshake</h3>
            <Link color="inherit" href="https://joinhandshake.com/">
                https://joinhandshake.com/ 
            </Link>
            <p>
                Handshake is the #1 way college students find jobs. Join today to explore career 
                options, find jobs and internships for students, and connect with employers. 
            </p>


        </Typography>
    );
}

export default LinksPage;