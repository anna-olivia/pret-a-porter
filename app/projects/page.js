import Link from "next/link";
import styles from '../styles/Projects.module.css';
import { IoArrowBack } from "react-icons/io5";

const Projects = ()=> {
const links = [
    "https://github.com/anna-olivia",
    "https://github.com/anna-olivia?tab=repositories",
    "https://github.com/anna-olivia?tab=repositories",

]


    return (
        <div className={styles.projects}>
        <Link href="/" ><IoArrowBack className={styles.link} />
              </Link>

              <div className={styles.gallery}>
          {links.map((link, index) => 
          (<a
          href={link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
            <div className={styles.project}></div>
        </a>
      )    )
    }
              </div>
          
     
              
        </div>
    )
}

export default Projects;