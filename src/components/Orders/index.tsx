import { OrdersBoard } from "../OrdersBoard/index.tsx"
import { Container } from "./styles"

export function Orders() {
  return (
    <Container>
      <OrdersBoard />
      <OrdersBoard />
      <OrdersBoard />
    </Container>
  )
}
