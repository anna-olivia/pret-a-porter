"use client";
import React, { useState } from "react";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import Draw from "../animation/Draw";
import Box from "../animation/Box";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.mobile}>
      <div className={styles.header}>
        <span>Creating </span>
        <IoMenu onClick={toggleMenu} className={styles.icon}/>
      </div>
      <nav className={`${styles.inhalt} ${isMenuOpen ? styles.open : ""}`}>
        <IoClose className={styles.icon} onClick={toggleMenu} />
        <ul>
          <li>
            <Link href="/mobile">about</Link>
          </li>
          <li>
                <Link href="/projects">
                projects & skills
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
            <Link href="/impressum">impressum</Link>
          </li>
          <li>© {new Date().getFullYear()} – anna-olivia lebert-wietholtz</li>
        </ul>
      </nav>
      <Draw />
      <span className={styles.asym}>web</span>
      <Box/>
    </div>
  );
}
