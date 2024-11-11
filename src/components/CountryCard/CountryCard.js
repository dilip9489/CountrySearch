
import React from 'react';
import '../CountryCard/CountryCard.css'
function CountryCard({ country }) {
  return (
    <div className="countryCard">
      <img src={country.flags.png} alt={country.name.common} />
      <p>{country.name.common}</p>
    </div>
  );
}

export default CountryCard;
