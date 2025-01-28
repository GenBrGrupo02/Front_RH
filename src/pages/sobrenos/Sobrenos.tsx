
function Sobrenos() {
    return (
        <>
            <h1 className="text-5xl font-bold text-center mt-20">Sobre nós -  Grupo 02</h1>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-20 mb-20 mt-2 p-40">

                    {/* Michelle */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-48 object-cover rounded-full mb-4" src="https://i.ibb.co/wJQvHMp/mich.png" alt="Michele Bueno" />
                        <h2 className="text-xl font-semibold mb-2">Michele Bueno</h2>
                        <p className="text-md text-gray-500 mb-4">Project Owner</p>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1">Contato</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                                <li><a target="_blank" href="https://github.com/spacemich">Github</a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/michele-bueno-283893a6/">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bruna */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-48 object-cover rounded-full mb-4" src="https://i.ibb.co/Gx5J6TB/bruna.png" alt="Bruna Roberta" />
                        <h2 className="text-xl font-semibold mb-2">Bruna Roberta</h2>
                        <p className="text-md text-gray-500 mb-4">Quality Assurance</p>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1">Contato</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                                <li><a target="_blank" href="https://github.com/BrunaSilva97">Github</a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/bruna-robertasilva/">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Pedro */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-48 object-cover rounded-full mb-4" src="https://i.ibb.co/CPD7gYK/pedro.png" alt="Pedro Vieira" />
                        <h2 className="text-xl font-semibold mb-2">Pedro Vieira</h2>
                        <p className="text-md text-gray-500 mb-4">Developer</p>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1">Contato</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                                <li><a target="_blank" href="https://github.com/StPVieira">Github</a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/pedrohq-vieira/">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Catharina */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-48 object-cover rounded-full mb-4" src="https://i.ibb.co/tX2bM9y/cath.png" alt="Catharina Zagiacomo" />
                        <h2 className="text-xl font-semibold mb-2">Catharina</h2>
                        <p className="text-md text-gray-500 mb-4">Developer</p>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1">Contato</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                                <li><a target="_blank" href="https://github.com/czagiacomo">Github</a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/czagiacomo/">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Hector */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-48 object-cover rounded-full mb-4" src="https://i.ibb.co/VjsNm9P/hec.png" alt="Hector Silva" />
                        <h2 className="text-xl font-semibold mb-2">Hector Silva</h2>
                        <p className="text-md text-gray-500 mb-4">Developer</p>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1">Contato</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                                <li><a target="_blank" href="https://github.com/llordy12">Github</a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/hectorss/">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Lucas */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-48 object-cover rounded-full mb-4" src="https://i.ibb.co/TbhprTC/lucas.png" alt="Lucas Henrique" />
                        <h2 className="text-xl font-semibold mb-2">Lucas Henrique</h2>
                        <p className="text-md text-gray-500 mb-4">Developer</p>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1">Contato</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                                <li><a target="_blank" href="https://github.com/luhendev">Github</a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/luhens/">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero bg-gray-100 flex justify-between items-center max-lg:flex-col gap-10 w-full max-container p-16 min-h-screen">
                <div className="flex flex-1 flex-col max-w-lg">
                    <h2 className="ml-20 text-4xl font-bold mb-4">
                        Grupo 02 | Front-end <br /> <span className="text-blue-400">Generation</span> Brasil
                    </h2>
                    <br />
                    <p className="text-lg text-gray-800 ml-20">
                        O Grupo 02 é composto por Catharina, Lucas, Bruna, Hector, Pedro e Michelle. Somos uma equipe de desenvolvimento full-stack Java da Generation Brasil, participando de um programa intensivo focado na formação de profissionais altamente qualificados para o mercado de tecnologia. Este site é um projeto de front-end desenvolvido para um sistema de Recursos Humanos, sendo criado com a intenção de proporcionar uma experiência prática em desenvolvimento, sem consumir o back-end.
                    </p>
                </div>

                <div className="flex flex-1 justify-center items-center">
                    <img className="w-1/2 h-auto rounded-lg shadow-lg" src="https://i.ibb.co/LPfHJJJ/Save-Clip-App-465198791-528747163267234-9109072080022436966-n.jpg" alt="Turma da Generation" />
                </div>
            </div>
        </>
    )
}

export default Sobrenos