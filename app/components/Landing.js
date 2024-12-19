import Draw from "../animation/Draw";
import styles from "../styles/Landing.module.css";
import Box from "../animation/Box";


const Landing = () => {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={`glass ${styles.landing}`}>
        <h1>
          <span>Creating</span>
          <span>
            <Draw />
          </span>
          <Box />
        </h1>
        
      </div>
    
    </>
  );
};
export default Landing;
