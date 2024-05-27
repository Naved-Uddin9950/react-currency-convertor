import React from 'react'

function InputBox({
  label,
  disabled,
  currencyList,
  amount,
  setAmount,
  currencyRef,
  currency,
  changeCurrency,
}) {
  return (
    <div className='flex flex-row gap-2 justify-end items-center'>
      <label htmlFor={label}>{label} : </label>
      <input 
        type="number" 
        id={label} 
        className='border border-gray-400 px-2 py-1 rounded' 
        disabled={disabled} 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}
      />
      <select className='border rounded px-2 py-1' ref={currencyRef} value={currency} onChange={(e) => 
        {
          changeCurrency(e.target.value);
        }
        }>
        {
          currencyList.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))
        }
      </select>
    </div>
  )
}

export default InputBox