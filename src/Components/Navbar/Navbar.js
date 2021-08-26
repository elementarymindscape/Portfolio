import React from 'react'
import './Navbar.scss'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Navbar( { active, setActive, theme, setTheme } ) {

    return (
        <div className="Navbar">
                    <div className='Logo'>
                        <a href="https://elementarymindscape.github.io/Portfolio/" className={`text${theme}`} >
                        Portofolio
                        </a>
                    </div>
                    <div className={'sidebar ' + (active && "active")} onClick={() => setActive(!active)} >
                            <span className='line1'></span>
                            <span className='line2'></span>
                            <span className='line3'></span>
                        </div>
                        <div className="Navigations ">
                            <a className={`text${theme}`} href="#Home">About</a>
                            <a className={`text${theme}`} href="#Projects" >Projects</a>
                            <a className={`text${theme}`} href="https://drive.google.com/file/d/1iLrJEgjJN0blYwuZpLl9Ss3yxjIdiuXJ/view?usp=sharing">Resume</a>
                            <a className={`text${theme}`} href="#Contact">Contact</a>  
                        </div>      
                        <div className="themebuttons">
                            <button className="thm1" onClick={()=> setTheme('theme1')} ></button>    
                            <button className="thm2" onClick={()=> setTheme('theme2')}></button>    
                            <button className="thm3" onClick={()=> setTheme('theme3')}></button>    
                            <button className="thm4" onClick={()=> setTheme('theme4')}></button>    
                            <button className="thm5" onClick={()=> setTheme('theme5')}></button>    
                        </div>     
                        <div className='Social-Media'>
                        <LinkedInIcon className={`Icons text${theme}`} color="inherit" onClick={() => window.open("https://www.linkedin.com/in/vivek-sharma-profile/")} />
                        <GitHubIcon className={`Icons text${theme}`} color="inherit" onClick={() => window.open("https://github.com/elementarymindscape")} />
                        </div>
        </div>
    )
}

export default Navbar;
