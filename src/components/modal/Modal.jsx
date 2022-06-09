import React, {useState} from 'react';
import {Invest} from '../../components';
import './modal.css';
import '../invest_form/invest.css'
import axios from 'axios';


// import catfish_2 from '../../assets/catfish_2.png'
const Modal = ({open,name,details}) => {
    const [openForm, setOpenForm] = useState(false)
    // const [closeForm, setCloseForm] = useState(false)
    if(!open) 
        return null;
    
    return (
       
           <div className="fishfarmclub__modalContainer ">

                <div className="card">
                
                    <h1 className="name">{name}</h1>
                    <div className="package__details">
                        <ul>
                            {/* Change a list items to hold variables */}
                            <li>100 Fingerlings</li>
                            <li>Farm Manager</li>
                            <li>Farm</li>
                        </ul>
                    </div>
                    <p>{details}</p>
                    {
                  

                   
                    <button className='button_stroke' onClick={() =>setOpenForm(true)}>Open Account</button>
                    }
                </div>
            
                <Invest myform={openForm} onClose={()=>setOpenForm(false)} />
            
                        

        </div>
    )
}

export default Modal
