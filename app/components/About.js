"use client";
import { useState } from "react";
import {motion} from "motion/react";
import { FcUndo } from "react-icons/fc";
import Image from "next/image";
import styles from "../styles/About.module.css";
const About = () => {
  const [isActive, setIsActive] = useState(true);


  const handleClick = ()=> {
    setIsActive((prevState)=> !prevState);
  }

  return (

    <>
      <motion.div className={`box ${isActive ? "active":""}`}
        initial={{x: "100%"}}
            animate={{
                x: isActive ?"0": "100%"
            }}
            transition={{
                delay: isActive ? 8 : 0,
                duration: 4,
                ease: "easeInOut",
            }}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100vw",
                  height: "100vh",
                  transform: "translate(0, -100%)",zIndex:100,
                }}
          
        >
        <div className={styles.backdrop}></div>
    <div className={`glass ${styles.about}`}>
<FcUndo className={styles.icon} onClick={handleClick}/>
      <p className={styles.text}>
        Hi, I’m <span>Anna.</span> I first attended the Chaos Communication Congress in
        Hamburg in 2016, and since then, I’ve wanted to learn how to 
        <span> code.</span> As a former <span>sociologist</span>, I was fascinated not only by the digital world and
        its immense influence on society and individuals but also by how, despite the accelerating pace of life, I deeply resonated with its
        possibilities. A new world opened up to me, which led me to train as a full-stack web developer. Since February 2022, I’ve been teaching and
        guiding participants from non-tech backgrounds in web development with
        the <span>MERN stack</span> , while also <span>coaching</span> my colleagues, using both pedagogical and design techniques, to help learners access the web more easily. In my free time, I also explore digital illustrations and
        animations.
      </p>
      <figure>
        <Image
          src="/assets/pics/IMG_5883.jpeg"
          alt="me"
          className="me"
          width={460}
          height={900}
          priority
        />
      </figure>
    </div>
        </motion.div>
    </>
  );
};
export default About;
