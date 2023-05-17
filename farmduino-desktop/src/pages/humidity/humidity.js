import Sidebar from '../../components/user-sidebar/sidebar';
import Navbar from '../../components/user-navbar/navbar';
import Ticker from '../../components/ticker/ticker';
import { Page_Title } from '../../components/general-components/general';
import {Plant_row} from '../../components/dashboard-components/plant';
import styles from './humidity.module.css';
import React, { Component, useEffect, useRef, useState } from 'react';
import { Chart } from "react-google-charts";
import UseHttp from '../../hooks/http-request';

const Humidity = () => {
  const [data, setData] = useState([])
  const [aiData, setAiData] = useState([])

  
  useEffect(() => {
    const data = []
    const getData = async () => {
      try {
        const response = await UseHttp("user-data", "GET", "", {Authorization: "bearer "+ localStorage.getItem("token")})
        const chartData = response.map((item) => {
          if(item.name === "humidity") {
            const date = new Date(item.created_at).getHours() + ":" + new Date(item.created_at).getMinutes()
            const value = Number(item.value);
            data.push([date, value]);
          }else {
            return null;
          }
        }).filter((item) => item !== null); 
        
        setData(data);
      } catch(error) {
        console.log(error);
      }
    };
    
    getData();
  }, []);

  // get Ai data from GPT-3.5 in backend (AIController)
  useEffect(() => {
    const data_array = []
    const getAIData = async () => {
      try {
        const ai_data = await UseHttp("ai","GET","",{Authorization: "bearer "+ localStorage.getItem("token")})
        data_array.push(ai_data.Genus_species)
        data_array.push(ai_data.ideal_conditions.humidity)
        data_array.push(ai_data.sentences.humidity)
        setAiData(data_array)
      } catch(error) {
        console.log(error);
      }
    };
    getAIData();
  }, []);

  return (
    <div className="body">
      <Sidebar />
      <div className="main_container">
        <Navbar />
        <div className="submain_container">
          <Page_Title title="Humidity" subtitle="Greenhouse 1" />
          <div className="graph container">
          <Chart
            chartType="ScatterChart"
            options={{
              hAxis: {
                title: 'Time(24h)',
              },
              vAxis: {
                title: 'Humidity(%)',
              },
              title: 'Humidity over Time',
            }}
            data={[["Date", "Humidity"], ...data]}
            width="100%"
            height="60vh"
            legendToggle
          />
          </div>
          <div className={styles.plant}>
          <Plant_row
              genus_species = {aiData[0]}
              condition_title='Ideal Humidity'
              condition={aiData[1]}              
              sentence={aiData[2]}
            />
          </div>
        </div>
        <Ticker />
      </div>
    </div>
  );
}

export default Humidity;