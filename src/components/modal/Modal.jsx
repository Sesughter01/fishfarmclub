import React, {useState} from 'react'
import {Invest} from '../../components'
import './modal.css'
import '../invest_form/invest.css'
// import catfish_2 from '../../assets/catfish_2.png'
const Modal = ({open,name,details}) => {
    const [openForm, setOpenForm] = useState(false)
    if(!open) 
        return null;
    
    return (
       
           <div className="fishfarmclub__modalContainer">

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
                    <button onClick={() =>setOpenForm(true)}>Open Account</button>
                    </div>
                         
             <Invest myform={openForm}/>

        </div>
    )
}

export default Modal
