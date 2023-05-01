import { Container_title, Myitem } from "../general-components/general";
import styles from "./actuators.module.css";
import { Box, Slider, Switch } from '@mui/material';


const temperature = process.env.PUBLIC_URL + 'assets/icons/temperature.png';


const Actuators = (props) => {
  return (
    <div className={styles.actuator_settings}>
      <Container_title title="Actuator Settings" />
      <div className={styles.settings_container}>
        <Myitem title="Fans" image_source={temperature} value={<Switch />} />
        <Myitem
          title="Temperature range"
          image_source={temperature}
          value={
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Custom marks"
                defaultValue={20} // getAriaValueText={valuetext} step={2} valueLabelDisplay="auto" // marks={marks}
              />
            </Box>
          }
        />
        <Myitem
          title="Soil Moisture"
          image_source={temperature}
          value={<Switch />}
        />
        <Myitem
          title="Light Intensity"
          image_source={temperature}
          value={
            <Box sx={{ width: 300 }}>
              {" "}
              <Slider
                aria-label="Small steps"
                defaultValue={0.00000005} // getAriaValueText={valuetext} step={30} // marks min={0} max={1600} valueLabelDisplay="auto"
              />
            </Box>
          }
        />
      </div>
    </div>
  );
};
export default Actuators;
