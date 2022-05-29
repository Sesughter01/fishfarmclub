import React from 'react'
import './imgcard.css'
const ImgCard = ({imgname,imgbody},props) => {
    return (
        <div className='fishfarmclub__imgcard' id = {props.id}>
           <h3 className='imgcard-title'>{imgname}</h3> 
           <p className="imgcard-body">
               {imgbody}
           </p>
        </div>
    )
}

export default ImgCard
