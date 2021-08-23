import React from 'react'
import './contact.scss';

function Contact() {
    return (
        <div className="Contact" id="Contact">
            <div className='left'>
                <div className='ImgContainer'>
                <img src="assets/contactus2.jpg" alt="ContactPageImg" ></img>
                </div>
            </div>
            <div className='right'>
                <h1>Contact Us</h1>
                <form>
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="Subject"></input>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
