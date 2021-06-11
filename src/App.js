import React, { useState } from 'react';
import './App.scss';
import { convertTime } from './utils/utils';
import axios from 'axios';
import searchIcon from "./assets/searchIcon.svg";

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_API_SERVER;

function App() {
  const [lastTrades, setLastTrades] = useState([]);
  const [submit, setSubmit] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    let searchQuery = event.target.search.value.toUpperCase();
    let getTrades = setInterval(() => getLastTrade(searchQuery, getTrades), 1000);
  }

  const handleReset = () => {
    window.location.reload(); 
  }

  const getLastTrade = (search, getTrades) => {

    axios.get(`${URL}/${search}?apiKey=${API_KEY}`)
    .then(res => {
        if (res.data.status !== "NOT_FOUND") {
        setLastTrades([...lastTrades, res.data]);
        setSubmit(true);
        } else {
          alert(`Ticker ${search} Not Found!`);
          clearInterval(getTrades);
        }
        console.log(lastTrades);
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <div className="App">
       <div className="timeSales__header">
          <form className="timeSales__search-form" onSubmit={handleSearch} >
            <label className="timeSales__search-label">TIME AND SALES</label>
            <div className="timeSales__search-bar">
              <img src={searchIcon} alt="Search Icon" className="timeSales__search-icon"/>
              <input
                disabled={submit && true}
                type="text" 
                name="search"
                placeholder="Enter ticker here e.g AAPL" 
                className="timeSales__search-input"
              />
            </div>
          </form>
          <button onClick={handleReset} className="timeSales__reset-button">Choose another ticker</button>
          <select className="timeSales__speed-button">
            <option value="1">Normal speed</option>
            <option value="2">2X speed</option>
            <option value="4">4X speed</option>
            <option value="10">10X speed</option>
          </select>
        </div>
        <div className="dataTable">
          <div className="dataTable__titles">
            <h4 className="dataTable__title">Time</h4>
            <h4 className="dataTable__title">Price</h4>
            <h4 className="dataTable__title">Size</h4>
          </div>
          {lastTrades.length > 0 ? lastTrades.map(trade => <div className="dataTable__last-trade">
              <div className="dataTable__time">{convertTime(trade.results.f)}</div>
              <div className="dataTable__price"></div>
              <div className="dataTable__size"></div>
              
            </div>) : `No data ${lastTrades.length}`}

        </div>

    </div>
  );
}

export default App;
