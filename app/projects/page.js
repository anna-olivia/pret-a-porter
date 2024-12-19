import Link from "next/link";
import styles from '../styles/Projects.module.css';
import { IoArrowForward } from "react-icons/io5";

const Projects = ()=> {
    return (
        <div className={styles.projects}>
        <h1>Under Construction ...</h1>
        <Link href="/" ><IoArrowForward className={styles.link} />
              back home
              </Link>
              <a
          href="https://github.com/anna-olivia"
          target="_blank"
          rel="noopener noreferrer"
        >or visit  
         <span>github
        </span>
           
        </a>
        <br />
              
        </div>
    )
}

export default Projects;