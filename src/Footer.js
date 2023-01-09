import React from 'react'
import './Footer.css'
import logo from '../src/images/logo.png'

function Footer() {
  return (
    <div className="footer">
        <img className='footerlogo' src={logo}/>
    </div>
  )
}

export default Footer