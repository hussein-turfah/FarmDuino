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
  const [data, setData] = useState([])
  const [aiData, setAiData] = useState([])
  
  // get graph data from database
  useEffect(() => {
    const data = []
    const getData = async () => {
      try {
        const response = await UseHttp("user-data", "GET", "", {Authorization: "bearer "+ localStorage.getItem("token")})
        const chartData = response.map((item) => {
          if(item.name === "temperature") {
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
        data_array.push(ai_data.ideal_conditions.temperature)
        data_array.push(ai_data.sentences.temperature)
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
          <Page_Title title="Temperature" subtitle="Greenhouse 1" />
          <div className="graph container">
          <Chart
            chartType="LineChart"
            options={{
              hAxis: {
                title: 'Time(24h)',
              },
              vAxis: {
                title: 'Temperature(°C)',
              },
              title: 'Temperature over Time',
            }}
            data={[["Date", "Temperature"], ...data]}
            width="100%"
            height="60vh"
            legendToggle
          />
          </div>
          <div className={styles.plant}>
            <Plant_row
              genus_species = {aiData[0]}
              condition_title='Ideal Temperature'
              condition={aiData[1]}              
              sentence={aiData[2]}
            />
          </div>
        </div>
        <Ticker />
      </div>
    </div>
  );
};

export default Temperature;
