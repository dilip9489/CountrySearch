
import React from 'react';
import '../CountryCard/CountryCard.css'
function CountryCard({ country }) {
  return (
    <div className="countryCard">
      <img src={country.flags.png} alt={country.name.common} />
      <h3>{country.name.common}</h3>
    </div>
  );
}

export default CountryCard;
