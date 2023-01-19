import React from 'react'
import './Help.css'

export default function Help() {
  return (
    <div className='help-container'>
        <div className='help-section'>
          <h1 className='help-title'>How can we help you?</h1>
          <div className='instant-help'>
            <div className='booking check-booking'>Check booking status</div>
            <div className='booking change-booking'>Change booking</div>
            <div className='booking cancel-booking'>Cancel booking</div>
          </div>
        </div>
        <div className='searchFaqs'>
            <h2>Search FAQs</h2>
            <div className='search-box'>
              <input type='text' className='input-search-bar' placeholder='Enter a keyword or search FAQs here' />
              <button className='search-btn'>
                  <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
        </div>
        <div className='help-center-section common-FAQs'>
          <div className='common-FAQs-content'>
            <h2 className='common-FAQs-content-title'>Explore common FAQs</h2>
            <div className='common-FAQs-content-list'>
              <div className='FAQ 1'>When will I receive my booking confirmation?</div>
              <div className='FAQ 2'>Can I book an activity on behalf of someone else?</div>
              <div className='FAQ 3'>How can I cancel/refund my booking?</div>
              <div className='FAQ 4'>I can't log into my WeShare account. What can I do?</div>
              <div className='FAQ 5'>How to plan your trip?</div>
              <div className='FAQ 6'>My activity offers pickup. How can I schedule a pickup?</div>
            </div>
          </div>
        </div>
    </div>
  )
}
