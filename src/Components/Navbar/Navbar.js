import React from 'react'
import './Navbar.scss'

function Navbar() {
    return (
        <div className="Navbar" >
            <div className='Wrapper'>
                <div className="left"></div>
                <div className="right">
                    <a href="#Home" className="logo"> Portofolio </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
