import { Box } from "@mui/material";
import styles from "./general.module.css";

// for pages that has a title ex: Dashboard, Temperature, etc and Greenhouse Number
export const Page_Title = (props) => {
  return (
    <div className={styles.page_title}>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
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
      <h2>{props.title}</h2>
      <h3>{props.value}</h3>
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
export const My_weather_box = (props) => {
  return(
    <Box className={props.styles}>
      <h3>{props.date}</h3>
      <Mylogo source={props.image_source}/>  
      <p>{props.temperature}</p>
      <p>{props.description}</p>
      <p>{props.wind_speed}</p>
      <p>{props.humidity}</p>
    </Box>
  )
};