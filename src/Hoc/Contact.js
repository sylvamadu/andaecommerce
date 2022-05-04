import React,{useState} from 'react';
import img from '../img/bg images/julian-hochgesang-Dkn8-zPIbwo-unsplash.jpg';

function Contact() {
    const [data, setData] = useState({name:'',email:'',message: ''})

    const handleChange =(e)=>{
        //watch out for changed values
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
        console.log(data)
    }

    const handleSubmit = (e)=>{
        //prevent reloading
        e.preventDefault();

        if(!data.name || !data.email | !data.message) return

        console.log(data)
        setData({name:'',email:'',message: ''})
       
    }

    const {name,email, message} = data
  return (
    <div className='contact-page'>
        <img src={img} alt="contact us" />
        <div className="contact-us-info">
            <h2 className="title">
                contact us
            </h2>
            <form onScroll={handleSubmit}>
                <div className="input_group">
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange = {handleChange}/>
                </div>
                <div className="input_group">
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange = {handleChange}/>
                </div>
                <div className="input_group">
                    <label>Message</label>
                    <textarea name="message"  value={message} onChange = {handleChange}></textarea>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact