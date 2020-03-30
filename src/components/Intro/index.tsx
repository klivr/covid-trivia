import React from "react";

interface IntroProps {
  onStart: () => void;
}
export default ({ onStart }: IntroProps) => (
  <div>
    <button type="button" onClick={onStart}>
      Jugá &amp; Aprendé
    </button>
    <p>Con este juego queremos que aprendas todo acerca del COVID19.</p>
    <p>
      La información fue recolectada de diferentes sitios web, e intentaremos incluir siempre la fuente para que puedas
      chequear por tu cuenta.
    </p>
  </div>
);
