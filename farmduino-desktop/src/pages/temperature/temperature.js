import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/user-sidebar/sidebar';
import Navbar from '../../components/user-navbar/navbar';
import Ticker from '../../components/ticker/ticker';
import { Page_Title } from '../../components/general-components/general';
import { Plant_row } from '../../components/dashboard-components/plant';
import styles from './temperature.module.css';
import { Chart } from 'react-google-charts';
import UseHttp from '../../hooks/http-request';


const Temperature = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = [];
    const getData = async () => {
      try {
        const response = await UseHttp('user-data', 'GET', '', {
          Authorization: 'bearer ' + localStorage.getItem('token'),
        });
        const chartData = response
          .filter((item) => item.name === 'temperature')
          .map((item) => {
            const date = new Date(item.created_at).getHours() + ':' + new Date(item.created_at).getMinutes();
            const value = Number(item.value);
            // return [date, value];
            data.push(date, value);
          });
          console.log(chartData);
          setData(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

    getData();
  }, []);
  

  // console.log(test);
  console.log(data);
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
                  title: 'Time of Day',
                  type: 'string',
                },
                vAxis: {
                  title: 'Temperature (°C)',
                },
                curveType: 'function',
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
