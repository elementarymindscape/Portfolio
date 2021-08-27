import React, {useState} from 'react'
import './contact.scss';
import emailjs from 'emailjs-com'

function Contact({theme}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

       const validate = () => {
        let emailERROR = "";
        let nameERROR = "";
        let messageERROR = "";

        if(!name){
            nameERROR = 'Name cannot be blank';
        }

        if(!email.includes('@')){
            emailERROR = 'Invalid Email';
        }

        if(message.length < 20){
            messageERROR= "Message should be atleast 20 characters";
        }

        if (emailERROR || nameERROR || messageERROR){
            setMessageError(messageERROR)
            setNameError(nameERROR)
            setEmailError(emailERROR)
            console.log("ERROR", emailERROR)
            return false;
          }
         return true;
    }

//    function sendEmail(e){
//        e.preventDefault();
//        const isValid = validate();
//        if (isValid){  
//         emailjs.sendForm('service_bjsuw5e', 'template_portfolio', e.target, 'user_Id0iTiygREyJpdOpu5UO1')
//        .then((result) => {
//                 window.location.reload();
//        }, (error) => {
//        });}
//         e.target.reset();
//    }

   function sendMessage(e){
    e.preventDefault();
    const isValid = validate();
       if (isValid){  
        emailjs.sendForm('service_bjsuw5e', 'template_portfolio', e.target, 'user_Id0iTiygREyJpdOpu5UO1')
       .then((result) => {
                window.location.reload();
       }, (error) => {
       });}
   }

    return (
        <div className="Contact" id="Contact">
            <div className='wrapper'>
                <div className='container'>
                    <div className='left'>
                        <div className="ImgContainer">
                            <img src="assets/contact.jpg" alt="contactme"></img>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='top'>
                            <h2 className={`text${theme}`} >Interested to Work Together?
                                <br/>
                                Let's Talk!    
                            </h2>
                        </div>
                        <div className='bottom'>
                        <form onSubmit={sendMessage}>
                            <input type="text" required placeholder="Your Name" name="name" value={name} onChange={(e)=> setName(e.target.value)}></input>
                            <div style={{ fontSize: '14px', color: 'red' }}>{nameError}</div>
                            <input type="text" required placeholder="Email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} ></input>
                            <div style={{ fontSize: '14px', color: 'red' }}>{emailError}</div>
                            <textarea required placeholder="Message" name="message" value={message} onChange={(e)=> setMessage(e.target.value)} ></textarea>
                            <div style={{ fontSize: '14px', color: 'red' }}>{messageError}</div>
                            <button className={theme} type="submit" value="SUBMIT">SUBMIT</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer" >
                <h2>Designed By <span className={`text${theme}`}>Vivek.</span></h2>
            </div>
        </div>
    )
}

export default Contact;
