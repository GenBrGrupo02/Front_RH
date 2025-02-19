import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Funcionarios from "./pages/funcionarios/Funcionarios";
import Sobrenos from "./pages/sobrenos/Sobrenos";
import FormFuncionarios from "./components/formfuncionarios/FormFuncionarios";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
          <Route path="/funcionarios" element={<Funcionarios />} />
          <Route path="/cadastrarfuncionario" element={<FormFuncionarios />} />
          <Route path="/editarfuncionario" element={<FormFuncionarios />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
