"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { IoClose, IoArrowForward } from "react-icons/io5";
import styles from "../styles/About.module.css";
import Link from "next/link";

const About = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  const animationSettings = {
    initial: { opacity: 0 },
    animate: { opacity: isActive ? 1 : 0 },
    transition: {
      delay: isActive ? 7 : 0,
      duration: isActive ? 4: 0,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <motion.div
        className={`${styles.box} ${isActive ? styles.active : ""}`}
        {...animationSettings}
      >
       
        <div className={styles.about}>
        <IoClose onClick={handleClick} className={styles.back} />

        <div className={styles.content}>
          <h2>What About Anna?</h2>
            <p>
              Remember the movie <span>What About Bob?</span> with Bill Murray
              back in 1991?
            </p>
            <p>
              My family and I loved that movie – we could quote it forward and
              backwards.
            </p>
            <br />
            <p>
              Anyway, a few years later, the web became accessible to the
              public, and little did I know it would end up being such a big
              part of my life.
            </p>

           
            <p>
              The real deep dive started when I went to the Chaos Communication
              Congress in Hamburg.
            </p>
            <p>Ever since then, I've wanted to learn how to code.</p>
            <br/>
            <p>
              Coming from a sociology background, I was fascinated—not just by
              how the digital world shapes society and individuals, but by its
              endless creative possibilities. Despite the fast-paced nature of
              it all, it just clicked for me. It felt like a new world had
              opened up, so I decided to dive in and train as a full-stack web
              developer.
            </p>
          
            <p>
              Since February 2022, I've been teaching web development with the
              MERN stack, helping people from non-tech backgrounds navigate
              their way into the field. I also coach my colleagues, blending
              teaching and design techniques to make the web more accessible for
              learners.
            </p>
            <br/>
            <p>
              And when I'm not doing that, you'll probably find me experimenting
              with digital illustrations and animations or creating giant
              paintings on flattened cardboard boxes.
            </p>
<nav>
            <ul>
         
          <li>
            <Link href="/projects">
          <IoArrowForward />
          <span> projects & skills</span>
          </Link>
            </li>
          <li>
            <a
              href="https://github.com/anna-olivia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoArrowForward />
              <span> github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anna-olivia-wietholtz-6373a41b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoArrowForward />
              <span> linkedin</span>
            </a>
          </li>
          <li>
            <Link href="/impressum"> <IoArrowForward />
            <span> impressum</span></Link>
          </li>
         
        </ul>
      </nav>
      <p>© {new Date().getFullYear()} – anna-olivia lebert-wietholtz</p>
          </div>

          <figure>
            <Image
              src="/assets/pics/IMG_5883.jpeg"
              alt="me"
              className="me"
              width={800}
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
