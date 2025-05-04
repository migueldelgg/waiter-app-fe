import { OrdersBoard } from "../OrdersBoard/index.tsx"
import { Container } from "./styles"

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de espera" quantity="(1)" />
      <OrdersBoard icon="👩‍🍳" title="Em produção" quantity="(1)" />
      <OrdersBoard icon="✅" title="Finalizado" quantity="(1)" />
    </Container>
  )
}
