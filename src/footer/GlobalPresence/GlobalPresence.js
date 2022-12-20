import React from 'react'
import {globalPresenceData} from './data.js'
import './GlobalPresence.css'

function GlobalPresence() {
  return (
    <div className='global-presence-container'>
        <h2>Global Presence</h2>
        <div className='global-presence-content-container'>
            {globalPresenceData.map((item) =>
                <div className='global-presence-content'> 
                    <div className='image'>
                        <img src={item.imgLink} alt={item.alt} />
                    </div>
                    <div className='address'>
                        <p>{item.address}</p>
                    </div>
                    <div className='email'>
                        <a href='#' >{item.email}</a>
                    </div>
                    
                    <div className='phone'>
                        <p>{item.phone}</p>
                    </div>
                </div>
            )}
            
        </div>

    </div>
  )
}

export default GlobalPresence