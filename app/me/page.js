import Image from "next/image";
import styles from '../styles/Me.module.css';
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
const Me = () => {
return (
    <div className={styles.wrapMe}>
        
           <figure className={styles.me}>
          <Image
            src="/assets/pics/IMG_5883.jpeg"
            alt="me"
            className="me"
            width={800}
            height={900}
            priority
          />
        </figure> 
        <Link href="/mobile" className={styles.link}><IoArrowBack   />
           <span>go back</span>
        

              </Link>
              <h2>eating a fischbr
                <span>&#246;</span>tchen</h2>
    </div>
)
}

export default Me;