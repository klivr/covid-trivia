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
    </>
  );
};

export default App;
