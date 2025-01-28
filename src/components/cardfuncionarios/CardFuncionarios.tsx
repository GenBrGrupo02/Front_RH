import { Link } from "react-router-dom"
import ModalFuncionarios from "../modalfuncionarios/ModalFuncionarios"



function CardFuncionarios() {
    return (
        <>
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-secondary py-2 px-4 items-center gap-4">
                    <img src='https://i.imgur.com/pK6vSCy.png'
                         className='h-12 rounded-full' alt="" />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        Geandro Araújo
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>Informações</h4>
                    <p>nome: Geandro Araújo</p>
                    <p>Cargo: Instrutor</p>
                    <p>Salario: R$15.000 </p>
                    <p>Empresa: Generation Brasil</p>
                </div>
            </div>
            <div className="flex">
                <ModalFuncionarios/>

                <Link to='' className='text-white bg-error 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-secondary py-2 px-4 items-center gap-4">
                    <img src='https://i.imgur.com/pK6vSCy.png'
                         className='h-12 rounded-full' alt="" />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        Lorena Belo
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>Informações</h4>
                    <p>nome: Lorena Belo</p>
                    <p>Cargo: Intrutor Assistente</p>
                    <p>Salario: R$10.000 </p>
                    <p>Empresa: Generation Brasil</p>
                </div>
            </div>
            <div className="flex">
                <ModalFuncionarios/>
                <Link to='' className='text-white bg-error 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default CardFuncionarios
