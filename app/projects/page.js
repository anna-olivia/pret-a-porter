"use client";
import React, {useState} from "react";
import Link from "next/link";
import styles from '../styles/Projects.module.css';
import { IoArrowBack, IoInformationCircleOutline, IoClose } from "react-icons/io5";

const Projects = ()=> {
const links = [
{href:  "https://github.com/anna-olivia/prototyping-figma", skill: "200px", text: "figma" },
    {href:  "https://github.com/anna-olivia/Spickzettel_gruppeTZ", skill: "200px", text: "html5" },
    {href:  "https://github.com/anna-olivia/restore2020_wp", skill: "200px", text: "css3" },
    {href:  "https://github.com/anna-olivia/booti", skill: "200px", text: "bootstrap" },
    {href:  "https://github.com/anna-olivia/e-my-ud-vite1", skill: "200px", text: "js" },
    {href:  "https://github.com/anna-olivia/invest-r-action", skill: "175px", text: "react" },
    {href:  "https://github.com/anna-olivia/basic-router", skill: "150px", text: "next" },
    {href:  "https://github.com/anna-olivia/back-ground", skill: "150px", text: "node.js" },
    {href:  "https://github.com/anna-olivia/play-type/tree/master", skill: "100px", text: "typescript" },
    {href:  "https://github.com/anna-olivia/restore2020_abschluss", skill: "100px", text: "php" },
    
]
const [isInfoOpen, setIsInfoOpen] = useState(false);

const toggleInfo = () => {
  setIsInfoOpen(!isInfoOpen);
};


    return (
        <div className={styles.projects}>
<div className={styles.header}>
<Link href="/" ><IoArrowBack className={styles.link} />
              </Link>
              <IoInformationCircleOutline onClick={toggleInfo} className={styles.info}/>
             
</div>
<div className={`${styles.explain} ${isInfoOpen ? styles.open : ""}`}>
<IoClose className={styles.icon} onClick={toggleInfo} />
<p>This is a little sneak peak of some of my projects.</p>
<p> I chose to visualise the level of my skills in each language with a growing inner circle. The larger the pinkish circle, the more confident I am working with this language.</p>
<p> So far, I only categorize my skills as beginner, intermediate, and advanced. In the future, I will refine it a bit.</p>
</div>
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
