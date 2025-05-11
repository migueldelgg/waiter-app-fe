import { Overlay } from './styles.ts';

interface OrderModalProps {
  visible: boolean;
}

export function OrderModal({ visible }: OrderModalProps) {
  if (!visible) {
    return null;
  }

  return (
    <Overlay>
      <h2>Overlay</h2>
    </Overlay>
  );
}
