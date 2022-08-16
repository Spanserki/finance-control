import { useState } from 'react'
import logo from '../../assets/logo.png'
import { Container, Content } from './styles'
import Modal from 'react-modal'

export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewtransactionModal() {
        setIsNewTransactionModalOpen(false)
    }

    return (
        <Container>
            <Content>
                <img src={logo} alt="grs money" />
                 <h3>Controle de finanças</h3>
                 <button onClick={handleOpenNewTransactionModal}>
                    Nova transação</button>

                <Modal isOpen={isNewTransactionModalOpen}
                       onRequestClose={handleCloseNewtransactionModal}>

                    <h2>Cadastrar nova transação</h2>
                    
                </Modal>
            </Content>
            
        </Container>
    )
}

