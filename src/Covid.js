import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import './Covid.css'

function Covid() {
  const [victim, setVictim] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(victim);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        setVictim(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className='centered-content'>
        <h1>Covid-19 Tracker</h1>
        <p>This is a simple React app that tracks COVID-19 data from over all world</p>
        <div className='table-wrapper'>
        <table className='table'>
          <thead>
            <tr>
              <th>Country</th>
              <th>Continent</th>
              <th>Population</th>
              <th>Total Cases</th>
              <th>Total Deaths</th>
              <th>Total Recovered</th>
              <th>Today Cases</th>
              <th>Today Deaths</th>
              <th>Today Recovered</th>
              <th>Critical</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="10">Loading.........</td>
              </tr>
            ) : (
              victim.map((victim) => (
                <tr key={victim.countryInfo.id}>
                  <td>{victim.country}</td>
                  <td>{victim.continent}</td>
                  <td>{victim.population}</td>
                  <td>{victim.cases}</td>
                  <td>{victim.deaths}</td>
                  <td>{victim.recovered}</td>
                  <td>{victim.todayCases}</td>
                  <td>{victim.todayDeaths}</td>
                  <td>{victim.todayRecovered}</td>
                  <td>{victim.critical}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        </div>
    </div>
  );
}

export default Covid;
