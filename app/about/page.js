import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={`glass ${styles.about}`}>
        
        <h1>
          What About <br /> Anna?
        </h1>
        <div className={styles.text}>
            <div>
            <p>Remember the movie <span>What About Bob?</span> with Bill Murray back in 1991?</p>
            <p>My family and I loved that movie – we could quote it forward and backwards.</p>
            <br/>
            <p>Anyway, a few years later, the web became accessible to the public, and little did I know it would end up being such a big part of my life. </p>
            <p>
              The real deep dive started when I went to the Chaos Communication Congress in Hamburg.</p>
              <p> 
              Ever since then, I've wanted to learn how to code.
              </p>
              <p> Coming from a sociology background, I was fascinated—not just by how the digital world shapes society and individuals, but by its endless creative possibilities. Despite the fast-paced nature of it all, it just clicked for me. It felt like a new world had opened up, so I decided to dive in and train as a full-stack web developer.</p>
            </div>
            <div>
            <p>
Since February 2022, I've been teaching web development with the MERN stack, helping people from non-tech backgrounds navigate their way into the field. I also coach my colleagues, blending teaching and design techniques to make the web more accessible for learners. </p><p>And when I'm not doing that, you'll probably find me experimenting with digital illustrations and animations or creating giant paintings on flattened cardboard boxes.
            </p>
            <Link href="/projects" ><IoArrowForward className={styles.link} />
              see projects
              </Link>
              <br/>
              <Link href="/" ><IoArrowForward className={styles.link} />
              back home
              </Link>

            </div>
           
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
    </>
  );
};
export default About;
