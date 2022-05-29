import React from 'react'

import './header.css'
import catfsh from '../../assets/catfsh.png'
const Header = () => {
    return (
        <div className='fishfarmclub__header section__padding gradient__bg' id='packages'>
            <div className="fishfarmclub__header-content">
                <h1 className="gradient__text">A Fish Farming Investment Platform</h1>
                <p>Join the FishFarm Club and benefit from amazing and Profitable Plans</p>
                <div className="fishfarmclub__header-content__cta">
                        <div className="fishfarmclub__header-content__cta-button button_fill">
                             <button type='button'>Invest Now</button>
                        </div>
                        <div className="fishfarmclub__header-content__cta-button button_stroke">
                              <button type='button'>Take a tour</button>
                        </div>

                </div>
             </div>
                        <div className="fishfarmclub__header-image">
                            <img src={catfsh} alt="catfish" />
                        </div>
        </div>
    )
}

export default Header
