import Footer from "./components/Footer";
import Hero from "./components/Hero";
import styles from "./styles/Landing.module.css";

export default function Home() {
  
  return (
  
   
        <>
          <Hero />
        <div className={styles.responsive}>
          {/* <About/> */}
          <Footer/>

        </div>
        </>

  );
}
