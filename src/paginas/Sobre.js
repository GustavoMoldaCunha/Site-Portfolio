import React from "react";
import "./Sobre.css";
import FotoPerfil from "../images/FotoPerfil.jpeg";
import Photoshop from "../images/Photoshop.png";
import Illustrator from "../images/Illustrator.png";
import Procreate from "../images/Procreate.png";

const Sobre = () => {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };
  return (
    <div className="Container">
      <div className="Box">
        <img
          src={FotoPerfil}
          alt="Gustavo Mol"
          onContextMenu={handleContextMenu}
        />
        <h1 data-text="Quem Sou?">Quem Sou?</h1>
        <h2>
          Meu nome é Gustavo Mol, sou um ilustrador freelancer do estado do Rio
          de Janeiro. Sou fortemente influenciado por quadrinhos americanos e
          franco-belgas, pelas caricaturas da revista MAD e por visuais
          surrealistas. Mais recentemente, comecei a expandir meus desenhos
          através da arte digital, e desde então estou sempre experimentando
          novos estilos, traços e contrastes vibrantes.
          <p></p>O que posso desenhar para você?
        </h2>
      </div>
      <div className="Coluna">
        <div className="Box2">
          <h1>Softwares</h1>
          <img src={Photoshop} alt="Photoshop" />
          <img src={Illustrator} alt="Illustrator" />
          <img src={Procreate} alt="Procreate" />
        </div>
        <div className="Box3">
          <h1>Contato</h1>
          <h2>E-mail: gustavomolcunha@gmail.com</h2>
          <h2>Telefone: (22)98106-9554</h2>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
