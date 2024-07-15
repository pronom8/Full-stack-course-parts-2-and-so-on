import React, { useState, useEffect } from 'react';
import FilterForm from './filter';
import CountryDetails from './countrydetails';
import axios from 'axios';


const App = () => {
  const [filter, setFilter] = useState('');
  
  const [countries, setCountries] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);


  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleShowClick = (country) => {
    setSelectedCountry(country);
  }

  const countriesToShow = filter
    ? countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    : [];


  return (
    <div>
      <FilterForm filter={filter} handleFilterChange={handleFilterChange} />
      <p>Hello world</p>
      {filter && (
        countriesToShow.length >10 ? (
         <p>too many mathces, please specify</p>
        )
        : countriesToShow.length ===1 ? (
          <CountryDetails country={countriesToShow[0]} />
        )

        : <ul>
            {countriesToShow.map(country => (
              <li key={country.cca3}>{country.name.common}
              <button onClick={() => handleShowClick(country)}>Show</button>
              
              </li>
             
            ))}
          </ul>
      )}
      {countriesToShow.length>1 && selectedCountry && <CountryDetails country={selectedCountry} />}
      
    </div>
  );
};

export default App;
