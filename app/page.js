import Footer from "./components/Footer";
import Hero from "./components/Hero";
import styles from "./styles/Landing.module.css";
import Canvas from "./components/Canvas";
export default function Home() {
  
  return (
  
   
        <>
          <Hero />
        <div className={styles.responsive}>
          {/* <About/> */}
          <Footer/>
<Canvas/>
        </div>
        </>

  );
}
