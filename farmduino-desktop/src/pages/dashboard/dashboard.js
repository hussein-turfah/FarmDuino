import Sidebar from '../../components/user-sidebar/sidebar';
import styles from './dashboard.module.css';
import Navbar from '../../components/user-navbar/navbar';
import Ticker from '../../components/ticker/ticker';
import { Page_Content_Container, Page_Title, Mybox, Container_title } from '../../components/general-components/general';
import React from 'react';
import Plant from '../../components/dashboard-components/plant';
import Actuators from '../../components/dashboard-components/actuators';

const temperature = process.env.PUBLIC_URL + 'assets/icons/temperature.png';
const humidity = process.env.PUBLIC_URL + 'assets/icons/humidity.png';
const soil_moisture = process.env.PUBLIC_URL + 'assets/icons/soil_moisture.png';
const light_intensity = process.env.PUBLIC_URL + 'assets/icons/light_intensity.png';

const Dashboard = () => {
  return (
    <div className='body'>
      <Sidebar />
      <div className='main_container'>
        <Navbar />
        <Ticker />
        <div className={styles.submain_container}>
          <Page_Title title="Dashboard" subtitle="Greenhouse 1" />
          <div className={styles.container1}>
            <Container_title title='Greenhouse Details' />
            <div className={styles.cards_container}>
              <Page_Content_Container children={<Mybox title="Temperature" image_source={temperature} value="30 C" />} />
              <Page_Content_Container children={<Mybox title="Humidity" image_source={humidity} value="30 C" />} />
              <Page_Content_Container children={<Mybox title="Soil Moisture" image_source={soil_moisture} value="30 C" />} />
              <Page_Content_Container children={<Mybox title="Light Intensity" image_source={light_intensity} value="30 C" />} />
            </div>
          </div>
          <div className={styles.container2}>
            <Actuators />
            <Plant />
          </div>
          <div className={styles.container2}>
            <Container_title title='Weather Forecast' />
            <div className={styles.cards_container}>
              <div>Temperature external api goes here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;