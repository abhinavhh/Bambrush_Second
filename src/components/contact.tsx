import { useState } from "react";
import './contact.css'

export default function Contact(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    function handleSubmit(e: { preventDefault: () => void; }){
        e.preventDefault()
        setName('');
        setEmail('');
        setMessage('');
        alert(`Message snd`);
    }
    return(
        <form action="submit" className="form-container">
            <div className="form-container-contents">
            <div className="label-input">
                <label htmlFor="name">Your Name*</label>
                <input type="text" id="name" name="name" value={name} onChange={ e=> setName(e.target.value)}/>

            </div>
            <div className="label-input">
                <label htmlFor="email">Your Email*</label>
                <input type="email" id="email" name="email" value={email} onChange={ e => setEmail(e.target.value)}/>
            </div>
            <div className="label-input">
                <label htmlFor="message">Your Message*</label>
                <textarea name="message" id="message" value={message} onChange={ e => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}