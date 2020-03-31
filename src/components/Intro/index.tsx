import React from "react";
import style from "./intro.module.css";

interface IntroProps {
  onStart: () => void;
}
export default ({ onStart }: IntroProps) => (
  <div>
    <p className = {style.top}>Con este juego queremos que aprendas todo acerca del COVID19.</p>
    
    <button className = {style.introButton} type="button" onClick={onStart}>
      Jugá &amp; Aprendé
    </button>
    
    <p className={style.foot}>
      La información fue recolectada de diferentes sitios web, e intentaremos incluir siempre la fuente para que puedas
      chequear por tu cuenta.
    </p>
    
  </div>
);
