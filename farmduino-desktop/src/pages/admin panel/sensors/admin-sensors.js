import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../../components/user-sidebar/admin-sidebar'
import { Sensors_Page_Title } from '../../../components/general-components/general';
import Chart from 'react-google-charts';
import { Plant_row } from '../../../components/dashboard-components/plant';
import AdminNavbar from '../../../components/user-navbar/admin-navbar';
import styles from './admin-sensors.module.css'
import Ticker from '../../../components/ticker/ticker';
import UseHttp from '../../../hooks/http-request';

const Admin_sensors = () => {
  // get data from database
  const [data, setData] = useState([])

  useEffect(() => {
    const data = []
    const getData = async () => {
        try{
        const response = await UseHttp("user-data", "GET","",{Authorization: "bearer"+ localStorage.getItem("token")})
        const data = await response.json()
        setData(data)
      }catch(error){
        console.log(error)
      }
  }
  getData()
  }, [])


  return (
    <div className="body">
      <AdminSidebar />
      <div className="main_container">
        <AdminNavbar />
        <div className="submain_container">
          <Sensors_Page_Title title="Temperature" subtitle="Greenhouse 1" />
          <div className="graph container">
            <Chart
              width={'100%'}
              height={'90vh'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[]}
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
export default Admin_sensors