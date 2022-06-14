import React from "react";
import { Link } from "react-router-dom";
import "./StyleHeader.css";


interface PropsHeader {
    titulo: string;
    link: string;
    descricao: string;
}

const Header: React.FC<PropsHeader> = ({ titulo, link, descricao }) => {
    return ( 
        <header className="cabecalho">
        <div className="conteudo-principal">
          <h1>{titulo}</h1>
          <p>{descricao}</p>
        </div>
        <div className="lista-links">
          {/* <a href={link} target="_blank" rel="noreferrer">
            Link Dinâmico
          </a> */}
  
          <Link to={link}>Ir para Login</Link>
        </div>
      </header>
    );
};

export default Header;