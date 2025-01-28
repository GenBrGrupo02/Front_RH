import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/fotos-premium/interface-de-rh-sobre-fundo-azul-escuro_269648-487.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-65 "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Sistema de RH</h1>
            <p className="mb-5">aaaaaaaaaaaaaaaaaaa</p>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary scale-105 w-8/12">
                Lista de Funcionários
              </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
