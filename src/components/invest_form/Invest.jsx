import axios from 'axios';
import React, {useState}  from 'react'
import {Link} from 'react-router-dom'
import './invest.css'

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post['Content-Type'] ='application/json';
axios.defaults.headers.post['Accept'] ='application/json';
axios.defaults.withCredentials = true;


const Invest = ({myform,onClose,details}) => {
    
  
     if(!myform) 
       return null
       
    return (
        <div className='overlay'>
           <div className="modalContainer">
                <div className="invest-container">
                    <h1>Package Details</h1>
                     <p>{details}</p>
                     <p>Kindly send the fish investment money directly to the company account</p>
                      <p><strong>Acc Name: SAMSPEC BUSINESS </strong></p>
                      <p><strong>Acc No.: 5600794082 </strong></p>
                      <p><strong>Banker: Fidelity Bank </strong></p>
                    <a  href= "https://wa.me/2347062419747" class="btn">
                          {/* <button type="submit" class="btn">Invest</button> */}
                         Join WhatsApp Group
                    </a>
                     <button type="button" class="btn cancel" onClick={onClose}>Cancel</button>
                     
                    
                </div>

           </div>
        </div>  
        
    )  
}


export default Invest
