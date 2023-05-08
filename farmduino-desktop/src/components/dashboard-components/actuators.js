import { Container_title, Cyan_button, Myactuators, Myitem } from "../general-components/general";
import styles from "./actuators.module.css";
import { Box, Button, Slider, Switch } from '@mui/material';
import React, { useState } from 'react';


const temperature = process.env.PUBLIC_URL + 'assets/icons/temperature-black.png';
const fan = process.env.PUBLIC_URL + 'assets/icons/fan.png';
const light = process.env.PUBLIC_URL + 'assets/icons/light-intensity-black.png';
const light1 = process.env.PUBLIC_URL + 'assets/icons/big-light.png';


const Actuators = (props) => {
  
  const [fansSwitchState, setFansSwitchState] = useState(false);
  const [lightsSwitchState, setLightsSwitchState] = useState(false);
  const [tempSliderValue, setTempSliderValue] = useState(20);
  const [lightSliderValue, setLightSliderValue] = useState(300);
  
  const handleFansSwitchChange = () => {
    setFansSwitchState(!fansSwitchState);
  };
  const handleLightsSwitchChange = () => {
    setLightsSwitchState(!lightsSwitchState);
  };
  const handleTempSliderChange = (event, newValue) => {
    setTempSliderValue(newValue);
  };
  const handleLightsSliderChange = (event, newValue) => {
    setLightSliderValue(newValue);
  };

  const handleSave = () => {
    const settings = JSON.stringify({  
      fansSwitchState: fansSwitchState,
      lightsSwitchState: lightsSwitchState,
      tempSliderValue: tempSliderValue,
      lightSliderValue: lightSliderValue
  })
    console.log(settings);
  }

  return (
    <div className={styles.actuator_settings}>
      <Container_title title="Actuator Settings" />
      <div className={styles.settings_container}>
        <Myactuators title="Fans On/Off"  image_source={fan} value={<Switch checked={fansSwitchState} onChange={handleFansSwitchChange}/>} />
        <Myactuators
          title="Temperature"
          image_source={temperature}
          value={
            <Box sx={{ width: 200 }}>
              <Slider
                aria-label="Custom marks"
                value={tempSliderValue}
                onChange={handleTempSliderChange}
                defaultValue={20} 
                step={2} valueLabelDisplay="auto" // marks={marks}
              />
            </Box>
          }
        />
        <Myactuators
          title="Lights On/Off"
          image_source={light1}
          value={<Switch onChange={handleLightsSwitchChange}/>}
        />
        <Myactuators
          title="Light Intensity"
          image_source={light}
          value={
            <Box sx={{ width: 200 }}>
              <Slider onChange={handleLightsSliderChange} value={lightSliderValue}
                aria-label="Small steps"
                defaultValue={500}
                step={30}  min={0} 
                max={1600} 
                valueLabelDisplay="auto"
              />
            </Box>
          }
        />
      </div>
    </div>
  );
};
export default Actuators;
