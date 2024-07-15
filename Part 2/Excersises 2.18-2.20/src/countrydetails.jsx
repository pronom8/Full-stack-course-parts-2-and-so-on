import React from "react";
import WeatherDetails from './WeatherDetails';

const CountryDetails = ({country}) => {
    console.log(country.name.common)

    return(
        <div>

        
        <h1>{country.name.common}</h1>
      
        <p>Capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages:</h3>
        <ul>
            {Object.values(country.languages).map(language =>(
                <li key={language}>{language}</li>
            ))}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="150" />
        <WeatherDetails capital={country.capital[0]} latlng={country.capitalInfo.latlng} />
        </div>

    )
}

export default CountryDetails