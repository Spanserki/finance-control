import logo from '../../assets/logo.png'
import { Container, Content } from './styles'

type tipos = {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: tipos) {

    return (
        <Container>
            <Content>
                <img src={logo} alt="grs money" />
                 <h3>Controle de finanças</h3>
                 <button onClick={onOpenNewTransactionModal}>
                    Nova transação</button>
            </Content>
        </Container>
    )
}

