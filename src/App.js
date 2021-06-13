import React, { useState } from 'react';
import './App.scss';

import Datatable from './components/Datatable';
import searchIcon from "./assets/searchIcon.svg";


function App() {
  const [submit, setSubmit] = useState(false);
  const [ticker, setTicker] = useState('');
  const [speed, setSpeed] = useState(1);

  const handleSearch = (event) => {
    event.preventDefault();
    let searchQuery = event.target.search.value.toUpperCase();
    setTicker(searchQuery);
    setSubmit(true);
  }

  const handleReset = () => {
    window.location.reload(); 
  }

  const handleChange = (e) => {
    setSpeed(e.target.value);
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
          <select value={speed} onChange={handleChange} className="timeSales__speed-button">
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
          {submit ? <Datatable ticker={ticker} speed={speed}/> : <p className="dataTable__notification">Please enter ticker to get data</p>}
        </div>

    </div>
  );
}

export default App;
