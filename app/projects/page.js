import Link from "next/link";
import styles from '../styles/Projects.module.css';
import { IoArrowBack } from "react-icons/io5";

const Projects = ()=> {
const links = [
    {href:  "https://github.com/anna-olivia", skill: "200px", text: "html5" },
    {href:  "https://github.com/anna-olivia", skill: "200px", text: "css3" },
    {href:  "https://github.com/anna-olivia", skill: "200px", text: "bootstrap" },
    {href:  "https://github.com/anna-olivia", skill: "200px", text: "js" },
    {href:  "https://github.com/anna-olivia", skill: "175px", text: "react" },
    {href:  "https://github.com/anna-olivia", skill: "150px", text: "next" },
    {href:  "https://github.com/anna-olivia", skill: "150px", text: "node.js" },
    {href:  "https://github.com/anna-olivia", skill: "100px", text: "typescript" },
    {href:  "https://github.com/anna-olivia", skill: "100px", text: "php" },
    
]


    return (
        <div className={styles.projects}>
        <Link href="/" ><IoArrowBack className={styles.link} />
              </Link>

              <div className={styles.gallery}>
          {links.map((link, index) => 
          (<a
          href={link.href}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
            <div className={styles.project}>
           
            <div className={styles.skills} style={{width: `${link.skill}`, height: `${link.skill}`}}>
                
                <h2>
                {link.text}

                </h2>
                 </div>
            </div>
           
        </a>
      )    )
    }
              </div>
          
     
              
        </div>
    )
}

export default Projects;