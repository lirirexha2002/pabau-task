import React from 'react';
import '../style/Footer.css';
import pabauIcon from '../pabau-icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <span className='powered'>Powered By</span>
            <img src={pabauIcon} alt='pabau icon'/>
            <span className='pabau'>Pabau</span>
        </div>
    </div>
  )
}

export default Footer