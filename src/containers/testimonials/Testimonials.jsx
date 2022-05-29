import React from 'react'
import {Feature} from '../../components/'
import allImages from '../../components/images'

import './testimonials.css'
const Testimonials= () => {
    return (
        <div>
           <div className="fishfarmclub__testimonials" id='features'>
               <div className="fishfarnclub__testimonials-feature">
                   <div className="card_1">
                     <Feature props = {allImages[0] } content = "Also make money from referals. Our unique platform handles all referals to ensure  we know who you refer to us.."/>

                   </div>
                   <div className="card_2">
                       <Feature props = {allImages[1]} content = "Start building a new income stream today. Fishfarmclub is renowned for its industry leading team collaboration tools." />

                   </div>
                   <div className="fishfarm__testimonials-features_content">
                       <h1>Investor testimonials</h1>
                       <p>Wherever you’re and whatever your income, you can invest now and benefit from our proven business model. </p>
                   </div>
               </div>
                
           </div>  
        </div>
    )
}

export default Testimonials
