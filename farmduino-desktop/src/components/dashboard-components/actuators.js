import { Container_title, Myitem } from "../general-components/general";
import styles from "./actuators.module.css";
import { Box, Slider, Switch } from '@mui/material';


const temperature = process.env.PUBLIC_URL + 'assets/icons/temperature-black.png';
const fan = process.env.PUBLIC_URL + 'assets/icons/fan.png';
const light = process.env.PUBLIC_URL + 'assets/icons/light-intensity-black.png';
const light1 = process.env.PUBLIC_URL + 'assets/icons/big-light.png';
const Actuators = (props) => {
  return (
    <div className={styles.actuator_settings}>
      <Container_title title="Actuator Settings" />
      <div className={styles.settings_container}>
        <Myitem title="Fans On/Off" image_source={fan} value={<Switch />} />
        <Myitem
          title="Temperature"
          image_source={temperature}
          value={
            <Box sx={{ width: 200 }}>
              <Slider
                aria-label="Custom marks"
                defaultValue={20} //getAriaValueText={valuetext} 
                step={2} valueLabelDisplay="auto" // marks={marks}
              />
            </Box>
          }
        />
        <Myitem
          title="Lights On/Off"
          image_source={light1}
          value={<Switch />}
        />
        <Myitem
          title="Light Intensity"
          image_source={light}
          value={
            <Box sx={{ width: 200 }}>
              <Slider
                aria-label="Small steps"
                defaultValue={500} // getAriaValueText={valuetext} 
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
