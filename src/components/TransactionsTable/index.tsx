import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransationTable() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Salario</td>
                        <td  className="deposito">R$12000,00</td>
                        <td>ganhos</td>
                        <td>20/03/2022</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="retirada">R$1200,00</td>
                        <td>Casa</td>
                        <td>20/02/2022</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}