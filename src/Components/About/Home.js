import React from 'react'
import './Home.scss'
import {init} from 'ityped';
import { useEffect, useRef } from 'react';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

function Home({ theme, setTheme }) {

    const dynamicText = useRef();

    useEffect(()=>{
        init(dynamicText.current, { 
            showCursor: false, 
            backDelay: 1500,
            strings: ['Vivek.', 'a Student.', 'a Developer.' ] })
    },[])

    return (
        <div className="Home" id="Home">
          <div className='left'>
                <h3>Hi,</h3>
                <h1>I am <span className={`text${theme}`} ref={dynamicText} ></span></h1>
                <p>I am pursuing my B.Tech from Bhagwan Parshuram Institute of Technology in Computer Sciene.
                I am a Front-End Web Developer and working on my way to become a Full Stack Developer.
                I have a keen interest in coding and learning various new technologies to become better in the field of work I Love =) .
                 </p>
                <button className={`boxshadow${theme}`} onClick={()=> window.open("https://drive.google.com/file/d/1iLrJEgjJN0blYwuZpLl9Ss3yxjIdiuXJ/view?usp=sharing") } ><InsertDriveFileIcon />View Resume</button>
            </div>
            <div className='right'>
                <div className={`ImgContainer ${theme}`}>
                    <img src="assets/IntroPage.png" alt="IntroPageImg" ></img>
                </div>
            </div>
        </div>
    )
}

export default Home;
