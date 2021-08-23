import './Sidebar-Menu.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


function SidebarMenu( { active, setActive } ) {

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
                    <li onClick={closeMenu} ><a href="#Home" >About</a></li>
                    <li onClick={closeMenu} ><a href="/" >Skills</a></li>
                    <li onClick={closeMenu} ><a href="#Projects" >Projects</a></li>
                    <li onClick={closeMenu} ><a href="/" >Resume</a></li>
                    <li onClick={closeMenu} ><a href="#Contact" >Contact</a></li>
                </ul>
            </div>
            <div className="SocialMedia">
            <LinkedInIcon className="Icons" onClick={toLinkedIn} />
            <GitHubIcon className="Icons" onClick={toGitHub} />
            </div>
        </div>
    )
}

export default SidebarMenu;
