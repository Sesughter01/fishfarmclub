import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div>
             <div className="fishfarmclub__footer-top">
                            <h3><span>Fish</span>FarmClub</h3>
                            <div className="fishfarmclub__footer-top_list">
                                <ul>
                                    <li>Twitter</li>
                                    <li>Facebook</li>
                                    <li>Partners</li>
                                    <li>Instagram</li>
                                </ul>
                            </div>
                            <div className="fishfarmclub__footer-top_list">
                                <ul>
                                    <li>About Us</li>
                                    <li>Resources</li>
                                    <li>Help Center</li>
                                    <li>Instagram</li>
                                </ul>
                            </div>
                            <div className="fishfarmclub__footer-top_list">
                                <ul>
                                    <li>Contact Us</li>
                                    <li>Promos</li>
                                    
                                
                                </ul>
                            </div>
                        </div>
                        <div className="fishfarmclub__footer-bottom">
                             <p className="fishfarmclub__copyrights"><span>FishFarmClub</span> is a registered organization. © 2022, All rights reserved.</p>
                             <p className="fishfarmclub__tos">Terms & Conditions</p>
                             <p className="fishfarmclub__policy">Privacy Policy</p>
                        </div>

        </div>
    )
}

export default Footer
