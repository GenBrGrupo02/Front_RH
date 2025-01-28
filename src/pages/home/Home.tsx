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
        <div className=" hero-content text-neutral-content flex-col lg:flex-row ml-12 p-8  grid grid-cols-2">
          <div className="text-left lg:col-span-1">
            <h1 className=" mb-5 text-5xl font-bold ">Recursos Humanos</h1>
            <p className="py-6 mb-5">
              Para conferir a lista de funcionários disponíveis no momento,
              clique no botão abaixo e ele irá te redirecionar para a página de
              listagem.
            </p>
            <Link to="/funcionarios" className="hover:underline">
              <button className="btn font-semibold text-lg btn-primary w-1/2 py-2 mx-auto">
                Lista de Funcionários
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
