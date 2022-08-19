import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeIMG from '../../assets/close.svg'
import entradasIMG from '../../assets/entradas.svg'
import saidaIMG from '../../assets/saidas.svg'
import { FormEvent, useContext, useState } from 'react';
import { TransactionsContext } from '../TransactionsContext';

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:newTransactionModalProps) {
    const {createTransaction} = useContext(TransactionsContext)

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [value, setValue] = useState(0)
    const [type, setType] = useState('deposito')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

       await createTransaction({
            title,
            amount: value,
            category,
            type
        })
        setTitle('')
        setCategory('')
        setType('deposito')
        onRequestClose()
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}
               overlayClassName='react-modal-overlay'
               className='react-modal-content'>

                <button type='button' onClick={onRequestClose} className="react-modal-close">
                    <img src={closeIMG} alt="Fechar Modal" />
                </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar nova transação</h2> 

                <input placeholder='Titulo'
                       value={title}
                       onChange={event => setTitle(event.target.value)}/>

                <input type="number"
                       placeholder='Valor'
                       value={value}
                       onChange={event => setValue(Number(event.target.value))}/>

                <TransactionTypeContainer>
                     <RadioBox type='button'
                               onClick={() => {setType('deposito')}}
                               isActive={type === 'deposito'}
                               activeColor="green">

                        <img src={entradasIMG} alt="entradas" /> <span>Entrada</span>
                     </RadioBox>

                     <RadioBox type='button' 
                               onClick={() => {setType('retirada')}}
                               isActive={type === 'retirada'}
                               activeColor="red">

                        <img src={saidaIMG} alt="saidas" /> <span>Saida</span>
                     </RadioBox>
                </TransactionTypeContainer>

                <input placeholder='Categoria'
                       value={category}
                       onChange={event => setCategory(event.target.value)} />

                <button type='submit'>Cadastrar</button>
            </Container>
       </Modal>
    )
}