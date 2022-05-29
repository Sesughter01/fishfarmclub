import React from 'react'
import name_content from '../../components/name';
import {ImgCard} from '../../components/';
import './partners.css'
import '../../components/img-card/imgcard.css'
const Partners = () => {
    return (
        <div className="fishfarmclub__partners-container">
        
            <div className='fishfarmclub__partners'>
                <div className="img_bg_1 imgcard">
                    <ImgCard imgname={name_content[0]} imgbody='Member since 2014'  />

                </div>
                <div className="img_bg_2 imgcard">
                    <ImgCard imgname={name_content[1]} imgbody='Member since 2012' />

                </div>
                <div className="img_bg_3 imgcard">
                    <ImgCard imgname={name_content[2]} imgbody='Member since 2019' />

                </div>
        
            </div>
                <div className="fishfarmclub__partners-heading">
                    <h2>Learn how others are increasing their income streams and growing their capital.</h2>
                    <div className="fishfarmclub__partners-heading-input">
                        <input type="email" placeholder='Enter your email' />
                        <button type='button'>Join Our List</button>

                    </div>
                </div>
        </div>
    )
}

export default Partners
