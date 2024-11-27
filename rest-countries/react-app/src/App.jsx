import { useEffect, useState } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries';

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCountries(data); 
        setLoading(false)       
      })
  },[])

  return (
    <>
      <Countries countries={countries} loading={loading} />  
    </>
  )
}

export default App
