import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  quantity: string;
};

export function OrdersBoard({ icon, title, quantity }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{quantity}</span>
      </header>
      <OrdersContainer>
        <button type="button">
          <strong>mesa 3</strong>
          <span>2 itens</span>
        </button>
        <button type="button">
          <strong>mesa 3</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  )
}
