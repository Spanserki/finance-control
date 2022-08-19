import { useContext } from 'react';
import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../TransactionsContext';

import { Container } from "./styles";

export function  Summary() {
    const {transactions} = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposito') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount
        }

        return acc;

    }, {
        deposits: 0,
        withdraws:0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(summary.deposits)}</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saidasImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(summary.withdraws)}</strong>
            </div>

            <div className='total'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(summary.total)}</strong>
            </div>
        </Container>
    )
}