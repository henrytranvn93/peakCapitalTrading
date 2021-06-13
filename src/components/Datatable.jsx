import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { convertTime } from '../utils/utils';
import { v4 as uuidv4 } from 'uuid';
const API_KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_API_SERVER;

export default function Datatable({ticker, speed}) {
    const [lastTrades, setLastTrades] = useState([]);

    useEffect(() => {
        let getTrades = setInterval(() => getLastTrade(ticker, getTrades), 1000/speed);
        return () => clearInterval(getTrades);
    }, [speed])

    const getLastTrade = (search, getTrades) => {

        axios.get(`${URL}/${search}?apiKey=${API_KEY}`)
        .then(res => {
            if (res.data.status !== "NOT_FOUND") {
                // if(lastTrades.length > 0 && res.data.t === lastTrades[lastTrades.length - 1].t) {
                //     clearInterval(getTrades)
                // } else {
                    lastTrades.push(res.data);
                    setLastTrades([...lastTrades]);
                // }
            } else {
              alert(`Ticker ${search} Not Found!`);
              clearInterval(getTrades);
            }
        })
        .catch(err => {
          console.log(err);
        })
        console.log(lastTrades);
      }

    return (
        lastTrades.length > 0 ?
            <div className="dataTable__data">
                {lastTrades.reverse().map(trade => 
                <div className="dataTable__last-trade" key={uuidv4()}>
                    <div className="dataTable__info dataTable__time">{convertTime(trade.results.y)}</div>
                    <div className="dataTable__info dataTable__price">{trade.results.p}</div>
                    <div className="dataTable__info dataTable__size">{trade.results.s}</div>
                </div>
                )}
            </div>
            : <p className="dataTable__loading">Loading... </p>
        )
}
