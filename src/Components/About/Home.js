import React from 'react'
import './Home.scss'
import {init} from 'ityped';
import { useEffect, useRef } from 'react';

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
                <p>asjdbsajdbasldbasdasjdasasdasd
                    asdhasdasdasd
                    asdagsudygfasuydlsad
                    asdyuasfvdykhasfcd
                    adyuasfdasjdcasd'
                    adasydfcaskdhacsvydtc
                </p>

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
