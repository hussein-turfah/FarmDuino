import React, { useEffect, useState } from 'react';
import styles from './ticker.module.css'; 
import UseHttp from '../../hooks/http-request';

const Ticker = () => {
  const [Ticker, setTicker] = useState([])


  useEffect(() => {
    const data = [];
    const tickerData = async () => {
      try {
        const ticker = await UseHttp("ticker-elements", "GET", "",{Authorization: "bearer " + localStorage.getItem("token")})
        for(let i=0;i < ticker.length;i++){
          data.push(ticker[i]['product_name'] + " : " + ticker[i]['price'] + " $/ kg" )  
        }
        setTicker(data);
      } catch (error) {
        console.log(error);
      }
    };
    tickerData();
  }, []);

  return(
    <div className={styles.ticker}>
      <ul>
        {
          Ticker.map((ticker) => (
            <li className={styles.ticker__item}>
              {ticker}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Ticker;