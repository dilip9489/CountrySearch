import React, { useState, useEffect } from 'react';
import './App.css';
import CountryCard from './components/CountryCard/CountryCard.js';
import SearchBar from './components/SearchBar/SearchBar.js';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
     
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        console.log(data)
        setCountries(data);
        setFilteredCountries(data); // Showing all countries initially and later will be filtered out based on matching search text
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    // now Filter countries based on the search text.
    if (searchTerm === '') {
      // If the search term is empty,  all countries will be displayed.
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [searchTerm, countries]);

  return (
    <div className="App">
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      <div className="countries-container">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))
        ) : (
          <p>No countries found</p>
        )}
      </div>
    </div>
  );
}

export default App;
