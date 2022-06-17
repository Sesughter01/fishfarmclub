import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
// import Category from '../../routes/categories/Category';
import {Outlet, Link, NavLink } from "react-router-dom";
import logo from '../../assets/fishfarm.svg'
 import './navbar.css';


// BEM -> Block Element Modifier

const Menu = ()=>(

    
    <>
       <a href='/'>Home</a>  {""}
       <NavLink to='/categories'>Packages</NavLink>  {""}
       <NavLink to='/about'>About Us</NavLink>       {""}
       <a href='#footerid'>Contact Us</a> 

       <Outlet />
   </>
)


    

   
   

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='fishfarmclub__navbar' >
            <div className="fishfarmclub__navbar-Navlinks">
                <div className="fishfarmclub__navbar-Navlinks_logo">
                     <a href="/"><img src={logo} alt="logo" /></a>
                </div>
                <div className="fishfarmclub__navbar-links_container">
                    
                    <Menu />

                </div>
            </div>
            <div className="fishfarmclub__cta">
                <a href="https://wa.me/2348188276926">Join Club</a>
            </div>
            <div className="fishfarmclub__navbar-menu">
               {toggleMenu
                  ? <RiCloseLine color='#fff' size={27} onClick = {()=>{setToggleMenu(false)}} />
                  : <RiMenu3Line color='#fff' size={27} onClick = {()=>{setToggleMenu(true)}} />
                  
                }
               {
                   toggleMenu && (
                       <div className="fishfarmclub__navbar-menu_container scale-up-center ">
                           <div className="fishfarmclub__navbar-menu_container-links">
                           
                                 <Menu />
                                 <div className="fishfarmclub__cta">
                                     <a href="https://chat.whatsapp.com/KaAbLpdK9pS5NlRF6TZBMD">Join Club</a>
                                 </div>
                           </div>
                       </div>
                   )
               }  
            </div>
        </div>
    )
}

export default Navbar
