import React from 'react'
import whatsapplogo from '../../assets/whatsAppLogo.svg'
import './chatbot.css'

const ChatBot = () => {
    return (
        <div className='chatbot'>
            <a href="https://wa.me/498988997127?text=Hi"><img src={whatsapplogo} alt="" /></a>
        </div>
    )
}

export default ChatBot
