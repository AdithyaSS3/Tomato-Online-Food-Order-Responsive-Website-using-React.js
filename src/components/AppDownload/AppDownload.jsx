import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-down' id='app-down'>
      <p>Better Experience Download <br /> Tomato App</p>
            <div className="app-down-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
    </div>
  )
}

export default AppDownload
