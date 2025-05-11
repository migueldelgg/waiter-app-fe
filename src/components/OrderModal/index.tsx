import closeIcon from '../../assets/images/close-icon.svg';

import { Overlay, ModalBody, OrderDetails, Actions } from './styles.ts';
import { Order } from '../../types/order.ts';

import { formatCurrency } from '../../utils/formatCurrency.ts';
import { calculateOrder } from '../../utils/calculateOrder.ts';
import { useEffect } from 'react';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button">
            <img src={closeIcon} alt={'close icon'} onClick={onClose} />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:8080/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56px"
                  height="28.51px"
                  onError={() =>
                    console.error(`Erro ao carregar imagem de ${product.name}`)
                  }
                />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(calculateOrder(order))}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button className="cancel-button" type="button">
            Cancelar Pedido
          </button>
          <button className="ok-button" type="button">
            Concluir Pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
