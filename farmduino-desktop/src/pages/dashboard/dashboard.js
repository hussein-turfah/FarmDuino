import Sidebar from '../../components/user-sidebar/sidebar';
import styles from './dashboard.module.css';
import Navbar from '../../components/user-navbar/navbar';
import Ticker from '../../components/ticker/ticker';
import { Page_Title, Mybox, Container_title, My_weather_box } from '../../components/general-components/general';
import React, { useState, useEffect  } from 'react';
import { Plant } from '../../components/dashboard-components/plant';
import Actuators from '../../components/dashboard-components/actuators';
import UseHttp from '../../hooks/http-request';

const temperature = process.env.PUBLIC_URL + 'assets/icons/temperature.png';
const humidity = process.env.PUBLIC_URL + 'assets/icons/humidity.png';
const soil_moisture = process.env.PUBLIC_URL + 'assets/icons/soil_moisture.png';
const light_intensity = process.env.PUBLIC_URL + 'assets/icons/light_intensity.png';

const Dashboard = () => {
  const [weather, setWeather] = useState([]);
  const [aiData, setAIData] = useState([]);
  

  useEffect(() => {
    const weatherData = async () => {
      try {
        const weather = await UseHttp("weather", "GET");
        setWeather(weather);
      } catch (error) {
        console.log(error);
      }
    };
    weatherData();
  }, []);

  return (
    <div className='body'>
      <Sidebar />
      <div className='main_container'>
        <Navbar />
        <Ticker />
        <div className='submain_container'>
          <Page_Title title="Dashboard" subtitle="Greenhouse 1" />
          <div className={styles.container1}>
            <Container_title title='Greenhouse Details' />
            <div className={styles.cards_container}>
              <Mybox styles={styles.mybox} title="Temperature" image_source={temperature} value={'test'} />
              <Mybox styles={styles.mybox} title="Humidity" image_source={humidity} value="30 C" />
              <Mybox styles={styles.mybox} title="Soil Moisture" image_source={soil_moisture} value="30 C" />
              <Mybox styles={styles.mybox} title="Light Intensity" image_source={light_intensity} value="30 C" />
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.actuators}><Actuators/></div>
            <div className={styles.plant}><Plant /></div>
          </div>
          <div className={styles.container3}>
            <Container_title title='Weather Forecast' />
            <div className={styles.cards_container}>
                {weather.map((day, index) => (
                  <My_weather_box styles={styles.my_weather_box}
                    key={index}
                    date={day.date}
                    image_source={`https://openweathermap.org/img/w/${day.icon}.png`}
                    temperature={`Temperature: ${day.temperature}°C`}
                    description={`Description: ${(day.description).charAt(0).toUpperCase() + (day.description).slice(1)}`}
                    humidity={`Humidity: ${day.humidity}%`}
                    wind_speed={`Wind speed: ${day.wind_speed} Km/h`}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;