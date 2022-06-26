import React from 'react'
import axios from 'axios';
import {Header, Testimonials, Footer,Packages,Partners } from './containers';
import { Navbar,ChatBot } from './components';
import './App.css';

// axios.defaults.baseURL = "http://127.0.0.1:8000/";
// axios.defaults.headers.post['Content-Type'] ='application/json';
// axios.defaults.headers.post['Accept'] ='application/json';
// axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className ="App">
      <div className="gradient__bg bg">
       
        <Navbar />
        <Header />
         <ChatBot />
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
