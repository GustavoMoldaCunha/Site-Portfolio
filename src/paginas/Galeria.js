import React, { useState, useEffect } from "react";
import "./Galeria.css";
import imagem1 from "../images/imagem1.jpg";
import imagem2 from "../images/imagem2.jpg";
import imagem3 from "../images/imagem3.jpg";
import imagem4 from "../images/imagem4.jpg";
import imagem5 from "../images/imagem5.jpg";
import imagem6 from "../images/imagem6.jpg";
import imagem7 from "../images/imagem7.jpg";

const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7];

const Galeria = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [carregado, setCarregado] = useState(false);

  const abrirModal = (imagem) => {
    setImagemSelecionada(imagem);
  };

  const fecharModal = () => {
    setImagemSelecionada(null);
  };
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div className="galeria">
      {imagens.map((imagem, index) => (
        <img
          key={index}
          src={imagem}
          alt={`Imagem ${index}`}
          className="galeria-imagem"
          onClick={() => abrirModal(imagem)}
          onContextMenu={handleContextMenu}
        />
      ))}
      {imagemSelecionada && (
        <div className="modal" onClick={fecharModal}>
          <img
            src={imagemSelecionada}
            alt="Imagem ampliada"
            className="modal-imagem"
            onContextMenu={handleContextMenu}
          />
        </div>
      )}
    </div>
  );
};

export default Galeria;
