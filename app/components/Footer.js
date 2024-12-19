import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { PiMouseScrollThin } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className={`glass ${styles.wrapper}`}>
     <PiMouseScrollThin className={styles.icon}/>
      <h1>contact me </h1>
      <div className={styles.links}>
      <Link href="/about">about </Link>
      <br/>
        <a
          href="https://github.com/anna-olivia"
          target="_blank"
          rel="noopener noreferrer"
        >
          github 
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/anna-olivia-wietholtz-6373a41b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin 
        </a>
        <br/>
       
        <Link href="/impressum">impressum </Link>
      </div>
      <p className={styles.author}> 
        ./code and ./design © {new Date().getFullYear()}    – anna-olivia lebert-wietholtz
      </p>
      
    </footer>
  );
};

export default Footer;
