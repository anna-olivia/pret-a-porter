import React from "react";
import styles from '../styles/Section.module.css'
const Info = () => {
  return (
    <div className={styles.info}>
      <p>
        Users should feel comfortable on a website, easily find their way
        around, and be subtly guided by the UI design.{" "}
        <a
          href="https://github.com/anna-olivia?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here are some examples of <span> my work</span>
        </a>
      </p>
    </div>
  );
};

export default Info;