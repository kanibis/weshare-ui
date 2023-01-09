import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Supplier() {

  const navigate = useNavigate()
  const handleChange = () => { 
    var x = document.getElementById('mySelect').value;
    if (x === 'login') {
      navigate('/supplier-login')
    }
    else if (x === 'register') {
      navigate('/supplier-registration')
    }
  }

  return (
    <div>
        <select style={{width: '130px', border: 'none'}} id='mySelect' onChange={handleChange}>
            <option selected hidden>Sell your services</option>
            <option value='register'>Register as a Supplier</option>
            <option value='login'>Login as a Supplier</option>
        </select>
    </div>
  )
}
