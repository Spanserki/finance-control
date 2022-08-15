import logo from '../../assets/logo.png'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="grs money" />
                 <h3>Controle de finanças</h3>
                 <button>Nova transação</button>
            </Content>
            
        </Container>
    )
}

