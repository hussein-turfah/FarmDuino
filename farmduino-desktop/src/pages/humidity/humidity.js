import React, { Component } from 'react';
import Sidebar from '../../components/user-sidebar/sidebar';
import Navbar from '../../components/user-navbar/navbar';
import Ticker from '../../components/ticker/ticker';
import { Page_Title } from '../../components/general-components/general';
import {Plant_row} from '../../components/dashboard-components/plant';
import styles from './humidity.module.css';

const Humidity = () => {
  return (
    <div className="body">
      <Sidebar />
      <div className="main_container">
        <Navbar />
        <Ticker />
        <div className="submain_container">
          <Page_Title title="Humidity" subtitle="Greenhouse 1" />
          <div className="graph container"></div>
          <div className={styles.plant}>
            <Plant_row />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Humidity;