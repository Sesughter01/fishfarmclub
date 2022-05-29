import React from 'react'
import './feature.css';



// function imgName (name) {
//     let newName = name.replaceAll(' ', '-');
//     return newName.toLowerCase().replace('.', '');
// }

const Feature = ({props, content}) => {
   console.log(content)
    return (
        <div className='fishfarmclub__feature'>
            <div className="fishfarmclub__feature-card">
              <img src={props} alt="" />
               <div className="fishfarm__feature-card_content">
                <p>{content}</p>
               </div> 
            </div>
        </div>
    )
}

export default Feature
