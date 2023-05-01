import styles from './ticker.module.css'; 

const Ticker = () => {
  return(
    <div className={styles.body}>
      <p className={styles.text}>
        This is the ticker of the market prices of the vegetables and fruits.
      </p>
    </div>
  )
}
export default Ticker;