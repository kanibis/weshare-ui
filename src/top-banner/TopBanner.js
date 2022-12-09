import React, {useState} from 'react'
import Calendar from 'react-calendar'
// import SearchBar from './SearchBar'
// import bgImage from '../assets/sxnp3hcv7tyzrq15uobmdwi98aefkg24.jpeg'

export default function TopBanner() {

  return (
    <section className='top-banner-section'>
        {/* <div className='image-container'>
            <img src={bgImage} alt="Discover amazing experiences" width="1600px" height="500px" className='top-banner-image'/>
        </div> */}
        <div className='top-banner-content-wrapper'>
            <div className='top-banner-content'>
                <h1 className='top-banner-title'>Discover amazing experiences</h1>    
                <div className='top-banner-search-bar'>
                    <input type='search' placeholder='Search your destination'/>
                    {/* <button onClick={handleSubmit}>Search</button> */}
                    <button type="button" title="Search">Search</button>
                </div>
                <div className='date-picker-input'>
                    <span style={{marginTop: "-3px"}}><i class="fa-solid fa-calendar-days"></i></span>
                    <input type="text"/>
                </div>    
            </div>
        </div>
    </section>
  )
}
