import React from 'react'
import './contact.scss';

function Contact() {
    return (
        <div className="Contact" id="Contact">
            <div className='left'>
                <div className='ImgContainer'>
                <img src="assets/contactus2.jpg" alt="ContactUsImg" ></img>
                </div>
            </div>
            <div className='right'>
                <h1>Contact Us</h1>
                <div className='grid-container'>
                <form>
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">SUBMIT</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
