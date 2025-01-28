import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalFuncionarios.css'
import FormFuncionarios from '../formfuncionarios/FormFuncionarios';

function ModalFuncionarios() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                    className='w-full text-white bg-info 
                    hover:bg-blue-600 flex items-center justify-center py-2'>
                        Editar
                    </button>
                }
                modal
            >
                <FormFuncionarios />
            </Popup>
        </>
    );
}

export default ModalFuncionarios;