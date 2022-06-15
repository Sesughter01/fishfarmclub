import React from 'react'
import promotion_content from '../../components/promotions';
import {ImgCard} from '../../components/';
import './partners.css'
import '../../components/img-card/imgcard.css'
const Partners = () => {
    return (
        <div className="fishfarmclub__partners-container">
        
            <div className='fishfarmclub__partners'>
                <div className="img_bg_1 imgcard">
                    <ImgCard imgname={promotion_content[0]} imgbody='Profitable Investments'  />

                </div>
                <div className="img_bg_2 imgcard">
                    <ImgCard imgname={promotion_content[1]} imgbody='Experienced Farm Managers' />

                </div>
                <div className="img_bg_3 imgcard">
                    <ImgCard imgname={promotion_content[2]} imgbody='Prompt Payments' />

                </div>
        
            </div>
                <div className="fishfarmclub__partners-heading">
                    <h2>Learn how others are increasing their income streams and growing their capital.</h2>
                    <div className="fishfarmclub__partners-heading-input">
                        <input type="email" placeholder='Enter your email' />
                        <button type='button'>Join Our List</button>

                    </div>
                    <div className="fishfarmclub__contact">
                        <h2>Benefit from years of business experience</h2>
                        <div className="fishfarmclub__contact-call">
                            <p><span>Call:</span> 07034098765</p>
                            <p> 07034098765</p>
                            <p> 07034098765</p>

                        </div>
                        <div className="fishfarmclub__getstarted">
                            <h1>Get started today!</h1>
                            <button type='button'>INVEST NOW</button>
                        </div>
                       
                    </div>
                </div>
        </div>
    )
}

export default Partners
