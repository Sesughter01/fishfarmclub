import axios from 'axios';
import React, {useState}  from 'react'
import './invest.css'

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post['Content-Type'] ='application/json';
axios.defaults.headers.post['Accept'] ='application/json';
axios.defaults.withCredentials = true;


const Invest = ({myform,onClose}) => {
    const [investInput,setInvestInput] = useState({
        name:'',
        email:''

    })
    const handleInput = (e)=>{
        e.persist();
        setInvestInput({...investInput,[e.target.name]:e.target.value})
    }
    const investSubmit = (e)=>{
        e.preventDefault();
        const data = {
            name: investInput.name,
            email: investInput.email
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
            // Login...
            axios.post(`/api/invest`,data).then(res =>{
                     
            });
 });
    }
    

     if(!myform) 
       return null
       
    return (
        <div className='overlay'>
           <div className="modalContainer">
                <form onSubmit={investSubmit} className="form-container">
                    <h1>Mailing Details</h1>

                    <label htmlfor="email"><b>Email</b></label>
                    <input type="text" onChange={handleInput} value={investInput.email} placeholder="Enter Email" name="email" required />

                    <label htmlfor="name"><b>Full Name</b></label>
                    <input type="text"  onChange={handleInput} value={investInput.name}   placeholder="Enter Full Name" name="name" required />

                    <button type="submit" class="btn">Invest</button>
                    <button type="button" class="btn cancel" onClick={onClose}>Cancel</button>
                </form>

           </div>
        </div>  
        
    )  
}


export default Invest
