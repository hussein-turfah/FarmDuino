import React, { Component } from 'react';
import Sidebar from '../../components/user-sidebar/sidebar';
import Navbar from '../../components/user-navbar/navbar';
import Ticker from '../../components/ticker/ticker';
import { Page_Title } from '../../components/general-components/general';
import {Plant_row} from '../../components/dashboard-components/plant';
import styles from './temperature.module.css';
import { Chart } from 'react-google-charts';


const Temperature = () => {
  function generateData() {
    const data = [['X', 'Temperature']];
    for (let i = 0; i < 10; i++) {
      const temperature = Math.floor(Math.random() * 20) + 20;
      data.push([i, temperature]);
    }
    return data;
  }
  const data = generateData();
  return (
    <div className="body">
      <Sidebar />
      <div className="main_container">
        <Navbar />
        <div className="submain_container">
          <Page_Title title="Temperature" subtitle="Greenhouse 1" />
          <div className="graph container">
            <Chart
              width={'100%'}
              height={'90vh'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={data}
              options={{
                hAxis: {
                  title: 'Day Time',
                },
                vAxis: {
                  title: 'Temperature( °C)',
                },
                curveType:"function",
                title: 'Temperature over Time',
              }}
              rootProps={{ 'data-testid': '1' }}
            />
          </div>
          <div className={styles.plant}>
            <Plant_row />
          </div>
        </div>
<Ticker />
      </div>
    </div>
  );
};

export default Temperature;

