import Hero from "./components/Hero";
import styles from "./styles/Landing.module.css";
import About from "./components/About";
export default function Home() {
  return (
    <>
      <Hero />
      <div className={styles.responsive}>
     
        <About/> 
      </div>
    
    </>
  );
}
