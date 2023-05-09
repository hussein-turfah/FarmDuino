import { Box, FormControl, InputLabel, Select } from "@mui/material";
import styles from "./general.module.css";

// for pages that has a title ex: Dashboard, Temperature, etc and Greenhouse Number
export const Page_Title = (props) => {
  return (
    <div className={styles.page_title}>
      <h1>{props.title}</h1>
      <div>
      <FormControl sx={{minWidth: 150, color: "white", backgroundColor:"gray", borderRadius:"4px"  }} disabled>
        <InputLabel id="demo-simple-select-disabled-label" sx={{ color: "White !important"}}>GreenHouse 1</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          label="GreenHouse 1"
          sx={{ color: "white", "& .MuiSelect-icon": { color: "white !important" } }}
        >
        </Select>
      </FormControl>
    </div>
    </div>
  );
};

// for containers that has cards or other components
export const Container_title = (props) => {
  return(
    <div className={props.styles}>
      <h2>{props.title}</h2>
    </div>
  )
};

export const Mybox = (props) => {
  return(
    <Box className={props.styles}>
      <Mylogo source={props.image_source}/>  
      <h3>{props.title}</h3>
      <h2>{props.value}</h2>
    </Box>
  )
};
export const Mylogo = (props) => {
  return(
    <div className={styles.mylogo}>
      <img src={props.source} className={styles.mylogo_image} alt="Logo" />
    </div>
  )
};
export const Myboxnologo = (props) => {
  return(
    <Box className={props.styles}>
      <h3>{props.title}</h3>
      <h2>{props.value}</h2>
    </Box>
  )
};
export const Myitem = (props) => {
  return(
    <div className={styles.myitem}>
      <div className={styles.myitem_container}>
        <Mylogo source={props.image_source}/>
        <h3 className={styles.myitem_h3}>{props.title}</h3>
      </div>
      <div>{props.value}</div>
    </div>
  )
};
export const Myactuators = (props) => {
  return(
    <div className={styles.myactuators}>
      <div className={styles.myactuators_container}>
        <Mylogo source={props.image_source}/>
        <h3 className={styles.h3}>{props.title}</h3>
      </div>
      <div>{props.value}</div>
    </div>
  )
};

export const My_weather_box = (props) => {
  return(
    <Box className={styles.my_weather_box}>
      <div className={styles.weather_row1}>
        <Myboxnologo styles={styles.date} value={props.date}></Myboxnologo>
        <Myweatherlogo source={props.image_source}/>  
      </div>
      <div className={styles.weather_row2}>
        <Myboxnologo styles={styles.weather_small_box} title={props.temperature} value={props.temp_value}/>
        <Myboxnologo styles={styles.weather_small_box} title={props.humidity} value={props.humidity_value}/>
      </div>
      <div className={styles.weather_row2}>
        <Myboxnologo styles={styles.weather_small_box} title={props.wind_speed} value={props.wind_speed_value} />
        <Myboxnologo styles={styles.weather_small_box} title={props.description} value={props.desc_value}/>
      </div>
    </Box>
  )
};

export const Myweatherlogo = (props) => {
  return(
    <div className={styles.weather_logo}>
      <img src={props.source} className={styles.mylogo_image} alt="Logo" />
    </div>
  )
};