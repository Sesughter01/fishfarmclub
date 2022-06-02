import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import Category from '../../routes/categories/Category';
import {Outlet, Link } from "react-router-dom";
import logo from '../../assets/fishfarm.svg'
 import './navbar.css';


// BEM -> Block Element Modifier

const Menu = ()=>(

    
    <>
       <p><a href='/'>Home</a></p>  {""}
       <p><Link to='/categories'>Packages</Link></p>  {""}
       <p><a href="#pricing">Services</a></p>
       <p><a href="#services">Partners</a></p>
       <p><a href="#partners">Contact Us</a></p>

       <Outlet />
   </>
)


    

   
   

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='fishfarmclub__navbar' >
            <div className="fishfarmclub__navbar-links">
                <div className="fishfarmclub__navbar-links_logo">
                     <img src={logo} alt="logo" />
                </div>
                <div className="fishfarmclub__navbar-links_container">
                    
                    <Menu />

                </div>
            </div>
            <div className="fishfarmclub__cta">
                <button type='button'>Join Club</button>
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
                                     <button type='button'>Join Club</button>
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
