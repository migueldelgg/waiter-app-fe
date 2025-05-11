import { Order } from '../types/order.ts';

export function calculateOrder(order: Order | null): number {
  return order?.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);
}
