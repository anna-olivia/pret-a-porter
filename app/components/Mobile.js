import React, {useState} from 'react'

import styles from '../styles/Mobile.module.css';
import Link from 'next/link';
import { IoMenuOutline,IoClose } from "react-icons/io5";
import Draw from '../animation/Draw';
import Footer from './Footer';

export default function Mobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

   

  return (
    <div className={styles.mobile}>
      


    <span>Creating </span>
    <IoMenuOutline onClick={toggleMenu}/>
    <nav className={`${styles.inhalt} ${isMenuOpen ? styles.open : ''}`}>
        <IoClose className={styles.icon} onClick={toggleMenu}/>
        <ul>
            <li>
                <Link href="/mobile">
                about
                </Link>
            </li>
            <li>
        <a
          href="https://github.com/anna-olivia"
          target="_blank"
          rel="noopener noreferrer"
        >
          github 
        </a>
        </li>
        <li>

        <a
          href="https://www.linkedin.com/in/anna-olivia-wietholtz-6373a41b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin 
        </a>
        </li>
        <li>
                <Link href="/impressum">
                impressum
                </Link>
            </li>
          <li>
         © {new Date().getFullYear()}    – anna-olivia lebert-wietholtz
          </li>
          
        
        </ul>
      </nav>
     <Draw/>
    <span>web</span>
    <p>For better user experience  visit Site on a larger device</p>
    <div className={styles.links}>
      <Link href="/about">about </Link>
      <br/>
      {/* <Link href="/projects" >
              projects
              </Link>
              <br/> */}
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
      
    </div>
  )
}
