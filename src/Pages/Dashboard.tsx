import * as React from "react";
import { Content } from "../components/Content/Content";
import Header from "../components/Header/Header";

export const Dashboard: React.FC = () => {
  return (
    <div>
      <Header
        titulo="Dashboard"
        descricao="esta na pagina principal"
        link="/login"
      />
      <Content />
    </div>
  );
};