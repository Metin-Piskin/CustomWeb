import React from 'react'

import './TopHeader.css';
import Logo from '../../assets/Logo.png'
const TopHeader = () => {
  return (
    <div className='TopHeaderContainer'>
      <img src={Logo} alt="" className='TopHeaderLogoImg'/>
    </div>
  )
}

export default TopHeader
