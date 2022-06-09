import React , {useState} from 'react'
import './package_card.css'
import {Modal} from '../../components'
const PackageCard = ({my_package,price,package_details}) => {
    const [openModal, setOpenModal] = useState(false)
    // const [labelTag, setLabelTag] = useState("Select")
    //   let buttonLabel = document.getElementById('button').innerHTML
  
    //     buttonLabel="Select"
    //   return buttonLabel
    //  }
         
        
    return (
        <div>
             <div className="fishfarmclub__categories__item ">
                
                <h3 className="section__title--fishfarmclub__categories">{my_package}</h3>
                <p className="section__subtitle--fishfarmclub__categories">{price}</p>
                {
                    openModal ?
                    <button onClick={() =>setOpenModal(false)} className="btn btn--fishfarmclub__categories">{openModal===false ? 'Select' : 'Close' }</button>
                   : <button onClick={() =>setOpenModal(true)} className="btn btn--fishfarmclub__categories">{openModal===false ? 'Select' : 'Close' }</button>

                }
            </div>
       
            <Modal open = {openModal} name = {my_package} details={package_details}/>
        </div>
    )
}

export default PackageCard
