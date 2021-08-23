import React from 'react'
import './Navbar.scss'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonIcon from '@material-ui/icons/Person';

function Navbar() {

    function toLinkedIn(){
        window.open("https://www.linkedin.com/in/vivek-sharma-profile/")
    }

    function toGitHub(){
        window.open("https://github.com/elementarymindscape")
    }

    return (
        <div className="Navbar">
                    <div className='Logo'>
                        <a href="/">
                        <PersonIcon className='img'/>
                        Portofolio
                        </a >
                    </div>
                        <div className="Navigations">
                            <a href="#Home">About</a>
                            <a href="/">Skills</a>
                            <a href="#Projects">Projects</a>
                            <a href="/">Resume</a>
                            <a href="#Contact">Contact</a>  
                        </div>           
                        <div className='Social-Media'>
                        <LinkedInIcon className="Icons" onClick={toLinkedIn} />
                        <GitHubIcon className="Icons" onClick={toGitHub} />
                        </div>
        </div>
    )
}

export default Navbar;
