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
             <div class="fishfarmclub__categories__item ">
                
                <h3 class="section__title--fishfarmclub__categories">{my_package}</h3>
                <p class="section__subtitle--fishfarmclub__categories">{price}</p>
                <button onClick={() =>setOpenModal(true)} className="btn btn--fishfarmclub__categories">Select</button>
            </div>

            <Modal open = {openModal} name = {my_package} details={package_details}/>
        </div>
    )
}

export default PackageCard
