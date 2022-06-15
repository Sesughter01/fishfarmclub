import React , {useState} from 'react'
import './package_card.css'
import {Invest} from '../../components'
const PackageCard = ({my_package,price,package_details,package_returns}) => {
    const [openForm, setOpenForm] = useState(false)
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
                    openForm ?
                    <button onClick={() =>setOpenForm(false)} className="btn btn--fishfarmclub__categories">{openForm===false ? 'Select' : 'Close' }</button>
                   : <button onClick={() =>setOpenForm(true)} className="btn btn--fishfarmclub__categories">{openForm===false ? 'Select' : 'Close' }</button>

                }
            </div>
       
            <Invest myform={openForm} onClose={()=>setOpenForm(false)} details={package_details} package_returns = {package_returns} />
        </div>
    )
}

export default PackageCard
