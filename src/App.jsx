import { useState, useEffect, useRef } from 'react'
import './App.css'
import InputBox from './components/InputBox';
import useCurrency from './hooks/useCurrency';

function App() {

  const currencyList = ['inr', 'usd', 'jpy', 'krw', 'eur', 'gbp', 'pkr', 'bdt', 'cny'];
  // let data = useCurrency('inr');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(10);
  const [fromCurrency, setFromCurrency]  = useState('inr');
  const [toCurrency, setToCurrency] = useState('usd');
  let data = useCurrency(fromCurrency);

  const currencyRef = useRef(null);
  
  useEffect(() => {
    let convert = amount * data[toCurrency];
    setConvertedAmount(convert);
  }, [setConvertedAmount, currencyRef, fromCurrency, toCurrency, amount]);


  return (
    <div className='w-full h-screen bg-[url("https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg")] bg-cover bg-no-repeat bg-center flex flex-row justify-center items-center'>
      
      <div className='bg-white w-max h-max py-1 px-3 border rounded-xl flex flex-col flex-wrap gap-3'>
        <InputBox 
          label='From' 
          currencyList={currencyList}
          disabled={false}
          amount={amount}
          setAmount={setAmount}
          currencyRef={currencyRef}
          currency={fromCurrency}
          changeCurrency={setFromCurrency}
        />
        
        <InputBox 
          label='To' 
          currencyList={currencyList} 
          disabled={true}
          amount={convertedAmount}
          setAmount={setConvertedAmount}
          currency={toCurrency}
          changeCurrency={setToCurrency}
        />
      </div>
    
    </div>
  )
}

export default App
