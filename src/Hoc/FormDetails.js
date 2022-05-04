import React,{useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { NewsContext } from './NewsContext';


function FormDetails() {
    const[isFilled, setIsFilled] = useState(false)
    
    const{formData, 
        setFormData,initialFormState, setCheckout} = useContext(NewsContext)
    const handleOnchange =(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

   

    const handleSubmit =(e)=>{
        //prevent refresh
        e.preventDefault()

        //check if the values are empty

        if(!name || !email || !phone || !address) return 
        //use the data
        setCheckout({name,email,phone,address})
        setIsFilled(true)
        setFormData(initialFormState)
        
        
    }

    const{name,email,phone,address} = formData
  return (
    <div className='form-details'>
        <form onSubmit={handleSubmit}>
            <div className="input--group">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" value={name} onChange={handleOnchange} placeholder='Enter Full Name'/>
            </div>
            <div className="input--group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={handleOnchange} placeholder='Enter email address' />
            </div>
            <div className="input--group">
                <label htmlFor="name">Phone Number</label>
                <input type="number" name="phone" value={phone} onChange={handleOnchange} placeholder='Enter phone number'  />
            </div>
            <div className="input--group">
                <label htmlFor="name">Home Address</label>
                <input type="text" name="address" value={address} onChange={handleOnchange} placeholder='Enter home address'/>
            </div>
            <button type="submit">Submit</button>
        </form>

       {
           isFilled && <Link to='/checkout'>
           check order</Link>
       }
        
        
    </div>
  )
}

export default FormDetails