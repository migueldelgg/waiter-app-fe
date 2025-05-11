import { Order } from '../../types/order.ts';
import { OrdersBoard } from '../OrdersBoard/index.tsx';
import { Container } from './styles';

const orders: Order[] = [
  {
    _id: '682114b75228d22618e7de8a',
    table: '2',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Hamburguer Molho Especial',
          imagePath: '1746997497600--burger-molho-especial.png',
          price: 40,
        },
        quantity: 1,
        _id: '682110f95228d22618e7de71'
      },
      {
        product: {
          name: 'Coca-Cola',
          imagePath: '1746997696155--coca-cola.png',
          price: 12,
        },
        quantity: 2,
        _id: '682111c05228d22618e7de7b'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👩‍🍳" title="Em produção" orders={[]} />
      <OrdersBoard icon="✅" title="Finalizado" orders={[]} />
    </Container>
  );
}
