// @flow
import * as React from "react";
import "./StyleCard.css";

interface PropsCard {
  titulo: string;
  conteudo: string;
}

export const Card = (props: PropsCard) => {
  return (
    <div className="card">
      <h1>{props.titulo}</h1>
      <p>{props.conteudo}</p>
      <button>Apagar 2</button>
      <button>Editar</button>
    </div>
  );
};