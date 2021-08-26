import './Sidebar-Menu.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


function SidebarMenu( { active, setActive, theme, setTheme} ) {

    function closeMenu(){
        setActive(false)
    }

    function toLinkedIn(){
        window.open("https://www.linkedin.com/in/vivek-sharma-profile/")
    }

    function toGitHub(){
        window.open("https://github.com/elementarymindscape")
    }

    return (
        <div className={ 'Menu ' + (active && 'active')}>
            <div className="Navigation">
                <ul>
                    <li onClick={closeMenu} ><a  className={`text${theme}`} href="#Home" >About</a></li>
                    <li onClick={closeMenu} ><a  className={`text${theme}`} href="#Projects" >Projects</a></li>
                    <li onClick={closeMenu} ><a  className={`text${theme}`} href="https://drive.google.com/file/d/1iLrJEgjJN0blYwuZpLl9Ss3yxjIdiuXJ/view?usp=sharing" >Resume</a></li>
                    <li onClick={closeMenu} ><a  className={`text${theme}`} href="#Contact" >Contact</a></li>
                </ul>
            </div>
            <div className="themebuttons">
                            <button className="thm1" onClick={()=> setTheme('theme1')} ></button>    
                            <button className="thm2" onClick={()=> setTheme('theme2')} ></button>    
                            <button className="thm3" onClick={()=> setTheme('theme3')} ></button>    
                            <button className="thm4" onClick={()=> setTheme('theme4')}></button>    
                            <button className="thm5" onClick={()=> setTheme('theme5')}></button>   
            </div>   
            <div className="SocialMedia">
            <LinkedInIcon className={`Icons text${theme}`} onClick={toLinkedIn} />
            <GitHubIcon   className={`Icons text${theme}`}  onClick={toGitHub} />
            </div>
        </div>
    )
}

export default SidebarMenu;
