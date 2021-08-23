import React from 'react'
import './Home.scss'
import {init} from 'ityped';
import { useEffect, useRef } from 'react';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

function Home() {

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
                <h1>I am <span ref={dynamicText} ></span></h1>
                <p>I am pursuing my B.Tech from Bhagwan Parshuram Institute of Technology in Computer Sciene.
                I am a Front-End Web Developer and working on my way to become a Full Stack Developer.
                I have a keen interest in coding and learning various New Technologies to become better in the Development Industry.
                 </p>
                <button><InsertDriveFileIcon />View Resume</button>
            </div>
            <div className='right'>
                <div className='ImgContainer'>
                    <img src="assets/IntroPage.png" alt="IntroPageImg" ></img>
                </div>
            </div>
        </div>
    )
}

export default Home;
