
import { useState } from 'react';
import './sign.css';

export default function Sign(){
    const [inputVal1,setinputVal1] = useState<string>('');
    const [inputVal2,setinputVal2] = useState<string>('');
    const [inputVal3,setinputVal3] = useState<string>('');

    function handleClick(){
        setinputVal1('');
        setinputVal2('');
        setinputVal3('');
    }
    return(
        <div className="container">
            <form action="submit" className="login">
                <h4>Sign Up</h4>
                <div className='items'>
                    <label htmlFor="">Name :</label>
                    <input onChange={(e) => setinputVal1(e.target.value)} value={inputVal1} type="text" placeholder="Enter Your Name"/>
                </div>
                <div className='items'>
                    <label htmlFor="">Email :</label>
                    <input onChange={(e) => setinputVal2(e.target.value)} value={inputVal2} type="email" placeholder="Enter Your Email"/>
                </div>
                <div className='items'> 
                    <label htmlFor="">Phone :</label>
                    <input onChange={(e) => setinputVal3(e.target.value)} value={inputVal3} type="phone" placeholder="Enter Your Phone number"/>
                </div>
                <div>
                    <input type="button" value="sign up" onClick={handleClick}/>
                </div>
                
            </form>
        </div>
    )
    
}