import "./appstyle.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Galeria from "./paginas/Galeria";
import Loja from "./paginas/Loja";
import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Loja" element={<Loja />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
