import React, { useEffect, useState } from "react";
import "./Loja.css";
import Aviso from "../componentes/Aviso";

const produtos = [
  {
    id: 1,
    titulo: "Ilustração",
    imagem: "../images/produto.jpg",
    link: "",
  },
  {
    id: 2,
    titulo: "Ilustração",
    imagem: "../images/produto.jpg",
    link: "",
  },
  {
    id: 3,
    titulo: "Ilustração",
    imagem: "caminho/para/imagem2.jpg",
    link: "",
  },
  {
    id: 4,
    titulo: "Ilustração ",
    imagem: "caminho/para/imagem2.jpg",
    link: "",
  },
  {
    id: 5,
    titulo: "Ilustração ",
    imagem: "caminho/para/imagem2.jpg",
    link: "",
  },
  {
    id: 6,
    titulo: "Ilustração ",
    imagem: "caminho/para/imagem2.jpg",
    link: "",
  },
  {
    id: 7,
    titulo: "Ilustração ",
    imagem: "caminho/para/imagem2.jpg",
    link: "",
  },
  {
    id: 8,
    titulo: "Ilustração ",
    imagem: "caminho/para/imagem2.jpg",
    link: "",
  },
  {
    id: 9,
    titulo: "Ilustração ",
    imagem: "caminho/para/imagem2.jpg",
    link: "",
  },
  {
    id: 10,
    titulo: "Ilustração ",
    imagem: "caminho/para/imagem2.jpg",
    link: "",
  },
  {
    id: 11,
    titulo: "Ilustração ",
    imagem: "caminho/para/imagem2.jpg",
    link: "",
  },
  {
    id: 12,
    titulo: "Ilustração ",
    imagem: "caminho/para/imagem2.jpg",
    link: "",
  },
  {
    id: 13,
    titulo: "Ilustração ",
    imagem: "caminho/para/imagem2.jpg",
    link: "",
  },
];

const Loja = () => {
  const [showWarning, setShowWarning] = useState(false);
  const handleStoreLinkClick = (e) => {
    e.preventDefault();
    setShowWarning(true);
  };
  useEffect(() => {
    setShowWarning(true);
  }, []);
  return (
    <div className="produtos">
      {showWarning && <Aviso />}
      {produtos.map((produto) => (
        <div key={produto.id} className="produto">
          <a
            href={produto.link}
            onClick={handleStoreLinkClick}
            rel="noopener noreferrer"
          >
            <img src={produto.imagem} alt={produto.titulo} />
            <h2>{produto.titulo}</h2>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Loja;
