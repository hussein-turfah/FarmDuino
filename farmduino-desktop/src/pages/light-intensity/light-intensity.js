import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/user-sidebar/sidebar';
import Navbar from '../../components/user-navbar/navbar';
import Ticker from '../../components/ticker/ticker';
import { Page_Title } from '../../components/general-components/general';
import {Plant_row} from '../../components/dashboard-components/plant';
import styles from './light-intensity.module.css';

const Light_intensity = () => {
  return (
    <div className="body">
      <Sidebar />
      <div className="main_container">
        <Navbar />
        <div className="submain_container">
          <Page_Title title="Light Intensity" subtitle="Greenhouse 1" />
          <div className="graph container"></div>
          <div className={styles.plant}>
            <Plant_row />
          </div>
        </div>
        <Ticker />
      </div>
    </div>
  );
};

export default Light_intensity;
