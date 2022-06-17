import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div>
             <div className="fishfarmclub__footer-top">
                            <a href="/"><h3><span>Fish</span>FarmClub</h3></a>
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
                            <div className="fishfarmclub__footer-top_list" id='footerid' >
                                <h2>SAMSPEC BUSINESS ENTERPRISES</h2>
                                <h3>BN:2563360</h3>
                                <p>Address: 1, Eja Tutu Quarters,<br /> Eleja Tutu Bus Stop, <br /> Owode Ede, Osun State  </p>
                                <p><strong>Tel:09012318932</strong></p>
                                <p><strong>WhatsApp:08188276926</strong></p>
                            </div>
                        </div>
                        <div className="fishfarmclub__footer-bottom">
                             <p className="fishfarmclub__copyrights"><a href="/"><span>Fish</span>FarmClub</a> <br /> Powdered by Samspec Enterprise.</p>
                             <p className="fishfarmclub__tos">Terms & Conditions</p>
                             <p className="fishfarmclub__policy">Privacy Policy</p>
                        </div>

        </div>
    )
}

export default Footer
