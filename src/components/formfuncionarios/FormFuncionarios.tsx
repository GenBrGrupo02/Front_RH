function FormFuncionarios() {
    return (
        <div className="container flex flex-col mx-auto  items-center bg-base-100 rounded-lg border-base-300">
            <h1 className="text-4xl text-center my-8 font-bold">Editar Funcionário</h1>

            <form className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="Nome" className="font-bold">Nome do Funcionário</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="cargo" className="font-bold">Cargo do Funcionário</label>
                    <input
                        type="text"
                        placeholder="Cargo"
                        name="cargo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="salário" className="font-bold">Salário do Funcionário</label>
                    <input
                        type="text"
                        placeholder="Salário"
                        name="salário"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Empresa do Funcionário</p>
                    <select name="empresa" id="empresa" className='border p-2 border-slate-800 rounded' >
                        <option value="" selected disabled>Selecione uma Empresa</option>
                        
                        <>
                            <option>Generation Brasil</option>
                        </>

                    </select>
                </div>
                <button 
                    type='submit' 
                    className='rounded disabled:bg-slate-200 bg-info hover:bg-blue-600
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center m-4'
                >
                    Concluir
                </button>
            </form>
        </div>
    );
}

export default FormFuncionarios;