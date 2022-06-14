// @flow
import * as React from "react";
import { Card as OutroNome } from "../Card/Card";
import "./StyleContent.css";

export const Content: React.FC = () => {
  return (
    <main className="conteudo-pagina">
      <OutroNome titulo="titulo card" conteudo="Conteudo card" />
      <OutroNome titulo="titulo card 2" conteudo="Conteudo card 2" />
      <OutroNome titulo="titulo card 3" conteudo="Conteudo card 3" />
      <OutroNome titulo="titulo card 4" conteudo="Conteudo card 4" />
    </main>
  );
};