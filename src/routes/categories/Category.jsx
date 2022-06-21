import React from 'react'
import {Navbar, PackageCard , package_name, allImages,prices } from '../../components'
import { Footer } from '../../containers'
import './category.css'
import '../package_card/package_card.css'
const Category = () => {
    return (
        <div className='fishfarmclub__package-wrapper'>
            <Navbar/>
            <div className="fishfarmclub__package">

                    <div className="fishfarmclub__package-item ">
                            <img src={allImages[2] } alt="" />
                        <PackageCard my_package = {package_name.package_name_1} price = {prices.package_name_1} package_details={package_name.package_name_1_details} package_returns={package_name.package_name_1_details_return}/>
                    </div> 
                    <div className="fishfarmclub__package-item bg_card_2" >
                    <img src={allImages[3] } alt="" />
                        <PackageCard my_package = {package_name.package_name_2} price = {prices.package_name_2} package_details={package_name.package_name_2_details} package_returns={package_name.package_name_2_details_return}/>
                    </div> 
                    <div className="fishfarmclub__package-item bg_card_3" >
                    <img src={allImages[4] } alt="" />
                        <PackageCard my_package = {package_name.package_name_3} price = {prices.package_name_3} package_details={package_name.package_name_3_details} package_returns={package_name.package_name_3_details_return}/>
                    </div> 
                    {/* <div className="fishfarmclub__package-item bg_card_4"  > */}
                    {/* <img src={allImages[3] } alt="" />
                        <PackageCard my_package = {package_name.package_name_4} price = {prices.package_name_4} package_details={package_name.package_name_4_details} />
                    </div>  */}
            </div>
           <Footer />
        </div>
    )
}

export default Category
