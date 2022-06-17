import React from 'react'
import {Navbar } from '../../components'
import { Footer,Partners } from '../../containers'
import './about.css'

const About = () => {
    return (
        <div className='fishfarmclub_about'>
             <Navbar/>
            <div className="sidebar">
                <h2><span>Fish</span>FarmClub</h2>

            </div>
            <div className="aboutUs">
                <h3>About us</h3>
                 <div className="article">

                    <p>Samspec is a business registered with the cooperate and Allied Matters Act, 1990 CAP20 LFN 2004 with objectives such as:</p>
                    <p>At Samspecs Fisheries, we specialize in breeding, processing and trading in catfish. <br /> Our business model seeks to accomodate people with the desire to invest in catfish farming via our product called <strong>Absentia farming</strong> </p>
                 </div>
                 <br />
                 <div className="absenteeism">

                    <h3>Absenteeism Farming</h3>
                    <p>Absenteeism farming refers to investing in catfish farming through Samspec Fisheries for a period</p>
                 </div>
            </div>
            <Partners />
            <Footer />
        </div>
    )
}

export default About
