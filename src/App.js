import React from 'react'

import {Header, Testimonials, Footer,Packages,Partners } from './containers';
import { Navbar } from './components';



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
      
        
        
        <Footer />
        {/* <Route path="categories" element={<Category />} /> */}
    </div>
  )
}

export default App
