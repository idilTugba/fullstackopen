import { useEffect, useState } from 'react'
import getData from './services/getCountriesData.tsx'

const App = () => {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [showCountries, setShowCountries] = useState([]);
  const [allCountry, setAllCountry] = useState([]);

  const handleSearchCountry = (e) => {
    setSearch(e.value);
  }

  const handleCountryInfo = (params) => {
    getData.getCountry(params).then(data => {
      setCountry([data])
      setShowCountries([]);
    });
  }
  
  
useEffect(() => {
  getData.getCountries().then(data => {
    setAllCountry(data)
  });
},[])

useEffect(() => {
  const searchCountry = allCountry.filter(item => item.name && item.name.common && item.name.common.includes(search));
  if(searchCountry.length === 1) {
    setShowCountries([])
    setCountry(searchCountry)
  } else if(searchCountry.length < 10) {
    setCountry('');
    setShowCountries(searchCountry)
  } else {
    setCountry('');
    setShowCountries([]);
  }
},[search]
)

  return (
    <div>
      <input value={search} onChange={e=> handleSearchCountry(e.target)}/>
      {showCountries && showCountries.map(item => {
        return (
          <div key={item.name.common}>
          <span>{item.name.common}</span> <button onClick={()=> handleCountryInfo(item.name.common)}>GET</button>
          </div>
        )
      })}
      {country && (<div>
        <p>THE ULKE</p>
        <h1>{country[0].name.common}</h1>
        <p>capital {country[0].capital}</p>
        <p>area {country[0].population}</p>
        <h2>Languages:</h2>
        <ul>
          {Object.values(country[0].languages).join(', ') }
        </ul>
        <img src={country[0].flags.png} alt={country[0].flags.alt} width="200px" />
        </div>)}
    </div>
  )
}

export default App