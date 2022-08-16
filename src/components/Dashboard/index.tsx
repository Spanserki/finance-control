import { Summary } from "../Summary";
import { TransationTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary/>
            <TransationTable/>
        </Container>
    )
}