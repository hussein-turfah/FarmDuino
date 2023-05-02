import React, { Component } from 'react';
import Sidebar from '../../components/user-sidebar/sidebar';
import Navbar from '../../components/user-navbar/navbar';
import Ticker from '../../components/ticker/ticker';
import { Page_Title } from '../../components/general-components/general';
import Plant from '../../components/dashboard-components/plant';

const MyLineGraph = () => {

    return (
      <div className='body'>
        <Sidebar />
        <div className='main_container'>
          <Navbar />
          <Ticker />
          <div className='submain_container'>
            <Page_Title title="Temperature" subtitle="Greenhouse 1" />
            <div className='graph container'>
            </div>
            <Plant />
          </div>
        </div>
        
      </div>
    );
  
}

export default MyLineGraph;

