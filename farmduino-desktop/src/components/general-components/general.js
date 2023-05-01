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
export const Page_Content_Container = (props) => {
  return(
    <div className={styles.page_content_container}>
      {props.children}
    </div>
  )
};
export const Container_title = (props) => {
  return(
    <div className={styles.container_title}>
      <h2>{props.title}</h2>
    </div>
  )
};

export const Mybox = (props) => {
  return(
    <Box className={styles.mybox}>
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
        <h3>{props.title}</h3>
      </div>
      <div>{props.value}</div>
    </div>
  )
};