import Link from "next/link";

import styles from "../styles/Impressum.module.css";
import Footer from "../components/Footer";
import { IoArrowBack } from "react-icons/io5";

const Impressum = () => {
  return (
    <>
      <div className={`glass ${styles.impressum}`}>
      
        <div>
      
          <h2>Impressum</h2>
          <address>
            <p>
              <strong>Anna-Olivia Lebert-Wietholtz</strong>
            </p>
            <p>Kiefholzstraße 403c</p>
            <p>12435 Berlin</p>
            <p>Kontakt: a.wietholtz(at)posteo.de</p>
          </address>
          <h2>Hosting</h2>
          <p>
            Diese Website wird von Vercel Inc.340 S Lemon Ave #4133Walnut, CA
            91789, USA gehostet. Der Anbieter erhebt und speichert automatisch
            Informationen in sogenannten Server-Logfiles, die Ihr Browser
            automatisch übermittelt. Dies sind: - Browsertyp und -version -
            Verwendetes Betriebssystem - Referrer-URL - Hostname des
            zugreifenden Rechners - Uhrzeit der Serveranfrage - IP-Adresse Diese
            Daten werden nur zu technischen Zwecken genutzt und nicht mit
            anderen Datenquellen zusammengeführt.
          </p>
          <br/>
          <Link href="/">
          <IoArrowBack className={styles.link} />back home
        </Link>
        </div>
        <div>
          <h2>Urheberrechte</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend
            entfernen.Verwendung von Schriftarten Diese Website verwendet
            Schriftarten, die lokal eingebunden wurden. Es werden keine Daten an
            Dritte weitergegeben.
          </p>

          <h2>Verwendung von Schriftarten</h2>
          <p>
            Diese Website verwendet Schriftarten, die lokal eingebunden wurden.
            Es werden keine Daten an Dritte weitergegeben.
          </p>

        </div>
      
      </div>

      <Footer />
    </>
  );
};

export default Impressum;
