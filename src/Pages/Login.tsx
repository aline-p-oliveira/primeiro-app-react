import * as React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

export const Login: React.FC = () => {
  return (
    <div>
      <Header titulo="Página Login" descricao="esta na pagina login" link="/" />
      <h1>Cadastre-se</h1>
      <div>
        <label htmlFor="input-email">E-mail</label>
        <input type="email" id="input-email" />
      </div>
      <div>
        <label htmlFor="input-senha">Senha</label>
        <input type="email" id="input-senha" />
      </div>

      <Link to={"/"}> Voltar à Página Inicial </Link>
    </div>
  );
};