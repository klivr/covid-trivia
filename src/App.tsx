import React, { useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

import HomePage from "./pages/home";

import styles from "./styles.module.css";

const App: React.FC = () => {
  const [cookies, setCookies] = useState(!!Cookies.get("CookieConsent"));
  return (
    <>
      <CookieConsent
        buttonText="Seguir navegando!"
        location="bottom"
        onAccept={() => {
          setCookies(true);
        }}
      >
        Este sitio web utiliza cookies para optimizar la experiencia de usuario.
      </CookieConsent>

      {!cookies && <div className={styles.overlay} />}
      <HomePage />
      <div className={styles.footer}>
        <p className={styles.developedBy}>
          Desarrollado por{" "}
          <a href="https://www.klivr.com" target="_blank" rel="noopener noreferrer">
            Klivr.com
          </a>
        </p>
        <p className={styles.agreement}>
          El uso del sitio es gratuito. No almacenamos ni pedimos datos personales. <br />
          No nos hacemos responsables si alguno de los datos no es correcto o esta desactualizado.
        </p>
      </div>
    </>
  );
};

export default App;
