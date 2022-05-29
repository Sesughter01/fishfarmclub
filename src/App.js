import React from 'react'

import {Header, Testimonials, Whatsapp, Footer,Packages,Partners } from './containers';
import { Navbar,Chatbot } from './components';



import './App.css';
const App = () => {
  return (
    <div className ="App">
      <div className="gradient__bg bg">
       
        <Navbar />
        <Header />
      </div>
        <Packages />
        <Testimonials />
        <Partners />
        <Chatbot />
        <Whatsapp />
        
        <Footer />

    </div>
  )
}

export default App
