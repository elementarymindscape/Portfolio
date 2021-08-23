import React, { useState } from 'react'
import './projects.scss'
import ProjectData from '../ProjectsData'

function Projects() {

    const [currentSlide, setCurrentSlide] = useState(0);

    function handleClick(way){
        way === "left" 
        ? setCurrentSlide( currentSlide > 0 ? currentSlide -1 : 4 ) 
        : setCurrentSlide(currentSlide < ProjectData.length -1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="Projects"id="Projects">
            <div className='slider' style={{ transform: `translateX(-${currentSlide * 100}vw)` }} >
               {
                   ProjectData.map((Project, key) => (
                    <div className='container' key={key} >
                    <div className='item'>
                         <div className="left">
                             <div className="leftContainer">
                                 <div className="ImgContainer">
                                        <img src={Project.img} alt={Project.alt}></img>
                                 </div>
                             </div>
                         </div>
                         <div className="right">
                             <h1>{Project.title}</h1>
                             <p>{Project.Description}</p>
                             <button onClick={() => window.open(`${Project.url}`) } >Code</button>
                         </div>
                    </div>
                </div>
                   ))
               }
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="arrow_left"  onClick={() => handleClick("left")} ></img>
            <img src="assets/arrow.png" className="arrow right" alt="arrow_right" onClick={() => handleClick()}></img>
        </div>
    )
}

export default Projects
