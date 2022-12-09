import React from 'react'

export default function Currency() {
  const currencyOptions = [
    { key: "US Dollars", text: "USD", value: "$" },
    { key: "Euro", text: "Euro", value: "€" },
    {key: "Indian National Rupee", text: "INR", value: "₹"}
 ];
  return (
    <div className='currency-container'>
        <a href='#'>
          <select>
              {currencyOptions.map((option) => (
                  <option value={option.value}>{option.text}</option>
              ))}
          </select>
        </a>
        
    </div>
  )
}
