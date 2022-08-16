import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles';
import closeIMG from '../../assets/close.svg'
import entradasIMG from '../../assets/entradas.svg'
import saidaIMG from '../../assets/saidas.svg'

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:newTransactionModalProps) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}
               overlayClassName='react-modal-overlay'
               className='react-modal-content'>

                <button type='button' onClick={onRequestClose} className="react-modal-close">
                    <img src={closeIMG} alt="Fechar Modal" />
                </button>

            <Container>
                <h2>Cadastrar nova transação</h2> 

                <input placeholder='Titulo' />

                <input type="number" placeholder='Valor'/>

                <TransactionTypeContainer>
                     <button type='button'>
                        <img src={entradasIMG} alt="entradas" /> <span>Entrada</span>
                     </button>

                     <button type='button'>
                        <img src={saidaIMG} alt="saidas" /> <span>Saida</span>
                     </button>
                </TransactionTypeContainer>

                <input placeholder='Categoria' />

                <button type='submit'>Cadastrar</button>
            </Container>
       </Modal>
    )
}