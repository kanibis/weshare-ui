import React from 'react'

export default function Supplier() {


  return (
    <div>
        <select style={{width: '130px', border: 'none'}} >
            <option selected hidden>Sell your services</option>
            <option value='register'>Register as a Supplier</option>
            <option value='login'>Login as a Supplier</option>
        </select>
    </div>
  )
}
