import { useEffect, useState } from 'react'
import getData from './services/getCountriesData';
import getWeather from './services/getWeather';
import Filter from './components/Filter';
import CountriesList from './components/CountriesList';
import CountryContent from './components/CountryContent';
import Weather from './components/Weather';

const App = () => {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [showCountries, setShowCountries] = useState([]);
  const [allCountry, setAllCountry] = useState([]);
  const [weather, setWeather] = useState();

  const handleSearchCountry = (e) => {
    setSearch(e.value);
  }
  
  const handleCountryInfo = (params) => {
    getData.getCountry(params).then(data => {
      setCountry([data])
      setShowCountries([]);
      handleWeather(data.capital[0])
    });
  }

  const handleWeather = (city) => {
    getWeather.getWeather(city).then(data => {
      setWeather(data)
    })
  }
  
  
  
useEffect(() => {
  getData.getCountries().then(data => {
    setAllCountry(data)
  });
},[])

useEffect(() => {
  const searchCountry = allCountry.filter(item => item.name && item.name.common && item.name.common.includes(search));
  setWeather('')
  setCountry('');
  setShowCountries([]);
  if(searchCountry.length === 1) {
    setShowCountries([])
    setCountry(searchCountry)
    handleWeather(searchCountry.capital[0])
  } else if(searchCountry.length < 10) {
    setShowCountries(searchCountry)
  } 
},[search]
)

  return (
    <div>
      <Filter serach={search} onChange={handleSearchCountry}/>
      {showCountries && showCountries.map(item => {
        return <CountriesList key={item.name.common} name={item.name.common} onClick={handleCountryInfo} />
      })}
      {country && <CountryContent country={country}/>}
        {weather && <Weather weather={weather} />}
    </div>
  )
}

export default App