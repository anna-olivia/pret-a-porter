"use client"

import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import About from "./components/About";
import Mobile from "./components/Mobile";

export default function Home() {
  // Zustand für die Bildschirmbreite (ist es ein mobiles Gerät oder nicht)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Funktion zur Überprüfung der Bildschirmbreite
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Initiale Überprüfung
    checkMobile();

    // Event Listener für das Ändern der Bildschirmgröße
    window.addEventListener("resize", checkMobile);

    // Aufräumfunktion, um den Event Listener zu entfernen
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []); // Leeres Abhängigkeitsarray sorgt dafür, dass der Effekt nur einmal beim Initialisieren ausgeführt wird

  return (
    <>
      {isMobile ? (
        <Mobile />
      ) : (
        <>
          <Landing />
          <About />
          <Footer />
        </>
      )}
    </>
  );
}
